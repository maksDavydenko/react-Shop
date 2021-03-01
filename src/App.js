import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// import { useState } from 'react';
import { Context } from './contex';
import Basket from './components/basket/basket';
import Home from './components/home/home';
import Header from './components/header/header';

import ItemDetails from './components/itemDetails/itemDetails'

function App() {
  const [staffCount, setStaffCount] = useState(0);
  const [staffInBasket, setStaffInBasket] = useState([]);

  const addItemToBasket = item => {
    setStaffCount(staffCount + 1)
    setStaffInBasket([...staffInBasket, item])
  }

  const removeItemToBasket = item => {
    let staffIndex;

    staffInBasket.forEach((staff, index) => {
      if (staff.id === item.id) {
        staffIndex = index;
        return;
      }
    })

    const newStaffBag = [...staffInBasket]

    newStaffBag.splice(staffIndex, 1);

    console.log(newStaffBag)


    setStaffInBasket(newStaffBag)
  }

  const state = {
    'removeItemToBasket': removeItemToBasket,
    'addItemToBasket': addItemToBasket,
    'staffInBasket': staffInBasket
  }
  return (
    <Context.Provider value={state}>
      <Switch>
        <Header />
        <Route exact path='/' component={Home} />
        <Route exact path='/basket' component={Basket} />
        <Route exact path='/itemDetails' component={ItemDetails} />
      </Switch>
    </Context.Provider>
  );
}

export default App;
