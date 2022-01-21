import { useState } from 'react';
import DoorsSlider from '../doorsSlider/DoorsSlider';
import QuestionAboutProduct from '../questionAboutProduct/QuestionAboutProduct';
import Catalog from '../catalog/Catalog';

import { Container, Row, Col } from 'react-bootstrap';

import './interiorDoorsSection.scss';

export default function InteriorDoorsSection({ tabs = null, content, catalogs, toggleModalFormVisibility }) {
    const [index, setIndex] = useState(0);

    const toggleTabs = (id) => setIndex(id);

    const tabsList = tabs ? (
        <ul className="interior-doors-tabs d-flex justify-content-center align-items-center flex-wrap mb-4 p-0 list-unstyled">
            {tabs.map((tab, i) => (
                <li
                    key={i}
                    className={`interior-doors-tab position-relative mx-5 py-1 ${index === i ? 'active' : ''}`}
                    onClick={() => toggleTabs(i)}
                >
                    {tab}
                </li>
            ))}
        </ul>
    ) : null;

    return (
        <section className="interior-doors-section section">
            <Container fluid>
                {tabsList}
                {content &&
                    content.map((item, i) => (
                        <Row className={`gx-5 gy-3 ${index === i ? 'd-flex' : 'd-none'}`} key={i}>
                            <Col className="col-12 col-lg-4">
                                <DoorsSlider images={item[0]} />
                                <QuestionAboutProduct toggleModalFormVisibility={toggleModalFormVisibility} />
                            </Col>
                            <Col
                                className="section-content mt-4 pt-3"
                                dangerouslySetInnerHTML={{ __html: item[1] }}
                            ></Col>
                        </Row>
                    ))}
                {catalogs && (
                    <Row className="mt-5 g-3">
                        <Catalog catalogs={catalogs} />
                    </Row>
                )}
            </Container>
        </section>
    );
}
