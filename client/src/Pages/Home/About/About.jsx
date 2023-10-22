import Btn from '../../../Components/Btn/Btn'
import './About.scss'
import apple from '../../../assets/apple.png'
import singleleaf from '../../../assets/singleleaf.png'
import glass from '../../../assets/glass.png'

const About = () => {

    const aboutitems = [
        {
            title: "Oraganic",
            img: singleleaf
        },
        {
            title: "Natural",
            img: apple
        },
        {
            title: "Healthy",
            img: glass
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