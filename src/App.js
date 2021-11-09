
import { BrowserRouter,Switch,Route  } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts/AllProducts/AllProducts';
import Dashboard from './pages/Dashboard/Dashboard';
import Home from './pages/Home/Home/Home';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
       </BrowserRouter>
    </div>
  );
}

export default App;
