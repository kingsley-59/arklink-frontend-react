import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';
import Dashboard from './components/Dashboard';
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
import DashboardContent from './components/DashboardContent';

import AdminHome from './admin/AdminHome';

const engine = new Styletron();

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:category' element={<Products />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/upload' element={<S3Test />} />

        <Route element={<RequireAuth />}>
          <Route path='/admin' element={<BaseApp />}>
            <Route path='home' element={<AdminHome />} />

            <Route index element={<AdminHome />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;


// const DashboardApp = () => {
//   return (
//     <StyletronProvider value={engine}>
//       <BaseProvider theme={LightTheme}>
//         <Dashboard />
//       </BaseProvider>
//     </StyletronProvider>
//   );
// }
