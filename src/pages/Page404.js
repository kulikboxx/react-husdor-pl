import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

import TransitionEffect from '../lib/TransitionEffect';
import img404 from '../assets/img/page-404/page-404.svg';

export default function Page404({ dataContacts, onLoaded }) {
    // eslint-disable-next-line
    useEffect(() => setTimeout(onLoaded, 2500), []);

    return (
        <TransitionEffect loading={!dataContacts}>
            <Helmet>
                <title>Husdor.pl - Erorr Page 404</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <section className="section">
                <Container fluid>
                    <img
                        src={img404}
                        alt="strona nie została odnaleziona error 404"
                        className="d-block mx-auto mb-5"
                        style={{ maxWidth: 400, width: '80vw' }}
                    />
                    <h1 className="section-title fs-1 text-center" style={{ textTransform: 'none' }}>
                        Taka strona nie istnieje...
                    </h1>
                    <Link to="/" className="d-block mx-auto mt-5 w-50 fs-2 text-black text-center fw-bold">
                        {'<-'} Home
                    </Link>
                </Container>
            </section>
        </TransitionEffect>
    );
}
