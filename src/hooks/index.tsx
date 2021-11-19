import React from 'react';

import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletError } from '@solana/wallet-adapter-base';

import toast, { Toaster } from 'react-hot-toast';
import { useLocalStorage } from 'react-use';

import { Notification } from '../Notification';

import logo from '../assets/sh.png';

export const AppProvider: React.FC = ({ children }) => {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta' // provide it from .env
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
    <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={wallets} onError={onError} autoConnect>
            <WalletModalProvider featuredWallets={1} logo={logo} className="classWalletModalLogo">
                {children}
            </WalletModalProvider>
            <Toaster position="bottom-left" reverseOrder={false} />
        </WalletProvider>
    </ConnectionProvider>
  );
};
