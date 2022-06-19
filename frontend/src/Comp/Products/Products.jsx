import React,{useState} from 'react'
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';
import Styles from './Products.module.css';
import Sidenav from '../Sidenav/Sidenav';
import {addToCart} from '../../redux/AddTocart/AddToCart'
import {useDispatch} from 'react-redux'

const Products = () => {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  let [type, setType] = useState("");
  const {category} = useParams();
  const dispatch = useDispatch();
  
  useEffect(()=>{
      const getData = async()=>{
            let res = await axios.get(`http://localhost:8080/products/${category}?sortBy=${type}`);
            setData(res.data);
      }
      getData();
  },[category,type])

  console.log(data);

  const handleFilter = async(val)=>{
      setType(val);
  }

  console.log(filterData);
  let Data = filterData.length>0 ? filterData : data;


  return (
    <div className='container d-flex flex-column'>
      <div className={Styles.upper}>
           <div></div>
           <p className={Styles.length}>{Data.length} products</p>
           <select className={Styles.sort} onChange={(e)=>{handleFilter(e.target.value)}} >
               <option>Sort By:</option>
               <option>Featured</option>
               <option>Best selling</option>
               <option>Alphabetically, A-Z</option>
               <option>Alphabetically, z-A</option>
               <option value="price-asc">Price, low to high</option>
               <option value='price-dsc'>Price, high to low</option>
            </select> 
        </div>
        <div className='row'>
         <div className={`col-md-2 ${Styles.main}`}><Sidenav/></div>
        <div className={`col-md-10 ${Styles.wrapper}`}>
          {
             Data.map((elem,index)=>(
                 <div key={elem._id} className={Styles.card}>
                    
                     <img src={elem.imageUrl} alt="product"/>
                     <i class="bi bi-heart"></i>
                     <div className={Styles.cardInfo}>
                        <p>{elem.title}, <span>{elem.quantity}</span></p>
                        <p>{elem.description}</p>
                        <div className={Styles.price}>
                          <span >
                             <span>&#8377;{elem.price}</span>
                             <span>&#8377;{elem.stkPrice}</span>
                          </span>
                          <span>{elem.rating}<i class="bi bi-star-fill"></i></span>
                        </div>  
                    </div>
                    <button className={Styles.cartBtn} onClick={()=>dispatch(addToCart(elem))}>ADD TO CART</button>
                </div>
             ))
          }
        </div>
        </div>
    </div>
   
  )
}

export default Products;