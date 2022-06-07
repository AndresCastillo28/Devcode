import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
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
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />

            <div className="my-2">
              <button className="btn btn-danger" onClick={() => deleteAccount()}>
                <i className="fas fa-user-minus" /> Delete My Account
              </button>
            </div>
          </>
        ) : (
          <>
            <p>You have not yet setup a profile, please add some info</p>
            <Link to="/create-profile" className="btn btn-primary my-1">
              Create Profile
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
