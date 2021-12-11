import { createContext } from 'react';
import store from 'store';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_PROFILE } from 'src/queries';

export const SettingContext = createContext({
  firstname: '',
  lastname: '',
  storeName: '',
  country: '',
  city: '',
  currency: '',
  emailAddress: '',
  phoneNumber: '',
  address: '',
  gender: '',
});

export const SettingProvider = ({ children }: any) => {
  const { loading, data, error } = useQuery(GET_PROFILE);
  const accountType = store.get('__cat');

  if (loading) return <Typography>Loading...</Typography>;

  if (error) return null;

  if (!data || data === undefined || accountType === 'c') return null;

  const {
    client: {
      getProfile: {
        firstname,
        lastname,
        gender,
        phoneNumber,
        account: { email },
        location: { address, city, country },
        store: { currency, name },
      },
    },
  } = data;

  return (
    <>
      <SettingContext.Provider
        value={{
          firstname: firstname,
          lastname: lastname,
          country: country,
          city: city,
          emailAddress: email,
          phoneNumber: phoneNumber,
          currency: currency,
          gender: gender,
          address: address,
          storeName: name,
        }}
      >
        {children}
      </SettingContext.Provider>
    </>
  );
};
