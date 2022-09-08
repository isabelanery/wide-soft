import React, { useContext, useState } from 'react';
import axios from 'axios';
import config from '../config.json';
import { validateEmail } from '../helpers/validate';
import AppContext from './context/AppContext';

function Login() {
  const [disableBtn, setDisableBtn] = useState(true);
  const [wrongInputs, setWrongInputs] = useState(false);

  const { setLogedIn } = useContext(AppContext);
  
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

    setLogedIn(data.success);
    setWrongInputs(!data.success);
  }

  return (
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
      
      {
        wrongInputs && 
          <div className="invalid-inputs">
            Wrong email or password.
          </div>
      }

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
  )
}

export default Login