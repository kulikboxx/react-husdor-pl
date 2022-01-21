import { Container, Row, Col } from 'react-bootstrap';
import './aboutusSection.scss';

export default function AboutusSection({ aboutus }) {
    return (
        <section className="aboutus-section section bg-white">
            {aboutus && (
                <Container fluid className="p-0">
                    <Row className="gx-lg-4 gx-xl-3 gy-5">
                        <Col className="aboutus-image col-12 col-lg-6">
                            <div className="aboutus-image-first">
                                <img src={aboutus.image1.sourceUrl} alt={aboutus.title} />
                            </div>
                            <div className="aboutus-image-second d-none d-sm-block">
                                <img src={aboutus.image2.sourceUrl} alt={aboutus.title} />
                            </div>
                        </Col>
                        <Col className="col-12 col-lg-6" id="o-nas">
                            <h2 className="section-supertitle">{aboutus.supertitle}</h2>
                            <h1 className="section-title">{aboutus.title}</h1>
                            <div className="section-content" dangerouslySetInnerHTML={{ __html: aboutus.text }}></div>
                        </Col>
                    </Row>
                </Container>
            )}
        </section>
    );
}
