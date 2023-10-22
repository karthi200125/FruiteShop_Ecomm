import './Email.scss'
import fruitbg from '../../../assets/fruitesbg.jpg'
import Btn from '../../../Components/Btn/Btn'

const Email = () => {
  return (
    <div className='email'>
        <div className="imges">
            <img src="https://www.dealnloot.com/wp-content/uploads/2017/08/Big-Basket-Get-Rs.70-Off-on-shopping-of-Fruits-and-vegetables-of-Rs.500.jpg" alt="" />
            <img src="https://www.dealnloot.com/wp-content/uploads/2017/08/Big-Basket-Get-Rs.70-Off-on-shopping-of-Fruits-and-vegetables-of-Rs.500.jpg" alt="" />
        </div>
        <div className="emailcon">
            <h1>Newsletter Sign Up Template</h1>
            <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, nostrum?</span>
             <div className="sub">
                <input type="text" placeholder='Email Address'/>
                <Btn  title={"Subscribe"} />
             </div>
        </div>
    </div>
  )
}

export default Email