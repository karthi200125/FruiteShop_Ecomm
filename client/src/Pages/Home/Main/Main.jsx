import Btn from '../../../Components/Btn/Btn'
import Navbar from '../../../Components/Navbar/Navbar'
import './main.scss'
import apple from '../../../assets/pineapple.png'
import leftleaf from '../../../assets/leftleaf.png'
import rightleaf from '../../../assets/right.png'

const Main = () => {
    return (
        <div className='main'>
            <Navbar />
            <div className="maincon">
                <img src={leftleaf} alt="" className='leftleaf' />
                <img src={rightleaf} alt="" className='rightleaf' />
                <div className="left">
                    <div className="leftcon">
                        <h2>Fruit For Live</h2>
                        <h1>Healthy</h1>
                        <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, minus?</span>
                        <Btn title={"see more"} />
                    </div>
                </div>

                <div className="right">
                    <img src={apple} alt="" className='apple' />
                    {/* <img src={glass} alt="" className='glass'/> */}
                </div>

            </div>
        </div>
    )
}

export default Main