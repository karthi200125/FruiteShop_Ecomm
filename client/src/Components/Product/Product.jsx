import './Product.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import img from '../../assets/f7.png'

const Product = () => {
    return (
        <div className='card'>
            <img src={img} alt="" className='cardimg'/>
            <div className="top">
                <div className="heartcon">
                    <AiOutlineHeart size={25} />
                </div>
            </div>
            <div className="btm">
                <div className="title">Banna</div>
                <div className="desc">Lorem ipsum dolor sit </div>
                <div className="price">100</div>
                <div className="addtocart">
                    <AiOutlineShoppingCart size={25} className="addtocarticon" />                    
                    <span>Add to cart</span>
                </div>
            </div>
        </div>
    )
}

export default Product