import { UilEdit, UilPlus } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
  return (
    <div className='text-center'>
      <div className='mt-3'>
        <Link to='/edit-profile' className='btn btn-secondary'>
          Editar Perfil <UilEdit />
        </Link>
      </div>
      <div className='mt-3'>
        <Link to='/add-experience' className='btn btn-secondary'>
          Agregar Experiencia <UilPlus />
        </Link>
      </div>
      <div className='mt-3'>
        <Link to='/add-education' className='btn btn-secondary'>
          Agregar Educación <UilPlus />
        </Link>
      </div>
    </div>
  );
};

export default DashboardActions;
