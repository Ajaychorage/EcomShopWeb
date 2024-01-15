import React, { useContext } from 'react'
import { MainConst } from '../App'

const Singleproduct = () => {
    let {singleproduct,AddToCart}= useContext(MainConst)
  return (
    <>
    <div className="col1">
        <div className="img">
            <img src={singleproduct.img} alt="" />
        </div>
        <div className="title">
            <p>{singleproduct.title}</p>
            <p>{singleproduct.price}</p>
            <div className="btn">
            <button onClick={()=>AddToCart(singleproduct.id)}>AddToCart</button>
        </div>
        </div>
        
    </div>
    </>
  )
}

export default Singleproduct
