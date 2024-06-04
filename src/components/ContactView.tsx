import React from 'react';
import { Box, Typography, Grid, Button, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function ContactView() {
    return (        
        <Box sx={{backgroundColor: 'background.dark', paddingY: 5, paddingX: '16em'}}>
            <Typography variant="h2">
                Contact me
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >                                     
                    <Typography variant="body1" color={'#f1f1f1'}>
                    I'd love to hear from you! Whether you have a project in mind, want to collaborate, or just want to connect, feel free to reach out.
                    </Typography>                 
                </Grid>
                <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Button fullWidth variant="contained" color="primary" href="mailto:jxpx91@gmail.com">
                    Send Email
                </Button>
                <Box>
                    <IconButton
                    href="https://github.com/jxpx91"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="external link"
                    size="large"
                    >
                    <GitHubIcon fontSize="large" sx={{ color: 'var(--primary)' }}/>
                    </IconButton>
                    <IconButton
                    href="https://www.linkedin.com/in/juan-pablo-delgado-d%C3%ADaz/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="external link"
                    size="large"
                    >
                    <LinkedInIcon fontSize="large" sx={{ color: 'var(--primary)' }}/>
                    </IconButton>
                </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ContactView;