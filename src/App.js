import { Routes, Route, Navigate } from 'react-router-dom';
//Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';
import ShopCart from './components/ShopCart';
//Redux
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
        <Navbar/>
      <Routes>
        <Route path = "/products/:id" element = {<ProductDetails/>} />
        <Route path = "/products" element = {<Store/>} />
        <Route path = "/cart" element ={<ShopCart/>}/>
        <Route path = "/*" element = {<Navigate to = "/products"/>}/>
      </Routes>
      
    </Provider>
  );
}

export default App;

