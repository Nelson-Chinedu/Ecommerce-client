import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '95%',
    margin: '2em auto',
  },
  gridWrapper: {
    margin: '2em auto',
    width: '90%',
  },
  productContainer: {
    overflow: 'hidden',
    boxShadow: '0px 2px 10px 0px rgb(0, 0, 0, .1)',
    '& .MuiBox-root': {
      overflow: 'hidden',
      transition: 'transform .4s',
    },
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.palette.secondary.main}`,
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
      '& .MuiButton-outlined': {
        display: 'block',
      },
    },
    '& img': {
      border: '4px solid green',
    },
    '&:hover .MuiBox-root': {
      overflow: 'hidden',
      transform: 'scale(1.1)',
    },
    '& .MuiButton-outlined': {
      // display: 'none',
      marginTop: '1em',
      '&:hover': {
        background: theme.palette.secondary.main,
        '& .MuiButton-label': {
          color: 'white',
        },
      },
    },
  },
  productName: {
    textTransform: 'capitalize',
  },
  storeName: {
    fontSize: '12px',
    color: '#9B9B9B',
  },
  divider: {
    margin: '.3em 0px',
    padding: '.2em 0px',
  },
  oldPrice: {
    color: '#75757A',
    fontSize: '13px',
  },
}));
