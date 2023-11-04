import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import apple from '../../../assets/apple.png';
import chicken from '../../../assets/c1.png';
import c6 from '../../../assets/c6.png';
import avocado from '../../../assets/f7.png';
import watremelon from '../../../assets/fruits.png';
import groceries from '../../../assets/groceries.png';
import rating from '../../../assets/rating.png';
import './Blog.scss';



const Blog = () => {

    const blogitems = [
        {
            maintitle: "top Products",
            mainimg: chicken,
            img: c6,
            price: "100",
            title: "Oraganic Chabery and Apple",
        },
        {
            maintitle: "Best Products",
            mainimg: groceries,
            img: avocado,
            price: "200",
            title: "Oraganic Chabery and Apple",
        },
        {
            maintitle: "Recent Products",
            mainimg: watremelon,
            img: apple,
            price: "150",
            title: "Oraganic Chabery and Apple",
        },
    ]

    return (
        <div className='blog'>
            {blogitems.map((item) => (
                <div className="itemcon" key={item.price}>
                    <div className="mainimgcon">
                        <img src={item.mainimg} alt="" />
                    </div>
                    <div className="itemcon">
                        <div className="item">
                            <h1>{item.maintitle}</h1>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, cumque aut incidunt officia fugiat delectus.</span>
                            <div className="imgcon">
                                <LiaArrowLeftSolid size={20}/>
                                <img src={item.img} alt="" />
                                <LiaArrowRightSolid size={20}/>
                            </div>
                            <div className="bottom">
                                <img src={rating} alt="" className='rating'/>
                                <h2>{item.title}</h2>
                                <div className="price">{item.price}</div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Blog