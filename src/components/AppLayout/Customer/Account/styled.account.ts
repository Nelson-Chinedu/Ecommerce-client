import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    marginRight: '2em',
    paddingBottom: '2em',
    '& .MuiCircularProgress-svg': {
      '& > *': {
        color: 'white',
      },
    },
  },
  upload: {
    position: 'absolute',
    top: '40px',
    left: '55px',
    '& .MuiSvgIcon-root': {
      background: '#128c7e',
      borderRadius: '50px',
      width: '40px',
      height: '40px',
      padding: '10px',
      '& > *': {
        padding: '2em',
        color: 'white',
      },
    },
  },
  large: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    '& .MuiSvgIcon-root': {
      '& > *': {
        color: '#56515185',
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
  input: {
    display: 'none',
  },
}));
