import { createContext } from 'react';
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
  const { loading, data } = useQuery(GET_PROFILE);

  if (loading) return <Typography>Loading...</Typography>;

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
