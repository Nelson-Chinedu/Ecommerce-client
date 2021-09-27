import React from 'react';
import { AppProps } from 'next/app';
import Router from 'next/router';
import Head from 'next/head';
import {
  ApolloClient,
  ApolloProvider,
  ApolloLink,
  concat,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import store from 'store';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'src/components/Theme';

import '../styles/pages.scss';

import { UserContext } from 'src/components/context/userContext';

import Snackbar from 'src/components/SharedLayout/Snackbar';

import { useStore } from 'src/store';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const { uiStore } = useStore();
  const [open, setOpen] = React.useState(true);
  const httpLink = new HttpLink({
    uri: `${process.env.NEXT_PUBLIC_BASE_URI}/graphql`,
  });
  const token = store.get('__cnt');
  const isLoggedIn = store.get('__clu');

  const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
      },
    }));

    return forward(operation);
  });

  const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_BASE_URI}/graphql`,
    cache: new InMemoryCache(),
    link: concat(authMiddleware, httpLink),
    credentials: 'include',
  });

  const handleClose = (_event: unknown, reason: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
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
      <MuiThemeProvider theme={theme}>
        <UserContext.Provider value={{ isLoggedIn }}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </UserContext.Provider>
      </MuiThemeProvider>
      {uiStore.isLoggedIn ? (
        <Snackbar
          open={open}
          handleClose={handleClose}
          message={uiStore.loggedMessage}
        />
      ) : (
        ''
      )}
    </>
  );
}

export default MyApp;
