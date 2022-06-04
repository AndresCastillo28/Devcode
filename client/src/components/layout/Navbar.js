import { UilArrow, UilPlus, UilSearch, UilSignInAlt, UilSignOutAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import profile from '../images/profile-1.jpg';
import './main.css';

const Navbar = ({ auth: { isAuthenticated }, logout }) => {
  const authLinks = (
    <ul className='navbar-nav ms-auto'>
      <div className="search-bar">
        <UilSearch />
        <input type="text" placeholder='Search' />
      </div>
      <li className='nav-item'>
        <Link to="/profiles" className='nav-link'>Developers</Link>
      </li>
      <li className='nav-item ps-3'>
        <Link to="/posts" className='btn pt-2 pb-2 btn-primary'>
          Create
          <UilPlus />
        </Link>
      </li>
      <li className='nav-item'>
        <Link to="/dashboard">
          <div className='profile-photo'>
            <img src={profile} alt='Profile' />
          </div>
        </Link>
      </li>
      <li className='nav-item ps-3'>
        <Link onClick={logout} to='/' className='btn pt-2 pb-2 btn-logout btn-danger'>
          Logout
          <UilSignOutAlt />
        </Link>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul className='navbar-nav ms-auto'>
      <li className='nav-item'>
        <Link to="/profiles" className='nav-link'>Developers</Link>
      </li>
      <li className='nav-item'>
        <Link to="/register" className='nav-link'>Register</Link>
      </li>
      <li className='nav-item ps-3'>
        <Link to="/login" className='btn pt-2 pb-2 btn-login btn-primary'>
          Login
          <UilSignInAlt />
        </Link>
      </li>
    </ul>
  );

  return (
    <nav className='navbar fixed-top navbar-expand-lg'>
      <div className='container'>
        <div className='navbar-brand'>
          <Link to='/' className='nav-logo'>
            <UilArrow /> DevCode
          </Link>
        </div>
        <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='offcanvas offcanvas-end navbar__offcanvas' tabIndex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
          <div className='offcanvas-header'>
            <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
          </div>
          <div className='offcanvas-body text-center'>
            <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
          </div>
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
