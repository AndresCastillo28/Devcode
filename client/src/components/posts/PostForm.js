import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import '../main.css';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='card border-0'>
      <div className='card-body'>
        <form onSubmit={e => {
          e.preventDefault();
          addPost({ text });
          setText('');
        }}
        >
          <div className='form-floating'>
            <textarea
              name='text'
              cols='30'
              rows='5'
              className='form-control inputs border-0'
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder='¿Que quieres decir?'
              id='floatingTextarea'
              required
            />
            <label htmlFor='floatingTextarea'>¿Que quieres decir?</label>
          </div>
          <div className='d-flex justify-content-center pt-3'>
            <button type='submit' className='btn btn-primary btn__post'>Publicar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

PostForm.propTypes = {
  addPost: PropTypes.func.isRequired
};

export default connect(
  null,
  { addPost }
)(PostForm);
