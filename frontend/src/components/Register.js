import React, { useState, useContext } from 'react';
import { validateEmail } from '../helpers/validate';
import axios from 'axios';
import config from '../config.json';
import { toast } from 'react-toastify';
import AppContext from './context/AppContext';

function Register() {
  const [disableBtn, setDisableBtn] = useState(true);
  const { setRegister } = useContext(AppContext);

  const [inputControl, setInputControl] = useState({
    name: '',
    email: '',
    password: '',
  });

  // pra ajudar no controle do disableBtn
  const inputs = {
    password: '',
  }

  const validateInputs = (email, password) => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = password.length >= 8;

    const validInputs = isEmailValid && isPasswordValid;
    setDisableBtn(!validInputs);
  }

  const getInputValue = ({ target }) => {
    const { name, value } = target;
    
    setInputControl({ ...inputControl, [name]: value });
    
    if (name === 'password') inputs.password = value;

    validateInputs(inputControl.email, inputs.password);
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    
    const { data } = await axios.post(config.API_URL+'/users', {
      name: inputControl.name,
      email: inputControl.email,
      password: inputControl.password,
    });

    if (data) toast.success("User Created Succesfully");

    setTimeout(() => {
      setRegister(false);
    }, 3000)
  
  }

  return (
    <form>
      <div className="row mb-3">
        <label htmlFor="name" className="col-md-4 col-form-label text-md-right">Name</label>
      </div>

      <input 
        id="name"
        type="text"
        className="form-control" 
        name="name" 
        value={ inputControl.name }
        onChange={ getInputValue }
        required
      />

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
          onClick={ handleRegister }
        >
          Sign Up
        </button>

        
        </div>
      </div>

    </form>
  )
}

export default Register