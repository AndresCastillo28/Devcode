import { FormattedMessage } from 'react-intl';

const Spinner = () => (
    <>
        <div className='text-center my-5 py-5'>
            <div className='spinner-border text-primary' role='status' style={{ width: '5rem', height: '5rem' }}>
            </div>
            <h4>
                <FormattedMessage
                    id='loading'
                    defaultMessage='Loading...'
                />
            </h4>
        </div>
    </>
);

export default Spinner;
