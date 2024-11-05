import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>React Rendering Patterns</h1>
      <ul>
        <li>
          <Link href="/csr">CSR</Link>
        </li>
        <li>
          <Link href="/ssr">SSR</Link>
        </li>
        <li>
          <Link href="/ssg">SSG</Link>
        </li>
        <li>
          <Link href="/isr">ISR</Link>
        </li>
        <li>
          <Link href="/ppr">PPR</Link>
        </li>
      </ul>
    </div>
  );
}
