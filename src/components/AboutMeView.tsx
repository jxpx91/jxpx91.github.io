import React from 'react';
import { Grid, Typography, Avatar, Box } from '@mui/material';
import jp from '../assets/images/jp2.png'
import DownloadResumeButton from './DownloadResumeButton';

function ExperienceView() {
    return (
      <Box sx={{backgroundColor: 'background.dark', paddingY: 10, paddingX: '16em'}}>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6}>   
            <Avatar
                src={jp}
                sx={{ width: 400, height: 400, backgroundColor: 'accent.main',}}
            />              
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h2">
                About me
              </Typography>
              <br />
              <Typography variant="body1" color={'#f1f1f1'}>
                My name is Juan Pablo, and I'm an Android Developer from Mexico. I started my first mobile project in 2014, but it was in 2016 that I began focusing on native development. While I have some experience with iOS development, my expertise lies primarily in Android. Currently, I am leading an application development project, ensuring security, performance, and adherence to best practices using the latest Android technologies.
              </Typography>
              <DownloadResumeButton />
            </Grid>
        </Grid>
      </Box>
    );
}

export default ExperienceView;