import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import  Button  from '@mui/material/Button';
// import  CircularProgress  from '@mui/material/CircularProgress';
import Myorder from './Myorder/Myorder';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import ManageOrder from './ManageOrder/ManageOrder';
import useAuth from '../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddItem from './AddItem/AddItem';
import Review from './Review/Review';
import Payment from './Payment/Payment';

            // Dashboard Route component 
        
const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();

  const {admin} = useAuth();
      // admin route refreshing 
  // if(!admin){
  //   return <CircularProgress></CircularProgress>
  // }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link to={`${url}`}><Button variant="contained" sx={{width: '90%',m: 1}}>My Order</Button></Link>
      
      <Link to={`${url}/review`}><Button variant="contained" sx={{width: '90%',m: 1}}>Review Page</Button></Link>

      <Link to={`${url}/payment`}><Button variant="contained" sx={{width: '90%',m: 1}}>Payment</Button></Link>
      
      {admin && <Box>
        <Link to={`${url}/makeadmin`}><Button variant="contained" sx={{width: '90%',m: 1}}>Make Admin</Button></Link>
        <Link to={`${url}/manageorder`}><Button variant="contained" sx={{width: '90%',m: 1}}>Manage Order</Button></Link>
        <Link to={`${url}/additem`}><Button variant="contained" sx={{width: '90%',m: 1}}>Add Item</Button></Link>
        </Box>
        }

      <Link to="/home"><Button variant="contained" sx={{width: '90%',m: 1,backgroundColor: '#ff9966'}}>Home Page</Button></Link>

       
       
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
              {/* dashboard internal switching and routing  */}
        <Switch>
            <Route exact path={path}>
                <Myorder></Myorder>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <AdminRoute path={`${path}/manageorder`}>
                <ManageOrder></ManageOrder>
            </AdminRoute> 
            <AdminRoute path={`${path}/additem`}>
              <AddItem></AddItem>
            </AdminRoute>
            <AdminRoute path={`${path}/makeadmin`}>
                <MakeAdmin></MakeAdmin>
            </AdminRoute>
        </Switch>
         
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
