import React, { FC } from 'react';

import { useSearchParam } from 'react-use';

// import sh from './assets/ç.png';

export const Callback: FC = () => {
  //move to callback route
  const code = useSearchParam('code');

/* async function callcode(cod: string) {
  try {
    const oauthResult = await fetch('https://discordapp.com/api/oauth2/token', {
      method: 'POST',
      body: new URLSearchParams({
        client_id: '908033603190013952',
        client_secret: '3aqFbKCfG8C-AMO4i1J6-N76dps24Jv-',
        code: cod,
        grant_type: 'authorization_code',
        redirect_uri: `http://localhost:3000/callback`,
        scope: 'identify',
      }),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    const oauthData = await oauthResult.json();

    const userResult = await fetch('https://discord.com/api/users/@me', {
      headers: {
        authorization: `${oauthData.token_type} ${oauthData.access_token}`,
      },
    });

    console.log(await userResult.json());
  } catch (error) {
    console.error(error);
  }
} */

  //move to callback 
  React.useEffect(() => {
      console.log('code: ', code);
      if (code) {
        // fetch('https://us-central1-starhorizonsdemo.cloudfunctions.net/discordRequest')
        fetch(`http://localhost:5001/starhorizonsdemo/us-central1/discordRequest?code=${code}`)
        .then(res => console.log(res))
        .catch(e => console.error(e));
      }
}, [])

return (<>
<div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-neutral-focus via-primary to-neutral-focus text-primary-content">
  <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
    <p>
    </p>
  </div>
</div>
</>)
}