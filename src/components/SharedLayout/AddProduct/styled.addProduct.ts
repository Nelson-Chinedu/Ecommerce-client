import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: 'white',
    width: '70%',
    padding: '3em 2em',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    left: '50%',
    position: 'relative',
    height: 'auto',
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
    },
    '& .MuiTypography-body2': {
      marginBottom: '.6em',
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
}));
