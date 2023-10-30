import Btn from '../../../Components/Btn/Btn'
import './About.scss'
import c1 from '../../../assets/c1.png'
import singleleaf from '../../../assets/singleleaf.png'
import f9 from '../../../assets/f9.png'

const About = () => {

    const aboutitems = [
        {
            title: "Natural",
            img: f9
        },
        {
            title: "Spicy",
            img: c1
        },
        {
            title: "Organic",
            img: singleleaf
        },
    ]

    return (
        <div className='about'>
            <div className="aboutcon">
                <h1>What makes Us Different</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ipsum, dolores quas reprehenderit modi quos.</span>
                <div className="cards">
                    {aboutitems.map((item) => (
                        <div className="card" key={item.title}>
                            <img src={item.img} alt="apple" />
                            <h1>{item.title}</h1>
                            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio quasi vero voluptatibus ratione omnis.</span>
                            <Btn bgcolor={"transparent"} textcolor={"#FF0000"} icon={"#FF0000"} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About