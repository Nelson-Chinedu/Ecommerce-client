import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Router, { useRouter } from 'next/router';
import Head from 'next/head';
import { observer } from 'mobx-react-lite';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  // concat,
  from,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { Detector } from 'react-detect-offline';
import { createUploadLink } from 'apollo-upload-client';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import 'react-loading-skeleton/dist/skeleton.css';
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
  const router = useRouter();

  const token = store.get('__cnt');
  const isLoggedIn: boolean = store.get('__clu');
  const accountType: string = store.get('__cat');

  useEffect(() => {
    if (router.pathname.includes('/app/m/') && accountType === 'c') {
      router.push('/app/c');
    }
    if (router.pathname.includes('/auth') && accountType === 'c') {
      router.push('/app/c');
    }
    if (router.pathname.includes('/app/c') && accountType === 'm') {
      router.push('/app/m/dashboard');
    }
    if (router.pathname.includes('/auth') && accountType === 'm') {
      router.push('/app/m/dashboard');
    }
  }, [router, token]);

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));

    return forward(operation);
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        if (message === 'Context creation failed: jwt expired') {
          store.remove('__cnt');
          store.remove('__clu');
          store.remove('__cat');
          window.location.href = '/auth/login';
          uiStore.serverMessage = 'Session expired, Login to continue';
          uiStore.snackbarSeverity = 'success';
          uiStore.showSnackbar = true;
        }
      });
    }

    if (networkError) console.log(`[Network error]: ${networkError}`);
  });

  //@ts-ignore
  const CreateUploadLink = new createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_BASE_URI}/graphql`,
  });

  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BASE_URI}/graphql`,
    cache: new InMemoryCache(),
    // link: concat(authMiddleware, CreateUploadLink),
    link: from([errorLink, authMiddleware, CreateUploadLink]),
    credentials: 'include',
  });

  const handleClose = (_event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    uiStore.showSnackbar = false;
    uiStore.serverMessage = '';
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          key="viewport"
        />
      </Head>
      {process.env.NODE_ENV !== 'development' && (
        <Detector
          render={({ online }) =>
            !online && (
              <Box className="offlineWrapper">
                <Typography>You are currently offline</Typography>
              </Box>
            )
          }
        />
      )}
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
