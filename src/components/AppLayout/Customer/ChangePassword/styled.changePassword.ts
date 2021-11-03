import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    marginRight: '2em',
    paddingBottom: '2em',
    '& .MuiCircularProgress-svg': {
      '& > *': {
        color: 'white',
      },
    },
  },
  accountContainer: {
    width: '50%',
    margin: '2em auto',
  },
  accountDetails: {
    margin: '2em 0',
    paddingBottom: '2em',
    '& .MuiGrid-container': {
      marginBottom: '.8em',
    },
  },
});
