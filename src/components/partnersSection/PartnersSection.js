import { Container } from 'react-bootstrap';

import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import './partnersSection.scss';

export default function PartnersSection({ partners }) {
    const arr = partners && partners.split('src="').filter((item) => item.includes('http'));
    const logos = arr && arr.map((item) => item.split(' ')[0].replace('"', ''));

    return (
        <section className="partners-section section bg-black">
            <Container fluid>
                <h2 className="section-supertitle partners-supertitle">Partnerzy</h2>
                <Swiper
                    breakpoints={{
                        250: {
                            slidesPerView: 1,
                        },
                        576: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        992: {
                            slidesPerView: 4,
                        },
                    }}
                    spaceBetween={20}
                    loop={true}
                    modules={[Autoplay]}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    className="partners-carousel"
                >
                    {logos &&
                        logos.map((item, i) => (
                            <SwiperSlide key={i}>
                                <img src={item} alt="Husdor Drzwi Łódź" />
                            </SwiperSlide>
                        ))}
                </Swiper>
            </Container>
        </section>
    );
}
