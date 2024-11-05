'use client';

import Time from '@/app/_components/Time';
import Greeting from '@/app/_components/Greeting';
import {useEffect, useState} from 'react';

export default function CSR() {
  const [name, setName] = useState<string | undefined>(undefined);
  const [time, setTime] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const [nameRes, timeRes] = await Promise.all([
          fetch('/api/name'),
          fetch('/api/time'),
        ]);
        const [nameData, timeData] = await Promise.all([
          nameRes.json(),
          timeRes.json(),
        ]);
        setName(nameData.name);
        setTime(timeData.time);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <h1>CSR</h1>
      <Greeting name={name} isLoading={isLoading} />
      <Time time={time} isLoading={isLoading} />
    </div>
  );
}
