import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  concat,
  InMemoryCache,
} from '@apollo/client';
import { Detector } from 'react-detect-offline';
import { createUploadLink } from 'apollo-upload-client';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from 'store';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'src/components/Theme';

import '../styles/pages.scss';

import { UserContext } from 'src/components/context/userContext';
import { ProductListProvider } from 'src/components/context/userProductList-context';

import Snackbar from 'src/components/SharedLayout/Snackbar';

import { useStore } from 'src/store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const { uiStore } = useStore();

  const token = store.get('__cnt');
  const isLoggedIn: boolean = store.get('__clu');

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));

    return forward(operation);
  });

  //@ts-ignore
  const CreateUploadLink = new createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_BASE_URI}/graphql`,
  });

  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BASE_URI}/graphql`,
    cache: new InMemoryCache(),
    link: concat(authMiddleware, CreateUploadLink),
    credentials: 'include',
  });

  const handleClose = (_event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    uiStore.showSnackbar = false;
    uiStore.serverMessage = '';
  };

  if (process.env.NODE_ENV === 'production') {
    return (
      <Box style={{ width: '50%', margin: '4em auto', textAlign: 'center' }}>
        <Typography variant="subtitle1">
          Site under construction &lt; &#47; &gt;
        </Typography>
        <Typography variant="subtitle2">Check back later</Typography>
      </Box>
    );
  }
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
        />
      </Head>
      <Detector
        render={({ online }) =>
          !online && (
            <Box className="offlineWrapper">
              <Typography>You are currently offline</Typography>
            </Box>
          )
        }
      />
      <MuiThemeProvider theme={theme}>
        <UserContext.Provider value={{ isLoggedIn }}>
          <ApolloProvider client={client}>
            <ProductListProvider>
              <Component {...pageProps} />
            </ProductListProvider>
          </ApolloProvider>
        </UserContext.Provider>
      </MuiThemeProvider>
      {uiStore.serverMessage.length > 1 ? (
        <Snackbar
          open={uiStore.showSnackbar}
          handleClose={handleClose}
          message={uiStore.serverMessage}
          severity={uiStore.snackbarSeverity}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default observer(MyApp);
