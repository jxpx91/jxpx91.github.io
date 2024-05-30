import { type ReactElement } from 'react';
import './App.css';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Toolbar from '@mui/material/Toolbar';
import HomeScreen from './components/HomeView';
import ExperienceScreen from './components/ExperienceView';
import ProjectsScreen from './components/ProjectsView';
import AboutMeScreen from './components/AboutMeView';
import ContactScreen from './components/ContactView';

const Main = (): ReactElement => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Toolbar />
      <Box style={{ fontFamily: 'Raleway' }} sx={{ backgroundColor: 'var(--background)', minHeight: '100vh' }}>
        <Container id='home' sx={{ display: 'flex', justifyContent: 'center', paddingTop: 4 }}>
          <HomeScreen />   
        </Container>
        <Container id='aboutme' sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>          
          <AboutMeScreen />
        </Container>
        <Container id='projects' sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
          <ProjectsScreen />
        </Container>        
        <Container id='contact' sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
          <ContactScreen />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
