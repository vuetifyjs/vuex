module.exports = {
  title: 'Vuetify Vuex ',

  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],

  ga: 'UA-75262397-5',

  themeConfig: {
    nav: [
      {
        text: 'Get Help',
        link: 'https://discord.gg/q6UtSjz'
      },
      {
        text: 'Cognito Dev Resources',
        link: 'https://aws.amazon.com/cognito/dev-resources/'
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
        title: 'AWS Cognito',
        collapsable: false,
        children: [
          'aws/cognito-setup',
          'aws/federated-id-setup'
        ]
      }
    ]
  }
}
