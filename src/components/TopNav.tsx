import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';
import LanguageIcon from '@mui/icons-material/Language';
import { Language } from '@mui/icons-material';

function TopNav() {

    let navigate = useNavigate();
    let location = useLocation();

    const logoStyle = {
        height: 82,
        width: 71,
    }

    const appBarStyle = {
        marginTop: 24,
        borderBottom: 'none',
        border: 0,
        display: "flex",
        backgroundColor: "white",
    };

    const buttonStyle = {
        color: 'rgb(53, 71, 43)',
        padding: 25,
        backgroundColor: "white",
        fontSize: 20,
        textTransform: 'none' as 'none',
    };

    const hoverStyle = {
        padding: 25,
        backgroundColor: "white",
        color: "rgb(0, 158, 164)",
        textDecoration: "underline",
        textUnderlineOffset: 5,
        fontSize: 20,
        textTransform: 'none' as 'none',
    };

    const centerToolbarStyle = {
        display: 'flex',
        alignItems: 'center',
    };

    const [isHomeHovered, setIsHomeHovered] = useState(false);
    const [isProjectsHovered, setIsProjectsHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const [isCareersHovered, setIsCareersHovered] = useState(false);
    const [isLanguageHovered, setIsLanguageHovered] = useState(false);

    const homeStyle = isHomeHovered ? hoverStyle : buttonStyle;
    const projectsStyle = isProjectsHovered ? hoverStyle : buttonStyle;
    const ContactStyle = isContactHovered ? hoverStyle : buttonStyle;
    const careerStyle = isCareersHovered ? hoverStyle : buttonStyle

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

    const handleCareerMouseMove = () => {
        setIsCareersHovered(!isCareersHovered);
    }

    const handleContactClick = () => {navigate('/contact');}

    const handleCareerClick = () => {navigate("/career");}

    const languageIconStyle = {
        color:"black",
        marginRight: 8,
        paddingLeft: 180
    }

    const languageIconHoverStyle = {
        color: "rgb(0, 158, 164)",
        marginRight: 8,
        paddingLeft: 180,
    }

    const handleLanguageMouseMove = () => {
        setIsLanguageHovered(!isLanguageHovered);
    }

    const languageStyle = isLanguageHovered ? languageIconHoverStyle : languageIconStyle;
    

    return (
      <AppBar position='static' style={appBarStyle} elevation={0}>
        <Toolbar style={{...centerToolbarStyle, textTransform: 'none' }}>
            <img src={logo} style={logoStyle}/>
            <Button 
                style={homeStyle}
                onMouseEnter={handleHomeMouseMove}
                onMouseLeave={handleHomeMouseMove}
                onClick={handleHomeClick}
                disableTouchRipple
            >
                Company
            </Button>
            <Button 
                style={projectsStyle}
                onMouseEnter={handleProjectsMouseMove}
                onMouseLeave={handleProjectsMouseMove}
                onClick={handleProjectsClick}
                disableTouchRipple
            >
                Product
            </Button>
            <Button
                style={ContactStyle}
                onMouseEnter={handleContactMouseMove}
                onMouseLeave={handleContactMouseMove}
                onClick={handleCareerClick}
                disableTouchRipple
            >
                Careers
            </Button>
            <Button
                style={careerStyle}
                onMouseEnter={handleCareerMouseMove}
                onMouseLeave={handleCareerMouseMove}
                onClick={handleContactClick}
                disableTouchRipple
            >
                Contact
            </Button>
            <LanguageIcon
                style={languageStyle}
                onMouseEnter={handleLanguageMouseMove}
                onMouseLeave={handleLanguageMouseMove}/>
        </Toolbar>
      </AppBar>
    );
}

export default TopNav;
