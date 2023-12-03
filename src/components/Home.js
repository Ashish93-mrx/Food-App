import React, { useState } from 'react'
import "./style.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cardsdata from './CartData';
import { addToCart } from '../Redux/features/cartSlice';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
const Home = () => {
    //const [Cardsdata,setCardsdata] = useState(Cardsdata);
    const dispatch = useDispatch();
    //add to cart
    const send = (e) => {
      dispatch(addToCart(e));
      toast.success("item Added in your Cart")
    }
    return (
    <>
      <section className='item_section mt-4 container'>
        <h2 className='px-4' style={{fontWeight:400,color:"red"}}>New Offers Now</h2>

        <div className='row mt-2 d-flex justify-content-around align-items-center'>
        
        {Cardsdata.map((element,index)=>{
            return(
            <>
            <Card style={{width:"22rem",border:"none"}} className='hove mb-4'>
                <Card.Img variant='top' className="cd" src={element.imgdata}/>

                <div className='card_body'>
                    <div className='upper_data d-flex justify-content-between align-items-center'>
                    <h4>{element.dish}</h4>
                    <span>{element.rating}&nbsp;★</span>
                    </div>

                    <div className='lower d-flex justify-content-between'>
                    <h8>{element.address}</h8>
                    <span>{element.price}</span>
                    </div>
                    <div className="extra"></div>
                    
                    
                    <div className='last_data d-flex justify-content-between align-items-center'>
                    <img src={element.arrimg} className='limg' alt="" />
                    <Button style={{width:"150px",background:"#ff3054db",border:"none"}} variant='outline-light'
                    className='mt-2 mb-2'
                    onClick={()=>send(element)}>Add To Cart</Button>
                    <img src={element.delimg} className='laimg' alt="" />
                    </div>
                    
                </div>
            </Card>
            </>)
        })
        }
             
           
        </div>
        
      </section>
    </>
  )
}

export default Home
