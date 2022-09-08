import React, { useContext } from 'react'
import AppContext from '../components/context/AppContext';
import Table from '../components/urlList/Table';

function Home() {
  const { setLogedIn } = useContext(AppContext);

  const handleLogOut = () => {
    localStorage.setItem('logedIn', false);
    localStorage.setItem('userId', undefined);
    setLogedIn(false);
  }

  return (
    <div className="home-container">
      <div className="container">
        <div className="row text-right mb-3 pb-3">
          <button 
            type="submit"
            className="btn text-right col-3 offset-md-9"
            onClick={ handleLogOut }
          >
            Log out
          </button>
        </div>

        <div className="table-container">
          <Table />
        </div>

      </div>
    </div>
  )
}

export default Home;