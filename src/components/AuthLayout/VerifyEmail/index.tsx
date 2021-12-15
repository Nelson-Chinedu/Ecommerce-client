import React, { FunctionComponent, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useStyles } from 'src/components/AuthLayout/VerifyEmail/styled.verifyEmail';

import Button from 'src/components/SharedLayout/Button';
import { EMAIL_VERIFICATION } from 'src/queries';

const VerifyEmail: FunctionComponent<{}> = () => {
  const classes = useStyles();
  const router = useRouter();
  const [verifyEmail] = useMutation(EMAIL_VERIFICATION);
  const [responseMessage, setResponseMessage] = useState<string>('');

  useEffect(() => {
    const { token } = router.query;
    if (token) {
      const fetchedData = async () => {
        try {
          const verification = await verifyEmail({
            variables: {
              token,
            },
          });
          if (verification) {
            const {
              data: {
                public: {
                  verifyEmail: { message },
                },
              },
            } = verification;
            setResponseMessage(message);
          }
        } catch (error: any) {
          if (error) {
            setResponseMessage('Sorry, something went wrong');
          }
        }
      };
      fetchedData();
    }
  }, [router.query.token]);

  if (responseMessage === 'Sorry, something went wrong') {
    return (
      <Box className={classes.container}>
        <Typography variant="subtitle2">{responseMessage}</Typography>
      </Box>
    );
  }
  return (
    <Box className={classes.container}>
      <Typography variant="subtitle2">{responseMessage}</Typography>
      <Link href="/auth/login">
        <Button
          type="button"
          disableElevation
          fullWidth
          variant="contained"
          color="secondary"
        >
          Login
        </Button>
      </Link>
    </Box>
  );
};

export default VerifyEmail;
