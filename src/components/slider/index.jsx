import React from 'react';

const Slider = ({ children, currentSlide, className, settings = {} }) => {
    const {
        duration = 500, // Duracao em milissegundos
    } = settings;

    return (
        <div className={`relative overflow-hidden w-full ${className}`}>
            <div
                className="flex transition-transform h-full"
                style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                    transitionDuration: `${duration}ms`,
                }}
            >
                {React.Children.map(children, (child) => (
                    <div className="w-full h-full flex-shrink-0">
                        {child}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;