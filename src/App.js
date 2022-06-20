import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import Home from './pages/Home';
import About from './pages/About';
import Categories from './pages/Categories';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import S3Test from './pages/S3Test';
import NotFound from './pages/NotFound';
import RequireAuth from './auth/auth-ui/RequireAuth';
import BaseApp from './admin/layout/BaseApp';
import Login from './pages/Login';
import Register from './pages/Register';

import AdminHome from './admin/AdminHome';
import Messages from './admin/Messages';
import ManageProducts from './admin/Products';
import ManageSubscribers from './admin/Subscribers';
import AdminArticles from './admin/AdminArticles';
import AdminGallery from './admin/AdminGallery';


function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/products' element={<Products />} />
          <Route path='/products/:category' element={<Products />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/upload' element={<S3Test />} />

          <Route element={<RequireAuth />}>
            <Route path='/admin' element={<BaseApp />}>
              <Route path='home' element={<AdminHome />} />
              <Route path='messages' element={<Messages />} />
              <Route path='subscribers' element={<ManageSubscribers />} />
              <Route path='products' element={<ManageProducts />} />
              <Route path='gallery' element={<AdminGallery />} />
              <Route path='articles' element={<AdminArticles />} />

              <Route index element={<AdminHome />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;

