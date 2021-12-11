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
  deliveredEmpty: {
    background: '#999b9a',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  pendingEmpty: {
    background: '#999b9a',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  canceledEmpty: {
    background: '#999b9a',
    padding: '.2em',
    width: '10px',
    height: '10px',
    display: 'inline-block',
  },
  emptyState: {
    width: '60%',
    margin: '2em auto',
    textAlign: 'center',
    '& .MuiButton-contained': {
      margin: '.4em auto 0px',
      width: '80%',
      '& .MuiButton-label': {
        color: '#FFF',
      },
    },
  },
});
