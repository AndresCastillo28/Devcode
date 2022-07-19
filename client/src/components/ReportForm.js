import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import Swal from 'sweetalert2';
import Navbar from '../components/layout/Navbar';


const ReportForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6z3gbka', 'template_j83de6l', form.current, 'WQ-lnjoLpTrTVYJE4')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        Swal.fire({
            title: 'Reporte enviado',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
    };

    return (
        <>
            <Navbar />
            <section>
                <div className='container'>
                    <div className='row mt-5 pt-5'>
                        <div className='col-12 col-sm-7 col-md-6 m-auto'>
                            <div className='card my-5 border-0'>
                                <div className='card-body'>
                                    <h1 className='post__title text-center mt-4'>
                                        <FormattedMessage
                                            id='report.post'
                                            defaultMessage='Report Post'
                                        />
                                    </h1>
                                    <form className='mt-3' ref={form} onSubmit={sendEmail}>
                                        <div className='form-floating'>
                                            <textarea
                                                cols='40'
                                                rows='5'
                                                name='message'
                                                className='form-control inputs border-0'
                                                placeholder='Reportar'
                                                id='floatingTextarea'
                                                required
                                            />
                                            <label htmlFor='floatingTextarea'>
                                                <FormattedMessage
                                                    id='reason'
                                                    defaultMessage='Reason'
                                                />
                                            </label>
                                        </div>
                                        <div className='d-flex justify-content-center pt-3'>
                                            <button type='submit' value='Send' className='btn btn-primary btn__post'>
                                                <FormattedMessage
                                                    id='report'
                                                    defaultMessage='Report'
                                                />
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReportForm;