import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addPost } from '../../actions/post';
import '../main.css';

const PostForm = ({ addPost }) => {
  const [text, setText] = useState('');

  return (
    <div className='py-4'>
      <div className='row'>
        <div className='col-12 col-sm-7 col-md-6 m-auto'>
          <div className='card border-0 shadow'>
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
                    className='form-control'
                    value={text}
                    onChange={e => setText(e.target.value)}
                    placeholder='¿Que quieres decir?'
                    id='floatingTextarea'
                    required
                  />
                  <label htmlFor='floatingTextarea' className='text-muted'>¿Que quieres decir?</label>
                </div>
                <div className='d-flex justify-content-center pt-3'>
                  <button type='submit' className='btn btn-primary btn__post'>Publicar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
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
