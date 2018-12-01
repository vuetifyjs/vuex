module.exports = {
  title: 'Vuetify Vuex ',

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],

  // ga: 'UA-75262397-5', // TODO: add me

  themeConfig: {
    nav: [
      {
        text: 'Get Help',
        link: 'https://discord.gg/q6UtSjz'
      },
      {
        text: 'Firebase Auth Dev Resources',
        link: 'https://firebase.google.com/docs/reference/js/firebase.auth/'
      }
    ],
    sidebar: [
      {
        title: 'Getting started',
        collapsable: false,
        children: [
          'guide/install'
        ]
      },
      {
        title: 'API',
        collapsable: false,
        children: [
          'api/actions',
          'api/getters'
        ]
      },
      {
        title: 'Firebase Auth',
        collapsable: false,
        children: [
          'firebase/setup',
        ]
      }
    ]
  }
}
