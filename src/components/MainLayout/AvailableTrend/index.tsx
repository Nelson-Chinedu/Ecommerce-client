import { FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import Button from 'src/components/SharedLayout/Button';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    backgroundColor: 'black',
  },
  imgWrapper: {
    opacity: '.3',
    height: '500px',
    overflow: 'hidden',
  },
  textWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    '& > *': {
      color: 'white',
      textAlign: 'center',
    },
  },
  btnAction: {
    width: '50%',
    margin: '5% auto',
  },
});

const AvailableTrend: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container style={{ background: '' }}>
        <Grid item sm={6} className={classes.imgWrapper}>
          <Image
            src="/image/ct-5.jpg"
            width={1000}
            height={800}
            objectFit="cover"
            objectPosition="top"
          />
        </Grid>
        <Grid item sm={6} className={classes.imgWrapper}>
          <Image
            src="/image/ct-2.jpg"
            width={1000}
            height={800}
            objectFit="cover"
            objectPosition="center"
          />
        </Grid>
      </Grid>
      <Box className={classes.textWrapper}>
        <Typography variant="h4">Gucci now available in new trends</Typography>
        <Typography variant="h5">Now in new colors</Typography>
        <Grid container justify="space-around" className={classes.btnAction}>
          <Grid item>
            <Button variant="outlined" color="secondary" className="">
              FOR HER
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" className="">
              FOR HIM
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AvailableTrend;
