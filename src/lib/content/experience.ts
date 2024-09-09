import { ExperienceSectionType } from '@/lib/types/sections';

export const experienceSection: ExperienceSectionType = {
  title: "where i've worked",
  experiences: [
    {
      company: 'VMware Germany GmbH',
      companyUrl: 'https://www.vmware.com/de',
      role: 'Frontend developer',
      started: 'December 2023',
      upto: 'Feburary 2024',
      tasks: [
        'Implemented UI components with React , JavaScript & Tailwind CSS.',
        'Developed and maintained design systems that separates design logic.',
        'Understanding client needs and proposing effective solutions, which also involves strategising and planning.',
        'Lead a cross-functional team of developers and designers in the creation of a SaaS product.',
      ],
    },
    {
      company: 'Fluidware',
      companyUrl: 'https://www.momentive.ai',
      role: 'AI engineer',
      started: 'June 2022',
      upto: 'December 2023',
      tasks: [
        'Built AI chat BOT using Tensorflow.',
        'Designed SHMTH Capital website with python/Django.',
        'Collaborated with diverse nationwide team of developers.',
      ],
    },
    {
      company: 'Salesforce UK Ltd',
      companyUrl: 'https://www.salesforce.com/uk',
      role: 'FullStack developer',
      started: 'September 2021',
      upto: 'April 2022',
      tasks: [
        'Improved Application Performance.',
        'Streamlined Development Processes.',
        'Ensured Data Security.'
      ],
    },    
  ],
};
