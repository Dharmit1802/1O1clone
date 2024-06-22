import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import ContactUs from './pages/contactus';
import Navbar from './component/navbar';

function App() {
  return (
    <>
    <div className='fixed top-0 left-0 w-full z-50 bg-black bg-opacity-30 backdrop-blur-md'>

    <Navbar/>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/login" element={<Login />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Routes>
    </>
  );
}

export default App;
