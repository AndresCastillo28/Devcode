import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

const ProfileItem = ({
    profile: {
        user: { _id, name, avatar },
        status,
        company,
        location,
        skills
    }
}) => {
    return (
        <div className='card border-0 my-4'>
            <div className='card-header border-0 pb-0'>
                <span className='text-muted'>
                    <FormattedMessage
                        id='know'
                        defaultMessage='You may know:'
                    />
                </span>
            </div>
            <div className='card-body'>
                <div className='d-md-flex align-items-center mb-4'>
                    <div className='me-3 mb-3 mb-md-0'>
                        <img className='avatar-img rounded-circle' src={avatar} alt='Profile' />
                    </div>
                    <div className='w-100'>
                        <div className='d-sm-flex align-items-start'>
                            <h6 className='profile__title mb-0'>{name}</h6>
                            <span className='small ms-sm-2 mb-0 text-muted'>{status} {company && <span> en {company}</span>}</span>
                        </div>
                        <span className='small text-muted'>{location && <span>{location}</span>}</span>
                        <ul className='list-unstyled align-items-sm-center'>
                            <FormattedMessage
                                id='skills'
                                defaultMessage='Skills'
                            />
                            {skills.slice(0, 4).map((skill, index) => (
                                <li key={index} className='small'>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link to={`/profile/${_id}`} className='btn btn-primary'>
                        <FormattedMessage
                            id='view.profile'
                            defaultMessage='View Profile'
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileItem;
