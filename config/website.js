const tailwind = require('../tailwind');

module.exports = {
  pathPrefix: '', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Slobodan Radovanovic - Portfolio Site', // Navigation and Site Title
  siteTitleAlt: 'Slobodan', // Alternative Site title for SEO
  siteUrl: 'https://radovanovicslobodan.github.io', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logos/logo-1024.png', // Used for SEO and manifest
  siteDescription: 'Slobodan Radovanovic, portfolio site',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
};
