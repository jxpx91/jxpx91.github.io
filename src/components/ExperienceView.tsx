import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import jp from '../assets/images/jp.JPG'

function ExperienceView() {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>                          
              <img src={jp} alt="logo" width="100%" />
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h1">
                Hey,<br />this is JP
              </Typography>
              <br />
              <Typography variant="body1">
              Welcome to my portfolio! Here, you'll find a showcase of my work as an Android developer. Explore my latest projects, see how I solve complex problems with innovative solutions, and learn more about my journey in the world of mobile development.
              </Typography>
              <Box>
                
              </Box>
            </Grid>
        </Grid>
    );
}

export default ExperienceView;