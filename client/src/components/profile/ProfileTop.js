import PropTypes from 'prop-types';

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
    <div>
      <img src={avatar} alt='Avatar' />
      <h1>{name}</h1>
      <p>
        {status} {company ? <span> en {company}</span> : null}
      </p>
      <p>{location ? <span>{location}</span> : null}</p>
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
                <i className={`fab fa-${key} fa-2x`}></i>
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
