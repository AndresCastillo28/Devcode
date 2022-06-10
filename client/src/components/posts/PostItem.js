import { UilComment, UilEllipsisH, UilThumbsDown, UilThumbsUp } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addLike, deletePost, removeLike } from '../../actions/post';
import formatDate from '../../utils/formatDate';
import '../main.css';

const PostItem = ({
  addLike,
  removeLike,
  deletePost,
  auth,
  post: { _id, text, name, avatar, user, likes, comments, date },
  showActions
}) => (
  <section>
    <div className='row'>
      <div className='col-12 col-sm-7 col-md-6 m-auto'>
        <div className='card mb-4'>
          <div className='card-header bg-light border-0 pb-0'>
            <div className='d-flex align-items-center justify-content-between'>
              <div className='d-flex align-items-center'>
                <div className='avatar avatar-story me-2'>
                  <Link to={`/profile/${user}`}>
                    <img className='avatar-img rounded-circle' src={avatar} alt='Avatar' />
                  </Link>
                </div>
                <div>
                  <div className='nav'>
                    <h6 className='nav-item card-title mb-0 post__user'>{name}</h6>
                    <span className='nav-item ms-2 small text-muted'>{formatDate(date)}</span>
                  </div>
                </div>
              </div>
              <div className='dropdown'>
                <div className='text-secondary btn btn-secondary-soft-hover py-1 px-2' id='cardFeedAction' data-bs-toggle='dropdown' aria-expanded='false'>
                  <UilEllipsisH />
                </div>
                <ul className='dropdown-menu dropdown-menu-end' aria-labelledby='cardFeedAction' >
                  <li className='dropdown-item post__dropdown-delete' onClick={() => deletePost(_id)}>
                    {!auth.loading && user === auth.user._id && (
                      <span>
                        Eliminar
                      </span>
                    )}
                  </li>
                  <li className='dropdown-item'>Reportar publicación</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='card-body'>
            <p>{text}</p>
            {showActions && (
              <ul className='nav nav-stack py-3 small'>
                <li className='nav-item d-flex align-items-center post__action' onClick={() => addLike(_id)}>
                  <UilThumbsUp />
                  <span className='ms-1'>{likes.length > 0 && <span>{likes.length}</span>}</span>
                </li>
                <li className='nav-item d-flex align-items-center post__action ms-2' onClick={() => removeLike(_id)}>
                  <UilThumbsDown />
                </li>
                <li className='nav-item d-flex align-items-center post__action ms-2'>
                  <Link to={`/posts/${_id}`} className='post__action-comment'>
                    <UilComment />
                    Comentarios
                    {comments.length > 0 && (
                      <span className='ms-1'>({comments.length})</span>
                    )}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

PostItem.defaultProps = {
  showActions: true
};

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  showActions: PropTypes.bool
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { addLike, removeLike, deletePost })(
  PostItem
);
