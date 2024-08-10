import { createWallet, walletConnect } from 'thirdweb/wallets';
import { createThirdwebClient, getContract } from "thirdweb";
import { defineChain } from "thirdweb/chains";

const clientId = import.meta.env.VITE_THIRDWEB_CLIENT_ID;
const secretKey = import.meta.env.VITE_THIRDWEB_SECRET_KEY;

const wallets = [
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
    address: "0x80C9c023b66CA3d7F6e7560A6A501892159Ffa43"
});

export { client, wallets, contract };
