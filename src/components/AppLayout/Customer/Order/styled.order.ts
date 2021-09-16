import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  main: {
    marginRight: '2em',
    paddingBottom: '2em',
  },
  orderTopInfo: {
    '& .MuiTypography-body2': {
      status: 'DELIVERED',
      color: '#75757A',
    },
  },
  orderBottomInfo: {
    '& .MuiTypography-body2': {
      fontSize: '11px',
      background: '#6DBD28',
      color: 'white',
      padding: '.2em .3em',
      borderRadius: '3px',
    },
  },
});
