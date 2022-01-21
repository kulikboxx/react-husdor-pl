import { Container } from 'react-bootstrap';

export default function PrivacyPolicy({ content }) {
    return (
        <section className="privacy-policy-section section">
            <Container fluid>
                <div className="section-content" dangerouslySetInnerHTML={{ __html: content && content.text }}></div>
            </Container>
        </section>
    );
}
