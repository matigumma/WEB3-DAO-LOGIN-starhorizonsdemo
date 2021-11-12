import React, { FC } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { useLocalStorage, useSearchParam } from 'react-use';
import { useHistory } from 'react-router';

import sh from './assets/ç.png';

export const Callback: FC = () => {
  //move to callback route
  const code = useSearchParam('code');
  const access_token = useSearchParam('access_token');
  const token_type = useSearchParam('token_type');

  //move to callback 
  React.useEffect(() => {
    if(location.pathname === '/callback'){
      console.log('code: ', code);
      console.log('access_token: ', access_token);
      console.log('token_type: ', token_type);
      
      if(token_type && access_token) {
        fetch('https://discord.com/api/users/@me', {
        headers: {
          authorization: `${token_type} ${access_token}`,
        },
      })
      .then(result => result.json())
      .then(response => {
        const { username, discriminator } = response;
        console.log(`api/user: ${username}#${discriminator}`);
        signInWithCustomToken(auth, access_token)
        .then((userCredential) => {
          // Signed in
          console.log('userCredential.user: ', userCredential.user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
        });
      })
      .catch(console.error);
    }
  }
  
}, [location])


}