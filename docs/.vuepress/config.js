module.exports = {
    base:"/docs/",
    title:'learn',
    description:'learn',
    head: [
        ['link', { rel: 'icon', href: '/hero.ico' }],
        ['meta', { name: 'author', content: 'learn' }],
      ],
    themeConfig: {
      logo: '/assets/img/vuepress.png',
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about/info.html' },
        {
            text: 'Languages',
            ariaLabel: 'Language Menu',
            items: [
              { text: 'Chinese', link: '/language/chinese/' },
              { text: 'Japanese', link: '/language/japanese/' }
            ]
          },
      ],
      sidebar: 'auto',
      lastUpdated: 'Last Updated',
    }
  }