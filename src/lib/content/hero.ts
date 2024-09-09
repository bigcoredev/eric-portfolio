import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hi, my name is',
  title: 'eric huang.',
  tagline: 'I create visually pleasing interfaces for the web.',
  description:
    "I'm a passionate Full-Stack web developer & AI engineer with hands-on experience in building web applications using React.js & Next.js with TypeScript, TailwindCSS, and BootStrap. Nowadays I am focusing on frontend development with React and Material UI.",
  specialText: 'Currently available for freelance',
  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};
