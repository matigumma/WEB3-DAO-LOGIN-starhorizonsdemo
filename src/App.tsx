import React, { FC, useCallback, useMemo } from 'react';
import { WalletAdapterNetwork, WalletError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import { getPhantomWallet } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

import toast, { Toaster } from 'react-hot-toast';

import { Notification } from './Notification';
import { Navigation } from './Navigation';

const logo = "https://pbs.twimg.com/profile_images/1449229774212247554/ErJj99gm_400x400.jpg";

const App: FC = () => {
    // Can be set to 'devnet', 'testnet', or 'mainnet-beta'
    const network = WalletAdapterNetwork.Devnet;

    // You can also provide a custom RPC endpoint
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(() => [
        getPhantomWallet(),
    ], [network]);

    const onError = useCallback(
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
                <WalletModalProvider featuredWallets={1} logo={logo}>
                    <Navigation />
                </WalletModalProvider>
                <Toaster position="bottom-left" reverseOrder={false} />
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default App;