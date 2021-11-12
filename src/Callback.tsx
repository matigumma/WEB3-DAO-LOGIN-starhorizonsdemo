import React, { FC } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { useLocalStorage, useSearchParam } from 'react-use';
import { useHistory } from 'react-router';

import sh from './assets/ç.png';
import { resourceUsage } from 'process';

export const Callback: FC = () => {
  //move to callback route
  const code = useSearchParam('code');
  const access_token = useSearchParam('access_token');
  const token_type = useSearchParam('token_type');

  //move to callback 
  React.useEffect(() => {
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
        
        //call internal api to save user
      })
      .catch(console.error);
    }
}, [])

return (<>
<div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-neutral-focus via-primary to-neutral-focus text-primary-content">
  <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
    <p>
      Code: {code}
      {' '}
      AT: {access_token}
      {' '}
      
    </p>
  </div>
</div>
</>)
}