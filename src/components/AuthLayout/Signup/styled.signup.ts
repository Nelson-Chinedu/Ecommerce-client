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
    margin: '1em 0px',
    '& > *': {
      color: '#FFF',
    },
    '& .MuiSvgIcon-root': {
      '& > *': {
        color: 'white',
      },
    },
  },
  signin: {
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
  agree: {
    border: '1px solid red',
    display: 'flex',
  },
}));
