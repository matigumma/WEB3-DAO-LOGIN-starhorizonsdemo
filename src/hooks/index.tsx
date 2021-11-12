import React from 'react';
import { AuthProvider } from 'reactfire';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletError } from '@solana/wallet-adapter-base';
import toast from 'react-hot-toast';

import { Toaster } from 'react-hot-toast';
import { Auth } from 'firebase/auth';
import { Notification } from '../Notification';

// Hooks providers
// import { ToastProvider } from './toast';
// import { CamerasProvider } from './cameras';
// export const Firestore = ({
//   children,
// }: {
//   children: JSX.Element;
// }): JSX.Element => {
//   const { status, data: firestoreInstance } = useInitFirestore(
//     async firebaseApp => {
//       const db = initializeFirestore(firebaseApp, {});
//       return db;
//     },
//   );

//   if (status === 'loading') {
//     return <MainFallback />;
//   }

//   return (
//     <FirestoreProvider sdk={firestoreInstance}>{children}</FirestoreProvider>
//   );
// };
import logo from '../assets/sh.png';
import { useLocalStorage } from 'react-use';

interface Ap {
  sdk: Auth;
}

export const AppProvider: React.FC<Ap> = ({
  children,
  sdk: firebaseAppAuth,
}: React.PropsWithChildren<{
    sdk: Auth
  }>) => {
    const [value, setValue ] = useLocalStorage('autoconnect');
    React.useEffect(() => {
        if(value === undefined) setValue('0');
    },[]);
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = React.useMemo(() => clusterApiUrl(network), [network]);

    const wallets = React.useMemo(() => [
        getPhantomWallet(),
    ], [network]);

    const onError = React.useCallback(
      (error: WalletError) =>
          toast.custom(
              <Notification
                  message={error.message ? `${error.name}: ${error.message}` : error.name}
                  variant="error"
              />
          ),
      []
  );
  
  return (
    <AuthProvider sdk={firebaseAppAuth} >
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} onError={onError} autoConnect={value==='0' ? false : true}>
                <WalletModalProvider featuredWallets={1} logo={logo} className="classWalletModalLogo">
                    {children}
                </WalletModalProvider>
                <Toaster position="bottom-left" reverseOrder={false} />
            </WalletProvider>
        </ConnectionProvider>
    </AuthProvider>
  );
};
