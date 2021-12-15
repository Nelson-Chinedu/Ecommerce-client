import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import HeroSection from 'src/components/MainLayout/HeroSection';
import TopCategory from 'src/components/MainLayout/TopCategory';
import AvailableTrend from 'src/components/MainLayout/AvailableTrend';

import Footer from 'src/components/SharedLayout/Footer';
import { UserContext } from 'src/components/context/userContext';

const Landing = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  const { isLoggedIn } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    if (isLoggedIn) {
      router.push('/app/c');
    }
  }, []);
  return (
    <>
      <HeroSection />
      <TopCategory />
      {!isMatch && <AvailableTrend />}
      <Footer />
    </>
  );
};

export default Landing;
