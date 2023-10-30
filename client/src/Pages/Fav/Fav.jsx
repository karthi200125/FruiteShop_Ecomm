import { AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import { addToCart } from '../../Redux/cartslice';
import { removeFromFav } from '../../Redux/favslice';
import apirequest from '../../Utils/ApiRequest';
import emtyfav from '../../assets/favempty.png';
import './Fav.scss';

const Fav = () => {
  const { user } = useSelector((state) => state.user);
  const { fav } = useSelector((state) => state.fav);
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addtocart = async (data) => {
    try {      
      const isProductInCart = cart.some((item) => item._id === data._id);

      if (!isProductInCart) {
        const res = await apirequest.post(
          `http://localhost:8800/user/addUserCartProducts/${user._id}`,
          data
        );
        console.log(res.data);
        dispatch(addToCart(data));
        console.log("add to cart", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleremovefav = async (id) => {
    try {
      const res = await apirequest.post(
        `http://localhost:8800/user/removeUserfavProducts/${user._id}`,
        { productId: id }
      );
      console.log(res.data);
      dispatch(removeFromFav(id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="fav">
      <Navbar />
      {fav?.length > 0 && <h1 className="yourcart">YOUR WISHLISTS <span>{fav.length}</span></h1>}
      <div className="fp-products">
        {fav?.length > 0 ? (
          fav?.map((favitem) => (
            <div className="cp-product" key={favitem._id}>
              <span className="cp-close" onClick={() => handleremovefav(favitem._id)}>
                <AiOutlineClose size={20} />
              </span>
              <img src={favitem.productImg} alt="" />
              <div className="detailcon">
                <h1 className="cp-title">{favitem.title}</h1>
                <div className="cp-desc">{favitem.desc}</div>
                <span className="cp-price">{favitem.price}</span>
                <div className="btm">                  
                  <div
                    className="addtocart"
                    onClick={() => addtocart(favitem)}
                    style={{ background: cart.some((item) => item._id === favitem._id) ? "greenyellow" : "transparent" }}
                  >
                    <AiOutlineShoppingCart size={25} className="addtocarticon" />
                    {cart.some((item) => item._id === favitem._id) ? (
                      <span>Added</span>
                    ) : (
                      <span>Add to Cart</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        )
          :
          (<div className='empty'>
            <img src={emtyfav} alt="" />
            <span>Your Wish List is currently empty. Add products to your wishlist from the product listings.</span>
            </div>)

        }
      </div>
    </div>
  );
};

export default Fav;
