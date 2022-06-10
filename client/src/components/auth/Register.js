import { UilArrow } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import '../main.css';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <section>
      <div className='container mt-5 pt-1 mb-4'>
        <div className='row'>
          <div className='col-12 col-sm-7 col-md-6 m-auto'>
            <div className='card border-0 shadow'>
              <div className='card-body'>
                <Link to='/' className='login__title'>
                  <div className='text-center'>
                    <UilArrow className='login__title-icon' />DevCode
                  </div>
                </Link>
                <p className='register__text pt-1'>Crea tu cuenta</p>
                <form className='mt-3' onSubmit={onSubmit}>
                  <div className='form-floating mb-4'>
                    <input
                      type='text'
                      name='name'
                      value={name}
                      className='form-control'
                      placeholder='Nombre'
                      id='floatingName'
                      onChange={onChange}
                      required
                    />
                    <label className='register__label' htmlFor='floatingName'>Nombre</label>
                  </div>
                  <div className='form-floating mb-4'>
                    <input
                      type='email'
                      name='email'
                      className='form-control'
                      placeholder='Correo electrónico'
                      value={email}
                      required
                      id='floatingInput'
                      onChange={onChange}
                    />
                    <label className='register__label' htmlFor='floatingInput'>Correo electrónico</label>
                  </div>
                  <div className='form-floating mb-4'>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Contraseña'
                      value={password}
                      onChange={onChange}
                      required
                      id='floatingPassword'
                      minLength='6'
                    />
                    <label className='register__label' htmlFor='floatingPassword'>Contraseña</label>
                  </div>
                  <div className='form-floating mb-4'>
                    <input
                      type='password'
                      className='form-control'
                      placeholder='Confirmar contraseña'
                      name='password2'
                      value={password2}
                      onChange={onChange}
                      required
                      id='floatingConfirmPassword'
                      minLength='6'
                    />
                    <label className='register__label' htmlFor='floatingConfirmPassword'>Confirmar contraseña</label>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button type='submit' className='btn btn-primary text-center'>
                      Registrarse
                    </button>
                  </div>
                </form>
                <div className='text-center pt-4'>
                  <p className='register__text'>¿Ya tienes una cuenta?</p>
                  <Link to='/login' className='nav-link register__link'>Inicia Sesión</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Register);
