import { TransactionBuilderSendAndConfirmOptions } from '@metaplex-foundation/umi';
import dotenv from 'dotenv';

dotenv.config();

export const PINATA_APIKEY = process.env.PINATA_APIKEY!;
export const PAYER_PRIVATEKEY = process.env.PRIVATE_KEY!;
export const OWNER_PUBKEY = process.env.OWNER_PUBKEY!;
export const CLUSTERS = process.env.NET == 'dev' ? process.env.DEVNET_RPC! : process.env.MAINNET_RPC!;
export const TX_CONFIG: TransactionBuilderSendAndConfirmOptions = {
    send: { skipPreflight: true },
    confirm: { commitment: 'confirmed' },
};
export const PINATA_FILE_URL = "https://api.pinata.cloud/pinning/pinFileToIPFS";
export const PINATA_ORIGIN_URL = "https://gateway.pinata.cloud/ipfs";
