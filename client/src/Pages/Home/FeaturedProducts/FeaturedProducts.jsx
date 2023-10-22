import './FeaturedProducts.scss'
import { HiShoppingCart } from 'react-icons/hi'

const FeaturedProducts = () => {

    return (
        <div className='featured'>
            <h1>Featured Products</h1>
            <div className="categoryitemscon">
                <div className="catitem">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Al</span>
                </div>
                <div className="catitem">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Al</span>
                </div>
                <div className="catitem">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Al</span>
                </div>
                <div className="catitem">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Al</span>
                </div>
                <div className="catitem">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <span>Al</span>
                </div>
            </div>
            <div className="products">
                <div className="product">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="bottom">
                        <h1>Product Title</h1>
                        <h2>Price</h2>
                        <div className="cartbtn">
                            <HiShoppingCart size={20} />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="bottom">
                        <h1>Product Title</h1>
                        <h2>Price</h2>
                        <div className="cartbtn">
                            <HiShoppingCart size={20} />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div className="product">
                    <img src="https://images.pexels.com/photos/2872767/pexels-photo-2872767.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="bottom">
                        <h1>Product Title</h1>
                        <h2>Price</h2>
                        <div className="cartbtn">
                            <HiShoppingCart size={20} />
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProducts