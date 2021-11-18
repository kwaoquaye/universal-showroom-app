import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom"

import './App.css';
import Header from "./components/header"
import ProductsListPage from "./components/ProductsListPage"
import ProductPage from "./components/productPage"
import HomePage from "./components"

function App() {
  const [products, setProducts] = useState([]);



  useEffect(() => {
    const fetchProductsData = async () => {
      const data = await fetch("/seedData.json")
      const response = await data.json()
      console.log(response)
      setProducts(response)
    }
    fetchProductsData()

  }, [])

  return (
    <Router>
      <div className="App container">
        <Header />
        <Route exact path="/" >
          <HomePage products={products} />
        </Route>
        <Route path="/searchresults/:category" ><ProductsListPage /></Route>
        <Route path="/product/:category/:product" element={<ProductPage />} />
      </div>
    </Router>
  );
}

export default App;
