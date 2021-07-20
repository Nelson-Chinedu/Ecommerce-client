import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
    '& .MuiSvgIcon-root': {
      '& > *': {
        color: '#FFF',
        marginLeft: '4em',
      },
    },
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
    transform: 'translate(-50%, -50%)',
    '& > *': {
      color: '#000',
      textAlign: 'center',
    },
  },
  btnAction: {
    width: '50%',
    margin: '5% auto',
  },
  btnForHim: {
    '& > *': {
      color: '#FFF',
    },
  },
});
