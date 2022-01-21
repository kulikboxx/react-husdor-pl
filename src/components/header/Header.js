import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './header.scss';

import logoImg from '../../assets/img/logo/logo-dark.svg';

export default function Header({ routes, dataContacts }) {
    const [expanded, setExpanded] = useState(false);
    const links = routes.filter((item) => item.path && item.name);

    let barsClasses = 'bars d-flex flex-column justify-content-center align-items-center d-lg-none';
    if (expanded) barsClasses += ' active';

    return (
        <>
            <header className="header position-sticky">
                {dataContacts && (
                    <>
                        <div className="header-top px-1 py-2">
                            <Container fluid>
                                <ul className="d-flex align-items-center justify-content-center justify-content-sm-end m-0 list-unstyled">
                                    <li className="header-top-item">
                                        <span>{dataContacts.addressheadername}</span>
                                        <a
                                            className="ms-2 text-black"
                                            href={dataContacts.addresscentralofficelink}
                                            target="blank"
                                        >
                                            {dataContacts.addresscentraloffice}
                                        </a>
                                    </li>
                                    <li className="header-top-item">
                                        <span>{dataContacts.emailheadername}</span>
                                        <a
                                            className="ms-2 text-black"
                                            href={`mailto:${dataContacts.emailcentraloffice}`}
                                        >
                                            {dataContacts.emailcentraloffice}
                                        </a>
                                    </li>
                                    <li className="header-top-item">
                                        <span>{dataContacts.phoneheadername}</span>
                                        <a
                                            className="ms-2 text-black"
                                            href={`tel:${
                                                dataContacts.phonecentraloffice1 &&
                                                dataContacts.phonecentraloffice1.split(' ').join('')
                                            }`}
                                        >
                                            {dataContacts.phonecentraloffice1}
                                        </a>
                                    </li>
                                </ul>
                            </Container>
                        </div>
                        <Navbar bg="white" expand="lg" expanded={expanded}>
                            <Container fluid>
                                <Link to="/" className="navbar-logo py-2" onClick={() => setExpanded(false)}>
                                    <img
                                        src={logoImg}
                                        alt="logo Husdor Drzwi"
                                        className="navbar-logo-img position-relative"
                                    />
                                </Link>
                                <Navbar.Toggle
                                    className={barsClasses}
                                    onClick={() => setExpanded(expanded ? false : 'expanded')}
                                >
                                    <span className="bars-item bg-black"></span>
                                    <span className="bars-item bg-black"></span>
                                    <span className="bars-item bg-black"></span>
                                </Navbar.Toggle>
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto me-lg-0 navbar-main">
                                        {links.slice(0, 1).map(({ name, path }) => (
                                            <li key={path} onClick={() => setExpanded(false)}>
                                                <Link to={path}>{name}</Link>
                                            </li>
                                        ))}
                                        <li onClick={() => setExpanded(false)}>
                                            <a href="/#o-nas">O nas</a>
                                        </li>
                                        <NavDropdown title="Drzwi" id="basic-nav-dropdown" className="dropdown-first">
                                            {links.slice(1, 1).map(({ name, path }) => (
                                                <li key={path} onClick={() => setExpanded(false)}>
                                                    <Link to={path}>{name}</Link>
                                                </li>
                                            ))}
                                            <NavDropdown
                                                title="Zewnętrzne"
                                                id="basic-nav-dropdown"
                                                className="dropdown-second"
                                            >
                                                {links.slice(2, 1).map(({ name, path }) => (
                                                    <li key={path} onClick={() => setExpanded(false)}>
                                                        <Link to={path}>{name}</Link>
                                                    </li>
                                                ))}
                                                <NavDropdown
                                                    title="Wewnątrzlokalowe"
                                                    id="basic-nav-dropdown"
                                                    className="dropdown-third"
                                                >
                                                    {links.slice(3, 6).map(({ name, path }) => (
                                                        <li key={path} onClick={() => setExpanded(false)}>
                                                            <Link to={path}>{name}</Link>
                                                        </li>
                                                    ))}
                                                </NavDropdown>
                                                {links.slice(6, 8).map(({ name, path }) => (
                                                    <li key={path} onClick={() => setExpanded(false)}>
                                                        <Link to={path}>{name}</Link>
                                                    </li>
                                                ))}
                                            </NavDropdown>
                                            {links.slice(8, 11).map(({ name, path }) => (
                                                <li key={path} onClick={() => setExpanded(false)}>
                                                    <Link to={path}>{name}</Link>
                                                </li>
                                            ))}
                                        </NavDropdown>
                                        {links.slice(11, 13).map(({ name, path }) => (
                                            <li key={path} onClick={() => setExpanded(false)}>
                                                <Link to={path}>{name}</Link>
                                            </li>
                                        ))}
                                    </Nav>
                                    <ul className="navbar-social d-none d-lg-flex align-items-center m-0 ms-5 p-0 list-unstyled">
                                        <li className="m-0 ms-4 p-0 border-0">
                                            <a
                                                href={dataContacts.facebook}
                                                target="blank"
                                                className="m-0 p-0 text-black text-decoration-none"
                                            >
                                                <i className="fab fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li className="m-0 ms-4 p-0 border-0">
                                            <a
                                                href={dataContacts.instagram}
                                                target="blank"
                                                className="m-0 p-0 text-black text-decoration-none"
                                            >
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </>
                )}
            </header>
        </>
    );
}
