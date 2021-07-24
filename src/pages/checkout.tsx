import React from 'react';
import dynamic from 'next/dynamic';

const Checkout = dynamic(() => import('src/components/MainLayout/Checkout'), {
  ssr: false
});

const CheckoutPage = () => {
  return <Checkout />;
};

export default CheckoutPage;
