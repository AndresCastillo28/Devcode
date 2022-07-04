import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import formatDate from '../../utils/formatDate';

const ProfileExperience = ({
    experience: { company, title, location, current, to, from, description }
}) => (
    <div className='text-muted'>
        <h3>{company}</h3>
        <p>
            {formatDate(from)} - {to ? formatDate(to) :
                <FormattedMessage
                    id='now'
                    defaultMessage='Now'
                />
            }
        </p>
        <p>
            <strong>
                <FormattedMessage
                    id='position'
                    defaultMessage='Position:'
                />
            </strong> {title}
        </p>
        <p>
            <strong>
                <FormattedMessage
                    id='location'
                    defaultMessage='Location:'
                />
            </strong> {location}
        </p>
        <p>
            <strong>
                <FormattedMessage
                    id='desc'
                    defaultMessage='Description:'
                />
            </strong> {description}
        </p>
    </div>
);

ProfileExperience.propTypes = {
    experience: PropTypes.object.isRequired
};

export default ProfileExperience;
