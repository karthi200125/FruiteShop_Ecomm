// import './App.scss'

import About from "./About/About"
import Blog from "./Blog/Blog"
import Contact from "./Contact/Contact"
import Email from "./Email/Email"
import FeaturedProducts from "./FeaturedProducts/FeaturedProducts"
import Main from "./Main/Main"

const Home = () => {
    
    return (
        <div className='home'>
            <section id="home"><Main/></section>
            <section id="about"><About/></section>
            <section id="products"><FeaturedProducts/></section>
            <section id="blog"><Blog/></section>
            <section id="email"><Email/></section>
            <section id="contact"><Contact/></section>
        </div>
    )
}

export default Home