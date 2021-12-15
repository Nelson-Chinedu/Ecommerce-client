import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {},
  container: {
    width: '50%',
    margin: '4em auto',
    textAlign: 'center',
    '& .MuiButton-contained': {
      width: '25%',
      marginTop: '1.5em',
      '& .MuiButton-label': {
        color: 'white',
      },
    },
  },
});
