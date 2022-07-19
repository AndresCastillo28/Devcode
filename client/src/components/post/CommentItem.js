import { UilEllipsisH } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
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
    <div className='card border-0 mb-4'>
        <div className='card-header border-0 pb-0'>
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
                                    <FormattedMessage
                                        id='delete'
                                        defaultMessage='Delete'
                                    />
                                </span>
                            )}
                        </li>
                        <Link to='/posts/reportform' className='dropdown-item'>
                            <FormattedMessage
                                id='post.report'
                                defaultMessage='Report Post'
                            />
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
        <div className='card-body'>
            <p>{text}</p>
        </div>
    </div >
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
