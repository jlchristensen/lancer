/**
 * One place for everything that changes: contact details, links, and the
 * products we show off. Edit here, not in the components.
 */

export const site = {
  name: 'Lancer',
  wordmark: 'Lancer Optimization',
  email: 'jackatlancer@gmail.com',
  url: 'https://welcometolancer.com',

  /**
   * Paste the Calendly link between the quotes and every "Book a call"
   * button on the site switches over to it. Left empty, those buttons
   * open an email instead, so nothing is ever a dead end.
   */
  calendlyUrl: 'https://calendly.com/jackatlancer/30min',
} as const;

const emailHref = `mailto:${site.email}?subject=${encodeURIComponent(
  'Project enquiry'
)}`;

/** Where the primary button points. Calendly if we have it, email if not. */
export const bookingHref = site.calendlyUrl || emailHref;

/** Label matches the destination so the button never lies about what it does. */
export const bookingLabel = site.calendlyUrl ? 'Book a call' : 'Start a project';

export const contactHref = emailHref;

export type Product = {
  name: string;
  tagline: string;
  description: string;
  href: string;
};

/** Live products only. If it is not public, it does not belong here. */
export const products: Product[] = [
  {
    name: 'Chip',
    tagline: 'Duolingo for poker',
    description:
      'Bite-sized lessons, a practice table with calibrated bots, a daily puzzle, and streaks that keep people coming back.',
    href: 'https://playwithchip.com',
  },
  {
    name: 'Sage',
    tagline: 'Learn anything, your way',
    description:
      'Short adaptive lessons on any topic. Sage works out how you learn best, then teaches that way from then on.',
    href: 'https://learningwithsage.com',
  },
  {
    name: 'The Social Project',
    tagline: 'One question, every night',
    description:
      'A small group, one question a day, and a fire that goes out if nobody answers. Built to pull friends back together.',
    href: 'https://jointhesocialproject.com',
  },
];
