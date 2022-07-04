import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
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
                <div className='row g-4'>
                    <div className='col-lg-3'>
                        <Sidebar />
                    </div>
                    <div className='col-md-8 col-lg-6 vstack gap-4'>
                        <h1 className='post__title text-center mt-4'>
                            <FormattedMessage
                                id='posts'
                                defaultMessage='Posts'
                            />
                        </h1>
                        <PostForm />
                        <div>
                            {posts.map((post) => (
                                <PostItem key={post._id} post={post} />
                            ))}
                        </div>
                    </div>
                    <div className='col-lg-3'>
                    </div>
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
