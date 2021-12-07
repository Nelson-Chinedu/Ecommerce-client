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
    '& .enroute': {
      background: '#fdecff',
      color: '#d157df',
      padding: '.5em .8em',
      borderRadius: '5px',
      textAlign: 'center',
      textTransform: 'capitalize',
    },
  },
  wrapper: {
    background: 'white',
    height: '270px',
    maxWidth: '500px',
    padding: '2em 2em 3em',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    position: 'relative',
    maxHeight: '300px',
    // height: 'auto',
    overflowY: 'scroll',
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: '#FFF',
      },
    },
    '& .MuiPaper-root': {
      boxShadow: '0px !important',
    },
    '& .MuiTypography-subtitle2': {
      marginBottom: '.6em',
      fontWeight: 600,
    },
    '& .MuiTypography-body2': {
      marginBottom: '.6em',
    },
    '& .MuiCircularProgress-circle': {
      color: '#FFF',
    },
  },
  filter: {
    padding: '.4em 2em',
  },
  emptyState: {
    width: '50%',
    margin: '2em auto',
    textAlign: 'center',
  },
});
