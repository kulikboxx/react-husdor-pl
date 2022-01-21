import { useState, useEffect } from 'react';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useQuery } from '@apollo/client';

import { GET_MODAL_CONSENT } from '../../queries/Queries';

import StatusImage from '../statusImage/StatusImage';

import { Form, Button } from 'react-bootstrap';
import './modalForm.scss';

import sendingImg from '../../assets/img/forms/spinner.gif';
import failureImg from '../../assets/img/forms/failure.png';
import successImg from '../../assets/img/forms/success.png';

const options = [
    {
        value: '',
        label: 'Wybierz produkt',
    },
    {
        value: 'Wewnętrzlokalowe profilowane',
        label: 'Wewnątrzlokalowe profilowane',
    },
    {
        value: 'Wewnętrzlokalowe gładkie',
        label: 'Wewnętrzlokalowe gładkie',
    },
    {
        value: 'Wewnętrzlokalowe gładkie z listwą',
        label: 'Wewnętrzlokalowe gładkie z listwą',
    },
    {
        value: 'Zewnętrzne metalowe',
        label: 'Zewnętrzne metalowe',
    },
    {
        value: 'Zewnętrzne drewniane',
        label: 'Zewnętrzne drewniane',
    },
    {
        value: 'Wewnętrzne',
        label: 'Wewnętrzne',
    },
    {
        value: 'Okucia',
        label: 'Okucia',
    },
    {
        value: 'Dla firm',
        label: 'Dla firm',
    },
];

export default function ModalForm({ showModalForm, toggleModalFormVisibility }) {
    const { data } = useQuery(GET_MODAL_CONSENT);

    const consent = data && data.allContactText.edges[0].node.contactText.consent;

    const [sending, setSending] = useState(false);
    const [failure, setFailure] = useState(false);
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            product: '',
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
            product: Yup.string().required('Wybierz produkt'),
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
                url: '/php/modal.php',
                data: formData,
            })
                .then(() => {
                    setTimeout(() => {
                        setSending(false);
                        setSuccess(true);
                    }, 1000);
                })
                .catch(() => {
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
                        toggleModalFormVisibility(false);
                    }, 3000);
                });
        },
    });

    useEffect(() => {
        !showModalForm && formik.handleReset();
        // eslint-disable-next-line
    }, [showModalForm]);

    const sendingMessage = sending ? <StatusImage image={sendingImg} status={'Wysyłanie danych...'} /> : null;
    const failureMessage = failure ? (
        <StatusImage image={failureImg} status={'Wystąpił jakiś błąd! Odśwież stronę i spróbuj jeszcze raz'} />
    ) : null;
    const successMessage = success ? (
        <StatusImage image={successImg} status={'Dziękujemy! Zapytanie zostało wysłane'} />
    ) : null;

    const form = !(sending || failure || success) ? (
        <>
            <h3 className="section-subtitle mb-4 w-100 text-center fw-bold">Wyślij zapytanie o produkt</h3>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group className="position-relative mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="text"
                        placeholder="Twoje Imię"
                        name="name"
                        className={`modal-form-input px-4 py-3 rounded-0 ${
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
                <Form.Group className="position-relative mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Control
                        type="tel"
                        placeholder="Telefon"
                        name="phone"
                        className={`modal-form-input px-4 py-3 rounded-0 ${
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
                <Form.Group className="position-relative mb-4" controlId="exampleForm.ControlInput1">
                    <Form.Select
                        aria-label="Default select example"
                        name="product"
                        className={`modal-form-input position-relative mb-4 px-4 py-3 rounded-0 ${
                            formik.errors.product && formik.touched.product ? 'error' : ''
                        }`}
                        {...formik.getFieldProps('product')}
                    >
                        {options.map(({ value, label }, i) => (
                            <option key={i} value={value}>
                                {label}
                            </option>
                        ))}
                    </Form.Select>
                    {formik.errors.product && formik.touched.product ? (
                        <span className="position-absolute top-0 end-0 text-danger text-right fs-6">
                            {formik.errors.product}
                        </span>
                    ) : null}
                </Form.Group>
                <Form.Group className="mb-4 d-flex align-items-center" controlId="exampleForm.ControlInput1">
                    <input
                        type="checkbox"
                        id="consent"
                        name="consent"
                        className={`modal-form-checkbox ${
                            formik.errors.consent && formik.touched.consent ? 'error' : ''
                        }`}
                        checked={formik.values.consent}
                        {...formik.getFieldProps('consent')}
                    />
                    <label htmlFor="consent" className="modal-form-consent">
                        {consent}
                    </label>
                </Form.Group>
                <div className="d-flex justify-content-center align-items-center mt-4">
                    <Button className="button py-3 fs-4" type="submit">
                        Wyślij<i className="fas fa-paper-plane fs-4"></i>
                    </Button>
                    <Button className="button ms-4 py-3 fs-4" onClick={() => toggleModalFormVisibility(false)}>
                        Zamknij<i className="fas fa-window-close fs-4"></i>
                    </Button>
                </div>
            </Form>
        </>
    ) : null;

    return (
        <div className={`modal-form ${showModalForm ? ' show' : ''}`}>
            <div className="modal-form-content">
                {sendingMessage}
                {failureMessage}
                {successMessage}
                {form}
            </div>
        </div>
    );
}
