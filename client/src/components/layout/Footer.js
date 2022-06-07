import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container-fluid bg-light pb-1'>
            <footer className='py-3 my-4 footer'>
                <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
                    <li className='nav-item'>
                        <Link to='/login' className='nav-link px-2'>Iniciar Sesión</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/register' className='nav-link px-2'>Registrarse</Link>
                    </li>
                </ul>
                <p className='footer__copy text-center'>©2022 DevCode</p>
            </footer>
        </div>
    )
}

export default Footer;