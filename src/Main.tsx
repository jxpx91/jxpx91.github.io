import { type ReactElement } from 'react';
import dogfella from './assets/images/dogfella.JPG';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Main = (): ReactElement => {
  return (
    <Box sx={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center' }}>
        <Grid container spacing={2} sx={{ margin: '1rem 0' }}>
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="h1">
              This is Miguel, a.k.a Urbi
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </Typography>
            <Box>
              <IconButton
                href="https://github.com/itsmeurbi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external link"
                size="large"
              >
                <GitHubIcon fontSize="large" sx={{ color: 'var(--primary)' }}/>
              </IconButton>
              <IconButton
                href="https://www.linkedin.com/in/itsmeurbi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="external link"
                size="large"
              >
                <LinkedInIcon fontSize="large" sx={{ color: 'var(--primary)' }}/>
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img src={dogfella} alt="logo" width="100%" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Main;
