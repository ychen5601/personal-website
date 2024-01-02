import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

function TopNav() {

    let navigate = useNavigate();
    let location = useLocation();

    const appBarStyle = {
        backgroundColor: '#ced2ba',
        border: 0,
    };

    const fixedAppBarStyle = {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderBottom: 'none',
        border: 0,
        position: 'fixed',
        zIndex: 999,
    };

    const buttonStyle = {
        color: 'rgb(53, 71, 43)',
        backgroundColor:'rgba(0, 0, 0, 0)',
        padding: 25,
    };

    const hoverStyle = {
        color: 'black',
        backgroundColor:'#ced2ba',
        padding: 25,
    };

    const centerToolbarStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);

    const homeStyle = isHomeHovered ? hoverStyle : buttonStyle;
    const projectsStyle = isProjectsHovered ? hoverStyle : buttonStyle;
    const AboutStyle = isAboutHovered ? hoverStyle : buttonStyle;

    const handleHomeMouseMove = () => {
        setIsHomeHovered(!isHomeHovered);
    }

    const handleHomeClick = () => {
        setTimeout(()=> {navigate('/');}, 100);
    }

    const handleProjectsMouseMove = () => {
        setIsProjectsHovered(!isProjectsHovered);
    }

    const handleProjectsClick = () => {
        navigate('/projects');}

    const handleAboutMouseMove = () => {
        setIsAboutHovered(!isAboutHovered);
    }

    const handleAboutClick = () => {navigate('/about');}

    const handleContactClick = () => {navigate('/contact');}
    

    return (
      <AppBar position='static' style={location.pathname == "/about" ? fixedAppBarStyle : appBarStyle} elevation={0}>
        <Toolbar style={centerToolbarStyle}>
            <Button 
                style={homeStyle}
                onMouseEnter={handleHomeMouseMove}
                onMouseLeave={handleHomeMouseMove}
                onClick={handleHomeClick}
            >
                Home
            </Button>
            <Button 
                style={projectsStyle}
                onMouseEnter={handleProjectsMouseMove}
                onMouseLeave={handleProjectsMouseMove}
                onClick={handleProjectsClick}
            >
                Projects
            </Button>
            <Button
                style={AboutStyle}
                onMouseEnter={handleAboutMouseMove}
                onMouseLeave={handleAboutMouseMove}
                onClick={handleAboutClick}
            >
                About
            </Button>
        </Toolbar>
      </AppBar>
    );
}

export default TopNav;
