import { createNFT, createNFTCollection, uploadMetadata, uploadToIPFS } from "./utils";

(async function main() {
    const imageUri = await uploadToIPFS("assets/1.png");
    const metadataUri = await uploadMetadata({
        name: "ColCore",
        description: "This is a core NFT made by Rusty",
        image: imageUri!,
    });
    await createNFTCollection();
    await createNFT(metadataUri, "6QDQPNHRL47zxHkKuiXabVoqKT9nLPgp66hY6xTYb26V");
})();