import './Blog.scss'
import { LiaArrowLeftSolid, LiaArrowRightSolid } from 'react-icons/lia';
import chocolate from '../../../assets/chocolate.jpg'
import avocado from '../../../assets/avocado.jpg'
import watremelon from '../../../assets/watermelon.jpg'
import apple from '../../../assets/apple.png'
import lemon from '../../../assets/lemon.jpg'
import fruits from '../../../assets/fruits.jpg'


const Blog = () => {

    const blogitems = [
        {
            maintitle: "top Products",
            mainimg: chocolate,
            img: avocado,
            price: "100",
            title: "Oraganic Chabery and Apple",
        },
        {
            maintitle: "Best Products",
            mainimg: watremelon,
            img: apple,
            price: "200",
            title: "Oraganic Chabery and Apple",
        },
        {
            maintitle: "Recent Products",
            mainimg: fruits,
            img: lemon,
            price: "150",
            title: "Oraganic Chabery and Apple",
        },
    ]

    return (
        <div className='blog'>
            {blogitems.map((item) => (
                <div className="itemcon" key={item.price}>
                    <img src={item.mainimg} alt="" />
                    <div className="item">
                        <h1>{item.maintitle}</h1>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, cumque aut incidunt officia fugiat delectus.</span>
                        <div className="imgcon">
                            <LiaArrowLeftSolid />
                            <img src={item.img} alt="" />
                            <LiaArrowRightSolid />
                        </div>
                        <div className="bottom">
                            <div className="rating">12345</div>
                            <h2>{item.title}</h2>
                            <div className="price">{item.price}</div>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default Blog