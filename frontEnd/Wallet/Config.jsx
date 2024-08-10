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
    address: "0xeD84e90812a18F10f4bB06eB5DCEa67E5061ABBC"
});

export { client, wallets, contract };
