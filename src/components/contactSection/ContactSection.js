import ContactForm from './ContactForm';
import { Container, Row, Col } from 'react-bootstrap';

import './contactSection.scss';

export default function ContactSection({ content, dataContacts }) {
    return (
        <section className="contact-section section bg-white">
            {content && dataContacts ? (
                <Container fluid>
                    <Row className="g-5">
                        <Col className="col-12 col-md-6">
                            <img
                                src={content.image.sourceUrl}
                                alt="contact section img"
                                className="contact-section-image d-block mx-auto w-100 h-100"
                            />
                        </Col>
                        <Col className="col-12 col-md-6 px-md-5 py-md-4">
                            <div className="section-content" dangerouslySetInnerHTML={{ __html: content.text }}></div>
                            <ContactForm consent={content && content.consent} />
                        </Col>
                    </Row>
                    <Row className="g-5 mt-5">
                        <Col className="col-12 col-md-6 col-lg-5">
                            <div className="d-flex mb-4">
                                <span className="contact-box-icon d-flex justify-content-center align-items-center">
                                    <i className="fas fa-map-marker-alt"></i>
                                </span>
                                <div className="d-flex flex-column justify-content-between px-4 py-2">
                                    <h3 className="contact-box-title m-0">{content.centralofficetext}</h3>
                                    <div className="contact-box-inner d-flex align-items-center">
                                        <a className="m-0" href={dataContacts.addresscentralofficelink} target="blank">
                                            {dataContacts.addresscentraloffice}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <span className="contact-box-icon d-flex justify-content-center align-items-center">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <div className="d-flex flex-column justify-content-between px-4 py-2">
                                    <h3 className="contact-box-title m-0">{content.centralofficephonetext}</h3>
                                    <div className="contact-box-inner d-flex align-items-center">
                                        <a
                                            className="m-0"
                                            href={`tel:${
                                                dataContacts && dataContacts.phonecentraloffice1.split(' ').join('')
                                            }`}
                                        >
                                            {dataContacts.phonecentraloffice1}
                                        </a>
                                        ,
                                        <a
                                            className="m-0 ms-3"
                                            href={`tel:${
                                                dataContacts && dataContacts.phonecentraloffice2.split(' ').join('')
                                            }`}
                                        >
                                            {dataContacts.phonecentraloffice2}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <span className="contact-box-icon d-flex justify-content-center align-items-center">
                                    <i className="fas fa-phone-alt"></i>
                                </span>
                                <div className="d-flex flex-column justify-content-between px-4 py-2">
                                    <h3 className="contact-box-title m-0">{content.subsidiaryphonetext}</h3>
                                    <div className="contact-box-inner d-flex align-items-center">
                                        <a
                                            className="m-0"
                                            href={`tel:${
                                                dataContacts && dataContacts.phonesubsidiary.split(' ').join('')
                                            }`}
                                        >
                                            {dataContacts.phonesubsidiary}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <span className="contact-box-icon d-flex justify-content-center align-items-center">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <div className="d-flex flex-column justify-content-between px-4 py-2">
                                    <h3 className="contact-box-title m-0">{content.centralofficeemailtext}</h3>
                                    <div className="contact-box-inner d-flex align-items-center">
                                        <a className="m-0" href={`mailto:${dataContacts.emailcentraloffice}`}>
                                            {dataContacts.emailcentraloffice}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <span className="contact-box-icon d-flex justify-content-center align-items-center">
                                    <i className="fas fa-envelope"></i>
                                </span>
                                <div className="d-flex flex-column justify-content-between px-4 py-2">
                                    <h3 className="contact-box-title m-0">{content.subsidiaryemailtext}</h3>
                                    <div className="contact-box-inner d-flex align-items-center">
                                        <a className="m-0" href={`mailto:${dataContacts.emailsubsidiary}`}>
                                            {dataContacts.emailsubsidiary}
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex mb-4">
                                <span className="contact-box-icon d-flex justify-content-center align-items-center">
                                    <i className="fas fa-clock"></i>
                                </span>
                                <div className="d-flex flex-column justify-content-between px-4 py-2">
                                    <h3 className="contact-box-title m-0">{content.workhourstext}</h3>
                                    <div className="contact-box-inner d-flex align-items-center">
                                        <p className="m-0">{dataContacts.workhours}</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="col-12 col-md-6 col-lg-7">
                            <a href={dataContacts.addresscentralofficelink} target="blank">
                                <img
                                    src={content.imagemap.sourceUrl}
                                    alt="Husdor Drzwi Łódź"
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover' }}
                                />
                            </a>
                        </Col>
                    </Row>
                </Container>
            ) : null}
        </section>
    );
}
