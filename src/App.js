import './App.css';

import { Route, Routes, Navigate } from "react-router-dom"

import { useSelector, useDispatch } from 'react-redux'

import Layout from './Views/Layout/Layout';
import Dashboard from './Views/Dashboard/Dashboard';
import Profile from './Views/Profile/Profile';
import Signup from './Views/Signup/Signup';
import Login from './Views/Login/Login';
import Nothing from './Views/Nothing/Nothing';


function App() {

  //PROTECTED ROUTING

  const userData = useSelector((state) => state.UserReducer)
  console.log("redux userData", userData)
  const dispatch = useDispatch()

  const protectedRoute = (component) => {
    if (userData.user) {
      return component
    }
    else {
      return <Navigate to="/login" replace />
      // return <Login />

    }
  }

  const unProtectedRoute = (component) => {
    if (userData.user) {
      return <Navigate to="/dashboard" replace />
      // return <Dashboard userData={userData}/>
    }
    else {
      return component
    }
  }



  return (
    <div className="App">
      <header className="App-header">

        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='dashboard/my-profile' element={protectedRoute(<Profile />)} />
            <Route path='signup' element={unProtectedRoute(<Signup />)} />
            <Route path='login' element={unProtectedRoute(<Login />)} />
            <Route path='*' element={<Nothing />} />

          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
