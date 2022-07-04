import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import notfound from '../images/notfound.png';
import '../main.css';

const NotFound = () => {
    return (
        <section>
            <div className='container'>
                <div className='d-flex justify-content-center align-items-center'>
                    <img src={notfound} alt='Not Found Page' className='img-fluid my-3 not__found-img' />
                    <p className='position-absolute not__found-number'>404</p>
                </div>
                <div className='text-center'>
                    <h4 className='not__found-title'>
                        <FormattedMessage
                            id='404.title'
                            defaultMessage='This page is not available'
                        />
                    </h4>
                    <p className='text-muted'>
                        <FormattedMessage
                            id='404.desc'
                            defaultMessage='The link may be broken or the page may have been removed. Verify that the link you want to open is correct.'
                        />
                    </p>
                    <Link to='/' className='btn btn-primary'>
                        <FormattedMessage
                            id='return'
                            defaultMessage='Return'
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default NotFound;
