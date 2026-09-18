import { Client } from "basic-ftp";
import path from "path";

async function deploy() {
  const client = new Client();
  client.ftp.verbose = true;

  try {
    console.log("Connessione ad Aruba FTP in corso...");
    await client.access({
      host: "ftp.ethostrainingclub.it", // oppure l'IP / host FTP fornito da Aruba
      user: "19114883@aruba.it",
      password: "Ethos2026$",
      secure: false
    });

    console.log("Sincronizzazione della cartella dist su www.ethostrainingclub.it...");
    // Sincronizza solo il contenuto della cartella dist dentro la cartella remota del sito
    await client.uploadFromDir(
      path.resolve("dist"),
      "www.ethostrainingclub.it" // o la cartella remota corretta su Aruba
    );

    console.log("Deploy completato con successo!");
  } catch (err) {
    console.error("Errore durante il deploy FTP:", err);
  } finally {
    client.close();
  }
}

deploy();