import "./Contact.scss";
import logo from '../../../assets/logo4.png'
import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';


const Contact = () => {
  return (
    <div className="contact">
      <div className="top">
        <div className="logo">
          <img src={logo} alt="" />
          <h1 className="left">J<span>o</span>efruit</h1>
        </div>
        <div className="icons">
          <FaInstagram size={25} className="contacticon" />
          <FaFacebook size={25} className="contacticon" />
          <FaLinkedin size={25} className="contacticon" />
          <FaTwitter size={25} className="contacticon" />
        </div>
      </div>
      <div className="mid">
        <div className="box">
          <h1>Shop by Category</h1>
          <p>Fruits</p>
          <p>Vegetables</p>
          <p>Groceries</p>
          <p>Food Supplies</p>
          <p>Organic Products</p>
        </div>
        <div className="box">
          <h1>Customer Service</h1>
          <p>Shipping Information</p>
          <p>Returns and Refunds</p>
          <p>Payment Options</p>
          <p>Size and Weight Guide</p>
          <p>Order Tracking</p>
        </div>
        <div className="box">
          <h1>Policies</h1>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Cookies Policy</p>
          <p>Delivery Policy</p>
          <p>Refund Policy</p>
        </div>
        <div className="box">
          <h1>About Us</h1>
          <p>Our Story</p>
          <p>Mission and Values</p>
          <p>Quality Assurance</p>
          <p>Testimonials</p>
          <p>Careers</p>
        </div>
      </div>
      <div className="btm">
        @My Company Ltd.2023 .All right reserved Terms and Services  Privacy Policy
      </div>
    </div>
  )
}

export default Contact