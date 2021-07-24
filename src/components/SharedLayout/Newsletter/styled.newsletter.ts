import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    margin: '4em 0px',
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
}));
