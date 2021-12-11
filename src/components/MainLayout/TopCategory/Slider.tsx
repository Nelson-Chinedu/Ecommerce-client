import { FunctionComponent } from 'react';
import Image from 'next/image';
import Carousel from 'react-elastic-carousel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
// import { makeStyles } from '@material-ui/core/styles';

import { useStyles } from 'src/components/MainLayout/TopCategory/styled.topCategory';

import slides from 'src/components/constant/slides'

type Props = {
  id: number;
  title: string;
}

const Slider: FunctionComponent<{}> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography variant="h4">Top Categories</Typography>
      <Carousel
        isRTL={false}
        itemsToShow={4}
        enableAutoPlay={true}
        itemPadding={[10, 20]}
        disableArrowsOnEnd={true}
      >
        {slides.map((slide: Props) => (
          <Image key={slide.id} src={slide.title} width={250} height={250} />
        ))}
      </Carousel>
    </Box>
  );
};

export default Slider;
