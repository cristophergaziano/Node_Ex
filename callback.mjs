import { writeFile } from 'node:fs';
import { Buffer } from 'node:buffer';

const data = new Uint8Array(Buffer.from('Ciao, sono stato creato tramite uno script, e tu?'));
writeFile('messaggio.txt', data, (error) => {
  if (error) throw error;
  console.log('Il file "messaggio.txt" è stato correttamente creato!')
});