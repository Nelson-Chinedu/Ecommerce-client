import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: 'white',
      },
    },
  },
  edit: {
    marginRight: '.4em',
    cursor: 'pointer',
    '& > *': {
      color: '#3b90df',
    },
  },
  cancel: {
    cursor: 'pointer',
    '& > *': {
      color: '#e82321',
    },
  },
});
