export default {
    title: 'Cheatsheet',
    
    description: 'ENIB Data Science Cheatsheet.',
    base: "/datascience_cheatsheet/",
    themeConfig: {
        logo: '/ENIB.svg',
        outline: 'deep',
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
                  { text: 'Conda', link: '/getting-started/conda' },
                  { text: 'Git', link: '/getting-started/git' },
                  { text: 'Terminal', link: '/getting-started/terminal' }
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
                    { text: 'Basics', link: '/python/' },
                    { text: 'Read/Write Files', link: '/python/files' },
                    { text: 'OS interface', link: '/python/os_interface'},
                    { text: 'Documentation', link: '/python/sphinx' }
                  ]
                },
                {
                  text: 'Data Science',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Introduction', link: '/python/data_science/index' },
                    { text: 'Numpy', link: '/python/data_science/numpy' },
                    { text: 'Scipy', link: '/python/data_science/scipy' },  
                    { text: 'Matplotlib', link: '/python/data_science/matplotlib' },      
                    { text: 'Jupyter', link: '/python/data_science/notebook' }, 
                    { text: 'Seaborn', link: '/python/data_science/seaborn' },
                    { text: 'Scikit Learn', link: '/python/data_science/scikit' },
                    { text: 'PyTorch', link: '/python/data_science/pytorch' } 
                  ]
                },
                {
                  text: 'Web Development',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Introduction', link: '/python/web/index' },
                    { text: 'Jinja', link: '/python/web/jinja' },
                    { text: 'Pelican', link: '/python/web/pelican' },
                    { text: 'Flask', link: '/python/web/flask' },
                    { text: 'Django', link: '/python/web/django' }
                  ]
                },
                {
                  text: 'User Interfaces',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Tkinter', link: '/python/ui/tkinter' },
                    { text: 'PyQT', link: '/python/ui/pyqt' }
                  ]
                }
              ],
              '/web/': [
                {
                  text: 'General',
                  collapsible: true,
                  collapsed: false,
                  items: [
                    { text: 'Basics', link: '/web/' },
                    { text: 'HTML', link: '/web/html' },
                    { text: 'CSS', link: '/web/css' },
                    { text: 'JavaScript', link: '/web/js' },
                    { text: 'Markdown', link: '/web/markdown' },
                    { text: 'SVG', link: '/web/svg' }
                  ]
                },
                {
                  text: 'Frameworks',
                  collapsible: true,
                  collapsed: true,
                  items: [
                    { text: 'Introduction', link: '/web/frontend/index' },
                    { text: 'Tailwind', link: '/web/frontend/tailwind' },
                    { text: 'Bootstrap', link: '/web/frontend/bootstrap' },
                    { text: 'Hugo', link: '/web/frontend/hugo' },
                    { text: 'Vue', link: '/web/frontend/vue' },
                  ]
                }
              ]
        }
    }
  }