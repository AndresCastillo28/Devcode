import PropTypes from 'prop-types';
import { Fragment, useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';
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
                    {creatingProfile ?
                        <FormattedMessage
                            id='create.profile'
                            defaultMessage='Create your profile'
                        />
                        :
                        <FormattedMessage
                            id='edity.profile'
                            defaultMessage='Edit your profile'
                        />
                    }
                </h1>
                <p className='text-muted'>
                    {creatingProfile
                        ? <FormattedMessage
                            id='get.profile'
                            defaultMessage="Let's get some information to make your profile"
                        />
                        :
                        <FormattedMessage
                            id='add.profile'
                            defaultMessage='Add some changes to your profile'
                        />
                    }
                </p>
                <form onSubmit={onSubmit}>
                    <div className='form-floating mb-4'>
                        <select className='form-select inputs border-0' id='floatingSelect' name='status' value={status} onChange={onChange}>
                            <option value='Developer'>
                                <FormattedMessage
                                    id='developer'
                                    defaultMessage='Developer'
                                />
                            </option>
                            <option value='Junior Developer'>
                                <FormattedMessage
                                    id='junior.developer'
                                    defaultMessage='Junior Developer'
                                />
                            </option>
                            <option value='Senior Developer'>
                                <FormattedMessage
                                    id='senior.developer'
                                    defaultMessage='Senior Developer'
                                />
                            </option>
                            <option value='Manager'>
                                <FormattedMessage
                                    id='manager'
                                    defaultMessage='Manager'
                                />
                            </option>
                            <option value='Student or Learning'>
                                <FormattedMessage
                                    id='student'
                                    defaultMessage='Student'
                                />
                            </option>
                            <option value='Instructor'>
                                <FormattedMessage
                                    id='instructor'
                                    defaultMessage='Instructor'
                                />
                            </option>
                            <option value='Intern'>
                                <FormattedMessage
                                    id='intern'
                                    defaultMessage='Intern'
                                />
                            </option>
                            <option value='Other'>
                                <FormattedMessage
                                    id='other'
                                    defaultMessage='Other'
                                />
                            </option>
                        </select>
                        <label className='label' htmlFor='floatingSelect'>
                            <FormattedMessage
                                id='choose'
                                defaultMessage='Choose'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Compañia'
                            name='company'
                            value={company}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingCompany'
                            required
                        />
                        <label className='label' htmlFor='floatingCompany'>
                            <FormattedMessage
                                id='company'
                                defaultMessage='Company'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Sitio Web'
                            name='website'
                            value={website}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingWeb'
                            required
                        />
                        <label className='label' htmlFor='floatingWeb'>
                            <FormattedMessage
                                id='website'
                                defaultMessage='Website'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Ubicación'
                            name='location'
                            value={location}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingLocation'
                            required
                        />
                        <label className='label' htmlFor='floatingLocation'>
                            <FormattedMessage
                                id='location'
                                defaultMessage='Location'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Habilidades'
                            name='skills'
                            value={skills}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingSkill'
                            required
                        />
                        <label className='label' htmlFor='floatingSkill'>
                            <FormattedMessage
                                id='skills'
                                defaultMessage='Skills'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Usuario Github'
                            name='githubusername'
                            value={githubusername}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingGithub'
                            required
                        />
                        <label className='label' htmlFor='floatingGithub'>
                            <FormattedMessage
                                id='github.user'
                                defaultMessage='Github user'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <textarea
                            placeholder='Biografia'
                            name='bio'
                            value={bio}
                            onChange={onChange}
                            className='form-control inputs border-0'
                            id='floatingBio'
                            required
                        />
                        <label className='label' htmlFor='floatingBio'>
                            <FormattedMessage
                                id='bio'
                                defaultMessage='Biography'
                            />
                        </label>
                    </div>
                    <div>
                        <button
                            onClick={() => toggleSocialInputs(!displaySocialInputs)}
                            type='button'
                            className='btn btn-secondary'
                        >
                            <FormattedMessage
                                id='add.social'
                                defaultMessage='Add social media links'
                            />
                        </button>
                        <span className='small ms-2 text-muted'>
                            <FormattedMessage
                                id='optional'
                                defaultMessage='Optional'
                            />
                        </span>
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
                                        className='form-control inputs-forms'
                                        id='floatingWeb'
                                        required
                                    />
                                    <label className='label' htmlFor='floatingWeb'>Twitter URL</label>
                                </div>
                                <div className='form-floating mb-4'>
                                    <input
                                        type='text'
                                        placeholder='Facebook URL'
                                        name='facebook'
                                        value={facebook}
                                        onChange={onChange}
                                        className='form-control inputs-forms'
                                        id='floatingWeb'
                                        required
                                    />
                                    <label className='label' htmlFor='floatingWeb'>Facebook URL</label>
                                </div>
                                <div className='form-floating mb-4'>
                                    <input
                                        type='text'
                                        placeholder='YouTube URL'
                                        name='youtube'
                                        value={youtube}
                                        onChange={onChange}
                                        className='form-control inputs-forms'
                                        id='floatingWeb'
                                        required
                                    />
                                    <label className='label' htmlFor='floatingWeb'>YouTube URL</label>
                                </div>
                                <div className='form-floating mb-4'>
                                    <input
                                        type='text'
                                        placeholder='Linkedin URL'
                                        name='linkedin'
                                        value={linkedin}
                                        onChange={onChange}
                                        className='form-control inputs-forms'
                                        id='floatingWeb'
                                        required
                                    />
                                    <label className='label' htmlFor='floatingWeb'>Linkedin URL</label>
                                </div>
                                <div className='form-floating mb-4'>
                                    <input
                                        type='text'
                                        placeholder='Instagram URL'
                                        name='instagram'
                                        value={instagram}
                                        onChange={onChange}
                                        className='form-control inputs-forms'
                                        id='floatingWeb'
                                        required
                                    />
                                    <label className='label' htmlFor='floatingWeb'>Instragram URL</label>
                                </div>
                            </div>
                        </Fragment>
                    )}
                    <div className='d-flex align-items-center justify-content-center mb-4'>
                        <input type='submit' className='btn btn-primary me-4' />
                        <Link className='btn btn-secondary' to='/dashboard'>
                            <FormattedMessage
                                id='return'
                                defaultMessage='Return'
                            />
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
