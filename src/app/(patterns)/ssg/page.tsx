import Time from '@/app/_components/Time';
import Greeting from '@/app/_components/Greeting';
import {getName} from '@/app/api/name/functions';
import {getTime} from '@/app/api/time/functions';

export default async function SSG() {
  const [name, time] = await Promise.all([getName(), getTime()]);

  return (
    <div>
      <h1>SSG</h1>
      <Greeting name={name} />
      <Time time={time} />
    </div>
  );
}
