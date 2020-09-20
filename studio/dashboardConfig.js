export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f67e7e16ac815243b3ecca6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-24gi2onn',
                  apiId: 'e8351bf5-c620-4988-8276-84e6601bac2a'
                },
                {
                  buildHookId: '5f67e7e16ac81527e63ec6c1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-dtznzn4o',
                  apiId: 'defc1c7e-85c0-444a-87f6-ff3ccec231e2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kenmintae/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-dtznzn4o.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
