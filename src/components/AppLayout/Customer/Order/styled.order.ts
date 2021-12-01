import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  main: {
    marginRight: '2em',
    paddingBottom: '2em',
  },
  wrapper: {
    padding: '1em 2em',
  },
  orderTopInfo: {
    '& .MuiTypography-body2': {
      status: 'DELIVERED',
      color: '#75757A',
    },
  },
  orderBottomInfo: {
    '& .MuiTypography-subtitle2': {
      marginTop: '.5em',
    },
    '& .MuiTypography-body2': {
      fontSize: '11px',
      background: '#6DBD28',
      color: 'white',
      padding: '.2em .3em',
      borderRadius: '3px',
    },
  },
  back: {
    padding: '0px 1em',
  },
  header: {
    padding: '1em .9em',
  },
  orderPreview: {
    border: '1px solid #ededed',
    marginBottom: '1em',
    padding: '.8em',
  },
  informationWrapper: {
    border: '1px solid #ededed',
  },
  orderWrapper: {
    margin: '1.5em 2em 0px',
  },
  divider: {
    margin: '1em 0px .4em',
  },
  descWrapper: {
    padding: '.5em .9em',
  },
  status: {
    fontSize: '11px',
    background: '#6DBD28',
    color: 'white',
    padding: '.2em .3em',
    borderRadius: '3px',
  },
  productWrapper: {
    margin: '.6em 0px',
  },
  statusHistory: {
    '& .MuiButton-contained': {
      background: 'white',
      boxShadow: '0px 0px 0.6em 0px rgba(0,0,0,0.2)',
      '&:hover': {
        background: '#ddecfd',
        boxShadow: 'unset',
      },
      '& .MuiButton-label': {
        color: `${theme.palette.secondary.main} !important`,
      },
    },
  },
  item: {
    padding: '1em 0px .4em',
  },
  orderContainer: {
    border: '1px solid #ededed',
    padding: '1em 1em',
    '& .MuiButton-text': {
      '&:hover': {
        background: '#ddecfd',
      },
      '& .MuiButton-label': {
        color: theme.palette.secondary.main,
      },
    },
  },
  emptyOrder: {
    margin: '10em 0px',
    textAlign: 'center',
  },
}));
