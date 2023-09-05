import https from 'https';
import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const downloadFile = (url, dest) => {
  const directoryPath = path.dirname(dest);
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
  }

  const file = fs.createWriteStream(dest);

  https
    .get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`File downloaded to ${dest}`);
        });
      } else {
        console.error(`Error downloading file. Status code: ${response.statusCode}`);
        file.close(() => {
          fs.unlink(dest, () => {});
        });
      }
    })
    .on('error', (err) => {
      console.error('Error downloading file:', err);
      fs.unlink(dest, () => {});
    });
};

const sassdoorUrl = 'https://cdn.jsdelivr.net/gh/CarcajadaArtificial/sass-door/sassdoor.scss';
const filePath = path.join(__dirname, 'lib', 'scss', 'sassdoor.scss');

downloadFile(sassdoorUrl, filePath);
