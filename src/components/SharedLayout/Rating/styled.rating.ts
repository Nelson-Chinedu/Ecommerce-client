import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    width: 200,
    display: 'flex',
    alignItems: 'center',
    '& .MuiRating-iconHover': {
      color: 'blue',
    },
    '& .MuiRating-root': {
      color: 'red',
      '& > *': {
        color: 'red',
      },
    },
  },
  emptyStar: {
    color: 'white',
  },
  test: {
    color: 'red',
  },
});