import React, { useContext, useEffect, useState } from 'react'
import { MainConst } from '../App'

const Cart = () => {
    let {cart,cartarr, remove,setCartarr} = useContext(MainConst)
    let [subtotal,  setSubtotal] =useState(0)
    let [shipping, setshipping] =useState(100)

    useEffect(() => {
        let total = cartarr.reduce((x, y) => x + (y.price * y.qty), 0)
        setSubtotal(total)
    }, [cartarr])


    const qtyInc =(id) =>{
        let obj =cartarr.find((x)=>x.id ==id)
        obj.qty++
        setCartarr([...cartarr])
        setSubtotal(subtotal + cartarr.find((x) => x.id == id).price)
    }

    const qtyDec =(id) =>{
        let obj =cartarr.find((x)=>x.id ==id)
        if(obj.qty<=1){
            alert("minimum quantity is requird one")
        }
        else{
         obj.qty--
        setCartarr([...cartarr])
        setSubtotal(subtotal - cartarr.find((x) => x.id == id).price)
       }
}
    
  return (
    <>
    <div className="cart" style={{right: cart ? '0' : "100%"}}>
{
    cartarr.map((x)=>{
        return(
            <div className="carts">
                <div className="img">
                    <img src={x.img} alt="" />
                </div>
                <div className="title">
                    <p>{x.title}</p>
                    <p>{x.price}</p>
                </div>
                <div className="qty">
                    <button onClick={()=>qtyInc(x.id)}>+</button>
                    <p>{x.qty}</p>
                    <button onClick={()=>qtyDec(x.id)}>-</button>
                </div>
                <div className="btn">
                    <button onClick={()=>remove(x.id)}>Remove</button>
                </div>
            </div>
        )
    })
}

           <div className="totalling">
                    <div className="subtotal">
                        <p>{subtotal}</p>
                    </div>
                    <div className="shipping">
                        <p>{shipping}</p>
                    </div>
                    <div className="total">
                        <h3>{subtotal + shipping}</h3>
                    </div>
                </div>
            </div>
         </>
    )
  }

export default Cart
