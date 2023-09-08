import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home/Home'
import Category from './pages/Category/Category'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/category' element={<Category/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
