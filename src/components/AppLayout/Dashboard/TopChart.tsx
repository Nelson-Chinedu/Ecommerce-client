import React, { FunctionComponent } from 'react';
import { ResponsiveContainer, AreaChart, Tooltip, Area } from 'recharts';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import { data } from 'src/components/constant/chartData';

const TopChart: FunctionComponent<{}> = () => {
  return (
    <Grid
      container
      justify="space-between"
      alignItems="flex-start"
      spacing={4}
      style={{ height: '200px' }}
    >
      <Grid item sm={3} style={{ height: '' }}>
        <Paper elevation={1}>
          <Typography variant="body2">Today Revenue</Typography>
          <Typography variant="h6">$8,521</Typography>
          <ResponsiveContainer width="100%" height="70%">
            <AreaChart
              height={100}
              data={data}
              margin={{
                top: 20,
                bottom: 15,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#188073"
                fill="#26CCB7"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item sm={3} style={{ height: '' }}>
        <Paper elevation={1}>
          <Typography variant="body2">Today Order</Typography>
          <Typography variant="h6">28,521</Typography>
          <ResponsiveContainer width="100%" height="70%">
            <AreaChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                bottom: 15,
              }}
            >
              <Tooltip />
              <Area
                type="natural"
                dataKey="uv"
                stroke="#B19517"
                fill="#FFD422"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item sm={3} style={{ height: '' }}>
        <Paper elevation={1}>
          <Typography variant="body2">Total Products</Typography>
          <Typography variant="h6">18,521</Typography>
          <ResponsiveContainer width="100%" height="70%">
            <AreaChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                bottom: 15,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#B23E48"
                fill="#FF5967"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
      <Grid item sm={3} style={{ height: '300px' }}>
        <Paper elevation={1}>
          <Typography variant="body2">Total Visitors</Typography>
          <Typography variant="h6">15,521</Typography>
          <ResponsiveContainer width="100%" height="70%">
            <AreaChart
              width={500}
              height={100}
              data={data}
              margin={{
                top: 20,
                bottom: 15,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#B23E48"
                fill="#FF5967"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TopChart;
