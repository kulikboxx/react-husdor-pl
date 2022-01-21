import DoorsCarousel from './DoorsCarousel';
import { Container, Row } from 'react-bootstrap';

import './doorsSection.scss';

export default function DoorsSection({ doors, doorsSlider, routes }) {
    return (
        <section className="doors-section section bg-white" id="drzwi">
            {doors && (
                <Container fluid>
                    <Row className="flex-column align-items-center">
                        <h3 className="doors-supertitle section-supertitle mx-auto text-center">{doors.supertitle}</h3>
                        <h2 className="doors-title section-title mx-auto text-center">{doors.title}</h2>
                        <div
                            className="section-content text-center"
                            dangerouslySetInnerHTML={{ __html: doors.text }}
                        ></div>
                    </Row>
                    <Row className="mt-4 pt-4">
                        <DoorsCarousel doorsSlider={doorsSlider} routes={routes} />
                    </Row>
                </Container>
            )}
        </section>
    );
}
