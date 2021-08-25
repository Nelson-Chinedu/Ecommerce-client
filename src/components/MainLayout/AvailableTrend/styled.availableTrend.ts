import { makeStyles, Theme} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    position: 'relative',
    '& .MuiSvgIcon-root': {
      '& > *': {
        color: '#FFF',
        marginLeft: '4em',
      },
    },
    '& .MuiTypography-h4':{
      fontWeight: 600
    }
  },
  imgWrapper: {
    height: '500px',
    overflow: 'hidden',
    margin: '0px',
    padding: '0px',
  },
  textWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '35%',
    transform: 'translate(-50%, -50%)',
    '& > *': {
      color: '#000',
      textAlign: 'center',
    },
  },
  btnAction: {
    width: '60%',
    margin: '5% auto',
  },
  btnForHim: {
    '& > *': {
      color: '#FFF',
    },
  },
  btnForHer:{
    '& > *': {
      color: theme.palette.primary.main
    },
    '& .MuiSvgIcon-root':{
      '& > *':{
        color: 'red'
      }
    }
  }
}));
