import { useState, useRef } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import StatusImage from '../statusImage/StatusImage';

import { Row, Col, Form, Button } from 'react-bootstrap';

import sendingImg from '../../assets/img/forms/spinner.gif';
import failureImg from '../../assets/img/forms/failure.png';
import successImg from '../../assets/img/forms/success.png';

export default function ContactForm({ consent }) {
    const [sending, setSending] = useState(false);
    const [failure, setFailure] = useState(false);
    const [success, setSuccess] = useState(false);
    const contactForm = useRef(null);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            message: '',
            consent: false,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('To pole jest wymagane')
                .matches(/^[\s\p{L}]+$/u, 'Dozwolone tylko litery')
                .trim('Spacje na początku nie są dozwolone')
                .strict()
                .min(3, 'Wpisz minimum 3 znaki'),
            phone: Yup.string()
                .required('To pole jest wymagane')
                .matches(/^\d+$/, 'Dozwolone tylko cyfry')
                .min(9, 'Wpisz 9-cyfrowy numer telefonu')
                .max(9, 'Wpisz 9-cyfrowy numer telefonu'),
            email: Yup.string().required('To pole jest wymagane').email('Wpisz poprawny adres e-mail'),
            message: Yup.string(),
            consent: Yup.boolean().oneOf([true]),
        }),
        onSubmit: (values) => {
            setSending(true);
            values.consent = consent;

            const formData = new FormData();

            for (let value in values) {
                formData.append(value, values[value]);
            }

            axios({
                method: 'POST',
                mode: 'no-cors',
                url: '/php/contact.php',
                data: formData,
            })
                .then(() => {
                    setTimeout(() => {
                        setSending(false);
                        setSuccess(true);
                    }, 1000);
                })
                .catch((error) => {
                    console.log(error.response.data);

                    setTimeout(() => {
                        setSending(false);
                        setFailure(true);
                    }, 1000);
                })
                .finally(() => {
                    formik.handleReset();

                    setTimeout(() => {
                        setFailure(false);
                        setSuccess(false);
                    }, 3000);
                });
        },
    });

    const sendingMessage = sending ? <StatusImage image={sendingImg} status={'Wysyłanie danych...'} /> : null;
    const failureMessage = failure ? (
        <StatusImage image={failureImg} status={'Wystąpił jakiś błąd! Odśwież stronę i spróbuj jeszcze raz'} />
    ) : null;
    const successMessage = success ? (
        <StatusImage image={successImg} status={'Dziękujemy! Formularz został wysłany'} />
    ) : null;

    const form = !(sending || failure || success) ? (
        <>
            <Row>
                <Col className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <Form.Group className="position-relative mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="text"
                            placeholder="Twoje Imię*"
                            name="name"
                            className={`contact-form-input px-4 py-3 rounded-0 ${
                                formik.errors.name && formik.touched.name ? 'error' : ''
                            }`}
                            {...formik.getFieldProps('name')}
                        />
                        {formik.errors.name && formik.touched.name ? (
                            <span className="position-absolute top-0 end-0 text-danger text-right fs-6">
                                {formik.errors.name}
                            </span>
                        ) : null}
                    </Form.Group>
                </Col>
                <Col className="col-12 col-sm-6 col-md-12 col-lg-6">
                    <Form.Group className="position-relative mb-4" controlId="exampleForm.ControlInput1">
                        <Form.Control
                            type="tel"
                            placeholder="Telefon*"
                            name="phone"
                            className={`contact-form-input px-4 py-3 rounded-0 ${
                                formik.errors.phone && formik.touched.phone ? 'error' : ''
                            }`}
                            {...formik.getFieldProps('phone')}
                        />
                        {formik.errors.phone && formik.touched.phone ? (
                            <span className="position-absolute top-0 end-0 text-danger text-right fs-6">
                                {formik.errors.phone}
                            </span>
                        ) : null}
                    </Form.Group>
                </Col>
            </Row>
            <Form.Group className="position-relative mb-4" controlId="exampleForm.ControlInput1">
                <Form.Control
                    type="email"
                    placeholder="E-mail*"
                    name="email"
                    className={`contact-form-input px-4 py-3 rounded-0 ${
                        formik.errors.email && formik.touched.email ? 'error' : ''
                    }`}
                    {...formik.getFieldProps('email')}
                />
                {formik.errors.email && formik.touched.email ? (
                    <span className="position-absolute top-0 end-0 text-danger text-right fs-6">
                        {formik.errors.email}
                    </span>
                ) : null}
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Wiadomość"
                    name="message"
                    className="contact-form-input px-4 py-3 rounded-0 textarea"
                    {...formik.getFieldProps('message')}
                />
            </Form.Group>
            <Form.Group className="mb-4 d-flex align-items-center" controlId="exampleForm.ControlInput1">
                <input
                    type="checkbox"
                    id="consent"
                    className={`contact-form-checkbox ${
                        formik.errors.consent && formik.touched.consent ? 'error' : ''
                    }`}
                    name="consent"
                    checked={formik.values.consent}
                    {...formik.getFieldProps('consent')}
                />
                <label htmlFor="consent" className="contact-form-consent">
                    {consent}
                </label>
            </Form.Group>
            <Button type="submit" className="button">
                Wyślij<i className="fas fa-paper-plane"></i>
            </Button>
        </>
    ) : null;

    return (
        <>
            <Form className="contact-form mt-5" onSubmit={formik.handleSubmit} ref={contactForm} id="contact-form">
                {sendingMessage}
                {failureMessage}
                {successMessage}
                {form}
            </Form>
        </>
    );
}
