import { createMuiTheme } from '@material-ui/core/styles';

interface PaletteColor {
  light: string;
  main: string;
  dark: string;
  contrastText: string;
}

interface Palette {
  palette:{
    primary: PaletteColor
    secondary: PaletteColor
  },
  typography: {
    h1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    h2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    h3: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    h4: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    h5: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    h6: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    body1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    body2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    subtitle1: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
    subtitle2: {
      fontFamily: string;
      fontWeight: number;
      fontSize: string;
    },
  }
}

const customTheme: Palette = {
  palette: {
    primary: {
      main: '#E30606',
      light: '',
      dark: '',
      contrastText: '#FFF'
    },
    secondary: {
      main: '#1F1F20',
      light: '',
      dark: '',
      contrastText: '#FFF'
    }
  },
  typography: {
    h1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      fontSize: '6rem'
    },
    h2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 300,
      fontSize: '3.75rem'
    },
    h3: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '3rem'
    },
    h4: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '2.125rem'
    },
    h5: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1.4rem'
    },
    h6: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      fontSize: '1.25rem'
    },
    body1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1rem'
    },
    body2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '0.875rem'
    },
    subtitle1: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 400,
      fontSize: '1rem'
    },
    subtitle2: {
      fontFamily: "'Montserrat', sans-serif",
      fontWeight: 500,
      fontSize: '0.875rem',
    },
  }
};

const theme = createMuiTheme(customTheme)

export default theme;