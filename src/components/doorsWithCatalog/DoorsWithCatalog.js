import Catalog from '../catalog/Catalog';
import QuestionAboutProduct from '../questionAboutProduct/QuestionAboutProduct';

import { Container, Row } from 'react-bootstrap';

import './doorsWithCatalog.scss';

export default function DoorsWithCatalog({ content, catalogs, toggleModalFormVisibility }) {
    return (
        <section className="doors-with-catalog-section section">
            <Container fluid className="p-0">
                <div className="section-content" dangerouslySetInnerHTML={{ __html: content && content }}></div>
                <QuestionAboutProduct toggleModalFormVisibility={toggleModalFormVisibility} />
                {catalogs ? (
                    <Row className="g-3">
                        <Catalog catalogs={catalogs} />
                    </Row>
                ) : null}
            </Container>
        </section>
    );
}
