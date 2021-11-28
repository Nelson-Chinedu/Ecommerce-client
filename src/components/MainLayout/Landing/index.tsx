import { useEffect, useContext } from 'react';
import { useRouter } from 'next/router';

import HeroSection from 'src/components/MainLayout/HeroSection';
import TopCategory from 'src/components/MainLayout/TopCategory';
import AvailableTrend from 'src/components/MainLayout/AvailableTrend';

import Footer from 'src/components/SharedLayout/Footer';
import { UserContext } from 'src/components/context/userContext';

const Landing = () => {
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
      <AvailableTrend />
      <Footer />
    </>
  );
};

export default Landing;
