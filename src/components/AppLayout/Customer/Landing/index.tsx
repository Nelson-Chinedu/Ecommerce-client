import HeroSection from 'src/components/MainLayout/HeroSection';
import TopCategory from 'src/components/MainLayout/TopCategory';
import AvailableTrend from 'src/components/MainLayout/AvailableTrend';

import Footer from 'src/components/SharedLayout/Footer';

const Landing = () => {
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
