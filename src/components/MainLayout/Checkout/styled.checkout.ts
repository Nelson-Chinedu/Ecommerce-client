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
  summary: {
    marginTop: '1em',
    boxShadow: '0px 0px 1px 0.2px #343434',
    padding: '1em',
    '& .MuiGrid-container': {
      padding: '1em 0px',
    },
  },
  secure: {
    textAlign: 'center',
    padding: '1.2em 0px',
    fontSize: '11px',
    color: '#4a4a4a',
  },
});
