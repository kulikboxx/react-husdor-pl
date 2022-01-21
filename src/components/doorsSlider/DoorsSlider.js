import { Navigation, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import './doorsSlider.scss';

export default function DoorsSlider({ images }) {
    return (
        <Swiper
            breakpoints={{
                250: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                },
                576: {
                    spaceBetween: 20,
                    slidesPerView: 2,
                },
                768: {
                    spaceBetween: 20,
                    slidesPerView: 3,
                },
                992: {
                    spaceBetween: 0,
                    slidesPerView: 1,
                },
            }}
            loop={true}
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation
            className="profile-doors-slider"
        >
            {images.map((item, i) => (
                <SwiperSlide key={i}>
                    <img src={item} alt="slide description" className="d-block mx-auto w-100 h-100" />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
