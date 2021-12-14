import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/cart-provider';


function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCardHandler = () => {
    setcartIsShown(true);
  }

  const hideCardHandler = () => {
    setcartIsShown(false);
  }

  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCardHandler}/>}

      <Header onShowCart={showCardHandler}/>
      <main>
      <Meals/>
      </main>
    </CartProvider>
  );
}

export default App;
