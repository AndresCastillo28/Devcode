import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useMatch, useNavigate } from 'react-router-dom';
import { createProfile, getCurrentProfile } from '../../actions/profile';
import Navbar from '../layout/Navbar';

/*
  NOTE: declare initialState outside of component
  so that it doesn't trigger a useEffect
  we can then safely use this to construct our profileData
 */
const initialState = {
  company: '',
  website: '',
  location: '',
  status: '',
  skills: '',
  githubusername: '',
  bio: '',
  twitter: '',
  facebook: '',
  linkedin: '',
  youtube: '',
  instagram: ''
};

const ProfileForm = ({
  profile: { profile, loading },
  createProfile,
  getCurrentProfile
}) => {
  const [formData, setFormData] = useState(initialState);

  const creatingProfile = useMatch('/create-profile');

  const [displaySocialInputs, toggleSocialInputs] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // if there is no profile, attempt to fetch one
    if (!profile) getCurrentProfile();

    // if we finished loading and we do have a profile
    // then build our profileData
    if (!loading && profile) {
      const profileData = { ...initialState };
      for (const key in profile) {
        if (key in profileData) profileData[key] = profile[key];
      }
      for (const key in profile.social) {
        if (key in profileData) profileData[key] = profile.social[key];
      }
      // the skills may be an array from our API response
      if (Array.isArray(profileData.skills))
        profileData.skills = profileData.skills.join(', ');
      // set local state with the profileData
      setFormData(profileData);
    }
  }, [loading, getCurrentProfile, profile]);

  const {
    company,
    website,
    location,
    status,
    skills,
    githubusername,
    bio,
    twitter,
    facebook,
    linkedin,
    youtube,
    instagram
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, navigate, profile ? true : false);
  };

  return (
    <>
      <Navbar />
      <section className='container mt-5 pt-5'>
        <h1 className='profile__title mt-4'>
          {creatingProfile ? 'Crea tu perfil' : 'Edita tu perfil'}
        </h1>
        <p className='text-muted'>
          {creatingProfile
            ? 'Vamos a obtener alguna información para hacer su perfil'
            : 'Agrega algunos cambios a tu perfil'}
        </p>
        <form onSubmit={onSubmit}>
          <div className='form-floating mb-4'>
            <select className='form-select' id='floatingSelect' name='status' value={status} onChange={onChange}>
              <option value='Developer'>Developer</option>
              <option value='Junior Developer'>Junior Developer</option>
              <option value='Senior Developer'>Senior Developer</option>
              <option value='Manager'>Manager</option>
              <option value='Student or Learning'>Student or Learning</option>
              <option value='Instructor'>Instructor or Teacher</option>
              <option value='Intern'>Intern</option>
              <option value='Other'>Other</option>
            </select>
            <label className='profile__label' htmlFor='floatingSelect'>Selecciona tu profesión</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Compañia'
              name='company'
              value={company}
              onChange={onChange}
              className='form-control'
              id='floatingCompany'
              required
            />
            <label className='profile__label' htmlFor='floatingCompany'>Compañia</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Sitio Web'
              name='website'
              value={website}
              onChange={onChange}
              className='form-control'
              id='floatingWeb'
              required
            />
            <label className='profile__label' htmlFor='floatingWeb'>Sitio Web</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Ubicación'
              name='location'
              value={location}
              onChange={onChange}
              className='form-control'
              id='floatingLocation'
              required
            />
            <label className='profile__label' htmlFor='floatingLocation'>Ubicación</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Habilidades'
              name='skills'
              value={skills}
              onChange={onChange}
              className='form-control'
              id='floatingSkill'
              required
            />
            <label className='profile__label' htmlFor='floatingSkill'>Habilidades</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Usuario Github'
              name='githubusername'
              value={githubusername}
              onChange={onChange}
              className='form-control'
              id='floatingGithub'
              required
            />
            <label className='profile__label' htmlFor='floatingGithub'>Usuario Github</label>
          </div>
          <div className='form-floating mb-4'>
            <textarea
              placeholder='Biografia'
              name='bio'
              value={bio}
              onChange={onChange}
              className='form-control'
              id='floatingBio'
              required
            />
            <label className='profile__label' htmlFor='floatingBio'>Biografia</label>
          </div>
          <div>
            <button
              onClick={() => toggleSocialInputs(!displaySocialInputs)}
              type='button'
              className='btn btn-secondary'
            >
              Agregar enlaces de redes sociales
            </button>
            <span className='small ms-2 text-muted'>Opcional</span>
          </div>
          {displaySocialInputs && (
            <Fragment>
              <div className='mt-3'>
                <div className='form-floating mb-4'>
                  <input
                    type='text'
                    placeholder='Twitter URL'
                    name='twitter'
                    value={twitter}
                    onChange={onChange}
                    className='form-control'
                    id='floatingWeb'
                    required
                  />
                  <label className='profile__label' htmlFor='floatingWeb'>Twitter URL</label>
                </div>
                <div className='form-floating mb-4'>
                  <input
                    type='text'
                    placeholder='Facebook URL'
                    name='facebook'
                    value={facebook}
                    onChange={onChange}
                    className='form-control'
                    id='floatingWeb'
                    required
                  />
                  <label className='profile__label' htmlFor='floatingWeb'>Facebook URL</label>
                </div>
                <div className='form-floating mb-4'>
                  <input
                    type='text'
                    placeholder='YouTube URL'
                    name='youtube'
                    value={youtube}
                    onChange={onChange}
                    className='form-control'
                    id='floatingWeb'
                    required
                  />
                  <label className='profile__label' htmlFor='floatingWeb'>YouTube URL</label>
                </div>
                <div className='form-floating mb-4'>
                  <input
                    type='text'
                    placeholder='Linkedin URL'
                    name='linkedin'
                    value={linkedin}
                    onChange={onChange}
                    className='form-control'
                    id='floatingWeb'
                    required
                  />
                  <label className='profile__label' htmlFor='floatingWeb'>Linkedin URL</label>
                </div>
                <div className='form-floating mb-4'>
                  <input
                    type='text'
                    placeholder='Instagram URL'
                    name='instagram'
                    value={instagram}
                    onChange={onChange}
                    className='form-control'
                    id='floatingWeb'
                    required
                  />
                  <label className='profile__label' htmlFor='floatingWeb'>Instragram URL</label>
                </div>
              </div>
            </Fragment>
          )}
          <div className='d-flex align-items-center justify-content-center mb-4'>
            <input type='submit' className='btn btn-primary me-4' />
            <Link className='btn btn-secondary' to='/dashboard'>
              Regresar
            </Link>
          </div>
        </form>
      </section>
    </>
  );
};

ProfileForm.propTypes = {
  createProfile: PropTypes.func.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { createProfile, getCurrentProfile })(
  ProfileForm
);
