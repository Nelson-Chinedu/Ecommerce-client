import React, { FunctionComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const TotalVisitor: FunctionComponent<{}> = () => {
  return (
    <Paper elevation={1}>
      <Typography variant="body2">Total Visitors</Typography>
      <Typography variant="h6">15,521</Typography>
    </Paper>
  );
};

export default TotalVisitor;
