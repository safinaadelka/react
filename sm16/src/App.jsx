
import './App.css'
import Header from './components/Header/Header'
import Card from './pages/Catalog/Catalog'
import TovarPage from './pages/TovarPage/TovarPage'
import {Routes,Route} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
      <Header/>
      <Card/>
      <Routes>
        <Route path="/tovar" element = {<TovarPage />} />
      </Routes>
    </>
  )
}

export default App
