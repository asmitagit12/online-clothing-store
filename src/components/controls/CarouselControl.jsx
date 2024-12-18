// Carousel.js
import React, { useContext, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


const CarouselControl = ({ images, height }) => {
    const [openViewImage, setOpenViewImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')

    const settings = {
        autoplay: true,
        dots: true,
        infinite: images?.length > 1,
        speed: 5000,
        autoplaySpeed: 5000,
        // cssEase: "",
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        arrows: true, // Enable default arrows
        pauseOnHover: true
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div
                    key={index}
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: height || '100%', // Ensure the div takes full height of the parent
                        width: '100%',
                    }}
                >
                    <img
                        key={index}
                        src={image}
                        alt={`img`}
                        style={{
                            width: '100%', // Ensure images fill the container
                            height: '100%', // Make sure the image height fits the container
                            objectFit: 'contain',
                            display: 'block',
                            margin: '0 auto',
                        }}
                    />
                </div>
            ))}
        </Slider>
    );
}


export default CarouselControl
