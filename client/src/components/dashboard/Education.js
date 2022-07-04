import { UilTrashAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
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
                    <FormattedMessage
                        id='delete'
                        defaultMessage='Delete'
                    />
                    <UilTrashAlt />
                </button>
            </td>
        </tr>
    ));

    return (
        <Fragment>
            <h2 className='education__title mt-2'>
                <FormattedMessage
                    id='education'
                    defaultMessage='Education'
                />
            </h2>
            <div className='table-responsive'>
                <table className='table table__bg table-borderless'>
                    <thead>
                        <tr>
                            <th>
                                <FormattedMessage
                                    id='university'
                                    defaultMessage='University or Bootcamp'
                                />
                            </th>
                            <th>
                                <FormattedMessage
                                    id='grade'
                                    defaultMessage='Degree or Certificate'
                                />
                            </th>
                            <th>
                                <FormattedMessage
                                    id='year'
                                    defaultMessage='Year'
                                />
                            </th>
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
