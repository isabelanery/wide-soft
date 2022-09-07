import React from 'react';
import AppContext from './AppContext';

function Provider(props) {
  const { children } = props;
  const contextValue = {
    login: false,
  };
  return (
    <AppContext.Provider value={ contextValue }>
      { children }
    </AppContext.Provider>
  );
}

export default Provider;