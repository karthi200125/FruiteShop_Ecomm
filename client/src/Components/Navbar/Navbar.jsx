import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { GoSearch } from 'react-icons/go';
import { GrFormDown } from 'react-icons/gr';
import { RiMenu3Line } from 'react-icons/ri';
import MobileNav from '../MobileNav/MobileNav';
import './Navbar.scss';
import { Link } from 'react-router-dom'

const Navbar = ({ backgroundColor }) => {
    const [open, setOpen] = useState(false);

    const variants = {
        open: {
            clipPath: "circle(1200px at calc(100% - 50px) 50px)",
            transition: {
                type: "spring",
                stiffness: 20,
            },
        },
        close: {
            clipPath: "circle(25px at calc(100% - 40px) 35px)",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
            },
        }
    }

    return (
        <div className='navbar' >
            <h1 className="left">J<span>o</span>efruit</h1>
            <ul className="mid">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#products">Products</a></li>
                <Link to="/shop"><li><a href="#products">Shop</a></li></Link>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="right">
                <div className="search">
                    <input type="text" />
                    <GoSearch />
                </div>

                <div className="account">
                    <span>My Account</span>
                    <GrFormDown />
                </div>
                <div className="icons">
                    <Link to="/fav"><div className='iconbox'><AiOutlineHeart size={25} /><span>0</span></div></Link>
                    <Link to="/cart"><div className='iconbox'><BiShoppingBag size={25} /><span>0</span></div></Link>
                </div>
            </div>
            <div className="naviconbox">
                {open ? (
                    <AiOutlineClose onClick={() => setOpen(!open)} className='navicon' />
                ) : (
                    <RiMenu3Line onClick={() => setOpen(!open)} className='navicon' />
                )}
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div className='mobnav mb' variants={variants} initial="close" animate="open" exit="close">
                        <MobileNav onclose={setOpen} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar;
