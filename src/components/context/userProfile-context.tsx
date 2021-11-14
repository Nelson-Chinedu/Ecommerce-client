import { createContext } from 'react';
import { useQuery } from '@apollo/client';
import Typography from '@material-ui/core/Typography';

import { GET_PROFILE } from 'src/queries';

export const ProfileContext = createContext({
  firstname: '',
  lastname: '',
  country: '',
  city: '',
  emailAddress: '',
  phoneNumber: '',
  address: '',
  gender: '',
});

export const ProfileProvider = ({ children }: any) => {
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
      },
    },
  } = data;

  console.log(data, 'POP');

  return (
    <>
      <ProfileContext.Provider
        value={{
          firstname: firstname,
          lastname: lastname,
          country: country,
          city: city,
          emailAddress: email,
          phoneNumber: phoneNumber,
          gender: gender,
          address: address,
        }}
      >
        {children}
      </ProfileContext.Provider>
    </>
  );
};
