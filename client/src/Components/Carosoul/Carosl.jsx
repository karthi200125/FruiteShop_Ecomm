import React, { useState } from 'react';
import './Carosoul.scss';

const Carousel = ({ allProducts }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const cardsToShow = 1;

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

    const onlyfruits = allProducts?.allproducts?.filter((item) => item.category === "fruits")    

    return (
        <div className="carousel-container">
            <div className="bottons">
                <button className="prev" onClick={prevSlide}>&#8249;</button>
                <button className="next" onClick={nextSlide}>&#8250;</button>
            </div>
            <div className="carousel">
                <div className="cards" style={{ transform: `translateX(-${currentIndex * (100 / cardsToShow)}%)` }}>
                    {onlyfruits?.map((item, index) => (
                        <div className="carosolcard" key={index}>
                            <img src={item.productImg} alt="" />
                            <div className="carddetails">
                                <div className="top">
                                    {/* <div className="buckethover">
                                        <TbBasketFilled />
                                    </div> */}
                                </div>
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
