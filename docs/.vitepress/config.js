export default {
    title: 'Cheatsheet',
    logo: '/ENIB.svg',
    description: 'A Data Science Cheatsheet.',
    base: "/datascience_cheatsheet/",
    themeConfig: {
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2022-present'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/vincentchoqueuse/datascience_cheatsheet' },
        ],
        nav: [
          { text: 'Getting Started', link: '/getting-started/' },
          { text: 'Python', link: '/python/' },
          { text: 'Latex', link: '/latex/' },
          { text: 'Web', link: '/web/' },
          { text: 'Contributors', link: 'teams' },
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
                    { text: 'General Syntax', link: '/latex/' },
                    { text: 'Tikz', link: '/latex/tikz' },
                    { text: 'Pgfplot', link: '/latex/pgfplot' }
                  ]
                }
              ],
              '/python/': [
                {
                  text: 'General',
                  collapsible: true,
                  collapsed: false,
                  items: [
                    { text: 'Basic Usage', link: '/python/' },
                    { text: 'Read/Write Files', link: '/python/files' }
                  ]
                },
                {
                  text: 'Scientific Stack',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Scientific Stack', link: '/python/scientific' },
                    { text: 'Notebook', link: '/python/notebook' },
                    { text: 'Seaborn', link: '/python/seaborn' },
                    { text: 'PyTorch', link: '/python/pytorch' },
                    { text: 'Python control', link: '/python/control' },
                  ]
                },
                {
                  text: 'Web Development',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Jinja', link: '/python/jinja' },
                    { text: 'Django', link: '/python/django' },
                    { text: 'Flask', link: '/python/flask' }
                  ]
                }
              ],
              '/web/': [
                {
                  text: 'General',
                  collapsible: true,
                  collapsed: false,
                  items: [
                    { text: 'Index', link: '/web/' },
                    { text: 'HTML', link: '/web/html' },
                    { text: 'CSS', link: '/web/css' },
                    { text: 'Javascript', link: '/web/js' },
                    { text: 'Markdown', link: '/web/markdown' },
                    { text: 'SVG', link: '/web/svg' }
                  ]
                },
                {
                  text: 'Frameworks',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Bootstrap', link: '/web/bootstrap' },
                    { text: 'Vue', link: '/web/vue' },
                  ]
                }
              ]
        }
    }
  }