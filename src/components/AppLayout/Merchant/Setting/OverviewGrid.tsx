import React, { ReactNode } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';

type Props = {
  cardTitle: string;
  handleClick: () => void;
  children: ReactNode;
};

const OverviewGrid = ({ cardTitle, handleClick, children }: Props) => {
  return (
    <Grid item sm={6}>
      <Box
        style={{
          border: '1px solid #e5e5ea',
          borderRadius: '5px',
          margin: '1em 0px',
          height: '200px',
        }}
      >
        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="space-between"
          style={{ padding: '5px 10px' }}
        >
          <Grid item>
            <Typography variant="subtitle2">{cardTitle}</Typography>
          </Grid>
          <Grid item>
            <IconButton size="medium" onClick={handleClick}>
              <EditIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item sm={12}>
            <Divider />
          </Grid>
        </Grid>
        <Grid container style={{ padding: '10px 15px' }}>
          <Grid item>{children}</Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default OverviewGrid;
