import { UilCompass, UilEdit, UilSetting, UilUsersAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/auth';
import '../main.css';

const Sidebar = ({ auth: { user } }) => {
    return (
        <section className='d-none d-lg-block position-fixed'>
            <div className='left'>
                <div className='profile'>
                    <img src={user && user.avatar} alt='User' className='nav__user-photo rounded-circle' />
                    <div className='handle'>
                        <h4 className='profile__name'>{user && user.name}</h4>
                    </div>
                </div>
            </div>
            <div className='sidebar'>
                <Link to='/dashboard' className='menu-item'>
                    <span><UilSetting className='sidebar-icon' />
                        <FormattedMessage
                            id='setting'
                            defaultMessage='Setting'
                        />
                    </span>
                </Link>
                <Link to='/profiles' className='menu-item'>
                    <span><UilCompass className='sidebar-icon' />
                        <FormattedMessage
                            id='explore'
                            defaultMessage='Explore'
                        />
                    </span>
                </Link>
                <Link to='/posts' className='menu-item'>
                    <span><UilEdit className='sidebar-icon' />
                        <FormattedMessage
                            id='posts'
                            defaultMessage='Posts'
                        />
                    </span>
                </Link>
                <Link to='/' className='menu-item'>
                    <span><UilUsersAlt className='sidebar-icon' />
                        <FormattedMessage
                            id='friends'
                            defaultMessage='Friends'
                        />
                    </span>
                </Link>
            </div>
        </section>
    )
}

Sidebar.propTypes = {
    logout: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { logout })(Sidebar);
