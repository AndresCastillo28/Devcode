import { UilArrow, UilSignInAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to='/dashboard' />;
  }

  return (
    <>
      <section>
        <div className='container mt-5 pt-5'>
          <div className='row'>
            <div className='col-12 col-sm-7 col-md-6 m-auto'>
              <div className='card border-0 shadow'>
                <div className='card-body'>
                  <h1 className='login__title text-center'>
                    <UilArrow className='login__title-icon' />DevCode
                  </h1>
                  <form className='form' onSubmit={onSubmit}>
                    <div className='form-group'>
                      <input
                        type='email'
                        placeholder='Ingresa tu correo electrónico'
                        name='email'
                        className='form-control my-4 py-2'
                        value={email}
                        onChange={onChange}
                      />
                    </div>
                    <div className='form-group'>
                      <input
                        type='password'
                        placeholder='Ingresa tu contraseña'
                        name='password'
                        className='form-control my-4 py-2'
                        value={password}
                        onChange={onChange}
                        minLength='6'
                      />
                    </div>
                    <div className='d-flex justify-content-center'>
                      <button type='submit' className='btn btn-primary text-center'>
                        Iniciar Sesión<UilSignInAlt className='ms-1' />
                      </button>
                    </div>
                  </form>
                  <div className='text-center pt-4'>
                    <p className='login__text'>¿No tienes una cuenta?</p>
                    <Link to='/register' className='nav-link login__link'>Registrate</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);
