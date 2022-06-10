import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getPost } from '../../actions/post';
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import PostItem from '../posts/PostItem';

const Post = ({ getPost, post: { post, loading } }) => {
  const { id } = useParams();
  useEffect(() => {
    getPost(id);
  }, [getPost, id]);

  return loading || post === null ? (
    <Spinner />
  ) : (
    <>
      <Navbar />
      <section className='container-fluid mt-5 pt-5'>
        <PostItem post={post} showActions={false} />
        <CommentForm postId={post._id} />
        <div>
          {post.comments.map((comment) => (
            <CommentItem key={comment._id} comment={comment} postId={post._id} />
          ))}
        </div>
      </section>
    </>
  );
};

Post.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPost })(Post);
