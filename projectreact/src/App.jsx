import { useState } from 'react'

import './App.css'

import Header from './components/Header/Header'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

import CatalogPage from './Pages/Catalog/Catalog'
import {Routes, Route} from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />

    <Routes>
      <Route path="/catalog" element = {<CatalogPage/>} />
      <Route path="/" element={<Banner />} /> {/* Переместите Banner внутрь маршрута "/" */}
    </Routes>
    <Footer />
    </>
  )
}

export default App
