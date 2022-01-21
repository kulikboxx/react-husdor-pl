import { useState, useEffect, useCallback, useRef } from 'react';
import CountUp from 'react-countup';
import { Container, Row, Col } from 'react-bootstrap';

import './countersSection.scss';

export default function CountersSection({ counters }) {
    const [isDone, setIsDone] = useState(false);
    const itemsRef = useRef([]);
    const sectionRef = useRef(null);

    const onScrollUpdate = useCallback(() => {
        if (counters) {
            itemsRef.current = itemsRef.current.slice(0, counters.length);

            let posY = sectionRef.current.getBoundingClientRect().y;
            let topPos = window.innerHeight - sectionRef.current.offsetHeight / 4;
            let bottomPos = window.innerHeight - sectionRef.current.offsetHeight / 4;

            if (posY <= topPos && posY >= -bottomPos) {
                counters && itemsRef.current.forEach((item) => item.click());
                setIsDone(true);
                stopScroll();
            }
        }

        // eslint-disable-next-line
    }, [counters]);

    const startScroll = () => window.addEventListener('scroll', onScrollUpdate);
    const stopScroll = () => window.removeEventListener('scroll', onScrollUpdate);

    useEffect(() => {
        startScroll();

        return () => stopScroll();
        // eslint-disable-next-line
    }, [counters]);

    return (
        <section className="counters-section section" ref={sectionRef}>
            <Container fluid>
                <Row className="gx-5 gy-5">
                    {counters &&
                        counters
                            .map((item, i) => (
                                <Col
                                    key={i}
                                    className="d-flex flex-column align-items-center py-5 col-12 col-sm-6 col-xl-3"
                                >
                                    <i className="fas fa-suitcase"></i>
                                    <span className="counters-count mb-4">
                                        {
                                            <CountUp start={0} end={item.counter} duration={5} startOnMount>
                                                {({ countUpRef, start }) => (
                                                    <span
                                                        onClick={!isDone ? start : null}
                                                        ref={(item) => counters && (itemsRef.current[i] = item)}
                                                    >
                                                        <span ref={countUpRef} />
                                                    </span>
                                                )}
                                            </CountUp>
                                        }
                                        +
                                    </span>
                                    <span className="counters-title">{item.title}</span>
                                </Col>
                            ))
                            .reverse()}
                </Row>
            </Container>
        </section>
    );
}
