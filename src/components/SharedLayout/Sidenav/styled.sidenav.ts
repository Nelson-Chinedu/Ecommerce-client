import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    '& .MuiButton-contained': {
      border: '2px solid red',
    },
  },
  logoWrapper: {
    margin: '15% 0px',
  },
  linkWrapper: {
    marginTop: '10%',
    '& > .MuiGrid-item': {
      padding: '3% 0px',
      '&:hover': {
        cursor: 'pointer',
        textDecoration: 'underline',
      },
    },
  },
  btnViewCart: {
    border: `2px solid ${theme.palette.secondary.main}`,
    '&:hover': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  item: {
    '& > *': {
      padding: '.2em 0px',
    },
  },
  btnCheckout: {
    '& .MuiButton-label': {
      color: 'white',
    },
  },
}));
