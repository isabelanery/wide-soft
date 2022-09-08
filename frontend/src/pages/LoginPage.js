import React, { useContext, useEffect } from 'react'
import AppContext from '../components/context/AppContext';
import Login from '../components/Login';
import Register from '../components/Register';
import { ToastContainer } from 'react-toastify';

function LoginPage() {
  const { register, setRegister } = useContext(AppContext);

  const handleRegister = () => setRegister(!register);

  
  return (
    <div className="login">
      <div className="container ">
        <ToastContainer />
        <div className="row justify-content-center">
          <div className="row text-right mb-3 pb-3">
            <button 
              type="submit"
              className="btn text-right col-3 offset-md-9"
              onClick={ handleRegister }
            >
              { register ? 'Login' : 'Register'}
            </button>
          </div>

          <div className="card">
            <div className="card-header">
              { register ? 'Register' : 'Login'}
              </div>
              <div className="card-body">
                {
                  register 
                    ? <Register /> 
                    : <Login />
                }
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;
