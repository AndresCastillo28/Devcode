import { UilEdit, UilPlus } from '@iconscout/react-unicons';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const DashboardActions = () => {
    return (
        <div className='text-center'>
            <div className='mt-3'>
                <Link to='/edit-profile' className='btn btn-secondary'>
                    <FormattedMessage
                        id='edit.profile'
                        defaultMessage='Edit profile'
                    />
                    <UilEdit />
                </Link>
            </div>
            <div className='mt-3'>
                <Link to='/add-experience' className='btn btn-secondary'>
                    <FormattedMessage
                        id='add.experience'
                        defaultMessage='Add experience'
                    />
                    <UilPlus />
                </Link>
            </div>
            <div className='mt-3'>
                <Link to='/add-education' className='btn btn-secondary'>
                    <FormattedMessage
                        id='add.education'
                        defaultMessage='Add education'
                    />
                    <UilPlus />
                </Link>
            </div>
        </div>
    );
};

export default DashboardActions;
