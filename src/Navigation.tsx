import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import React, { FC } from 'react';
import { useLocalStorage, useSearchParam } from 'react-use';
// import Check from './App';
import { getAuth, signInWithCustomToken, User } from 'firebase/auth';
import sh from './assets/ç.png';
import { useHistory } from 'react-router';
import { useFirebaseApp } from 'reactfire';

interface Nav {
  user?: User | null;
}

export const Navigation: FC<Nav> = ({user}) => {
  const fbapp = useFirebaseApp();
  const auth = getAuth(fbapp);
  const { wallet, connecting, connected, publicKey  } = useWallet();
  const { location } = useHistory();
  const code = useSearchParam('code');
  const access_token = useSearchParam('access_token');
  const token_type = useSearchParam('token_type');
  const [value, setValue ] = useLocalStorage('autoconnect');
  const [auto, setAuto] = React.useState(value==='0' || value === undefined  ? false : true);
  
  React.useEffect(() => {
    setValue(auto ? '1' : '0');
  },[auto, setValue]);
  
  
  React.useEffect(() => {
    if(wallet && publicKey) {
      console.log('wallet: ', wallet);
      console.log('publicKey: ', publicKey);
    }
  }, []);
  
  
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

return (
  <main>
  <div
  id="nav"
  className="fixed inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out bg-transparent border-b border-transparent text-primary-content text-base-content"
  >
  <div className="mx-auto space-x-1 navbar max-w-none">
  <div className="flex-none">{/**/}</div>{' '}
  <div className="flex items-center flex-none">
  <a
  href="/"
  aria-current="page"
  className="pl-2 font-mono text-xs opacity-80"
  aria-label="Homepage"
  >
  <div data-tip="star horizons" className="tooltip tooltip-bottom">
  <span className="hidden lg:inline xl:ml-2">demo solana wallet login</span>
  </div>
  </a>
  </div>{' '}
  <a
  href="/#"
  target="_blank"
  rel="nofollow noreferrer"
  className="hidden pl-2 font-mono text-xs opacity-80"
  >
  <div className="inline-block text-3xl font-title text-primary">
  <span className="uppercase text-base-content">SH</span>
  </div>
  </a>{' '}
  <div className="flex-1" />{' '}
  {!connecting && connected && wallet && (<>
    <span className="inline xl:ml-2">auto-connect-wallet</span>
    <input type="checkbox" checked={auto} className="toggle" onChange={()=> setAuto(!auto)}/>
    </>
    )}
    {!connecting && connected && wallet && <WalletDisconnectButton className="lg:btn-lg btn btn-ghost" />}
    <div title="Github ↗︎" className="items-center flex-none">
    <a
    aria-label="Github"
    target="_blank"
    href="https://github.com/matigumma/starhorizonsdemo"
    rel="noopener noreferrer"
    className="normal-case btn btn-ghost drawer-button btn-square"
    >
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="inline-block w-6 h-6 fill-current"
    >
    <path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z" />
    </svg>
    </a>
    </div>
    </div>
    </div>{' '}
    <div>
    <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-neutral-focus via-primary to-neutral-focus text-primary-content">
    
    <div className="inline-block w-full transform scale-125 opacity-5 -rotate-12 text-neutral">
    {/* ?xml version="1.0" encoding="UTF-8"? */}
    <span>STAR HORIZONS</span>
    </div>{' '}
    <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
    <h1 className="py-4 mb-2 font-extrabold text-center font-title lg:py-10 lg:py-0">
    <div className="text-4xl">
    Member verification
    </div>
    </h1>{' '}
    <div className="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
    <img 
    alt=""
    src={sh}
    className="flex-1 w-full max-w-xs lg:mx-0" 
    />{' '}
    <div className="flex flex-col max-w-sm gap-2 my-2 text-left">
    {/* discord */}
    <div className="flex gap-2">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
    >
    <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    </svg>
    <span style={{color: '#999'}}>Connect with Discord</span>
    </div>{' '}
    {/* wallet */}
    <div className="flex gap-2">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    color={!connecting && connected && wallet ? '#12d612' : 'none'}
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
    >
    <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    </svg>
    <span style={!connecting && connected && wallet ? {color: '#fff'} : {color: '#999'}}>Connect{!connecting && connected && wallet && 'ed'} with your wallet</span>
    </div>{' '}
    <div className="flex gap-2">
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    className="inline-block w-6 h-6 stroke-current"
    >
    <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
    </svg>
    Join!
    </div>
    </div>
    </div>{' '}
    <div className="flex justify-center flex-1 mt-4 space-x-2 lg:mt-12 lg:justify-start">
    <a
    href="https://discord.com/api/oauth2/authorize?client_id=908033603190013952&redirect_uri=https%3A%2F%2Fstarhorizonsdemo.web.app%2Fcallback&response_type=code&scope=identify%20email%20guilds%20guilds.join"
    target="_blank"
    className="lg:btn-lg btn btn-ghost" rel="noreferrer"
    >
    discord
    {/* <span className="hidden md:inline">See</span>&nbsp; components */}
    </a>{' '}
    <WalletMultiButton className="shadow-2xl lg:btn-lg btn" />
    {/* <Check><h2>Connected Successfully 👍</h2></Check> */}
    {/* <a href="/#" className="shadow-2xl lg:btn-lg btn">
    CTA
  </a> */}
  </div>
  </div>
  </div>{' '}
  </div>
  </main>
  );
};