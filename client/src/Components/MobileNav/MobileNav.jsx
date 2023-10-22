import './MobileNav.scss';
import { motion } from 'framer-motion';

const MobileNav = ({ isOpen }) => {
    const links = [
        "Home",
        "About",
        "Blog",
        "Shop",
        "Contact"
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
            <div className="bg">
                <motion.div className='links' variants={isOpen ? variants.open : variants.close}>
                    {links.map((link) => (
                        <motion.a href={`#${link}`} key={link} variants={itemVariants}>{link}</motion.a>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default MobileNav;
