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
import logo from '../../img/logo-ct.png';
import '../sidebar/Sidebar.css';
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import ConstructionIcon from '@mui/icons-material/Construction';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import LoginIcon from '@mui/icons-material/Login';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import MediaCard from './Sidecart';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import Grids from './Hero/Grids';
import Dashboard from './Hero/Dashboard';
import { Link } from "react-router-dom"


const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundColor: '#f8f9fa' }}>
            <div className='logo'>
                <img src={logo} alt='logo'></img>
                <span className='ms'>Soft UI Dashboard</span>
            </div>
            <Divider />
            <div className='navbar'>
                <ui className='nav-item'>
                    <li className='nav-list'>
                        <Link className='nav-link' to='/Dashboard'>
                            <div className='dash'><DashboardIcon /></div>
                            <span className='dashp'>Dashboard</span>
                        </Link>
                    </li>
                    <li className='nav-list'>
                        <Link className='nav-link' to='/table'>
                            <div className='table'><TableChartIcon /></div>
                            <span className='dashp'>Table</span>
                        </Link>
                    </li>
                    <li className='nav-list'>
                        <Link className='nav-link' to='/Billing'>
                            <div className='credit'><CreditCardIcon /></div>
                            <span className='dashp'>Billing</span>
                        </Link>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>
                            <div className='view'><ViewInArIcon /></div>
                            <span className='dashp'>Virtual Reality</span>
                        </a>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>
                            <div className='rtl'><ConstructionIcon /></div>
                            <span className='dashp'>RTL</span>
                        </a>
                    </li>

                    <div className='accountp'>
                        <h4>Account Pages</h4>
                    </div>

                    <li className='nav-list'>
                        <a className='nav-link' href='#'>
                            <div className='rtl'><PersonAddAltIcon /></div>
                            <span className='dashp'>Profile</span>
                        </a>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>
                            <div className='rtl'><LoginIcon /></div>
                            <span className='dashp'>Sign In</span>
                        </a>
                    </li>
                    <li className='nav-list'>
                        <a className='nav-link' href='#'>
                            <div className='rtl'><RocketLaunchIcon /></div>
                            <span className='dashp'>Sign Up</span>
                        </a>
                    </li>
                </ui>
            </div>

            <div className='scart'>
                <MediaCard />
            </div>
            <Button variant="contained" size='large' sx={{
                backgroundColor: "rgb(197, 14, 182)", color: "white",
                '&:hover': {
                    backgroundColor: 'white',
                    color: 'black',
                },
            }} >UPGRADE TO PRO</Button>
            <Divider />
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex', position: '' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    bgcolor: " #67748e"
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
                    <div className='header-text'>
                        <TextField id="outlined-basic" label="" variant="outlined" size='small' placeholder='Type here' />
                    </div>
                    <div className='header-links'>
                        <ul>
                            <li>
                                <Button variant="outlined" size='medium' sx={{ backgroundColor: "white", color: "black" }} >ONLINE BUILDER</Button>
                            </li>
                            <li>
                                <a className='btn' target='-blank' href='#'><PersonIcon /></a>
                            </li>
                            <li>
                                <a className='btn' target='-blank' href='#'><SettingsIcon /></a>
                            </li>
                            <li>
                                <a className='btn' target='-blank' href='#'> <NotificationsIcon /> </a>
                            </li>
                        </ul>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
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
                <Typography paragraph>
                    {/* <Grids /> */}
                </Typography>
                <Typography paragraph>
                    {/* <Dashboard /> */}
                </Typography>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    window: PropTypes.func,
};

export default ResponsiveDrawer;