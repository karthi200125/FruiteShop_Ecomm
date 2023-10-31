import { useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import apirequest from '../../Utils/ApiRequest';
import logo from '../../assets/logo4.png';
import './Register.scss';

const Register = () => {
  const [input, setInput] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [err, setErr] = useState(null);
  const navigate = useNavigate();
  const [isloading, setisloading] = useState(false);

  const handleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    if (isloading) return;
    setisloading(true)
    try {
      await apirequest.post('/auth/register', input);
      navigate('/login');
      setisloading(false)
      console.log("register sucess")
    } catch (error) {
      console.log(error)
      setErr(error.response?.data);
    } finally {
      setisloading(false)
    }
  };

  return (
    <div className='register'>
      <div className='formcon'>
        <form className='form' onSubmit={handleClick}>
          <div className='logo'>
            <img src={logo} alt='' />
            <h1>J<span>o</span>eFruit</h1>
          </div>
          <div className='top'>
            <h1>Welcome Back</h1>
            <p>Sign up with the following</p>
          </div>
          <div className='mid'>
            <div className='inputbox'>
              <MdEmail size={25} />
              <input
                type='text'
                placeholder='Username Here'
                name='username'
                onChange={handleChange}
                required
              />
            </div>
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
              Don You have An Account? <span><Link to='/login' className='clickhere'>Click Here</Link></span>
            </p>
            <button type='submit'>{isloading ? "please Wait" : "Sign up"}</button>
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

export default Register;
