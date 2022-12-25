import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/Cart'
import Home from './components/Home'
import Products from './components/Products'
import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/> 
      <Route path='/cart' element={<Cart/>}/> 
      <Route path='/products' element={<Products/>}/> 
      </Routes>
      <Footer/>
      </Provider>
    </div>
  )
}

export default App
