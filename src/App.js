
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './components/error/Error404';
import Cuisine from './pages/Cuisine';
import Menu from './components/menu/Menu';
import Searched from './pages/Searched';
import Detail from './pages/Detail';
import {AnimatePresence} from 'framer-motion';

function App() {
  return (
    <BrowserRouter >
      <Menu />
      <AnimatePresence >
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/cuisine/:type' element={<Cuisine />} />
          <Route path='/search/:searchValue' element={<Searched />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;