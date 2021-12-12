import React, { Fragment, useState } from 'react';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown, setcartIsShown] = useState(false);

  const showCardHandler = () => {
    setcartIsShown(true);
  }

  const hideCardHandler = () => {
    setcartIsShown(false);
  }

  return (
    <Fragment>
        {cartIsShown && <Cart onClose={hideCardHandler}/>}

      <Header onShowCart={showCardHandler}/>
      <main>
      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
