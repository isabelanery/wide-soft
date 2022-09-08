import { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import './App.css';
import AppContext from './components/context/AppContext';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';

function App() {
  const { logedIn } = useContext(AppContext);

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
