import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'white',
    width: '70%',
    padding: '2em 2em 3em',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    position: 'relative',
    maxHeight: '750px',
    // height: 'auto',
    overflowY: 'scroll',
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: '#FFF',
      },
    },
    '& .MuiPaper-root': {
      boxShadow: '0px !important',
    },
    '& .MuiTypography-subtitle2': {
      marginBottom: '.6em',
      fontWeight: 600,
    },
    '& .MuiTypography-body2': {
      marginBottom: '.6em',
    },
    '& .my-custom-react-select1__menu': {
      zIndex: 2,
    },
    '& .my-custom-react-select2__menu': {
      zIndex: 2,
    },
    '& .my-custom-react-select3__menu': {
      zIndex: 2,
    },
    '& .my-custom-react-select4__menu': {
      zIndex: 2,
    },
    '& .my-custom-react-select5__menu': {
      zIndex: 2,
    },
    '& .MuiCircularProgress-circle': {
      color: '#FFF',
    },
    '& .MuiLinearProgress-barColorPrimary': {
      background: theme.palette.secondary.main,
    },
    '& .MuiLinearProgress-dashedColorPrimary': {
      backgroundImage:
        'radial-gradient(#7b98a9 0%, #1172a9 16%, transparent 42%)',
    },
    '& .MuiLinearProgress-colorPrimary': {
      background: '#7cc3eb',
    },
  },
  tag: {
    border: '1px solid #e5e5ea',
  },
  fileUpload: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: `1px dashed ${theme.palette.secondary.main}`,
    borderRadius: '5px',
    padding: '2em',
    textAlign: 'center',
    height: '250px',
    cursor: 'pointer',
    marginBottom: '2em',
    '& input': {
      display: 'none',
    },
  },
  filePreview: {
    border: '1px solid #e5e5ea',
    borderRadius: '2px',
    padding: '.4em .8em',
    margin: '.9em 0px',
  },
  btnAction: {
    marginTop: '1em',
  },
  error: {
    color: '#f44336',
    marginLeft: '14px',
    marginRight: '14px',
    marginTop: '4px',
    fontSize: '12px',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontWeight: 400,
    lineHeight: 1.66,
    letterSpacing: '0.03333em',
  },
}));
