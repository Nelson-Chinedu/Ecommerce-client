import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '5em 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '0px 0px 5em',
      '& .MuiTypography-h6': {
        fontSize: '16px',
      },
      '& .MuiTypography-subtitle1': {
        fontSize: '13px',
      },
    },
  },
  mailWrapper: {
    backgroundColor: theme.palette.secondary.main,
    padding: '15px',
    borderRadius: '50%',
  },
  message: {
    '& > *': {
      color: '#fff',
      fontSize: '4em',
    },
  },
  subscribe: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginTop: '.7em',
    },
  },
}));
