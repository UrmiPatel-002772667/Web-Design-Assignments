import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link, useNavigate } from "react-router-dom";
import { useSignOut } from 'react-auth-kit';
import {useDispatch} from 'react-redux';
import { logout } from '../actions';
const AdminNavbar = () => {
   const dispatch = useDispatch();
    const HandleLogout = () => {
        dispatch(logout());
        useSignOut();
        useNavigate("/login");
    };
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    Admin Portal
                </Typography>
                <Button color="inherit" component={Link} to="/admin">Home</Button>
                <Button color="inherit" component={Link} to="/addJobs">Add Jobs</Button>
                <Button color="error" onClick={HandleLogout}>Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default AdminNavbar;