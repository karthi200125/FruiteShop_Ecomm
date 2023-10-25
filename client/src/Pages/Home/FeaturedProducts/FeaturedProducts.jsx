import Carousel from '../../../Components/Carosoul/Carosl'
import Product from '../../../Components/Product/Product'
import c1 from '../../../assets/c1.png'
import c6 from '../../../assets/c6.png'
import f7 from '../../../assets/f7.png'
import apple from '../../../assets/f9.png'
import './FeaturedProducts.scss'
import Btn from '../../../Components/Btn/Btn'

const FeaturedProducts = () => {

    const items = ['Card 1', 'Card 2', 'Card 3', 'Card 4', 'Card 5', 'Card 6', 'Card 7', 'Card 8', 'Card 9'];

    return (
        <div className='featured'>
            <div className="freshfruites">
                <h1 className='freahfruitetitle'><b>Our Fresh</b> & Healthy Fruites</h1>
                <Carousel items={items} />
            </div>
            <>
                <h1 className='featuredprrotitle'><b>Featured</b> Products</h1>
                <div className="categoryitemscon">
                    <div className="catitem">
                        <img src={apple} alt="" />
                        <span>All</span>
                    </div>
                    <div className="catitem">
                        <img src={c1} alt="" />
                        <span>Curry</span>
                    </div>
                    <div className="catitem">
                        <img src={f7} alt="" />
                        <span>Veg</span>
                    </div>
                    <div className="catitem">
                        <img src={c6} alt="" />
                        <span>Fruites</span>
                    </div>
                    <div className="catitem">
                        <img src={apple} alt="" />
                        <span>Fish</span>
                    </div>
                </div>
                <div className="products">
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                    <Product />
                </div>
                <Btn title={"Show All"}/>
            </>
        </div>
    )
}

export default FeaturedProducts