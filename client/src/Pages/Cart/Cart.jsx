import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from '../../Components/Navbar/Navbar';
import { removeFromCart } from '../../Redux/cartslice';
import apirequest from '../../Utils/ApiRequest';
import emtycart from '../../assets/emtycart.png';
import payment from '../../assets/payment.jpg';
import Order from '../Order/Order';
import './Cart.scss';

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  const handleremovecart = async (id) => {
    try {
      const res = await apirequest.post(`http://localhost:8800/user/removeUserCartProducts/${user._id}`, { productId: id });
      console.log(res.data);
      dispatch(removeFromCart(id));
    } catch (error) {
      console.error(error);
    }
  }

  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice += item.price * count;
  });

  const handleCount = (operation) => {
    if (operation === "minus") {
      if (count > 1) {
        setCount(count - 1);
      }
    } else {
      setCount(count + 1);
    }
  }



  return (
    <div className='cart'>
      <Navbar />
      <Order />
      <div className="cp-products">
        {cart?.length > 0 && <h1 className="yourcart"> YOUR CART <span>{cart?.length}</span></h1>}
        {cart?.length > 0 ? (
          cart.map((cartitem) => (
            <div className="cp-product" key={cartitem._id}>
              <span className='cp-close' onClick={() => handleremovecart(cartitem._id)}><AiOutlineClose size={20} /></span>
              <img src={cartitem.productImg} alt="" />
              <div className="detailcon">
                <h1 className='cp-title'>{cartitem.title}</h1>
                <div className="cp-desc">{cartitem.desc}</div>
                <span className="cp-price">₹ {cartitem.price}</span>
                <div className="cpbtns">
                  <button onClick={() => handleCount("minus")}>-</button>
                  {count}
                  <button onClick={() => handleCount("plus")}>+</button>
                  {cartitem.category === "meals" ? "item" : "kg"}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className='empty'>
            <img src={emtycart} alt="" />
            <span>Your cart is currently empty. Add products to your cart from the product listings.</span>
          </div>
        )}
      </div>

      <div className="totalcon">
        <div className="cp-rs">
          <h1>Order Summary</h1>
          <p>Discount <span>10%</span></p>
          <p>Estimated Shipping Cost <span>₹ 20</span></p>
          <p className='ta'>Total Amount <span>₹ {totalPrice}</span></p>
          <button>Order Now</button>
        </div>
        <img src={payment} alt="" />
      </div>
    </div>
  );
}

export default Cart;
