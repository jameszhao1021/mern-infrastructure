import React from 'react';
import { useState } from 'react';
import './App.css'
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../compoments/NavBar';
import { getUser } from '../../utilities/users-service';


function App() {

  const [user, setUser] = useState(getUser());

  return (
    <main className='App'>
      {
        user?(
          <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            
             <Route path='/orders/new' element={<NewOrderPage />}/>
             <Route path='/orders' element={<OrderHistoryPage />}/>
          </Routes>
          </>
        ):
        (
          <AuthPage setUser={setUser}/>
        )
      }
    </main>
  )
}

export default App;
