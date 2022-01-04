import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';

const App = () => {

  const [sideToggle, setSideToggle] = useState(false);

  return (
    <BrowserRouter>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
