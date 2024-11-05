import Greeting from '@/app/_components/Greeting';
import {getName} from '@/app/api/name/functions';

export default async function StaticGreeting() {
  const name = await getName();
  return <Greeting name={name} />;
}
