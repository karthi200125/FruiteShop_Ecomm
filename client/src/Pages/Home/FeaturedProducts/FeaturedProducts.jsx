import React from 'react';
import { Link } from 'react-router-dom';
import Btn from '../../../Components/Btn/Btn';
import Carousel from '../../../Components/Carosoul/Carosl';
import Product from '../../../Components/Product/Product';
import useGetData from '../../../Utils/fetch';
import './FeaturedProducts.scss';
import LoadingSpinner from '../../../Components/LoadingSpinner/LoadingSpinner';

const FeaturedProducts = () => {

    const data = useGetData("/product/getallProducts")

    const withoufruites = data?.data?.allproducts?.filter((item) => item.category !== "fruits")

    return (
        <div className='featured'>
            <div className="fruitecon">
                <h1 className='fruitstitle'><b>Our Fresh</b> & Healthy Fruits</h1>
                <Carousel key={data?.data} allProducts={data?.data} />
            </div>
            <>
                <h1 className='featuredproductstitle'><b>Featured</b> Products</h1>
                <div className="products">
                    {!withoufruites ?
                        <div className="fetching">
                            <LoadingSpinner />  <span>Loading ...</span>
                        </div>
                        :
                        withoufruites?.slice(0, 8).map((data) => (
                            <Product key={data._id} data={data} />
                        ))}
                </div>
                <Link to="/shop"><Btn title={"Show All"} /></Link>
            </>
        </div>
    );
};

export default FeaturedProducts;
