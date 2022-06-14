import PropTypes from 'prop-types';
import { Fragment } from 'react';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <div className='ms-4'>
    <h4 className='profile__information'>Acerca de mi</h4>
    {bio && (
      <Fragment>
        <p className='text-muted'>{bio}</p>
      </Fragment>
    )}
    <h4 className='profile__information'>Habilidades</h4>
    <div>
      {skills.map((skill, index) => (
        <div className='text-muted' key={index}>
          {skill}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
