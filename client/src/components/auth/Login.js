import { UilArrow, UilSignInAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { login } from '../../actions/auth';
import '../main.css';

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
              <div className='card border-0'>
                <div className='card-body'>
                  <Link to='/' className='login__title'>
                    <div className='text-center'>
                      <UilArrow className='login__title-icon' />DevCode
                    </div>
                  </Link>
                  <form className='mt-3' onSubmit={onSubmit}>
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
                      <label className='login__label' htmlFor='floatingInput'>Correo electrónico</label>
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
                      <label className='login__label' htmlFor='floatingPassword'>Contraseña</label>
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
