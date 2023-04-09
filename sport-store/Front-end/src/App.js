import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Trangchu';
import Product from './pages/Sanpham';
import Product_Detail from './pages/Chitietsanpham';
import Blog from './pages/Baiviet';
import Blog_Detail from './pages/Chitietbaiviet';
import Contact from './pages/Lienhe';
import Login from './pages/Dangnhap';
import axios from 'axios';
window.axios = axios;

function App() {
  return (
    <div className="App">
      <Router>
		    <Navbar/>
        <Routes>  {/* phan body tuong ung voi cac menu */}
          	<Route exact path='/' element={<Home />} />
          	<Route exact path='/san-pham' element={<Product />} />
            <Route exact path='/chi-tiet-san-pham/:id' element={<Product_Detail />} />
          	<Route exact path='/bai-viet' element={<Blog />} />
            <Route exact path='/chi-tiet-bai-viet/:id' element={<Blog_Detail />} />
          	<Route exact path='/lien-he' element={<Contact />} />
			      <Route exact path='/dang-nhap' element={<Login />} />
        </Routes>
        <Footer />  {/* phan footer */}		
      </Router>
	  <switch>
		
		</switch>
    </div>
  );
}

export default App;
