import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


import "@fortawesome/fontawesome-free/css/all.min.css";



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
import Users from './views/admin/Users';
import ForgotPassword from './views/auth/ForgotPassword';


// Layouts
const Auth = lazy(()=> import('./layouts/Auth'));
const Admin = lazy(()=> import('./layouts/Admin'));


function App() {
  const routeGuard = useSelector((state) => state.UserReducer.isLoggedIn)
  const items = localStorage.getItem("token")
  

  return (
    <>
      <Router>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path='/' element={ <Navigate to="/auth" /> } />
                <Route path='/auth' element={!items ? <Auth /> : <Navigate to="/admin/welcome"/>} />
                <Route path='/forgot-password' element={!items ? <ForgotPassword /> : <Navigate to="/admin/welcome"/>} />
                <Route exact path='/admin' element={items ? <Admin /> : <Navigate to="/auth" />}>
                    <Route path='welcome' element={ items ? <Welcome/> : <Navigate to="/auth" />} />
                    <Route path='dashboard' element={ items ? <Dashboard/> : <Navigate to="/auth" />} />
                    <Route path='observation' element={ items ? <Observation/> : <Navigate to="/auth" />} />
                    <Route path='attendant' element={items ? <Attendants/> : <Navigate to="/auth" />} />
                    <Route path='student' element={items ? <Students/> : <Navigate to="/auth" />} />
                    <Route path='report' element={items ? <Reports/> : <Navigate to="/auth" />} />
                    <Route path='lesson' element={items ? <LessonPlan/> : <Navigate to="/auth" />} />
                    <Route path='myaccount' element={items ? <MyAccount/> : <Navigate to="/auth" />} />
                    <Route path='users' element={items ? <Users/> : <Navigate to="/auth" />} />
                </Route>
                <Route path='*' element={<Notfound />} />
            </Routes>
          </Suspense>
      </Router>
    </>
  );
}

export default App;
