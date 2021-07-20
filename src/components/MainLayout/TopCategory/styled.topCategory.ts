import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '95%',
    margin: 'auto',
    '& .MuiTypography-h4': {
      textAlign: 'center',
      padding: '20px 0px',
      fontWeight: 500,
    },
  },
  wrapper: {
    width: '87%',
    margin: '20px auto',
  },
  nav: {
    display: 'flex',
    position: 'sticky',
    bottom: '0',
    justifyContent: 'space-around',
    padding: '15px 10px',
    backgroundColor: theme.palette.secondary.light,
    margin: '20px auto',
    listStyle: 'none',
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  icon: {
    '& > *': {
      color: theme.palette.primary.main,
    },
  },
  productContainer: {
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
    },
  },
  favouriteIcon: {
    '& > *': {
      color: 'red',
    },
  },
}));
