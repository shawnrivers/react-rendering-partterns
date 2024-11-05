import {wait} from '@/app/_utils/wait';
import 'server-only';

export async function getTime(): Promise<string> {
  await wait(1000);
  const time = new Date().toISOString();
  console.log("[Server] 🚀 ~ getTime ~ time:", time)
  return time;
}
