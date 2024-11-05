import StaticGreeting from '@/app/(patterns)/ppr/_components/StaticGreeting';
import DynamicTime from '@/app/(patterns)/ppr/_components/DynamicTime';
import {Suspense} from 'react';

export const experimental_ppr = true;

// NOTE: Doesn't work as expected. Don't know why.
export default async function PPR() {
  return (
    <div>
      <h1>PPR</h1>
      <StaticGreeting />
      <Suspense fallback="Current time: ...">
        <DynamicTime />
      </Suspense>
    </div>
  );
}
