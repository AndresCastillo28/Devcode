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
          {/* <h2>{name.trim().split(' ')[0]}s Bio</h2> */}
          <p>{bio}</p>
          <div />
        </Fragment>
      )}
      <h2>Skill Set</h2>
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
