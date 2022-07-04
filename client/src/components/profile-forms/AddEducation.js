import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addEducation } from '../../actions/profile';
import Navbar from '../layout/Navbar';

const AddEducation = ({ addEducation }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const { school, degree, fieldofstudy, from, to, description, current } =
        formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <>
            <Navbar />
            <section section className='container mt-5 pt-5'>
                <h1 className='profile__title mt-4'>
                    <FormattedMessage
                        id='add.education'
                        defaultMessage='Add Education'
                    />
                </h1>
                <p className='text-muted'>
                    <FormattedMessage
                        id='add.study'
                        defaultMessage='Add University or Bootcamp'
                    />
                </p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        addEducation(formData, navigate);
                    }}
                >
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Escuela o Bootcamp'
                            name='school'
                            value={school}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='school'
                                defaultMessage='School or Bootcamp'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Grado o Certificado'
                            name='degree'
                            value={degree}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='grade'
                                defaultMessage='Degree or Certificate:'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Campo de estudio'
                            name='fieldofstudy'
                            value={fieldofstudy}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='field'
                                defaultMessage='Field of study:'
                            />
                        </label>
                    </div>
                    <div>
                        <h4 className='profile__title'>
                            <FormattedMessage
                                id='since'
                                defaultMessage='Since'
                            />
                        </h4>
                        <input
                            className='form-control inputs-forms'
                            type='date'
                            name='from'
                            value={from}
                            onChange={onChange}
                        />
                    </div>
                    <div className='form-group'>
                        <div className='my-2'>
                            <input
                                type='checkbox'
                                name='current'
                                checked={current}
                                value={current}
                                onChange={() => setFormData({ ...formData, current: !current })}
                            />
                            <span className='ms-2 text-muted'>
                                <FormattedMessage
                                    id='currently.studying'
                                    defaultMessage='Currently studying'
                                />
                            </span>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <h4 className='profile__title'>
                            <FormattedMessage
                                id='until'
                                defaultMessage='Until'
                            />
                        </h4>
                        <input
                            className='form-control inputs-forms'
                            type='date'
                            name='to'
                            value={to}
                            onChange={onChange}
                            disabled={current}
                        />
                    </div>
                    <div className='form-floating mb-4'>
                        <textarea
                            name='description'
                            cols='30'
                            rows='5'
                            placeholder='Descripción del programa'
                            value={description}
                            onChange={onChange}
                            className='form-control inputs border-0'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='program.desc'
                                defaultMessage='Program description'
                            />
                        </label>
                    </div>
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

AddEducation.propTypes = {
    addEducation: PropTypes.func.isRequired
};

export default connect(null, { addEducation })(AddEducation);
