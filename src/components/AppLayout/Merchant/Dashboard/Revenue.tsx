import React, { FunctionComponent } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { revenue } from 'src/components/constant/revenues';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

import TextInput from 'src/components/SharedLayout/TextInput';

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      height: '350px !important',
    },
  },
  thisYearContainer: {
    border: '1px solid #1d14146b',
    padding: '0px .5em',
  },
  lastYearContainer: {
    border: '1px solid #1d14146b',
    padding: '0px .5em',
  },
  thisYear: {
    display: 'inline-block',
    background: '#26CCB7',
    padding: '.2em',
    width: '10px',
    height: '10px',
  },
  lastYear: {
    display: 'inline-block',
    background: '#FFD422',
    padding: '.2em',
    width: '10px',
    height: '10px',
  },
});

const Revenue: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper>
        <Grid container justify="space-between" alignItems="center">
          <Grid item sm={6}>
            <Grid container justify="space-between">
              <Grid item>
                <Typography variant="body1">Revenue</Typography>
              </Grid>
              <Grid item>
                <Box className={classes.thisYearContainer}>
                  <Typography variant="body1">
                    <span className={classes.thisYear} /> This Year
                  </Typography>
                </Box>
              </Grid>
              <Grid item>
                <Box className={classes.lastYearContainer}>
                  <Typography variant="body1">
                    <span className={classes.lastYear} /> Last Year
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item sm={2}>
            <TextInput
              select
              variant="outlined"
              fullWidth
              size="small"
              color="secondary"
              defaultValue="default"
            >
              <MenuItem value="default">Year</MenuItem>
            </TextInput>
          </Grid>
        </Grid>
        <ResponsiveContainer width="100%" height="90%">
          <AreaChart
            data={revenue}
            margin={{ top: 30, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#26CCB7" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#26CCB7" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#FFD422" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#FFD422" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" axisLine={false} />
            <YAxis axisLine={false} />
            <CartesianGrid strokeDasharray="3 " vertical={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="this_year"
              stroke="#188073"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="last_year"
              stroke="#B19517"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </Paper>
    </Box>
  );
};

export default Revenue;
