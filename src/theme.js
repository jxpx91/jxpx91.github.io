import { createTheme } from '@mui/material/styles';

const primaryColor = '#3B8BEB';
const secondaryColor = '#3B8BEB';
const accentColor = '#CFE4BA';
const primaryTextColor = '#334155';

const theme = createTheme({
    palette: {
        primary: {
            main: primaryColor,
        },
        secondary: {
          main: secondaryColor,
        },
        accent: {
          main: accentColor,
        },
    },
    typography: {
      fontFamily: 'Raleway, Arial, sans-serif',
      h1: {
        fontWeight: 500,
        color: primaryTextColor,
      },
      h2: {
        fontWeight: 500,
        color: secondaryColor,
      },
      h6: {
        fontWeight: 800,
        color: secondaryColor,
      },
      body1: {
        color: primaryTextColor,
      },
    },
  });

export default theme;