import { UilArrow, UilCompass, UilPlus, UilSearch, UilSetting, UilSignInAlt, UilSignOutAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import profile from '../images/profile-1.jpg';
import '../main.css';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {
  const authLinks = (
    <div className='navbar-collapse'>
      <div className='search-bar ms-auto'>
        <UilSearch className='search__bar-icon'/>
        <input type='text' placeholder='Buscar...' />
      </div>
      <ul className='navbar-nav flex-nowrap align-items-center ms-auto'>
        <li className='nav-item ms-2 pt-2'>
          <Link to='/posts' className='btn btn-primary d-flex align-items-center'>
            Crear <UilPlus className='ms-1' />
          </Link>
        </li>
        <li className='nav-item ms-2 pt-2'>
          <div className='dropdown'>
            <div id='dropdownMenuButton1' data-bs-toggle='dropdown' aria-expanded='false'>
              <img src={profile} alt='User' className='nav__user-photo rounded-circle' />
            </div>
            <ul className='dropdown-menu dropdown-menu-end mt-2' aria-labelledby='dropdownMenuButton1' >
              <li className='dropdown-item mt-2'>
                <Link to='/dashboard' className='nav__dropdown-item'>
                  <span><UilSetting />Configuración</span>
                </Link>
              </li>
              <li className='dropdown-item mt-2'>
                <Link to='/profiles' className='nav__dropdown-item'>
                  <span><UilCompass />Explorar</span>
                </Link>
              </li>
              <li className='dropdown-item mt-2'>
                <Link onClick={logout} to='/' className='d-flex align-items-center nav__logout'>
                  Cerrar sesión <UilSignOutAlt className='ms-1' />
                </Link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );

  const guestLinks = (
    <ul className='navbar-nav ms-auto'>
      <li className='nav-item'>
        <Link to='/profiles' className='nav-link'>Developers</Link>
      </li>
      <li className='nav-item'>
        <Link to='/register' className='nav-link'>Register</Link>
      </li>
      <li className='nav-item ps-3'>
        <Link to='/login' className='btn pt-2 pb-2 btn-login btn-primary'>
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
          <div className='offcanvas-body'>
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
