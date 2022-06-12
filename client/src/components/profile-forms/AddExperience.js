import PropTypes from 'prop-types';
import { useState } from 'react';
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
        <h1 className='profile__title mt-4'>Agregar Experiencia</h1>
        <p className='text-muted'>Agregue cualquier puesto de desarrollador que haya tenido en el pasado.</p>
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
              className='form-control'
              id='floatingText'
              required
            />
            <label className='profile__label' htmlFor='floatingText'>Trabajo</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Compañia'
              name='company'
              value={company}
              onChange={onChange}
              className='form-control'
              id='floatingText'
              required
            />
            <label className='profile__label' htmlFor='floatingText'>Compañia</label>
          </div>
          <div className='form-floating mb-4'>
            <input
              type='text'
              placeholder='Ubicación'
              name='location'
              value={location}
              onChange={onChange}
              className='form-control'
              id='floatingText'
              required
            />
            <label className='profile__label' htmlFor='floatingText'>Ubicación</label>
          </div>
          <div>
            <h4 className='profile__title'>Desde</h4>
            <input
              className='form-control profile__date'
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
              <span className='ms-2 text-muted'>Trabajo Actualmente</span>
            </div>
          </div>
          <div className='mb-4'>
            <h4 className='profile__title'>Hasta</h4>
            <input
              className='form-control profile__date'
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
              className='form-control'
              id='floatingText'
              required
            />
            <label className='profile__label' htmlFor='floatingText'>Descripción del trabajo</label>
          </div>
          <div className='d-flex align-items-center justify-content-center mb-4'>
            <input type='submit' className='btn btn-primary me-4' />
            <Link className='btn btn-secondary' to='/dashboard'>
              Regresar
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
