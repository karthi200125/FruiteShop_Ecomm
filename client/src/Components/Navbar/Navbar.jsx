import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineHeart } from 'react-icons/ai';
import { BiShoppingBag } from 'react-icons/bi';
import { GrFormDown, GrFormUp } from 'react-icons/gr';
import { IoIosLogOut } from 'react-icons/io';
import { MdModeEdit } from 'react-icons/md';
import { RiMenu3Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/userSlice';
import logo from '../../assets/logo4.png';
import noimage from '../../assets/userprofile.png';
import MobileNav from '../MobileNav/MobileNav';
import Profile from '../Profile/Profile';
import './Navbar.scss';
import apirequest from '../../Utils/ApiRequest';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [dd, setdd] = useState(false);
    const [profileopen, setprofileopen] = useState(false);
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.cart)
    const { fav } = useSelector(state => state.fav)
    const navigate = useNavigate()
    const location = useLocation()
    const pathname = location.pathname
    // console.log("pathname", pathname)

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

    const scrolly = window.scrollY
    const { user } = useSelector(state => state.user)

    const handlelogout = async() => {
        try {
            const res = await apirequest.post("/auth/logout")
            dispatch(logout())
            navigate('/login')
            localStorage.removeItem("cart");
        } catch (error) {
            console.log(error)
        }
    }

console.log("from navber",user?.data)

    return (
        <div className='navbar' style={{ boxShadow: scrolly === 0 ? "" : "2px 4px 10px rgba(0, 0, 0, 0.2)" }}>

            {profileopen &&
                <div className="profilecon">
                    <Profile onclose={() => setprofileopen(false)} />
                </div>
            }
            <Link to='/'>
                <div className="leftcon">
                    <img src={logo} alt="" />
                    <h1 className="left">J<span>o</span>efruit</h1>
                </div>
            </Link>
            <ul className="mid">
                {pathname === '/' ? <li><a href="#home">Home</a></li> : <Link to='/'><li><a >Home</a></li></Link>}
                {pathname !== '/' && <Link to="/shop"><li><a href="#products">Shop</a></li></Link>}
                {pathname === '/' &&
                    <>
                        <li><a href="#about">About</a></li>
                        <li><a href="#blog">Blog</a></li>
                        <li><a href="#products">Products</a></li>
                        <Link to="/shop"><li><a href="#products">Shop</a></li></Link>
                        <li><a href="#contact">Contact</a></li>
                    </>
                }
            </ul>

            {user ?
                <div className="right">

                    <Link to={user?.isAdmin == true ? '/create' : ""} className='dashboard'>
                        <button >Dash Board</button>
                        {user?.isAdmin !== true &&
                            <span>Only Admin can Access<p></p></span>
                        }
                    </Link>

                    <div className="account">
                        <span>{user?.username}</span>
                        {dd ?
                            <GrFormUp onClick={() => setdd(!dd)} className='ddicon' /> :
                            <GrFormDown onClick={() => setdd(!dd)} />}
                        <img src={user?.profilePic || noimage} alt="" onClick={() => setprofileopen(true)} />
                        {dd &&
                            <div className="ddopen">
                                <h1>{user?.email}</h1>
                                <button onClick={() => setprofileopen(true)}><MdModeEdit /> Edit Profile</button>
                                <button onClick={handlelogout}><IoIosLogOut size={20} />logout</button>
                            </div>
                        }

                    </div>
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
                </div>
                :
                user !== null &&
                <div className="signcon">
                    <Link to='/login'><button>Sign in</button></Link>
                    <Link to="/register"><button>Sign up</button></Link>
                </div>
            }

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
                        <MobileNav onclose={setOpen} OpenProfile={() => setprofileopen(true)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default Navbar;
