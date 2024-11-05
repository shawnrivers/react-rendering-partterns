import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'React Rendering Patterns',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="prose prose-h1:mb-3 p-4">{children}</div>
      </body>
    </html>
  );
}
