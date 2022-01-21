import { Col, Button } from 'react-bootstrap';

import './catalog.scss';

export default function Catalog({ catalogs }) {
    return (
        <>
            {catalogs.length > 0
                ? catalogs.map((item, i) => (
                      <Col key={i} className="catalog-item col-12 col-sm-6 col-md-4 col-lg-3 border-0 overflow-hidden">
                          <img src={item.image.sourceUrl} alt="img description" className="catalog-image" />
                          <Button
                              as="a"
                              href={item.catalog.mediaItemUrl}
                              download
                              className="button catalog-button p-3 w-100 justify-content-center overflow-hidden"
                              target="_blank"
                          >
                              Pobierz katalog <i className="fas fa-cloud-download-alt"></i>
                          </Button>
                      </Col>
                  ))
                : null}
        </>
    );
}
