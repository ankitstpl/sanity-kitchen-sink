export default {
  widgets: [
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
                  buildHookId: '60c35e8c61c663398019bc7e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-mrfffij1',
                  apiId: 'a1a34105-4178-4ee3-901b-e4d2c8191f37'
                },
                {
                  buildHookId: '60c35e8c2132e43f94505b58',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3a3vhyui',
                  apiId: 'f4dc16bc-146b-4174-9df2-148eb26396ea'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ankitstpl/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3a3vhyui.netlify.app', category: 'apps'}
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
