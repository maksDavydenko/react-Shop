import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Switch, Route } from 'react-router-dom';

// import { useState } from 'react';
import { Context } from './contex';
import Basket from './components/basket/basket';
import Home from './components/home/home';
import Header from './components/header/header';
import ItemDetails from './components/itemDetails/itemDetails';

import Particles from 'react-particles-js';

function App() {
  const [staffInBasket, setStaffInBasket] = useState([]);

  const addItemToBasket = item => {
    let staffIndex = -1;

    staffInBasket.forEach((staff, index) => {
      if (staff.id === item.id) {
        staffIndex = index;
        return;
      }
    })

    if (staffIndex === -1) {
      item.num = 1;
      setStaffInBasket([...staffInBasket, item])
    }
    else {
      const plusNum = [...staffInBasket];
      plusNum[staffIndex].num = plusNum[staffIndex].num + 1;
      setStaffInBasket(plusNum)
    }
  }

  const removeItemToBasket = (item, remove) => {
    let staffIndex;

    staffInBasket.forEach((staff, index) => {
      if (staff.id === item.id) {
        staffIndex = index;
        return;
      }
    })

    const newStaffBag = [...staffInBasket]

    if (newStaffBag[staffIndex].num === 1 || remove) {

      console.log(newStaffBag[staffIndex].num);
      newStaffBag.splice(staffIndex, 1);
      setStaffInBasket(newStaffBag);
    } else {
      newStaffBag[staffIndex].num = newStaffBag[staffIndex].num - 1;
      setStaffInBasket(newStaffBag);
    }
  }

  const removeAllFromBasket = () => {
    setStaffInBasket([])
  }

  const state = {
    'removeItemToBasket': removeItemToBasket,
    'addItemToBasket': addItemToBasket,
    'staffInBasket': staffInBasket,
    'removeAllFromBasket': removeAllFromBasket
  }

  return (
    <Context.Provider value={state} className="contentWrap">
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
