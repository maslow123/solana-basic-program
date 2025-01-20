import * as web3 from "@solana/web3.js";

const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

const main = async () => {
    const key: Uint8Array = new Uint8Array([]); // your private key
    const signer = web3.Keypair.fromSecretKey(key);
    const programId: web3.PublicKey = new web3.PublicKey(""); // your programId
    let transaction = new web3.Transaction();
    transaction.add(
        new web3.TransactionInstruction({
            keys: [],
            programId,
            data: Buffer.alloc(0)
        })
    )

    await web3.sendAndConfirmTransaction(connection, transaction, [signer])
    .then((signature) => {
        console.log('Transaction confirmed. Signature:', signature);
    }
    ).catch((err) => {
        console.error('Transaction failed:', err);
    });
}

main();
