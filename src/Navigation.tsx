import React, { FC } from 'react';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDisconnectButton, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import { useLocalStorage } from 'react-use';

import sh from './assets/ç.png';

export const Navigation: FC = () => {
   const { wallet, connecting, connected } = useWallet();
   // mock discord login state
   const [discordConnected, setDiscordConnected] = React.useState(false);
   const [lsprofile, setLsProfile] = useLocalStorage<any>('DISCORD_PROFILE');
   
   // validate discord token?
   React.useEffect(() => {
      if(lsprofile) {
         setDiscordConnected(true);
      }
   }, [lsprofile]);
   
   return (
      <main>
         <div className="min-h-screen pt-16 overflow-hidden hero bg-gradient-to-br from-neutral-focus via-primary to-neutral-focus text-primary-content">
         {/* nav */}
         <div
            id="nav"
            className="fixed inset-x-0 top-0 z-50 w-full transition duration-200 ease-in-out bg-transparent border-b border-transparent text-base-content"
            >
            <div className="w-full mx-auto space-x-1 navbar max-w-none">
               <div className="flex-none">{/**/}</div>
               {' '}
               <div className="flex items-center flex-none">
                  <a
                     href="/"
                     aria-current="page"
                     className="pl-2 font-mono text-xs opacity-80"
                     aria-label="Homepage"
                     >
                     <div data-tip="star horizons" className="tooltip tooltip-bottom">
                        <span className="hidden ml-2 lg:inline">demo solana wallet login</span>
                     </div>
                  </a>
               </div>
               {' '}
               <a
                  href="/#"
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="hidden pl-2 font-mono text-xs opacity-80"
                  >
                  <div className="inline-block text-3xl font-title text-primary">
                     <span className="uppercase text-base-content">SH</span>
                  </div>
               </a>
               {' '}
               <div className="flex-1" />
                  {' '}
                  {!connecting && connected && wallet && 
                  <WalletDisconnectButton className="lg:btn-lg btn btn-ghost" />
                  }
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
            </div>
            {/* content */}
            <div className="flex-col justify-between w-full max-w-6xl mt-10 mb-48 hero-content">
               <div className="flex flex-col items-center justify-center w-full space-y-10 lg:space-x-4 lg:space-y-0 lg:flex-row">
                  <img 
                     alt=""
                     src={sh}
                     className="flex-1 w-full max-w-xs lg:mx-0" 
                     />{' '}
                  <div className="flex flex-col items-center justify-center max-w-sm gap-2 my-2 text-left">
                     {discordConnected && (
                        <div className="flex flex-col items-center justify-center mb-8">
                           <div className="avatar">
                              <div className="w-24 h-24 mb-8 mask mask-hexagon">
                                 <img src={lsprofile?.avatar} alt={lsprofile?.nickname}/>
                              </div>
                           </div>
                           <span>{lsprofile?.nickname}</span>
                        </div> 
                     )}
                     {/* discord */}
                     <div className="flex items-center gap-2">
                        {discordConnected ? (<>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              color="#12d612"
                              className="inline-block w-6 h-6 stroke-current"
                              >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                           </svg>
                           <span className="ml-2">Connected to Discord</span>
                        </>
                        ) : (
                        <a
                           href={`https://discord.com/api/oauth2/authorize?client_id=908033603190013952&redirect_uri=https%3A%2F%2Fstarhorizonsdemo.web.app%2Fcallback&response_type=code&scope=identify%20email%20guilds%20guilds.join`}
                           className="flex justify-between btn btn-ghost" rel="noreferrer"
                           >
                           <svg width={71} height={55} viewBox="0 0 71 55" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline-block w-6 h-6 stroke-current">
                              <g clipPath="url(#clip0)">
                                 <path d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z" fill="#ffffff" />
                              </g>
                              <defs>
                                 <clipPath id="clip0">
                                    <rect width={71} height={55} fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                           <span className="ml-2">Connect with Discord</span>
                        </a>
                        )}
                     </div>
                     {' '}
                     {/* wallet */}
                     <div className="flex items-center gap-2">
                        {!connecting && connected && wallet ? <>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              color="#12d612"
                              className="inline-block w-6 h-6 stroke-current"
                              >
                              <path
                                 strokeLinecap="round"
                                 strokeLinejoin="round"
                                 strokeWidth={2}
                                 d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                 />
                           </svg>
                           <span className="ml-2">Connected with your wallet</span>
                        </>
                        : <WalletMultiButton className="btn btn-ghost" disabled={!discordConnected}>
                              Connect with your wallet
                           </WalletMultiButton>
                        }

                     </div>
                     {' '}
                  </div>
               </div>
               {' '}
            </div>
         </div>
      </main>
   );
};