import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from './Pages/HomePage/Home/Home';
import Appointment from './Pages/DoctorAppointment/Appointment/Appointment';
import Login from './Pages/LoginPage/Login/Login';
import Register from './Pages/LoginPage/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivetRoute from './Pages/LoginPage/PrivetRoute/PrivetRoute';
import Dashboard from './Pages/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <PrivetRoute path="/dashboard">
              <Dashboard />
            </PrivetRoute>
            <PrivetRoute path="/appointment">
              <Appointment />
            </PrivetRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
