import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Navbar from '../../Components/Navbar/Navbar';
import Product from '../../Components/Product/Product';
import useGetData from '../../Utils/fetch';
import all from '../../assets/all.png';
import chicken from '../../assets/chicken.png';
import fruits from '../../assets/fruits.png';
import groceries from '../../assets/groceries.png';
import organic from '../../assets/organic.png';
import vegetables from '../../assets/vegetables.png';
import './Shop.scss';

const Shop = () => {
  const [cat, setCat] = useState('');
  const [query, setQuery] = useState('');

  const url = cat === '' ? 'product/getallProducts' : `product/getcategoryproducts?cat=${cat}`;

  const { data: allProducts, error } = useGetData(url);

  const searchProducts = query ?
    allProducts?.allproducts?.filter((item) => item.title.toLowerCase().includes(query.toLowerCase()) || item.desc.toLowerCase().includes(query.toLowerCase()))
    : allProducts?.allproducts;

  return (
    <div className='shop'>
      <Navbar />

      <div className='search'>
        <BsSearch />
        <input
          type='text'
          placeholder='Search Products here ..... '
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>


      <div className='shopcon'>
        <div className='categoryitemscon'>
          <div
            className={cat === '' ? 'active' : 'catitem'}
            onClick={() => setCat('')}
          >
            <img src={all} alt='All' />
            <span>All</span>
          </div>
          <div className={cat === "fruits" ? "active" : "catitem"} onClick={() => setCat("fruits")}>
            <img src={fruits} alt="Fruites" />
            <span>Fruits</span>
          </div>
          <div className={cat === "vegetables" ? "active" : "catitem"} onClick={() => setCat("vegetables")}>
            <img src={vegetables} alt="Veg" />
            <span>Vegtables</span>
          </div>
          <div className={cat === "meals" ? "active" : "catitem"} onClick={() => setCat("meals")}>
            <img src={chicken} alt="Meals" />
            <span>Meals</span>
          </div>
          <div className={cat === "groceries" ? "active" : "catitem"} onClick={() => setCat("groceries")}>
            <img src={groceries} alt="grocries" />
            <span>Groceries</span>
          </div>
          <div className={cat === "petsupply" ? "active" : "catitem"} onClick={() => setCat("petsupply")}>
            <img src="https://w7.pngwing.com/pngs/739/747/png-transparent-dog-biscuit-animal-cracker-pet-shop-dog-animals-baking-pet-thumbnail.png" alt="pets" />
            <span>Pet Supply</span>
          </div>
          <div className={cat === "organic" ? "active" : "catitem"} onClick={() => setCat("organic")}>
            <img src={organic} alt="organic" />
            <span>Organic</span>
          </div>
        </div>
        <h1 className='shoptitle'>{cat || 'All Products'}</h1>

        <div className='products'>
          {searchProducts?.map((data) => (
            <Product key={data._id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
