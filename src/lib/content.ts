/**
 * Every word on the landing page lives here.
 *
 * All three design options read from this file, so they say exactly the
 * same thing and you are comparing the design, not the copy. Change the
 * words once and all three update.
 */

export const hero = {
  eyebrow: 'Lancer Optimization',
  /** Rendered as two tones: A in ink, B in grey. */
  headlineA: 'Your website, optimized.',
  headlineB: 'Your business, automated.',
  subhead:
    'Lancer tunes the site you already have and puts AI to work in the operations behind it. Fixed scope, fixed price, and you own everything at the end.',
};

export const services = [
  {
    title: 'Website optimization & rebuilds',
    description:
      'Speed, clarity, and conversion for the site you already have. Or a clean rebuild when it stopped matching the business behind it. Easy to edit, and yours to keep.',
    /** Every proof line must be true and checkable. No exceptions. */
    proof: 'This site is one. Rebuilt and shipped in a day.',
  },
  {
    title: 'AI implementation',
    description:
      'Agents and automations wired into how your business actually runs: intake, follow-ups, reporting, internal tools. Hours back every week, not a chatbot bolted on.',
    proof: 'This studio runs on the same workflows we install.',
  },
];

export const sections = {
  workHeading: 'Built by Lancer',
  workSubhead: 'These are ours. Same hands, same standards as the client work.',
  servicesHeading: 'Two kinds of work, taken end to end',
  servicesSubhead:
    'Each one scoped as a defined project with a price and a date on it. Never an open meter.',
};

export const cta = {
  heading: "Tell us what's slow.",
  body: "If it's a fit, you get a written scope and a price. If it's not, you get an honest answer and a pointer somewhere better.",
};

/**
 * The process, written as prose instead of a numbered list.
 *
 * Three steps in a row of cards is the single most generic thing a landing
 * page can do. The order still matters, so the sentences carry it: the lead
 * clause sets the beat, the rest fills it in.
 */
export const processProse = {
  heading: 'How it works',
  sentences: [
    {
      lead: 'It starts with a call.',
      rest: "Twenty minutes on what's slow, what's manual, and what it costs you today.",
    },
    {
      lead: 'Then a written scope.',
      rest: 'A fixed price and a date on it, never an hourly meter.',
    },
    {
      lead: 'Then it gets built.',
      rest: 'Working software in front of you every week, until the day you own the code, the accounts and the documentation.',
    },
  ],
};
