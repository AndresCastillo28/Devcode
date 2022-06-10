import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Navbar from '../layout/Navbar';
import '../main.css';
import PostForm from './PostForm';
import PostItem from './PostItem';

const Posts = ({ getPosts, post: { posts } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <>
      <Navbar />
      <section className='container-fluid mt-5 pt-5'>
        <h1 className='post__title text-center mt-4'>Publicaciones</h1>
        <PostForm />
        <div>
          {posts.map((post) => (
            <PostItem key={post._id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

Posts.propTypes = {
  getPosts: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
