import { UilSignInAlt } from '@iconscout/react-unicons';
import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../images/notfound.svg';

const NotFound = () => {
  return (
    <section className='container'>
      <div className='d-flex justify-content-center align-items-center'>
        <img src={notfound} alt='Not Found Page' className='img-fluid w-75' />
      </div>
      <div className='d-flex justify-content-center align-items-center mb-3'>
        <Link to="/login" className='btn btn-primary'>
          Login
          <UilSignInAlt />
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
