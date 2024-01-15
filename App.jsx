
import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import { Accessories, Cargopants, Jeans, Shoes, Sunglasses, Trending, WinterFlex } from './Products'
import Cart from './Components/Cart'
import Singleproduct from './Components/Singleproduct'


export const MainConst= createContext()
function App() {


  let nevigate =useNavigate()
  let [items,setItems]=useState([...Trending, ...WinterFlex, ...Cargopants, ...Jeans, ...Shoes, ...Sunglasses, ...Accessories])
  let [cart, setCart] =useState(false)
  let [singleproduct, setsingleproduct] =useState()
  let [cartarr,setCartarr] =useState([])


  const ShowCart =()=> {
     setCart(!cart)
  }

  const SingleproductHandler =(id)=>{
  let obj =items.find((x)=> x.id == id)
  setsingleproduct(obj)
  nevigate('singleproduct')
  }

  const AddToCart =(id)=> {
    let obj =items.find((x)=> x.id == id)
    setCartarr([...cartarr,obj])
    setCart(true)
  }

  const remove =(id)=>{
    setCartarr(cartarr.filter((x)=>x.id !=id))
  }
  return (
    <>
    <MainConst.Provider value={{items,Trending,setCartarr,WinterFlex,AddToCart,remove, cartarr,Cargopants,Jeans,Shoes,Sunglasses,Accessories,cart,ShowCart,SingleproductHandler,singleproduct}}>
      <Navbar/>
      <Cart/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='singleproduct' element={<Singleproduct/>}/>
     </Routes>
     </MainConst.Provider>
    </>
  )
}

export default App
