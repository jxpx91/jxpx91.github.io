import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#3B8BEB',
        },
        secondary: {
          main: '#CFE4BA',
        },
    },
    typography: {
      fontFamily: 'Raleway, Arial, sans-serif',
      h1: {
        fontWeight: 500,
        color: '#334155',
      },
      body1: {
        color: '#334155',
      },
    },
  });

export default theme;