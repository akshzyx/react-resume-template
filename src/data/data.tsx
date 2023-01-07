tfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Akshit',
  description: "My portfolio website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi, I'm Akshit.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I’m a pre-final year undergraduate student at <strong className="text-stone-100">National Institute of Technology Hamirpur, Himachal Pradesh</strong>, currently pursuing my bachelor's degree in Chemical Engineering.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring my beautiful{' '}
        <strong className="text-stone-100">college campus</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an someone with an entrepreneurial spirit, a knack for web development, and a passion for coding. Born in a small town in Talara, Kangra, I made my move to NIT Hamirpur where I persue my bachelors.
Outside of college I enjoy watching movies , playing games. I love to travel and lead a fairly nomadic lifestyle. I built much of my early portfolio during lockdown at my home..`,
  aboutItems: [
    {label: 'Location', text: 'Hamirpur, HP', Icon: MapIcon},
    {label: 'Age', text: '21', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Indian', Icon: FlagIcon},
    {label: 'Interests', text: 'Cars, Astronomy, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'National Institute of Technology, Hamirpur', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Full time college student', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Hindi',
        level: 10,
      },
      {
        name: 'German',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'HTML/CSS',
        level: 9,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'React.js',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Pyhton',
        level: 8,
      },
      {
        name: 'Node.js',
        level: 5,
      },
      {
        name: 'SQL',
        level: 3,
      },
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {
        name: 'pyhton',
        level: 8,
      },
      {
        name: 'Javascript',
        level: 6,
      },
      {
        name: 'C',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Web Music Player',
    description: 'An onlinr web music player',
    url: 'https://jojimusic.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'Year Progress Clock',
    description: 'A online clock showing how much year, month, day, hour has progressed.',
    url: 'https://akshzyx.github.io/year-progress/',
    image: porfolioImage2,
  },
//   {
//     title: 'Project title 3',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage3,
//   },
//   {
//     title: 'Project title 4',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage4,
//   },
//   {
//     title: 'Project title 5',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage5,
//   },
//   {
//     title: 'Project title 6',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage6,
//   },
//   {
//     title: 'Project title 7',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage7,
//   },
//   {
//     title: 'Project title 8',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage8,
//   },
//   {
//     title: 'Project title 9',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage9,
//   },
//   {
//     title: 'Project title 10',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage10,
//   },
//   {
//     title: 'Project title 11',
//     description: 'Give a short description of your project here.',
//     url: 'https://timbaker.me',
//     image: porfolioImage11,
//   },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020 - Present',
    location: 'National Instutute of Technolgy, Hamirpur',
    title: 'Bachelors in Chemical Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: '2017 - 2019',
    location: 'MCM DAV Baghni, Nurpur',
    title: 'High School',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2020 - June 2020',
    location: 'Jankalyan Multipurpose Education Society',
    title: 'Intern',
    content: (
      <p>
        1. Formalised growth startegy.
        2. Started a fund raising campaign.
        3. Executed various marketing campaigns.
      </p>
    ),
  },
  {
    date: 'June 2020 - July 2020',
    location: 'Muskurahat Foundation',
    title: 'Intern',
    content: (
      <p>
        1. Organised various events for the NGO.
        2. Raised funds for the NGO by approaching people.
        3. Learned how NGOs functions and how you can create an impact.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'akshzyx@gmail.com',
      href: 'mailto:akshzyx@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Hamirpur, HP',
      href: 'https://www.google.ca/maps/place/National+Institute+of+Technology,+Hamirpur+(NIT+-+Hamirpur)/@31.7084336,76.5231254,17z/data=!3m1!4b1!4m5!3m4!1s0x3904d5487e12c4a1:0x395f92d3a202a7d0!8m2!3d31.7084291!4d76.5273526',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/akshzyx/',
    },
    {
      type: ContactType.Github,
      text: 'akshzyx',
      href: 'https://github.com/akshzyx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/akshzyx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/akshzyx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/akshzyx/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/akshzyx'},
];
