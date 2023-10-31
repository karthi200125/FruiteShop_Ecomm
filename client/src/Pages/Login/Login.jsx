import { useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../Redux/userSlice';
import { apirequest } from '../../Utils/ApiRequest';
import './Login.scss';
import { addToCart } from '../../Redux/cartslice';
import logo from '../../assets/logo4.png'

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const [err, setErr] = useState(null);
  const [isloading, setisloading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (isloading) return;
    setisloading(true)
    try {
      const res = await apirequest.post('/auth/login', input);
      dispatch(login(res.data));
      console.log("login",res.data)
      if (res.data?.cartProducts?.length > 0) {
        res.data.cartProducts.forEach((item) => {
          dispatch(addToCart(item));
        });
      }
      navigate('/');
      setisloading(false)
    } catch (error) {
      console.log(error)
      setErr(error.response?.data);
    } finally {
      setisloading(false)
    }
  };

  return (
    <div className='login'>
      <div className='formcon'>
        <form className='form' onSubmit={handleClick}>
          <div className='logo'>
            <img src={logo} alt='' />
            <h1>J<span>o</span>eFruit</h1>
          </div>
          <div className='top'>
            <h1>Welcome Back</h1>
            <p>Sign in with the following</p>
          </div>
          <div className='mid'>
            <div className='inputbox'>
              <MdEmail size={25} />
              <input
                type='email'
                placeholder='Email Here'
                name='email'
                onChange={handleChange}
                required
              />
            </div>
            <div className='inputbox'>
              <AiFillLock size={25} />
              <input
                type='password'
                placeholder='Password Here'
                name='password'
                onChange={handleChange}
                required
              />
            </div>
            {err && <span className='err'>{err}</span>}
            <p>
              Don't Have an Account?{' '}
              <span>
                <Link to='/register' className='clickhere'>Click Here</Link>
              </span>
            </p>
            <button type='submit'>{isloading ? "please Wait" : "Sign in"}</button>
          </div>
          <div className='btm'>
            <div className='line'>
              <p></p>
              <span>or</span>
              <p></p>
            </div>
            <div className='google'>Google</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
