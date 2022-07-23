const express = require('express');
const app = express();
const connectDB = require('./config/db');
require('dotenv').config({ path: './config.env' });
const path = require('path');
const http = require('http');
const server = http.createServer(app);

// SocketIO
const socketio = require('socket.io');
const io = socketio(server);

io.on('connection', socket => {
    let name;

    socket.on('connected', (nam) => {
        name = nam;
        socket.broadcast.emit('messages', { name: name, message: `${name} ha entrado al chat` })
    });
    socket.on('message', (name, message) => {
        io.emit('messages', { name, message });
    });
});

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

// Deployment
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/client/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
    });
} else {
    app.get('/', (req, res) => {
        res.send('API running');
    });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => { console.log(`Server started on port ${PORT}`) });