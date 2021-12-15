import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#f6f8fa',
    padding: '3em 0em',
    '& .MuiTypography-h6': {
      fontSize: '1em',
      marginBottom: '1em',
      [theme.breakpoints.down('sm')]: {
        fontSize: '.8em',
        fontWeight: 600,
      },
    },
    '& .MuiTypography-body2': {
      paddingBottom: '1em',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      [theme.breakpoints.down('sm')]: {
        fontSize: '13px',
      },
      '& a': {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
}));
