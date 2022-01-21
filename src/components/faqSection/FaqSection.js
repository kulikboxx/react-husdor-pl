import { Container, Row, Col, Accordion } from 'react-bootstrap';

import './faqSection.scss';

export default function FaqSection({ faq, faqQuestions }) {
    return (
        <section className="faq-section section bg-white">
            {faq && (
                <Container fluid>
                    <Row className="g-5">
                        <Col className="faq-accordions">
                            <h3 className="section-supertitle">{faq.supertitle}</h3>
                            <h2 className="section-title mb-5">{faq.title}</h2>
                            {faqQuestions &&
                                faqQuestions
                                    .map((item, i) => (
                                        <Accordion key={i}>
                                            <Accordion.Item className="mb-4 border-0" eventKey="0">
                                                <Accordion.Header className="accordion-header d-flex align-items-center">
                                                    <span className="accordion-icon d-flex justify-content-center align-items-center p-4">
                                                        <i className="fas fa-question"></i>
                                                    </span>
                                                    <h3 className="accordion-title d-flex justify-content-between align-items-center m-0 ms-4 pe-4 w-100">
                                                        {item.questiontitle}
                                                    </h3>
                                                </Accordion.Header>
                                                <Accordion.Body
                                                    className="section-content margin-zero m-0"
                                                    dangerouslySetInnerHTML={{ __html: item.questiontext }}
                                                ></Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    ))
                                    .reverse()}
                        </Col>
                    </Row>
                </Container>
            )}
        </section>
    );
}
