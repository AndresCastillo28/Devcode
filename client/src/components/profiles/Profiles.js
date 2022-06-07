import PropTypes from 'prop-types';
import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile';
import Navbar from '../layout/Navbar';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';

const Profiles = ({ getProfiles, profile: { profiles, loading } }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <>
      <Navbar />
      <section className="container">
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className="large text-primary">Developers</h1>
            <p className="lead">
              <i className="fab fa-connectdevelop" /> Browse and connect with
              developers
            </p>
            <div className="profiles">
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>No profiles found...</h4>
              )}
            </div>
          </Fragment>
        )}
      </section>
    </>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
