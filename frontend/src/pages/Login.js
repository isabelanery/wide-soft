import React, { Redirect, useState } from 'react'
import axios from 'axios';
import config from '../config.json';
import { validateEmail } from '../helpers/validate';

function Login() {
  const [disableBtn, setDisableBtn] = useState(true);
  
  const [inputControl, setInputControl] = useState({
    email: '',
    password: '',
  });

  // pra ajudar no controle do disableBtn
  const inputs = {
    password: '',
  }

  const getInputValue = ({ target }) => {
    const { name, value } = target;
    
    setInputControl({ ...inputControl, [name]: value });
    
    if (name === 'password') inputs.password = value;

    console.log(inputs);
    validateInputs(inputControl.email, inputs.password);
  }

  const validateInputs = (email, password) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 8;

    const validInputs = isEmailValid && isPasswordValid;
    setDisableBtn(!validInputs);
  }

  const handleLogin = async (event) => {
    event.preventDefault();
    
    const { data } = await axios.post(config.API_URL+'/login', {
      email: inputControl.email,
      password: inputControl.password,
    });

    console.log(data.success);

    if (data.success) {
      // <Redirect to="/home" />
    }
  }

  return (
    <div className="login">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="card">
            <div className="card-header">Login</div>
              <div className="card-body">
                <form>
                  <div className="row mb-3">
                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">Email Address</label>
                  </div>

                  <input 
                    id="email"
                    type="email"
                    className="form-control @error('email') is-invalid @enderror" 
                    name="email" 
                    value={ inputControl.email }
                    onChange={ getInputValue }
                    required
                  />

                  <div className="row mb-3">
                  <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                  </div>

                  <input
                    id="password"
                    type="password"
                    className="form-control @error('password') is-invalid @enderror" 
                    name="password"
                    value={ inputControl.password }
                    onChange={ getInputValue }
                    required  
                  />

                  <div className="row mb-3">
                    <div className="loginBtn">
                    <button 
                      type="submit"
                      className="btn btn-primary"
                      disabled={ disableBtn }
                      onClick={ handleLogin }
                    >
                      Login
                    </button>

                    </div>
                  </div>

                </form>
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
