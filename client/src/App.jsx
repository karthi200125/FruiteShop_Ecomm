import './App.scss'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { Suspense, lazy } from 'react';
import Loading from './Components/Loading/Laoding';
import { useSelector } from 'react-redux';

const Home = lazy(() => import('./Pages/Home/Home'));
const Create = lazy(() => import('./Pages/Create/Create'));
const Cart = lazy(() => import('./Pages/Cart/Cart'));
const Fav = lazy(() => import('./Pages/Fav/Fav'));
const Shop = lazy(() => import('./Pages/Shop/Shop'));
const Login = lazy(() => import('./Pages/Login/Login'));
const Register = lazy(() => import('./Pages/Register/Register'));

const App = () => {

  const { user } = useSelector(state => state.user)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Suspense fallback={<Loading />}>{user ? <Navigate to='/' /> : <Login />}</Suspense>} />
          <Route path='/register' element={<Suspense fallback={<Loading />}>{user ? <Navigate to='/' /> : <Register />}</Suspense>} />
          <Route path='/create' element={<Suspense fallback={<Loading />}>{user?.isAdmin === true ? <Create /> : <Navigate to='/' />}</Suspense>} />
          <Route path='/' element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
          <Route path='/cart' element={<Suspense fallback={<Loading />}>{user ? <Cart /> : <Navigate to='/' />}</Suspense>} />
          <Route path='/fav' element={<Suspense fallback={<Loading />}>{user ? <Fav /> : <Navigate to='/' />}</Suspense>} />
          <Route path='/shop' element={<Suspense fallback={<Loading />}><Shop /> </Suspense>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
