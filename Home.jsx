import React, { useContext } from 'react'
import { MainConst } from '../App'

const Home = () => {
  let { items,SingleproductHandler } =useContext(MainConst)
  return (
    <>
    <div className="home">
      {
      items.map((x)=>{
        return(
        <div className="products" onClick={()=> SingleproductHandler(x.id)}>
          <div className="img">
            <img src={x.img} alt="" />
          </div>
          <div className="title">
            <p>{x.title}</p>
           <br />
          </div>
          <div className="price">
           <p>Rs. {x.price}</p>
           </div>
        </div>
      )
      })
    }
    </div>
    </>
  )
}

export default Home

