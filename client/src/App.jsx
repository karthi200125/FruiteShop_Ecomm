import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react';

const Home = lazy(() => import('./Pages/Home/Home'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Fav = lazy(() => import('./Pages/Fav/Fav'));
const Shop = lazy(() => import('./Pages/Shop/Shop'));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Suspense fallback={<div>Loading...</div>}><Home /></Suspense>} />
          <Route path='/cart' element={<Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>} />
          <Route path='/fav' element={<Suspense fallback={<div>Loading...</div>}><Fav /></Suspense>} />
          <Route path='/shop' element={<Suspense fallback={<div>Loading...</div>}><Shop /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
