import Btn from '../../../Components/Btn/Btn'
import Navbar from '../../../Components/Navbar/Navbar'
import './main.scss'
import apple from '../../../assets/c1.png'
import herobg from '../../../assets/heroBg.png'
import f7 from '../../../assets/f7.png'
import f9 from '../../../assets/f9.png'
import c1 from '../../../assets/c1.png'
import c6 from '../../../assets/c6.png'
import { useEffect, useState } from 'react'

const Main = () => {

    const cards = [
        {
            title: "StrawBerry",
            img: f7,
            price: "800",
        },
        {
            title: "Bannana",
            img: f9,
            price: "400",
        },
        {
            title: "Chiken Kebab",
            img: c1,
            price: "1000",
        },
        {
            title: "Cheickem",
            img: c6,
            price: "1200",
        },
    ]

    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);
    const [backgroundColor, setBackgroundColor] = useState('transparent');

    useEffect(() => {
        // Function to handle the scroll event
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const isScrolledDown = prevScrollPos < currentScrollPos;

            // Determine whether to show or hide the navbar based on scrolling direction
            setVisible(!(isScrolledDown && currentScrollPos > 100));

            // Update the background color based on scrolling direction
            setBackgroundColor(isScrolledDown ? 'black' : 'transparent');

            // Update the previous scroll position
            setPrevScrollPos(currentScrollPos);
        };

        // Add the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Remove the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    return (
        <div className='main'>
            {visible && <Navbar backgroundColor={true}/>}
            <div className="maincon">

                <div className="left">
                    <div className="leftcon">
                        <div className="smallcard">
                            <span>Bike Delivery</span>
                            <img src={apple} alt="" />
                        </div>
                        <h2>The Fastest </h2>
                        <h2>Devlivery in <b>Your</b> </h2>
                        <h2><b>City</b></h2>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione totam laboriosam praesentium odio debitis fuga?</span>
                        <Btn title={"Order Now"} />
                    </div>
                </div>

                <div className="right">
                    <img src={herobg} alt="" className='herobg' />
                    <div className="imgcards">
                        {cards.map((card) => (
                            <div className="card" key={card.title}>
                                <img src={card.img} alt="" />
                                <div className="details">
                                    <div className="cardtitle">{card.title}</div>
                                    <div className="carddesc">Lorem ipsum dolor sit amet.</div>
                                    <div className="cardprice">{card.price}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Main