import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    height: '600px',
    '& .MuiTypography-body2': {
      padding: '10px 0px 0px',
    },
    '& .MuiTypography-h5': {
      padding: '15px 0px',
    },
  },
  oldPrice: {
    color: '#96999C',
    paddingRight: '10px',
  },
  btnShop: {
    width: 'auto',
    '& > *': {
      color: theme.palette.secondary.main,
      textTransform: 'capitalize',
    },
  },
}));
