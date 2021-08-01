import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: '2em',
    '& .MuiOutlinedInput-adornedEnd': {
      padding: '3px 5px',
    },
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(1),
    },
    '& .MuiTypography-body2': {
      textAlign: 'center',
      marginBottom: theme.spacing(2),
    },
    '& .MuiButton-label': {
      color: 'white',
    },
    '& .MuiTab-root': {
      border: '1px solid #c7c7c7c7',
      margin: '10px',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
    },
    '& .Mui-selected': {
      border: `1px solid ${theme.palette.secondary.main}`,
      '& .MuiTab-wrapper': {
        color: theme.palette.secondary.main,
      },
    },
    '& .MuiTabs-indicator': {
      background: 'none',
    },
    '& .MuiAccordionDetails-root': {
      '& .MuiTypography-body2': {
        textAlign: 'left',
        lineHeight: theme.spacing(0.25),
      },
    },
    '& .MuiAccordionSummary-content': {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
  },
  search: {
    width: '40%',
    margin: 'auto',
    textAlign: 'center',
  },
  searchInput: {
    margin: theme.spacing(3),
  },
}));
