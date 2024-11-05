import Time from '@/app/_components/Time';
import Greeting from '@/app/_components/Greeting';
import {getName} from '@/app/api/name/functions';
import {getTime} from '@/app/api/time/functions';

// Cache the build result for 5 seconds.
export const revalidate = 5;

export default async function ISR() {
  const [name, time] = await Promise.all([getName(), getTime()]);

  return (
    <div>
      <h1>ISR</h1>
      <Greeting name={name} />
      <Time time={time} />
    </div>
  );
}
