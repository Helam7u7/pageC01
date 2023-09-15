import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'
import CATEGORIES_DATA from './mock/categories.json'
import Product from './components/Product/Product'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout categories_data = {CATEGORIES_DATA}/>}>
            <Route index element={<Home/>}/>
            <Route path='/categoria/:categoria' element={<Category categories_data = {CATEGORIES_DATA}/>}/>
            <Route path='/product' element={<Product/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
