import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
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
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-container': {
        display: 'unset',
        margin: '1em',
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
  forgetPassword: {
    textAlign: 'right',
    marginTop: '.4em',
    marginBottom: '.6em',
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
      textDecoration: 'underline',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'none',
      },
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: -10,
      '& .MuiTypography-subtitle2': {
        fontSize: '12px',
      },
    },
  },
  signup: {
    '& .MuiTypography-subtitle2': {
      '& a': {
        '&:hover': {
          textDecoration: 'none',
        },
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiTypography-subtitle2': {
        fontSize: '12px',
      },
    },
  },
}));
