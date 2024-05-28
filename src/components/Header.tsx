import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function Header() {
    const [selectedSection, setSelectedSection] = useState('home');

    const handleButtonClick = (section: string) => {
        setSelectedSection(section);
    };

    return (
        <AppBar position="fixed">
            <Toolbar>
                <Box sx={{ width:'100%', display: 'flex', justifyContent: 'center', gap: 8 }}>                    
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'home' ? 'secondary.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#home"
                        onClick={() => handleButtonClick('home')}>
                        JP
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'experience' ? 'secondary.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#experience"
                        onClick={() => handleButtonClick('experience')}>
                        Experience
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'projects' ? 'secondary.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#projects"
                        onClick={() => handleButtonClick('projects')}>
                        Projects
                    </Button>                    
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'aboutme' ? 'secondary.main' : 'inherit',                        
                        }}
                        color= 'inherit'
                        href="#aboutme"
                        onClick={() => handleButtonClick('aboutme')}>
                        About me
                    </Button>
                    <Button 
                        sx={{ 
                            backgroundColor: selectedSection === 'contact' ? 'secondary.main' : 'inherit',                        
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