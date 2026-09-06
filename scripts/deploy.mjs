import * as ftp from "basic-ftp";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function deploy() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    console.log("🚀 Connecting to FTP server...");
    await client.access({
      host: process.env.FTP_SERVER || "ftp.clinicalspeechcenter.com",
      user: process.env.FTP_USERNAME || "saba@clinicalspeechcenter.com",
      password: process.env.FTP_PASSWORD || "MknxW$y^}$z8zx0S",
      port: 21,
      secure: false,
    });

    console.log("Connected successfully!");
    const localDir = path.resolve(__dirname, "../dist/client");
    console.log(`📂 Uploading files from: ${localDir}`);

    await client.uploadFromDir(localDir);
    console.log("✅ Deployment complete! Website is live.");
  } catch (err) {
    console.error("❌ Deployment failed:", err);
    process.exit(1);
  } finally {
    client.close();
  }
}

deploy();
