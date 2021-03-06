import { UilCheck } from '@iconscout/react-unicons';
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

const ProfileAbout = ({
    profile: {
        bio,
        skills,
        user: { name }
    }
}) => (
    <div className='ms-4'>
        <h4 className='profile__information'>
            <FormattedMessage
                id='about'
                defaultMessage='About me'
            />
        </h4>
        {bio && (
            <Fragment>
                <p className='text-muted'>{bio}</p>
            </Fragment>
        )}
        <h4 className='profile__information'>
            <FormattedMessage
                id='skills'
                defaultMessage='Skills'
            />
        </h4>
        <div>
            {skills.map((skill, index) => (
                <div className='d-flex align-items-center text-muted' key={index}>
                    <UilCheck className='me-1' />{skill}
                </div>
            ))}
        </div>
    </div>
);

ProfileAbout.propTypes = {
    profile: PropTypes.object.isRequired
};

export default ProfileAbout;
