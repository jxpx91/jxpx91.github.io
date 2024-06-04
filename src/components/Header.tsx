import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import droid from '../assets/images/droid.png'

function Header() {
    const [selectedSection, setSelectedSection] = useState('home');

    const handleButtonClick = (section: string) => {
        setSelectedSection(section);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <img src={droid} alt="logo" style={{height: '50px', marginRight: 'auto'}} />
                <Box sx={{ width:'auto', display: 'flex', justifyContent: 'flex-end', gap: 8 }}>                    
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'home' ? 'accent.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#home"
                        onClick={() => handleButtonClick('home')}>
                        JP
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'aboutme' ? 'accent.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#aboutme"
                        onClick={() => handleButtonClick('aboutme')}>
                        About me
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'projects' ? 'accent.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#projects"
                        onClick={() => handleButtonClick('projects')}>
                        Projects
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'skills' ? 'accent.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#skills"
                        onClick={() => handleButtonClick('skills')}>
                        Skills
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'contact' ? 'accent.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#contact"
                        onClick={() => handleButtonClick('contact')}>
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;