import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    margin: 'auto',
    '& .MuiTypography-h4': {
      textAlign: 'center',
      padding: '20px 0px',
      fontWeight: 500,
    },
    '& a': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiTabs-fixed': {
      // backgroundColor: 'blue'
    },
    '& .MuiBox-root-40': {
      padding: '20px',
    },
    [theme.breakpoints.down('sm')]: {
      '& .middle': {
        flexDirection: 'column',
        alignItems: 'flex-start !important',
        justifyContent: 'flex-start',
      },
    },
  },
  wrapper: {
    // width: '87%',
    margin: '20px auto',
  },
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
  icon: {
    marginLeft: '.2em',
    '& > *': {
      color: theme.palette.primary.main,
      border: '1px solid green',
    },
  },
  // productContainer: {
  //   overflow: 'hidden',
  //   boxShadow: '0px 2px 10px 0px rgb(0, 0, 0, .1)',
  //   '& .MuiBox-root': {
  //     overflow: 'hidden',
  //     transition: 'transform .4s',
  //   },
  //   '&:hover': {
  //     cursor: 'pointer',
  //     border: `1px solid ${theme.palette.secondary.main}`,
  //     boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
  //     '& .MuiButton-outlined': {
  //       display: 'block',
  //     },
  //   },
  //   '& img': {
  //     border: '4px solid green',
  //   },
  //   '&:hover .MuiBox-root': {
  //     overflow: 'hidden',
  //     transform: 'scale(1.1)',
  //   },
  //   '& .MuiButton-outlined': {
  //     // display: 'none',
  //     marginTop: '1em',
  //     '&:hover': {
  //       background: theme.palette.secondary.main,
  //       '& .MuiButton-label': {
  //         color: 'white',
  //       },
  //     },
  //   },
  // },
  productContainer: {
    boxShadow: '0px 2px 10px 0px rgb(0, 0, 0, .1)',
    '&:hover': {
      cursor: 'pointer',
      border: `1px solid ${theme.palette.secondary.main}`,
      transition: 'border 4s ease-in-out',
      boxShadow: '0px 2px 4px rgba(0,0,0,0.2)',
      overflow: 'hidden',
      '& .MuiButton-outlined': {
        display: 'block',
      },
      '& .imageContainer': {
        overflow: 'hidden',
        transform: 'scale(1.1)',
        transition: 'transform 1s ease-in-out',
      },
    },
    //   '& .MuiButton-outlined': {
    //     // display: 'none',
    //     marginTop: '1em',
    //     '&:hover': {
    //       background: theme.palette.secondary.main,
    //       '& .MuiButton-label': {
    //         color: 'white',
    //       },
    //     },
    //   },
  },
  oldPrice: {
    color: '#75757A',
    fontSize: '13px',
  },
  productName: {
    textTransform: 'capitalize',
  },
  favouriteIcon: {
    '& > *': {
      color: 'red',
    },
  },
  btnSeeAll: {
    margin: '2em 0px',
    '& .MuiButton-contained': {
      '& .MuiButton-label': {
        color: 'white',
      },
    },
  },
  storeName: {
    fontSize: '12px',
    color: '#9B9B9B',
  },
  divider: {
    margin: '.3em 0px',
    padding: '.2em 0px',
  },
  productWrapper: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    columnGap: theme.spacing(4),
    rowGap: theme.spacing(4),
    margin: '2em auto',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      gridTemplateColumns: '50% 50%',
      columnGap: theme.spacing(2),
      rowGap: theme.spacing(2),
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    '& .top, & .middle, & .bottom': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '.5em .8em',
      [theme.breakpoints.down('sm')]: {
        '& .middle': {
          border: '1px solid blue',
          display: 'flex',
          flexDirection: 'column !important',
        },
      },
    },
  },
}));
