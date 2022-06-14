import { UilEdit } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProfileById } from '../../actions/profile';
import Navbar from '../layout/Navbar';
import Sidebar from '../layout/Sidebar';
import Spinner from '../layout/Spinner';
import ProfileAbout from './ProfileAbout';
import ProfileEducation from './ProfileEducation';
import ProfileExperience from './ProfileExperience';
import ProfileGithub from './ProfileGithub';
import ProfileTop from './ProfileTop';

const Profile = ({ getProfileById, profile: { profile }, auth }) => {
  const { id } = useParams();
  useEffect(() => {
    getProfileById(id);
  }, [getProfileById, id]);

  return (
    <>
      <Navbar />
      <section className='container-fluid mt-5 pt-5'>
        <div className='row g-4'>
          <div className='col-lg-3'>
            <Sidebar />
          </div>
          <div className='col-md-8 col-lg-6 vstack gap-4'>
            <div className='card border-0 my-5'>
              <div className='card-body'>
                {profile === null ? (
                  <Spinner />
                ) : (
                  <Fragment>
                    {auth.isAuthenticated &&
                      auth.loading === false &&
                      auth.user._id === profile.user._id && (
                        <div className='d-flex justify-content-end align-items-center mb-2'>
                          <Link to='/edit-profile' className='btn btn-primary'>
                            Editar Perfil <UilEdit className='ms-1' />
                          </Link>
                        </div>
                      )}
                    <div>
                      <ProfileTop profile={profile} />
                      <ProfileAbout profile={profile} />
                      <div className='mt-3 ms-4'>
                        <h4 className='profile__information'>Experiencia</h4>
                        {profile.experience.length > 0 ? (
                          <Fragment>
                            {profile.experience.map((experience) => (
                              <ProfileExperience
                                key={experience._id}
                                experience={experience}
                              />
                            ))}
                          </Fragment>
                        ) : (
                          <p className='text-muted'>No tiene experiencia</p>
                        )}
                      </div>

                      <div className='ms-4'>
                        <h4 className='profile__information'>Educación</h4>
                        {profile.education.length > 0 ? (
                          <Fragment>
                            {profile.education.map((education) => (
                              <ProfileEducation
                                key={education._id}
                                education={education}
                              />
                            ))}
                          </Fragment>
                        ) : (
                          <p className='text-muted'>No tiene educación</p>
                        )}
                      </div>
                      {profile.githubusername && (
                        <ProfileGithub username={profile.githubusername} />
                      )}
                    </div>
                  </Fragment>
                )}
              </div>
            </div>
          </div>
          <div className='col-lg-3'>
          </div>
        </div>
      </section>
    </>
  );
};

Profile.propTypes = {
  getProfileById: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(mapStateToProps, { getProfileById })(Profile);
