export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5dfb1a33cd2cc6614709b0c3',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-7e76phq6',
                  apiId: '500affd8-8853-4b2c-8915-fc47eaec0355'
                },
                {
                  buildHookId: '5dfb1a3320625e17933a7ef0',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-9mzokhwy',
                  apiId: '473aba13-c0c4-4d93-89c7-ed6ac13f4c11'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/erinjerri/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-9mzokhwy.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
