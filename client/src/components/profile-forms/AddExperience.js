import PropTypes from 'prop-types';
import { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addExperience } from '../../actions/profile';
import Navbar from '../layout/Navbar';

const AddExperience = ({ addExperience }) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        from: '',
        to: '',
        current: false,
        description: ''
    });

    const { company, title, location, from, to, current, description } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    return (
        <>
            <Navbar />
            <section className='container mt-5 pt-5'>
                <h1 className='profile__title mt-4'>
                    <FormattedMessage
                        id='add.experience'
                        defaultMessage='Add experience'
                    />
                </h1>
                <p className='text-muted'>
                    <FormattedMessage
                        id='experience.desc'
                        defaultMessage="Add any developer positions you' ve held in the past."
                    />
                </p>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        addExperience(formData, navigate);
                    }}
                >
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Trabajo'
                            name='title'
                            value={title}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='work'
                                defaultMessage='Work'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Compañia'
                            name='company'
                            value={company}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='company'
                                defaultMessage='Company'
                            />
                        </label>
                    </div>
                    <div className='form-floating mb-4'>
                        <input
                            type='text'
                            placeholder='Ubicación'
                            name='location'
                            value={location}
                            onChange={onChange}
                            className='form-control inputs-forms'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='location'
                                defaultMessage='Location'
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
                    <div>
                        <div className='my-2'>
                            <input
                                type='checkbox'
                                name='current'
                                checked={current}
                                value={current}
                                onChange={() => {
                                    setFormData({ ...formData, current: !current });
                                }}
                            />
                            <span className='ms-2 text-muted'>
                                <FormattedMessage
                                    id='currently.work'
                                    defaultMessage='Currently work'
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
                            placeholder='Descripción del trabajo'
                            value={description}
                            onChange={onChange}
                            className='form-control inputs border-0'
                            id='floatingText'
                            required
                        />
                        <label className='label' htmlFor='floatingText'>
                            <FormattedMessage
                                id='work.desc'
                                defaultMessage='Work description'
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

AddExperience.propTypes = {
    addExperience: PropTypes.func.isRequired
};

export default connect(null, { addExperience })(AddExperience);
