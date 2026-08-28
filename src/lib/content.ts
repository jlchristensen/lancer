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

export const sections = {
  workHeading: 'Recent Lancer projects',
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
      rest: "Thirty minutes on what's slow, what's manual, and what it costs you today.",
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
