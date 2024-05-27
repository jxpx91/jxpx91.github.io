import { type ReactElement } from 'react';
import jp from './assets/images/jp.JPG';
import './App.css';
import { Box, Container, Grid, Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import AndroidIcon from '@mui/icons-material/Android';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

const Main = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Box style={{ fontFamily: 'Raleway' }} sx={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
        <Container sx={{ display: 'flex', justifyContent: 'center' }}>
          <Grid container spacing={2} sx={{ margin: '1rem 0' }}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Box display="flex" alignItems="center">
                <AndroidIcon sx={{ fontSize: 30, color: 'var(--secondary)', marginRight: 2 }} />
                <Typography variant="h6" style={{color: theme.palette.secondary.main, fontWeight: 500}}>
                  ANDROID DEVELOPER
                </Typography>
              </Box>
              <Typography variant="h1">
                Hey,<br />this is JP
              </Typography>
              <br />
              <Typography variant="body1">
              Welcome to my portfolio! Here, you'll find a showcase of my work as an Android developer. Explore my latest projects, see how I solve complex problems with innovative solutions, and learn more about my journey in the world of mobile development.
              </Typography>
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
            <Grid item xs={12} md={6}>
              <img src={jp} alt="logo" width="100%" />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
