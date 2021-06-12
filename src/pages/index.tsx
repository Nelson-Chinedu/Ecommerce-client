import dynamic from 'next/dynamic';
import { MuiThemeProvider } from '@material-ui/core/styles';

import theme from 'src/components/Theme';

const Landing = dynamic(() => import('src/components/MainLayout/Landing'), {
  loading: () => <p>loading...</p>,
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
