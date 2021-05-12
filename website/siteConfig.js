const siteConfig = {
  title: 'SkyhookML',
  tagline: 'Data science platform for image and video data.',
  url: 'https://www.skyhookml.org',
  baseUrl: '/',

  // Used for publishing and more
  projectName: 'skyhookml.org',
  organizationName: 'skyhookml',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'overview', label: 'Overview'},
    {doc: 'tutorials', label: 'Tutorials'},
    {href: "https://demo.skyhookml.org", label: "Demo", external: true},
    {href: "https://github.com/skyhookml/skyhookml", label: "GitHub", external: true},
  ],

  /* path to images for header/footer */
  //headerIcon: 'img/favicon.ico',
  //footerIcon: 'img/favicon.ico',
  //favicon: 'img/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#024976',
    secondaryColor: '#013352',
  },

  highlight: {
    theme: 'default',
  },

  scripts: ['https://buttons.github.io/buttons.js'],

  onPageNav: 'separate',
  cleanUrl: true,

  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
