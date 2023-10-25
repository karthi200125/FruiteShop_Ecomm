import React, { useState } from 'react';
import './Carosoul.scss'
import { TbBasketFilled } from 'react-icons/tb'
import apple from '../../assets/f7.png'

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 5;

    const nextSlide = () => {
        if (currentIndex < items.length - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div className="carousel-container">
            <div className="bottons">
                <button className="prev" onClick={prevSlide}>&#8249;</button>
                <button className="next" onClick={nextSlide}>&#8250;</button>
            </div>
            <div className="carousel">
                <div className="cards" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                    {items.map((item, index) => (
                        <div className="card" key={index}>
                            
                            <img src={apple} alt="" />
                            <div className="carddetails">
                                <div className="top">
                                    <div className="buckethover">
                                        <TbBasketFilled />
                                    </div>
                                </div>
                                <div className="btm">
                                    <h1>Blueberry</h1>
                                    <p>fdecription</p>
                                    <span>12</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Carousel;
