import { Link } from 'react-router-dom';
import { Navigation, Pagination, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Button } from 'react-bootstrap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.scss';

export default function Slider({ slider }) {
    return (
        <Swiper
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="slider"
            initialSlide={1}
        >
            {slider &&
                slider
                    .map((item, i) => (
                        <SwiperSlide key={i}>
                            <picture>
                                <source media="(max-width:639px)" srcSet={item.imagesmall.sourceUrl} />
                                <source
                                    media="(min-width: 640px) and (max-width: 1199px)"
                                    srcSet={item.imagemedium.sourceUrl}
                                />
                                <img src={item.imagelarge.sourceUrl} alt={item.title} />
                            </picture>
                            <div className="slider-content">
                                <div className="slider-content-wrapper">
                                    <h3 className="slider-suptitle">{item.suptitle}</h3>
                                    <h2 className="slider-title">{item.title}</h2>
                                    <div className="d-flex slider-content-buttons">
                                        <Button variant="warning" as="a" href="#drzwi" className="button">
                                            Drzwi
                                            <i className="fas fa-angle-double-down fs-4"></i>
                                        </Button>
                                        <Link
                                            variant="warning"
                                            as="a"
                                            to="/kontakt"
                                            className="button ms-4 text-decoration-none"
                                        >
                                            Kontakt
                                            <i className="fas fa-address-book fs-4"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                    .reverse()}
        </Swiper>
    );
}
