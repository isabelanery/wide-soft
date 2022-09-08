import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider(props) {
  const { children } = props;
  
  const [logedIn, setLogedIn] = useState(false);
  const [register, setRegister] = useState(false);
  const [userId, setUserId] = useState();

  const contextValue = {
    logedIn,
    setLogedIn,
    register,
    setRegister,
    userId,
    setUserId
  };
  
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;