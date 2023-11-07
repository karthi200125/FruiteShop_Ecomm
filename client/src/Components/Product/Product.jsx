import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai';
import './Product.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../Redux/cartslice';
import { addToFav } from '../../Redux/favslice';
import axios from 'axios';
import apirequest from '../../Utils/ApiRequest';

const Product = ({ data }) => {
    const { cart } = useSelector(state => state.cart);
    const { user } = useSelector(state => state.user);
    const { fav } = useSelector(state => state.fav);
    const dispatch = useDispatch();

    const isProductInCart = cart?.some(item => item._id === data._id);
    const isProductInFav = fav?.some(item => item._id === data._id);

    const addtocart = async () => {
        try {
            if (!isProductInCart) {
                const res = await apirequest.post(`/user/addUserCartProducts/${user._id}`, data);
                console.log(res.data);
                dispatch(addToCart(data));
                console.log("add to cart", data)
            }
        } catch (error) {
            console.log(error);
        }
    };

    const addtofav = async () => {
        try {
            if (!isProductInFav) {
                const res = await apirequest.post(`/user/addUserfavProducts/${user._id}`, data);
                console.log(res.data);
                dispatch(addToFav(data));
                console.log("add to wishlist", data)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='card'>
            <img src={data.productImg} alt="" className='cardimg' />
            <div className="top">
                <div className="heartcon">
                    <AiFillHeart size={25} onClick={addtofav} style={{ color: isProductInFav ? "red" : 'gray' }} />
                </div>
            </div>
            <div className="btm">
                <div className="title">{data.title}</div>
                <div className="desc">{data.desc}</div>
                <div className="price">₹ {data.price}</div>
                {user ?
                    <div className="addtocart" onClick={addtocart} style={{ background: isProductInCart ? "greenyellow" : "white" }} >
                        <AiOutlineShoppingCart size={25} className="addtocarticon" />
                        {isProductInCart ? (
                            <span >Added</span>
                        ) : (
                            <span > Add to Cart</span>
                        )}
                    </div>
                    :
                    <div className="addtocartlogin">
                        <AiOutlineShoppingCart size={25} className="addtocarticon" />
                        <span > Add to Cart</span>
                    </div>
                }
            </div>
        </div>
    );
}

export default Product;
