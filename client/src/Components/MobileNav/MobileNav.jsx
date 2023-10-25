import { Link } from 'react-router-dom';
import './MobileNav.scss';
import { motion } from 'framer-motion';
import { AiOutlineHeart } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { GoSearch } from 'react-icons/go'
import { useState } from 'react';

const MobileNav = ({ isOpen, onclose }) => {

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
    
    return (
        <div className='mobnav'>

            <div className="top">
                <div className="search">
                    <input type="text" placeholder='Search here' />
                    <GoSearch />
                </div>
                <img src="https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            </div>

            <div className="bg">
                <motion.div className='links' variants={isOpen ? variants.open : variants.close}>
                    {links.map((link) => (
                        <motion.a href={`#${link}`} key={link} variants={itemVariants} onClick={()=>onclose(false)}>{link}</motion.a>
                    ))}
                </motion.div>
            </div>

            <div className="bottom">
                <Link to="/fav"><div className='iconbox'><AiOutlineHeart size={30} /><span>0</span></div></Link>
                <Link to="/cart"><div className='iconbox'><BiShoppingBag size={30} /><span>0</span></div></Link>
            </div>

        </div>
    );
};

export default MobileNav;
