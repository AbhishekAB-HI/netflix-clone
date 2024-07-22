import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Rows from './Components/RowPost/Rows';
import { actions, originals, comedy, romance, horror } from './urls';
import { AuthcontextProvider } from './context/AuthContext';
import Login from './Components/Signuppages/Login';
import SignUp from './Components/Signuppages/SignUp';
import Account from './Components/Signuppages/Account';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Signuppages/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthcontextProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/account' element={<Account />} />
          </Routes>
          <Banner />
          <Rows url={originals} title='Netflix-original' />
          <Rows url={actions} title='Action' isSmall />
          <Rows url={romance} title='Romance' isSmall />
          <Rows url={comedy} title='Comedy' isSmall />
          <Rows url={horror} title='Horror' isSmall />
        </AuthcontextProvider>
      </Router>
    </div>
  );
}

export default App;
