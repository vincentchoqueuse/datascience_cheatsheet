export default {
    title: 'Cheatsheet',
    logo: '/ENIB.svg',
    description: 'A Data Science Cheatsheet.',
    base: "/datascience_cheatsheet/",
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vincentchoqueuse/datascience_cheatsheet' },
        ],
        nav: [
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Python', link: '/python/' },
          { text: 'Latex', link: '/latex/' }
        ],
        sidebar: {
            '/getting-started/': [
              {
                text: 'Getting Started',
                items: [
                  { text: 'Index', link: '/getting-started/' },
                  { text: 'Conda', link: '/getting-started/conda' }
                ]
              }
            ],
            '/latex/': [
                {
                  text: 'Latex',
                  items: [
                    { text: 'Latex', link: '/latex/' }
                  ]
                }
              ],
              '/python/': [
                {
                  text: 'Python',
                  items: [
                    { text: 'Index', link: '/python/' },
                    { text: 'File Manipulations', link: '/python/files' },
                    { text: 'Scientific Stack', link: '/python/scientific' }
                  ]
                }
              ]
        }
    }
  }