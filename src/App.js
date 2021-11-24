import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Appointment from './Pages/DoctorAppointment/Appointment/Appointment';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './Pages/LoginPage/PrivetRoute/PrivetRoute';
import Dashboard from './Pages/Dashboard/Dashboard';
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './Pages/Dashboard/Payment/Payment';
import AdminRoute from './Pages/LoginPage/AdminRoute/AdminRoute';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor/AddDoctor';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}>
            </Route>
            <Route exact path="/home" element={<Home />}>
            </Route>

            <Route path="/dashboard" element={<PrivetRoute><Dashboard /></PrivetRoute>}>
              <Route exact path='/dashboard' element={<DashboardHome />}>
              </Route>
              <Route path={`/dashboard/payment/:appointmentId`} element={<Payment />}>
              </Route>
              <Route path={`/dashboard/makeAdmin`} element={<AdminRoute><MakeAdmin /></AdminRoute>}>
              </Route>
              <Route path={`/dashboard/addDoctor`} element={<AdminRoute><AddDoctor /> </AdminRoute>}>
              </Route>
            </Route>

            <Route path="/appointment" element={<PrivetRoute><Appointment /></PrivetRoute>} >
            </Route>

            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/register" element={<Register />}>
            </Route>

          </Routes>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
