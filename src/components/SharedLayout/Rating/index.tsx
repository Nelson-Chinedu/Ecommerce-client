import React, { useState, FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';

import { labels } from 'src/components/constant/ratingLabels';

import { useStyles } from 'src/components/SharedLayout/Rating/styled.rating';

const HoverRating: FunctionComponent<{}> = () => {
  const [value, setValue] = useState<number | null>(2);
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={3.5}
        classes={{ iconHover: classes.test }}
        onChange={(_event, newValue) => {
          setValue(newValue);
        }}
        onChangeActive={(_event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={
          <StarBorderIcon fontSize="inherit" className={classes.emptyStar} />
        }
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  );
};

export default HoverRating;
