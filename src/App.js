
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import AllProducts from './pages/AllProducts/AllProducts/AllProducts';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Register from './pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
       <AuthProvider>
          <Router>
              <Switch>
                <Route exact path="/">
                  <Home></Home>
                </Route>
                <PrivateRoute path="/home/:productId">
                  <ProductDetails></ProductDetails>
                </PrivateRoute>
                <Route path="/home">
                  <Home></Home>
                </Route>
                <PrivateRoute path="/allproducts/:productId">
                  <ProductDetails></ProductDetails>
                </PrivateRoute>
                <Route path="/allproducts">
                  <AllProducts></AllProducts>
                </Route>
                <PrivateRoute path="/dashboard">
                  <Dashboard></Dashboard>
                </PrivateRoute>
                <Route path="/register">
                  <Register></Register>
                </Route> 
                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="*">
                  <NotFound></NotFound>
                </Route>
              </Switch>
          </Router>
       </AuthProvider>
    </div>
  );
}

export default App;
