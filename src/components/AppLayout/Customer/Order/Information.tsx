import { FunctionComponent } from 'react';
import Box from '@material-ui/core/Box';

import { useStyles } from 'src/components/AppLayout/Customer/Order/styled.order';

const Information: FunctionComponent<{}> = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.informationWrapper}>{children}</Box>;
};

export default Information;
