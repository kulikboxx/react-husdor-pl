import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './realizationsSection.scss';

export default function RealizationsSection({ images }) {
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);

    const setCurrentIndex = (num) => setIndex((index) => (index += num));
    const toggleVisibility = (value) => setShow(value);

    const arr = images && images.split('src="').filter((item) => item.includes('http'));
    const gallery = arr && arr.map((item) => item.split(' ')[0].replace('"', ''));

    return (
        <>
            {gallery && (
                <>
                    <section className="realizations-section section">
                        <Container fluid className="p-0">
                            <Row className="g-0">
                                {gallery.map((item, i) => (
                                    <Col
                                        onClick={() => {
                                            setIndex(i);
                                            toggleVisibility(true);
                                        }}
                                        key={i}
                                        className="realizations-item position-relative border-0 col-12 col-sm-6 col-md-4 col-lg-3"
                                    >
                                        <img src={item} alt="Husdor Drzwi Łódź" />
                                    </Col>
                                ))}
                            </Row>
                        </Container>
                    </section>
                    <LightboxModal
                        gallery={gallery}
                        show={show}
                        index={index}
                        setCurrentIndex={setCurrentIndex}
                        toggleVisibility={toggleVisibility}
                    />
                </>
            )}
        </>
    );
}

function LightboxModal({ gallery, show, index, setCurrentIndex, toggleVisibility }) {
    return (
        <div
            className="lightbox-modal bg-black"
            style={{ opacity: show ? 1 : 0, transform: show ? 'translateY(0)' : 'translateY(200%)' }}
        >
            <span className="lightbox-button lightbox-close" onClick={() => toggleVisibility(false)}>
                <i className="fas fa-times"></i>
            </span>
            <div className="lightbox-dialog">
                <img src={gallery[index]} alt="Husdor Drzwi Łódź" className="lightbox-image" />
            </div>
            <div className="lightbox-buttons d-flex justify-content-between">
                <span
                    className="lightbox-button"
                    onClick={() => setCurrentIndex(-1)}
                    style={{
                        pointerEvents: index === 0 ? 'none' : '',
                        backgroundColor: index === 0 ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <i className="fas fa-arrow-left"></i>
                </span>
                <span
                    className="lightbox-button"
                    onClick={() => setCurrentIndex(1)}
                    style={{
                        pointerEvents: index === gallery.length - 1 ? 'none' : '',
                        backgroundColor:
                            index === gallery.length - 1 ? 'rgba(255, 255, 255, 0.35)' : 'rgba(255, 255, 255, 0.8)',
                    }}
                >
                    <i className="fas fa-arrow-right"></i>
                </span>
            </div>
        </div>
    );
}
