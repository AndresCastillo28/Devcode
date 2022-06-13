import PropTypes from 'prop-types';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
  <div>
    <h3>{school}</h3>
    <p>
      {formatDate(from)} - {to ? formatDate(to) : 'Actualmente'}
    </p>
    <p>
      <strong>Grado o Certificado: </strong> {degree}
    </p>
    <p>
      <strong>Campo de estudio: </strong> {fieldofstudy}
    </p>
    <p>
      <strong>Descripción: </strong> {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired
};

export default ProfileEducation;
