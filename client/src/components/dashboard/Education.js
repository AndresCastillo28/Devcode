import { UilTrashAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { deleteEducation } from '../../actions/profile';
import formatDate from '../../utils/formatDate';

const Education = ({ education, deleteEducation }) => {
  const educations = education.map((edu) => (
    <tr key={edu._id}>
      <td>{edu.school}</td>
      <td>{edu.degree}</td>
      <td>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
      </td>
      <td>
        <button
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger d-flex align-items-center'
        >
          Eliminar <UilTrashAlt />
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className='education__title mt-2'>Educación</h2>
      <div className='table-responsive'>
        <table className='table table-secondary table-hover'>
          <thead>
            <tr>
              <th>Universidad o Bootcamp</th>
              <th>Grado o Certificado</th>
              <th>Año</th>
              <th />
            </tr>
          </thead>
          <tbody>{educations}</tbody>
        </table>
      </div>
    </Fragment>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired,
  deleteEducation: PropTypes.func.isRequired
};

export default connect(null, { deleteEducation })(Education);
