/**
 * Every word on the landing page lives here.
 *
 * All three design options read from this file, so they say exactly the
 * same thing and you are comparing the design, not the copy. Change the
 * words once and all three update.
 */

export const hero = {
  eyebrow: 'Lancer Optimization',
  /** Rendered as two tones: A in white, B in grey, like the reference. */
  headlineA: 'We build the software',
  headlineB: 'your business is missing.',
  subhead:
    'Websites, products, and the internal tools behind them. Fixed scope, fixed price, and you own everything at the end.',
};

export const services = [
  {
    title: 'Websites, new and rebuilt',
    description:
      'A new site, or a rebuild of one that stopped matching the business behind it. Quick to load, easy to edit, and yours to keep.',
  },
  {
    title: 'Product builds, 0 to 1',
    description:
      'From a rough sketch to something people can sign into and pay for. Web and mobile, taken all the way to launch.',
  },
  {
    title: 'Automation and dashboards',
    description:
      'The work that gives hours back every week. Internal tools, automated pipelines, and reporting you can read at a glance.',
  },
];

export const sections = {
  workEyebrow: 'Live right now',
  workHeading: 'Built by Lancer',
  workSubhead: 'These are ours. Same hands, same standards as the client work.',
  servicesEyebrow: 'What we do',
  servicesHeading: 'Three kinds of work, taken end to end',
  servicesSubhead:
    'Each one scoped as a defined project with a price and a date on it. Never an open meter.',
  processEyebrow: 'How it works',
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
