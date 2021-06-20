import dynamic from 'next/dynamic';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'src/components/Theme';

const Landing = dynamic(() => import('src/components/MainLayout/Landing'), {
  loading: () => (
    <Box
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <Typography>page loading...</Typography>
    </Box>
  ),
  ssr: false,
});

const Index = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <Landing />
    </MuiThemeProvider>
  );
};

export default Index;
