import { UilTrashAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteExperience } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Experience = ({ experience, deleteExperience }) => {
  const experiences = experience.map((exp) => (
    <tr key={exp._id}>
      <td>{exp.company}</td>
      <td>{exp.title}</td>
      <td>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteExperience(exp._id)}
          className='btn btn-danger d-flex align-items-center'
        >
          Eliminar <UilTrashAlt />
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='experience__title mt-2'>Experiencia</h2>
      <table className='table table-secondary table-hover'>
        <thead>
          <tr>
            <th>Compañia</th>
            <th>Titulo</th>
            <th>Años</th>
            <th />
          </tr>
        </thead>
        <tbody>{experiences}</tbody>
      </table>
    </Fragment>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
  deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
