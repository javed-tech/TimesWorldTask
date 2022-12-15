import { useSelector } from 'react-redux';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, NavLink, Routes, Route, Router } from 'react-router-dom';

function App() {
  const user = useSelector(state => state.user)
console.log(user,'user')
  return (
    <>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="home" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
