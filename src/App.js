
import { BrowserRouter as Router,Switch,Route  } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts/AllProducts/AllProducts';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import ProductDetails from './pages/ProductDetails/ProductDetails';
import Register from './pages/Register/Register';

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home/:productId">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allproducts/:productId">
              <ProductDetails></ProductDetails>
            </Route>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
             <Route path="/register">
               <Register></Register>
             </Route> 
             <Route path="/login">
                <Login></Login>
             </Route>
            <Route >
              <NotFound></NotFound>
            </Route>
          </Switch>
       </Router>
    </div>
  );
}

export default App;
