import { useContext, useEffect } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import AppContext from './components/context/AppContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  const { logedIn, setLogedIn, setUserId } = useContext(AppContext);

  useEffect(() => {
    const login = localStorage.getItem('logedIn');
    const userId = localStorage.getItem('userId');

    login && setLogedIn(login);
    userId && setUserId(userId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route 
        exact
        path="/" 
        element={ logedIn ? <Home /> : <LoginPage />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

export default App;
