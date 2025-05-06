// SwiperSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';

const SwiperSlider = () => {
    const slides = [
        "https://picsum.photos/id/1015/800/400",
        "https://picsum.photos/id/1016/800/400",
        "https://picsum.photos/id/1018/800/400",
        "https://picsum.photos/id/1019/800/400",
    ];

    return (
        <Swiper
            modules={[Autoplay]}
            loop={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
            }}
            slidesPerView={1}
            onTouchStart={(swiper) => swiper.autoplay.stop()}
            onTouchEnd={(swiper) => swiper.autoplay.start()}
            style={{ maxWidth: "800px", margin: "auto" }}
        >
            {slides.map((img, idx) => (
                <SwiperSlide key={idx}>
                    <img
                        src={img}
                        alt={`Slide ${idx}`}
                        style={{ width: "100%", borderRadius: "10px" }}
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SwiperSlider;
