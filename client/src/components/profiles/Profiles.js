import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
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
      <section className='container-fluid mt-5 pt-5'>
        {loading ? (
          <Spinner />
        ) : (
          <Fragment>
            <h1 className='profile__title text-center mt-4'>Desarrolladores</h1>
            <p className='text-muted'>Navega y conéctate con desarrolladores</p>
            <div>
              {profiles.length > 0 ? (
                profiles.map((profile) => (
                  <ProfileItem key={profile._id} profile={profile} />
                ))
              ) : (
                <h4>Perfiles no encontrados...</h4>
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
