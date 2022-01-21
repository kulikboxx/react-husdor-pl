import { Link } from 'react-router-dom';

import { Container, Row, Col } from 'react-bootstrap';
import './footer.scss';

import footerLogo from '../../assets/img/logo/logo-light.png';

export default function Footer({ routes, dataContacts, footerText }) {
    const links = routes.filter((item) => item.path && item.name);

    return (
        <footer className="footer bg-black">
            {dataContacts && (
                <Container fluid>
                    <Row className="gx-5 gy-5">
                        <Col className="col-12 col-md-6 col-xl-4">
                            <Link to="/">
                                <img src={footerLogo} alt="logo Husdor Drzwi" className="footer-logo" />
                            </Link>
                            <div
                                className="section-content"
                                dangerouslySetInnerHTML={{ __html: footerText && footerText.text }}
                            ></div>
                        </Col>
                        <Col className="col-12 col-md-6 col-xl-2">
                            <h5 className="footer-title position-relative text-white text-uppercase">Menu</h5>
                            <ul className="list-unstyled">
                                {links.slice(0, 1).map(({ name, path }) => (
                                    <li key={path}>
                                        <Link className="link text-decoration-none" to={path}>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                                <li>
                                    <a href="/#o-nas" className="text-white text-decoration-none">
                                        O nas
                                    </a>
                                </li>
                                {links.slice(11, 14).map(({ name, path }) => (
                                    <li key={path}>
                                        <Link className="link text-decoration-none" to={path}>
                                            {name}
                                        </Link>
                                    </li>
                                ))}
                                <ul className="footer-social-list d-flex align-items-center list-unstyled">
                                    <li className="ms-4 ps-2">
                                        <a
                                            href={dataContacts.facebook}
                                            target="blank"
                                            className="text-white text-decoration-none"
                                        >
                                            <i className="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li className="ms-4">
                                        <a
                                            href={dataContacts.instagram}
                                            target="blank"
                                            className="text-white text-decoration-none"
                                        >
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </ul>
                        </Col>
                        <Col className="col-12 col-md-6 col-xl-3">
                            <h5 className="footer-title position-relative text-white text-uppercase">Drzwi</h5>
                            <ul className="list-unstyled">
                                {links.slice(3, 11).map(({ name, path }, i) => (
                                    <li key={path}>
                                        <Link className="link text-decoration-none" to={path}>
                                            {i < 3 ? `Wewnątrzlokalowe ${name.toLowerCase()}` : null}
                                            {i >= 3 && i < 5 ? `Zewnętrzne ${name.toLowerCase()}` : null}
                                            {i >= 5 && name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </Col>
                        <Col className="col-12 col-md-6 col-xl-3">
                            <h5 className="footer-title position-relative text-white text-uppercase">Kontakt</h5>
                            <ul className="footer-contact-list list-unstyled">
                                <li>
                                    <a
                                        href={dataContacts.addresscentralofficelink}
                                        className="text-white text-decoration-none"
                                        target="blank"
                                    >
                                        <i className="fas fa-map-marker-alt"></i>
                                        {dataContacts.addresscentraloffice}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${
                                            dataContacts.phonecentraloffice1 &&
                                            dataContacts.phonecentraloffice1.split(' ').join('')
                                        }`}
                                        className="text-white text-decoration-none"
                                    >
                                        <i className="fas fa-phone-square-alt"></i>
                                        {dataContacts.phonecentraloffice1}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${
                                            dataContacts.phonecentraloffice2 &&
                                            dataContacts.phonecentraloffice2.split(' ').join('')
                                        }`}
                                        className="text-white text-decoration-none"
                                    >
                                        <i className="fas fa-phone-square-alt"></i>
                                        {dataContacts.phonecentraloffice2}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`tel:${
                                            dataContacts.phonesubsidiary &&
                                            dataContacts.phonesubsidiary.split(' ').join('')
                                        }`}
                                        className="text-white text-decoration-none"
                                    >
                                        <i className="fas fa-phone-square-alt"></i>
                                        {dataContacts.phonesubsidiary} - Gdańsk
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`mailto:${dataContacts.emailcentraloffice}`}
                                        className="text-white text-decoration-none"
                                    >
                                        <i className="fas fa-envelope"></i>
                                        {dataContacts.emailcentraloffice}
                                    </a>
                                </li>
                                <li>
                                    <p className="text-white">
                                        <i className="fas fa-clock"></i>
                                        {dataContacts.workhours}
                                    </p>
                                </li>
                            </ul>
                        </Col>
                    </Row>
                    <Row>
                        <ul className="footer-bottom-list d-flex justify-content-between align-items-center flex-wrap m-0 mt-5 list-unstyled border-top border-white">
                            <li className="me-4 text-white">
                                © Copyright {new Date().getFullYear()} Husdor.pl Wszystkie prawa zastrzeżone.
                            </li>
                            <li className="d-flex align-items-center text-white">
                                Realizacja:
                                <a
                                    href="https://silverwebgroup.pl/"
                                    target="blank"
                                    className="ms-2 text-white text-decoration-none"
                                >
                                    SILVER WEB GROUP
                                </a>
                            </li>
                        </ul>
                    </Row>
                </Container>
            )}
        </footer>
    );
}
