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
    '& .MuiTableRow-head': {
      background: '#007AFF',
      '& .MuiTableCell-head': {
        '& > *': {
          color: 'white',
        },
      },
    },
    '& .pending': {
      background: '#FFF1E0',
      color: '#d9860d',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    '& .delivered': {
      background: '#E5F8F7',
      color: '#07a38f',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
    '& .cancelled': {
      background: '#FFECEC',
      color: '#FF8791',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
  filter: {
    padding: '.4em 2em',
  },
});
