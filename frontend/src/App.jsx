
import {BrowserRouter ,  Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import Customers from './pages/Customers'
import Sales from './pages/Sales'
import Products from './pages/Products'
import Workers from './pages/Workers'
import Analytics from './pages/Analytics'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/customers/:name" element={<Customers />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/sales/:title" element={<Sales />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:title" element={<Products />} />
        <Route path="/workers" element={<Workers />} />
        <Route path="/workers/:name" element={<Workers />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
