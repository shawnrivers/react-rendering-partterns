import Link from 'next/link';

export default function PatternsLayout(props: {children: React.ReactNode}) {
  const {children} = props;

  return (
    <div>
      <nav className="mb-4">
        <Link href="/">Go Home</Link>
      </nav>
      <main>{children}</main>
    </div>
  );
}
