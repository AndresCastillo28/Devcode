import { UilEdit, UilPlus } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='d-flex align-items-center justify-content-evenly mt-3'>
      <Link to='/edit-profile' className='btn btn-secondary'>
        Editar Perfil <UilEdit />
      </Link>
      <Link to='/add-experience' className='btn btn-secondary'>
        Agregar Experiencia <UilPlus />
      </Link>
      <Link to='/add-education' className='btn btn-secondary'>
        Agregar Educación <UilPlus />
      </Link>
    </div>
  );
};

export default DashboardActions;
