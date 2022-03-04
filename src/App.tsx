import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProductPage from './features/Product/page/ProductPage';
import CartPage from './features/Cart/page/CartPage';
import { Route, Switch } from 'react-router-dom';
function App() {
  return (
    <div> 
      <Switch>
        <Route path="/product">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
