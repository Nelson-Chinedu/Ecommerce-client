import { FunctionComponent } from 'react';
import Image from 'next/image';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

import CustomerLayout from 'src/components/SharedLayout/CustomerLayout';

import { useStyles } from 'src/components/AppLayout/Customer/Inbox/styled.inbox';

const Inbox: FunctionComponent<{}> = () => {
  const classes = useStyles();

  return (
    <CustomerLayout>
      <Paper className={classes.main}>
        <Typography variant="h6">Inbox</Typography>
        <Divider />
        <Box
          style={{
            margin: '5em auto',
            width: '55%',
            textAlign: 'center',
          }}
        >
          <Image
            src="/image/empty.svg"
            width={100}
            height={100}
            alt="No message image preview"
          />
          <Box mt={1}>
            <Typography variant="subtitle2">
              You don't have any messages
            </Typography>
            <Typography variant="subtitle2">
              Here you will be able to see all the messages that we send you.
              Stay tuned
            </Typography>
          </Box>
        </Box>
      </Paper>
    </CustomerLayout>
  );
};

export default Inbox;
