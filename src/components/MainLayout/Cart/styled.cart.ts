import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '90%',
    margin: '2em auto',
    '& .MuiTypography-h4': {
      textAlign: 'center',
      margin: '1em 0px',
    },
    '& .MuiButton-contained': {
      borderRadius: '0px',
      '& > *': {
        color: 'white',
        padding: '2px 0px',
      },
    },
  },
  wrapper: {
    border: `1px solid ${theme.palette.secondary.main}`,
  },
  quantity: {
    border: '1px solid black',
    padding: '10px 15px',
  },
  action: {
    color: theme.palette.primary.main,
  },
  container: {
    marginTop: '1em',
    marginBottom: '1em',
    padding: '0px 2em',
  },
}));
