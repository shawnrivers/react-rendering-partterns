import Time from '@/app/_components/Time';
import Greeting from '@/app/_components/Greeting';
import {getName} from '@/app/api/name/functions';
import {getTime} from '@/app/api/time/functions';

// Never cache so that the component is purely dynamic
export const revalidate = 0;

export default async function SSR() {
  const [name, time] = await Promise.all([getName(), getTime()]);

  return (
    <div>
      <h1>SSR</h1>
      <Greeting name={name} />
      <Time time={time} />
    </div>
  );
}
