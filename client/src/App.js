import { useContext, useEffect } from 'react';
// Redux
import { UilMoon, UilSun } from '@iconscout/react-unicons';
import { FormattedMessage } from 'react-intl';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';
import { loadUser } from './actions/auth';
import { LOGOUT } from './actions/types';
import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Chat from './components/Chat';
import Dashboard from './components/dashboard/Dashboard';
import en from './components/images/english.png';
import es from './components/images/spain.png';
import Alert from './components/layout/Alert';
import Home from './components/layout/Home';
import NotFound from './components/layout/NotFound';
import Post from './components/post/Post';
import Posts from './components/posts/Posts';
import AddEducation from './components/profile-forms/AddEducation';
import AddExperience from './components/profile-forms/AddExperience';
import ProfileForm from './components/profile-forms/ProfileForm';
import Profile from './components/profile/Profile';
import Profiles from './components/profiles/Profiles';
import ReportForm from './components/ReportForm';
import PrivateRoute from './components/routing/PrivateRoute';
import Terms from './components/Terms';
import { langContext } from './context/langContext';
import store from './store';
import setAuthToken from './utils/setAuthToken';

const App = () => {
    const language = useContext(langContext);

    //Dark mode
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    useEffect(() => {
        // check for token in LS when app first runs
        if (localStorage.token) {
            // if there is a token set axios headers for all requests
            setAuthToken(localStorage.token);
        }
        // try to fetch a user, if no token or invalid token we
        // will get a 401 response from our API
        store.dispatch(loadUser());

        // log user out from all tabs if they log out in one tab
        window.addEventListener('storage', () => {
            if (!localStorage.token) store.dispatch({ type: LOGOUT });
        });
    }, []);

    return (
        <Provider store={store}>
            <div className='app' data-theme={theme}>
                <Router>
                    <Alert />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='register' element={<Register />} />
                        <Route path='login' element={<Login />} />
                        <Route path='terms' element={<Terms />} />
                        <Route path='profiles' element={<Profiles />} />
                        <Route path='profile/:id' element={<Profile />} />
                        <Route
                            path='dashboard'
                            element={<PrivateRoute component={Dashboard} />}
                        />
                        <Route
                            path='create-profile'
                            element={<PrivateRoute component={ProfileForm} />}
                        />
                        <Route
                            path='edit-profile'
                            element={<PrivateRoute component={ProfileForm} />}
                        />
                        <Route
                            path='add-experience'
                            element={<PrivateRoute component={AddExperience} />}
                        />
                        <Route
                            path='add-education'
                            element={<PrivateRoute component={AddEducation} />}
                        />
                        <Route
                            path='posts'
                            element={<PrivateRoute component={Posts} />}
                        />
                        <Route
                            path='/posts/reportform'
                            element={<PrivateRoute component={ReportForm} />}
                        />
                        <Route path='posts/:id'
                            element={<PrivateRoute component={Post} />}
                        />
                        <Route path='chat'
                            element={<PrivateRoute component={Chat} />}
                        />
                        <Route path='/*'
                            element={<NotFound />}
                        />
                    </Routes>
                    <div className='container-fluid footer pb-1'>
                        <footer className='py-3 my-4'>
                            <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                                <li className='nav-item'>
                                    <Link to='/login' className='nav-link px-2'>
                                        <FormattedMessage
                                            id='login'
                                            defaultMessage='Login'
                                        />
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/register' className='nav-link px-2'>
                                        <FormattedMessage
                                            id='register'
                                            defaultMessage='Register'
                                        />
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link to='/terms' className='nav-link px-2'>
                                        <FormattedMessage
                                            id='terms'
                                            defaultMessage='Terms and Conditions'
                                        />
                                    </Link>
                                </li>
                            </ul>
                            <p className='footer__copy text-center'>©2022 DevCode</p>
                            <div className='text-center'>
                                <button className='theme' onClick={switchTheme}>
                                    {theme === 'light' ? <UilMoon className='theme__moon' /> : <UilSun className='text-white' />}
                                </button>
                            </div>
                            <div className='text-center mt-2'>
                                <button onClick={() => language.setLanguage('es-MX')} className='flags'>
                                    <img src={es} alt='Spanish Language' className='w-100' />
                                </button>
                                <button onClick={() => language.setLanguage('en-US')} className='flags'>
                                    <img src={en} alt='English Language' className='w-100' />
                                </button>
                            </div>
                        </footer>
                    </div>
                </Router>
            </div>
        </Provider>
    );
};

export default App;