import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#F4F6FA',
    '& .MuiOutlinedInput-input': {
      background: '#FFF',
    },
    '& .MuiAvatar-img': {
      objectFit: 'fill',
    },
  },
  popoverContainer: {
    '& .MuiPaper-root': {
      width: '200px',
      marginTop: '1em',
      textAlign: 'right',
      padding: '1em',
    },
  },
  popoverLink: {
    cursor: 'pointer',
    '& a': {
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
  mainWrapper: {
    width: '80%',
    marginLeft: '20%',
    padding: '0px 2em',
    minHeight: '100vh',
  },
  container: {
    padding: '2em 0px',
  },
  notification: {
    marginRight: '1em',
    boxShadow: '0px 1px 0px 1px rgba(0,0,0,0.1)',
    borderRadius: '5px',
    padding: '16px 16px !important',
  },
  account: {
    background: '#FFF',
    boxShadow: '0px 1px 0px 1px rgba(0,0,0,0.1)',
    padding: '6px 12px !important',
    borderRadius: '5px',
  },
  user: {
    '& .MuiTypography-subtitle1': {
      fontSize: '16px',
      color: '#666767',
      lineHeight: '1.3em',
      textTransform: 'capitalize',
    },
    '& .MuiTypography-subtitle2': {
      fontSize: '12px',
      color: '#666767',
    },
  },
  setup: {
    background: '#c0ede6',
    padding: '1em',
    textAlign: 'center',
    position: 'sticky',
    top: 0,
    zIndex: 9999999,
  },
});
