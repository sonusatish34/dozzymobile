import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MySlider = () => {
    const sliderRef = useRef(null);

    useEffect(() => {
        const sliderNode = sliderRef.current?.innerSlider?.list;

        const handleTouchStart = () => {
            sliderRef.current?.slickPause();
        };

        const handleTouchEnd = () => {
            sliderRef.current?.slickPlay();
        };

        if (sliderNode) {
            sliderNode.addEventListener("touchstart", handleTouchStart);
            sliderNode.addEventListener("touchend", handleTouchEnd);
        }

        return () => {
            if (sliderNode) {
                sliderNode.removeEventListener("touchstart", handleTouchStart);
                sliderNode.removeEventListener("touchend", handleTouchEnd);
            }
        };
    }, []);

    const settings = {
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        pauseOnHover: true,
        pauseOnFocus: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    autoplay: true,
                },
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    autoplay: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 2,
                    autoplay: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    autoplay: true,
                    speed: 2000,
                },
            },
        ],
    };

    return (
        <Slider className="bg-red-200" {...settings} ref={sliderRef}>
            {/* your slides here */}
            <p>slide 1 </p>
            <p>slide 2 </p>
            <p>slide 4 </p>
        </Slider>
    );
};

export default MySlider;
