import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';


import "@fortawesome/fontawesome-free/css/all.min.css";

// layouts
import Auth from './layouts/Auth';
import Admin from './layouts/Admin';

// component
import Notfound from './component/Notfound/NotFound';

// views
import Dashboard from './views/admin/Dashboard';
import Observation from './views/admin/Observation';
import Reports from './views/admin/Reports';
import MyAccount from './views/admin/MyAccount';
import Attendants from './views/admin/Attendants';
import Students from './views/admin/Students';
import LessonPlan from './views/admin/LessonPlan';
import Welcome from './views/admin/Welcome';

// ActionCreator
import { fungsiUpdateData } from './store/actionCreator';


function App() {
  const routeGuard = useSelector((state) => state.UserReducer.isLoggedIn)
  // const navigate = useNavigate()
  const items = localStorage.getItem("token")

  return (
    <>
      <Router>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route exact path='/admin' element={items ? <Admin /> : <Navigate to="/auth" />}>
              <Route path='welcome' element={ items ? <Welcome/> : <Navigate to="/auth" />} />
              <Route path='dashboard' element={ items ? <Dashboard/> : <Navigate to="/auth" />} />
              <Route path='observation' element={ items ? <Observation/> : <Navigate to="/auth" />} />
              <Route path='attendant' element={items ? <Attendants/> : <Navigate to="/auth" />} />
              <Route path='student' element={items ? <Students/> : <Navigate to="/auth" />} />
              <Route path='report' element={items ? <Reports/> : <Navigate to="/auth" />} />
              <Route path='lesson' element={items ? <LessonPlan/> : <Navigate to="/auth" />} />
              <Route path='myaccount' element={items ? <MyAccount/> : <Navigate to="/auth" />} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
