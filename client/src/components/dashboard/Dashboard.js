import { UilTrashAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Navbar from '../layout/Navbar';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';

const Dashboard = ({
    getCurrentProfile,
    deleteAccount,
    auth: { user },
    profile: { profile }
}) => {
    useEffect(() => {
        getCurrentProfile();
    }, [getCurrentProfile]);

    return (
        <>
            <Navbar />
            <section className='container mt-5 pt-5'>
                <h1 className='dashboard__title text-center mt-4'>
                    <FormattedMessage
                        id='setting'
                        defaultMessage='Setting'
                    />
                </h1>
                <h4 className='dashboard__username'>
                    <FormattedMessage
                        id='welcome'
                        defaultMessage='Welcome'
                    />
                    <br />
                    {user && user.name}
                </h4>
                {profile !== null ? (
                    <>
                        <DashboardActions />
                        <Experience experience={profile.experience} />
                        <Education education={profile.education} />
                        <div>
                            <button className='btn btn-danger d-flex align-items-center mb-4' onClick={() => deleteAccount()}>
                                <FormattedMessage
                                    id='delete.account'
                                    defaultMessage='Delete account'
                                />
                                <UilTrashAlt />
                            </button>
                        </div>
                    </>
                ) : (
                    <>
                        <p>
                            <FormattedMessage
                                id='dashboard.desc'
                                defaultMessage="You haven' t set up a profile yet, please add information."
                            />
                        </p>
                        <Link to='/create-profile' className='btn btn-primary'>
                            <FormattedMessage
                                id='create.profile'
                                defaultMessage='Create your profile'
                            />
                        </Link>
                    </>
                )}
            </section>
        </>
    );
};

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
    Dashboard
);
