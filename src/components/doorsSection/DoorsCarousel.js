import { Link } from 'react-router-dom';
import { Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import './doorsCarousel.scss';

export default function DoorsCarousel({ doorsSlider, routes }) {
    const links = routes
        .slice(3, 11)
        .filter((item) => item.path)
        .reverse();

    return (
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
            initialSlide={0}
            spaceBetween={15}
            loop={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            className="doors-carousel"
        >
            {doorsSlider &&
                doorsSlider
                    .map((item, i) => (
                        <SwiperSlide key={i}>
                            <img src={item.image.sourceUrl} alt={item.title} />
                            <div className="doors-carousel-content d-flex flex-column justify-content-end align-items-start">
                                <h3 className="doors-carousel-title">{item.title}</h3>
                                <Link
                                    as="a"
                                    to={links[i].path}
                                    className="button py-2 w-100 justify-content-center text-decoration-none"
                                >
                                    Zobacz więcej
                                </Link>
                            </div>
                        </SwiperSlide>
                    ))
                    .reverse()}
        </Swiper>
    );
}
