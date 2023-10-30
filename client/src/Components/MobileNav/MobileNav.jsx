import { motion } from 'framer-motion';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';
import { IoIosLogOut } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../Redux/userSlice';
import noprofile from '../../assets/userprofile.png';
import './MobileNav.scss';
import { useState } from 'react';

const MobileNav = ({ isOpen, onclose, OpenProfile }) => {

    const { user } = useSelector(state => state.user)
    const { fav } = useSelector(state => state.fav)
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()

    const links = [
        "home",
        "about",
        "blog",
        "products",
        "contact"
    ]

    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1
            }
        },
        close: {
            transition: {
                staggerChildren: 0.5,
                staggerDirection: -1
            }
        }
    }

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
            transition: {
                opacity: { duration: 0.2 }
            }
        },
        close: {
            y: 50,
            opacity: 0
        }
    }

    const handlelogout = () => {
        dispatch(logout())
        navigate('/login')
        localStorage.removeItem("cart");
    }

    const [prodileopen, setprofileopen] = useState(false)

    const handleprofileopen = () => {
        setprofileopen(true)
        OpenProfile(prodileopen)
        onclose(false)
    }

    return (
        <div className='mobnav'>

            <div className="top">
                {/* <div className="navsearch">
                    <input type="text" placeholder='Search here' />
                    <GoSearch />
                </div> */}
                <img src={user?.profilePic || noprofile} alt="" onClick={handleprofileopen} />
            </div>

            <div className="bg">
                <motion.div className='links' variants={isOpen ? variants.open : variants.close}>
                    {links.map((link) => (
                        <motion.a href={`#${link}`} key={link} variants={itemVariants} onClick={() => onclose(false)}>{link}</motion.a>
                    ))}
                </motion.div>
            </div>

            <div className="bottom">
                <div className="icons">
                    <Link to="/fav">
                        <div className='iconbox'>
                            <AiOutlineHeart size={25} />
                            {fav?.length > 0 && <span>{fav?.length}</span>}
                        </div></Link>
                    <Link to="/cart">
                        <div className='iconbox'><BiShoppingBag size={25} />
                            {cart?.length > 0 && <span>{cart?.length}</span>}
                        </div></Link>
                </div>
                {user && <button onClick={handlelogout} className='mobnavlogout'><IoIosLogOut size={20} />logout</button>}
            </div>

        </div>
    );
};

export default MobileNav;
