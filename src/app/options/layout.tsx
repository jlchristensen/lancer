import type { Metadata } from 'next';

/**
 * Design options for the landing page. These are drafts for Jack to compare.
 * They are deliberately kept out of search results, and the whole `options`
 * folder gets deleted once a direction is picked.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function OptionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-night">{children}</div>;
}
