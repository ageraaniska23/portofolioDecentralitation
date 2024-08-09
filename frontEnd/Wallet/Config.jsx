import { createWallet, walletConnect } from 'thirdweb/wallets';
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;
const secretKey = import.meta.env.VITE_THIRDWEB_SECRET_KEY;

const wallets = [
    // jenis wallet
    createWallet("io.metamask"),
    createWallet("com.trustwallet.app"),
    walletConnect(),
];

const client = createThirdwebClient(
    secretKey
        ? { secretKey }
        : {
            clientId,
        }
);

const contract = getContract({
    client,
    chain: defineChain(80002), 
    address: "0x65742875b059Ce21ac3f336a960e9A6C168D7582"
});

export { client, wallets, contract };
