import PropTypes from 'prop-types';
import { Fragment } from 'react';
import Navbar from '../layout/Navbar';

const ProfileAbout = ({
  profile: {
    bio,
    skills,
    user: { name }
  }
}) => (
  <>
    <Navbar />
    <div>
      {bio && (
        <Fragment>
          <p>{bio}</p>
        </Fragment>
      )}
      <h2>Habilidades</h2>
      <div>
        {skills.map((skill, index) => (
          <div key={index}>
            {skill}
          </div>
        ))}
      </div>
    </div>
  </>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
