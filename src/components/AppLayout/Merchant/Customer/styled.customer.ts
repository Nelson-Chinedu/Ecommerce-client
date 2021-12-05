import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      margin: '2em 0px',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 4%)',
    },
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: '#FFF',
      },
      '& .MuiSvgIcon-root': {
        marginRight: '.3em',
        '& > *': {
          color: '#FFF',
        },
      },
    },
  },
  filter: {
    padding: '.4em 2em',
  },
});
