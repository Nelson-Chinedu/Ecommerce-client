import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    '& .MuiCheckbox-root': {
      padding: '0px',
    },
    '& .MuiTypography-h5': {
      fontWeight: 500,
    },
    '& .MuiTypography-subtitle2': {
      fontWeight: 300,
    },
    '& .MuiCircularProgress-svg': {
      '& > *': {
        color: 'white',
      },
    },
  },
  inActive: {
    color: '#3e3e3e8c',
  },
  caption: {
    color: 'red',
  },
  inputWrapper: {
    marginTop: '1em',
  },
  btnLogin: {
    margin: '.5em 0px',
    '& > *': {
      color: '#FFF',
    },
    '& .MuiSvgIcon-root': {
      '& > *': {
        color: 'white',
      },
    },
  },
  serverError: {
    background: '#FFEBE9',
    borderRadius: '3px',
    '& > *': {
      color: '#ff7372',
      fontSize: '12px',
      padding: '.9em 0px',
      margin: '.8em 0px 1.5em',
    },
  },
});
