import React from 'react';

interface CarImageProps {
    src: string;
    alt: string;
}

const CarImage: React.FC<CarImageProps> = ({ src, alt }) => {
    return (
        <div className="car-image">
            <img src={src} alt={alt} />
        </div>
    );
};

export default CarImage;
