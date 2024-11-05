import {wait} from '@/app/_utils/wait';
import 'server-only';

const NAMES = ['Chad', 'Ohsuga', 'Takezawa', 'Jon', 'Byun', 'Ohta', 'Usho'];

export async function getName(): Promise<string> {
  await wait(1000);
  const name = NAMES[Math.floor(Math.random() * NAMES.length)];
  console.log('[Server] 🚀 ~ getName ~ name:', name);
  return name;
}
