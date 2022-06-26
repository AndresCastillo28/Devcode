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
          <h4 className='not__found-title'>Esta página no está disponible</h4>
          <p className='text-muted'>Es posible que el enlace esté roto o que se haya eliminado la página. Verifica que el enlace que quieres abrir es correcto.</p>
          <Link to="/" className='btn btn-primary'>
            Regresar
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
