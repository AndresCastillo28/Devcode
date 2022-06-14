import PropTypes from 'prop-types';
import '../main.css';

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar }
  }
}) => {
  return (
    <div className='text-center'>
      <img src={avatar} alt='Avatar' className='rounded-circle' />
      <h1 className='profile__name-user mt-3'>{name}</h1>
      <p className='text-muted'>
        {status} {company ? <span> en {company}</span> : null}
      </p>
      <p className='text-muted'>{location ? <span>{location}</span> : null}</p>
      <div>
        {website ? (
          <a href={website} target='_blank' rel='noopener noreferrer'>
          </a>
        ) : null}
        {social
          ? Object.entries(social)
            .filter(([_, value]) => value)
            .map(([key, value]) => (
              <a
                key={key}
                href={value}
                target='_blank'
                rel='noopener noreferrer'
              >
              </a>
            ))
          : null}
      </div>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
