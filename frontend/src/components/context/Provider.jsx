import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider(props) {
  const { children } = props;
  const [logedIn, setLogedIn] = useState(false);

  const contextValue = {
    logedIn,
    setLogedIn,
  };
  
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;