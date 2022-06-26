import { UilTrashAlt } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteAccount, getCurrentProfile } from '../../actions/profile';
import Navbar from '../layout/Navbar';
import DashboardActions from './DashboardActions';
import Education from './Education';
import Experience from './Experience';

const Dashboard = ({
  getCurrentProfile,
  deleteAccount,
  auth: { user },
  profile: { profile }
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]);

  return (
    <>
      <Navbar />
      <section className='container mt-5 pt-5'>
        <h1 className='dashboard__title text-center mt-4'>Configuración</h1>
        <h4 className='dashboard__username'>
          Bienvenido {user && user.name}
        </h4>
        {profile !== null ? (
          <>
            <DashboardActions />
            <Experience experience={profile.experience} />
            <Education education={profile.education} />
            <div>
              <button className='btn btn-danger d-flex align-items-center mb-4' onClick={() => deleteAccount()}>
                Eliminar cuenta <UilTrashAlt />
              </button>
            </div>
          </>
        ) : (
          <>
            <p>Aún no ha configurado un perfil, agregue información.</p>
            <Link to='/create-profile' className='btn btn-primary'>
              Crear perfil
            </Link>
          </>
        )}
      </section>
    </>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  deleteAccount: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile
});

export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(
  Dashboard
);
