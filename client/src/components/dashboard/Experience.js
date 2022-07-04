import { UilTrashAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
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
            <h2 className='experience__title mt-2'>
                <FormattedMessage
                    id='experience'
                    defaultMessage='experience'
                />
            </h2>
            <div className='table-responsive'>
                <table className='table table__bg table-borderless'>
                    <thead>
                        <tr>
                            <th>
                                <FormattedMessage
                                    id='company'
                                    defaultMessage='Company'
                                />
                            </th>
                            <th>
                                <FormattedMessage
                                    id='position'
                                    defaultMessage='Position'
                                />
                            </th>
                            <th>
                                <FormattedMessage
                                    id='years'
                                    defaultMessage='Years'
                                />
                            </th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>{experiences}</tbody>
                </table>
            </div>
        </Fragment>
    );
};

Experience.propTypes = {
    experience: PropTypes.array.isRequired,
    deleteExperience: PropTypes.func.isRequired
};

export default connect(null, { deleteExperience })(Experience);
