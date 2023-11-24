import React, { useState } from 'react';
import './Carosoul.scss';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner'

const Carousel = ({ allProducts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 1;

    const cardWidth = 300;

    const nextSlide = () => {
        if (currentIndex < onlyfruits.length - cardsToShow) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const onlyfruits = allProducts?.allproducts?.filter((item) => item.category === "fruits");

    const translateX = -currentIndex * cardWidth;

    return (
        <div className="carousel-container">
            <div className="bottons">
                <button className="prev" onClick={prevSlide}>&#8249;</button>
                <button className="next" onClick={nextSlide}>&#8250;</button>
            </div>
            <div className="carousel">
                <div className="cards" style={{ transform: `translateX(${translateX}px)` }}>
                    {onlyfruits ?
                        <div className="fetching">
                            <LoadingSpinner />  <span>Loading ...</span>
                        </div>
                        :
                        onlyfruits?.map((item, index) => (
                            <div className="carosolcard" key={index}>
                                <img src={item.productImg} alt="" />
                                <div className="carddetails">
                                    <div className="btm">
                                        <h1>{item.title}</h1>
                                        <p>{item.desc}</p>
                                        <span>₹ {item.price}</span>
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
