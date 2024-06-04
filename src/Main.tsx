import { type ReactElement } from 'react';
import './App.css';
import { Box, Container } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Header from './components/Header';
import Toolbar from '@mui/material/Toolbar';
import HomeScreen from './components/HomeView';
import SkillsScreen from './components/SkillsView';
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
        <Container id='aboutme' maxWidth={false} sx={{ width: '100%', justifyContent: 'center', paddingTop: 10, paddingLeft: '0 !important', paddingRight: '0 !important' }}>
          <AboutMeScreen />
        </Container>
        <Container id='projects' sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
          <ProjectsScreen />
        </Container>        
        <Container id='skills' sx={{ display: 'flex', justifyContent: 'center', paddingTop: 10 }}>
          <SkillsScreen />
        </Container>        
        <Container id='contact' maxWidth={false} sx={{ width: '100%', justifyContent: 'center', paddingTop: 10, paddingLeft: '0 !important', paddingRight: '0 !important' }}>
          <ContactScreen />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Main;
