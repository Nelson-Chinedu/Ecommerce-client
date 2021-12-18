import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  navbar: {
    '& .MuiTabs-indicator': {
      background: theme.palette.secondary.main,
    },
  },
  nav: {
    display: 'flex',
    position: 'sticky',
    bottom: '0',
    justifyContent: 'space-around',
    padding: '15px 10px',
    backgroundColor: theme.palette.secondary.light,
    margin: '20px auto',
    listStyle: 'none',
    cursor: 'pointer',
    '& > *': {
      display: 'flex',
      alignItems: 'center',
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  appBar: {
    background: 'white',
    position: (props: any) => (props.isVisble ? 'unset' : 'fixed'),
  },
}));
