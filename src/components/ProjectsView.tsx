import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import ruut from '../assets/images/ruut.png'
import prevailhq from '../assets/images/prevailhq.png'
import denue from '../assets/images/denue.png'

function ProjectsView() {
    return (
        <Box>
            <Typography variant="h2">
                My latest projects
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >                 
                    <Typography variant="h2">
                        RUUT
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        RUUT helps mexican users to buy and sell stocks.
                    </Typography> 
                    <br />
                    <Typography variant="h6">
                        Android Lead
                    </Typography>
                    <Typography variant="body1">
                        Here I'm using Kotlin, MVVM, Coroutines, Room, Retrofit, Dagger, LiveData, among others.
                    </Typography>
                    <br />
                    <Link href="https://ruut.mx/en" target="_blank" rel="noopener noreferrer">
                        Go to ruut.mx
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={ruut} alt="logo" width="80%" />
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >                 
                    <img src={prevailhq} alt="logo" width="80%" />                
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <Typography variant="h2">
                        ConnectHQ
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        Simple tools to ensure availability of your team through challenges – both mental and physical. Start reducing costly turnover, burnout, and absences today.
                    </Typography> 
                    <br />
                    <Typography variant="h6">
                        Android Developer
                    </Typography>
                    <Typography variant="body1">
                        Here I learned about Kotlin, MVI, Compose, Coroutines, Jetpack, module structure, and more.
                    </Typography>
                    <br />
                    <Link href="https://prevailhq.com" target="_blank" rel="noopener noreferrer">
                        Go to prevailhq.com
                    </Link>
                </Grid>
            </Grid>
            <br />
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} >                 
                    <Typography variant="h2">
                        DENUE
                    </Typography>
                    <br />
                    <Typography variant="body1">
                        DENUE lets you know the economic units that exist in Mexico, their location, and the number of employees they have.
                    </Typography> 
                    <br />
                    <Typography variant="h6">
                        Android Lead
                    </Typography>
                    <Typography variant="body1">
                        Here I got freedom to choose the architecture, MVVM, Coroutines, Room, Retrofit, Dagger, LiveData, among others. Also, I worked with iOS version for this project.
                    </Typography>
                    <br />
                    <Link href="https://play.google.com/store/apps/details?id=mx.org.inegi.denuemv&hl=en_US&pli=1" target="_blank" rel="noopener noreferrer">
                        Go to DENUE
                    </Link>
                </Grid>
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={denue} alt="logo" width="80%" />
                </Grid>
            </Grid>
        </Box>
    );
}

export default ProjectsView;