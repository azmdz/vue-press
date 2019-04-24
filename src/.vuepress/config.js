module.exports = {
  base: '/',
  locales: {
    '/': {
      lang: 'ja',
      title: 'dazi_blog',
      description: 'dazi_gomi diary',
      head: [
        ['link', { rel: 'icon', href: `/assets/images/logo.png` }],
        ['meta',{ name:"keywords", content:"VuePress,dazi_gomi"}],
        ['meta',{ name:"og:title", content:"title"}],
        ['meta',{ name:"og:description", content:"description"}],
        ['meta',{ name:"og:type", content:"website"}],
        ['meta',{ name:"og:url", content:"og　url"}],
        ['meta',{ name:"og:image", content:""}],
      ]
    }
  },
};
