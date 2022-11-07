import React, {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


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


function App() {
  const routeGuard = useSelector((state) => state.UserReducer.isLoggedIn)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/auth' element={<Auth />} />
          <Route exact path='/admin' element={routeGuard ? <Admin /> : <Navigate to="/auth" />}>
              <Route path='dashboard' element={<Dashboard/>} />
              <Route path='observation' element={<Observation/>} />
              <Route path='attendant' element={<Attendants/>} />
              <Route path='student' element={<Students/>} />
              <Route path='report' element={<Reports/>} />
              <Route path='lesson' element={<LessonPlan/>} />
              <Route path='myaccount' element={<MyAccount/>} />
          </Route>
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
