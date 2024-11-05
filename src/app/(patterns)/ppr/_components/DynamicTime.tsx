import Time from '@/app/_components/Time';
import {getTime} from '@/app/api/time/functions';
import {cookies} from 'next/headers';

export default async function DynamicTime() {
  // Hack: Call dynamic API to make the component dynamic
  await cookies();

  const time = await getTime();
  return <Time time={time} />;
}
