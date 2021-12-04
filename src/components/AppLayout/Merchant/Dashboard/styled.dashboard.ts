import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiTableHead-root': {
      background: '#007AFF',
      '& .MuiTableCell-head': {
        '& > *': {
          color: 'white',
        },
      },
    },
    '& .MuiPaper-root': {
      padding: '1em 1em',
      // height: '150px',
      boxShadow:
        '0px 2px 1px -1px rgb(0 0 0 / 0%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 4%)',
    },
  },
  seeAll: {
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  topChart: {
    margin: '2em 0px',
  },
  bottomStat: {
    marginTop: '3em',
  },
  delivered: {
    background: '#26CCB7',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  pending: {
    background: '#FFD422',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  canceled: {
    background: '#FF5967',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
});