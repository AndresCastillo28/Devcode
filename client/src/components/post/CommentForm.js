import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div className='card border-0'>
      <div className='card-body'>
        <form onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
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
              placeholder='Escribe un comentario'
              id='floatingTextarea'
              required
            />
            <label htmlFor='floatingTextarea' className='text-muted'>Escribe un comentario</label>
          </div>
          <div className='d-flex justify-content-center pt-3'>
            <button type='submit' className='btn btn-primary btn__post'>Publicar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
