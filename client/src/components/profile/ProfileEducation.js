import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import formatDate from '../../utils/formatDate';

const ProfileEducation = ({
    education: { school, degree, fieldofstudy, current, to, from, description }
}) => (
    <div className='text-muted'>
        <p>{school}</p>
        <p>
            {formatDate(from)} - {to ? formatDate(to) :
                <FormattedMessage
                    id='currently'
                    defaultMessage='Currently'
                />
            }
        </p>
        <p>
            <strong>
                <FormattedMessage
                    id='grade'
                    defaultMessage='Degree or Certificate:'
                />
            </strong> {degree}
        </p>
        <p>
            <strong>
                <FormattedMessage
                    id='field'
                    defaultMessage='Field of study:'
                />
            </strong> {fieldofstudy}
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

ProfileEducation.propTypes = {
    education: PropTypes.object.isRequired
};

export default ProfileEducation;
