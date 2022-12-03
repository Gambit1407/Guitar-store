import './App.css';
import { useReducer } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './modules/layout/Layout';
import Main from './modules/main/Main';
import BassGuitar from './modules/bassGuitar/BassGuitar';
import ElectricGuitar from './modules/electricGuitar/ElectricGuitar';
import AcousticGuitar from './modules/acousticGuitar/AcousticGuitar';
import Contact from './modules/contacts/Contact';
import Cart from './modules/cart/Cart';
import Guitar from './modules/guitar/Guitar';
import { Context } from './context';
import { reducer, initState } from './reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initState);
    
  return ( 
    <Context.Provider value={{
      state,
      dispatch
    }} >
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="bass" element={<BassGuitar />} />
          <Route path="electric" element={<ElectricGuitar />} />
          <Route path="acoustic" element={<AcousticGuitar />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path='guitar/:giutarId' element={<Guitar />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}

export default App;
