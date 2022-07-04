import { UilArrow, UilSignInAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import home from '../images/home.png';
import '../main.css';

const Home = ({ isAuthenticated }) => {
    if (isAuthenticated) {
        return <Navigate to='/posts' />;
    }

    return (
        <>
            <section className='container-fluid home'>
                <div className='row'>
                    <div className='col-xxl-6 col-lg-8'>
                        <img src={home} alt='home' className='img-fluid d-block w-100' />
                    </div>
                    <div className='col-xxl-6 col-lg-4 d-flex align-items-center text-center'>
                        <div>
                            <h1 className='home__title'>
                                <UilArrow className='home__title-icon' />DevCode
                            </h1>
                            <p className='home__description'>
                                <FormattedMessage
                                    id='home.desc'
                                    defaultMessage='Create a developer profile or portfolio, share your posts, and get help from other developers.'
                                />
                            </p>
                            <div className='pb-5'>
                                <Link to='/login' className='btn btn-primary'>
                                    <FormattedMessage
                                        id='login'
                                        defaultMessage='Login'
                                    />
                                    <UilSignInAlt className='ms-1' />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

Home.propTypes = {
    isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(Home);
