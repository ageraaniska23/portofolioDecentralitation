// ConnectButtonWrapper.jsx

import React from 'react';
import { ConnectButton } from 'thirdweb/react';
import { client, wallets } from './Config'; //import config setting untuk pengaturan wallet dan

export default function ConnectButtonWrapper() {
    // Jika tombol ditekan maka akan muncul modal dari ThirdWeb
    return <ConnectButton
        client={client}
        wallets={wallets}
        theme={"dark"}
        
    
        connectButton={{
            label: "Connect",
            className: "my-custom-class",
            style: {
                background: "#ffffff00",
                border: "1px solid #00eaff",
                color: "#00eaff",
            },
        }}
        detailsButton={{
            className: "my-custom-class",
            style: { 
                
                background: "#ffffff00",
            },
        }}
        connectModal={{
            size: "compact",
            title: "Agera Aniska",
            showThirdwebBranding: false,
        }}
    />;
}

