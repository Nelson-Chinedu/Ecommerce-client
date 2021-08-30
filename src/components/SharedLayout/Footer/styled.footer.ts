import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    backgroundColor: '#f6f8fa',
    padding: '3em 0em',
    '& .MuiTypography-h6': {
      marginBottom: '1em',
    },
    '& .MuiTypography-body2': {
      paddingBottom: '1em',
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      '& a': {
        textDecoration: 'none',
        '&:hover': {
          textDecoration: 'underline',
        },
      },
    },
  },
});
