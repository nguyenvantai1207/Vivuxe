import React from 'react';
import CarImage from './CarImage';
import './CarGallery.scss'
const CarGallery: React.FC = () => {
    const mainImage = '/images/anh1.png';
    const images = [
        '/images/anh2.png',
        '/images/anh3.png',
        '/images/anh4.png',
    ];

    return (
        <div className="car-gallery">
            <div className="car-gallery-main">
                <CarImage src={mainImage} alt="Main car image" />
            </div>
            <div className="car-gallery-thumbnails">
                {images.map((src, index) => (
                    <CarImage key={index} src={src} alt={`Car thumbnail ${index + 1}`} />
                ))}
                <div className='seen-more'>
                    <img src="/images/img.png" alt="" />
                    <p className='img-more'>Xem tất cả ảnh</p>
                </div>
            </div>

        </div>
    );
};

export default CarGallery;
