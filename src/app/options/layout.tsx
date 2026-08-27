import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Mono } from 'next/font/google';

/**
 * Design options for the landing page. Drafts for Jack to compare.
 * Kept out of search results, and the whole folder gets deleted once a
 * direction is picked.
 *
 * The two faces below are loaded here rather than in the root layout, so
 * the live page is untouched by whatever the options are trying out.
 */

const archivo = Archivo({
  variable: '--font-archivo-src',
  subsets: ['latin'],
  weight: ['400', '600', '800'],
});

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-src',
  subsets: ['latin'],
  weight: ['400', '500'],
});

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function OptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={`${archivo.variable} ${plexMono.variable} min-h-screen bg-pitch`}>
      {children}
    </div>
  );
}
