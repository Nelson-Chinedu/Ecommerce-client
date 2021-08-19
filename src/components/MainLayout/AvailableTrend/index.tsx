import { FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';

import Button from 'src/components/SharedLayout/Button';

import { useStyles } from 'src/components/MainLayout/AvailableTrend/styled.availableTrend';

const AvailableTrend: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Grid container style={{ background: '' }}>
        <Grid item sm={6} className={classes.imgWrapper}>
          <Image
            src="/image/woman.jpeg"
            width={1000}
            height={700}
            objectFit="cover"
            objectPosition="top"
            loading="lazy"
          />
        </Grid>
        <Grid item sm={6} className={classes.imgWrapper}>
          <Image
            src="/image/man.jpeg"
            width={1000}
            height={700}
            objectFit="cover"
            objectPosition="top"
          />
        </Grid>
      </Grid>
      <Box className={classes.textWrapper}>
        <Typography variant="h4">Gucci now available in new trends</Typography>
        {/* <Typography variant="h5">Now in new colors</Typography> */}
        <Grid container justify="space-around" className={classes.btnAction}>
          <Grid item>
            <Button
              variant="outlined"
              color="primary"
              disableElevation={true}
              fullWidth={true}
              className={classes.btnForHer}
            >
              <KeyboardBackspaceIcon /> {' '} FOR HER
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              className={classes.btnForHim}
              disableElevation={true}
              fullWidth={true}
            >
              FOR HIM {' '} <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AvailableTrend;
