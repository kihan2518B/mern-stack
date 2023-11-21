// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


import NavBar from './Components/NavBar';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import Home from './Components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' Component={Home} element="Home" />
        <Route path='/add' Component={AddUser} element="AddUser" />
        <Route path='/all' Component={AllUser} element="AllUser" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
