module.exports = {
  email: 'goncalocmartins@protonmail.com',

  socialMedia: [
    {
      name: 'Linkedin',
      url: 'https://linkedin.com/in/thegoncalomartins',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/thegoncalomartins',
    },
    {
      name: 'Bitbucket',
      url: 'https://bitbucket.org/thegoncalomartins',
    },
    {
      name: 'StackOverflow',
      url: 'https://stackoverflow.com/users/7443154/thegoncalomartins',
    },
    {
      name: 'Dev',
      url: 'https://dev.to/thegoncalomartins',
    },
    {
      name: 'Medium',
      url: 'https://medium.com/@thegoncalomartins',
    },
    {
      name: 'Facebook',
      url: 'https://facebook.com/thegoncalomartins',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/thegoncalomartins',
    },
    // {
    //   name: 'Tiktok',
    //   url: 'https://tiktok.com/@thegoncalomartins',
    // },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Education',
      url: '/#education',
    },
    {
      name: 'Professional Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
