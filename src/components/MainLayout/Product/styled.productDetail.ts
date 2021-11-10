import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '90%',
    margin: '2em auto',
    '& .MuiAccordionDetails-root': {
      padding: '8px 0px',
    },
    '& .MuiTypography-h5': {
      textTransform: 'capitalize',
    },
  },
  newPrice: {
    fontWeight: 600,
  },
  oldPrice: {
    marginRight: '.5em',
    textDecoration: 'line-through',
  },
  preference: {
    '& .MuiTypography-body1': {
      fontWeight: 500,
      marginBottom: '.5em',
    },
  },
  quantity: {
    marginBottom: '.5em',
    '& .MuiTypography-body1': {
      fontWeight: 500,
      marginRight: '1em',
    },
  },
  info: {
    marginBottom: '.5em',
    '& .MuiTypography-body1': {
      fontWeight: 500,
    },
    '& .MuiTypography-body2': {
      marginLeft: '1em',
      fontWeight: 400,
    },
  },
  btnAdd: {
    border: `2px solid ${theme.palette.secondary.main}`,
    padding: '10px 40px',
    '&:hover': {
      border: `2px solid ${theme.palette.secondary.main}`,
      padding: '10px 40px',
    },
  },
  divider: {
    margin: '2em 0px 0em',
  },
}));
