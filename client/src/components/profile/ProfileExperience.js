import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div className='text-muted'>
    <h3>{company}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Now'}
    </p>
    <p>
      <strong>Cargo: </strong> {title}
    </p>
    <p>
      <strong>Ubicación: </strong> {location}
    </p>
    <p>
      <strong>Descripción: </strong> {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;
