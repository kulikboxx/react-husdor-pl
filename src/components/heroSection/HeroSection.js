import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';
import './heroSection.scss';

export default function HeroSection({ heroSection }) {
    return (
        <section className="hero-section position-relative d-flex justify-content-center align-items-center">
            {heroSection && (
                <>
                    <img
                        src={heroSection.heroimage.sourceUrl}
                        alt={heroSection.herotitle + 'section'}
                        className="position-absolute top-0 start-0 w-100 h-100"
                    />
                    <Container fluid>
                        <div className="d-flex flex-column align-items-center">
                            <h1 className="hero-section-title mb-5 text-uppercase">{heroSection.herotitle}</h1>
                            <div className="hero-section-links d-flex justify-content-center flex-wrap text-center">
                                <Link
                                    to="/"
                                    className="hero-section-link text-white d-flex align-items-center text-decoration-none"
                                >
                                    <i className="fas fa-arrow-left me-3 fs-4"></i> Home
                                </Link>
                            </div>
                        </div>
                    </Container>
                </>
            )}
        </section>
    );
}
