import { UilEllipsisH } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteComment } from '../../actions/post';
import formatDate from '../../utils/formatDate';

const CommentItem = ({
  postId,
  comment: { _id, text, name, avatar, user, date },
  auth,
  deleteComment
}) => (
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
                <li className='dropdown-item post__dropdown-delete' onClick={() => deleteComment(postId, _id)}>
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
        </div>
      </div>
    </div>
  </div>
);

CommentItem.propTypes = {
  postId: PropTypes.string.isRequired,
  comment: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deleteComment })(CommentItem);
