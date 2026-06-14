import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Sourav Rout — Full Stack Developer',
  description: 'Premium portfolio of Sourav Rout — Full Stack Developer, UI/UX Engineer & Open Source Contributor.',
  keywords: ['Sourav Rout', 'Full Stack Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Sourav Rout' }],
  openGraph: {
    title: 'Sourav Rout — Full Stack Developer',
    description: 'Premium portfolio of Sourav Rout',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-dark-950 text-slate-200 overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
