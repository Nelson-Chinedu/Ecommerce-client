import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
    '& .MuiTypography-h4': {
      textAlign: 'center',
      padding: '20px 0px',
      fontWeight: 500,
    },
    '& a':{
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiTabs-fixed':{
      // backgroundColor: 'blue'
    }
  },
  wrapper: {
    // width: '87%',
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
    cursor: 'pointer',
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  icon: {
    marginLeft: '.2em',
    '& > *': {
      color: theme.palette.primary.main,
      border: '1px solid green'
    },
  },
  productContainer: {
    overflow: 'hidden',
    '& .MuiBox-root':{
      overflow: 'hidden',
      transition: 'transform .4s'
    },
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
    },
    '& img':{
      border: '4px solid green'
    },
    '&:hover .MuiBox-root':{
      overflow: 'hidden',
      transform: 'scale(1.1)'
    }
  },
  favouriteIcon: {
    '& > *': {
      color: 'red',
    },
  },
  btnLoadMore:{
    margin: '2em 0px',
    '& .MuiButton-contained':{
      '& .MuiButton-label':{
        color: 'white'
      }
    }
  }
}));
