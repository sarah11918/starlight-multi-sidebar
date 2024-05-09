import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        github: "https://github.com/withastro/starlight",
      },
      sidebar: [
        {
          label: "Learn",
          items: [
            {
              label: 'Welcome, world!',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Getting Started', link: '/guides/example/' },
                { label: 'Installation and Setup', link: '/guides/install/' },
                { label: 'Deploy your site', link: '/guides/deploy/' },
                { label: 'Migrate to Astro', link: '/guides/migrate/' },
                { label: 'Introductory Tutorial - Build a blog', link: '/guides/tutorial/' },	
              ],
            },
            {
              label: 'Core Concepts',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Design Principles', link: '/concepts/why-astro/' },
                { label: 'Astro Islands', link: '/concepts/islands/' },
                { label: 'More resources', link: '/concepts/islands/' },
              ]
            },
            {
              label: 'Learn the Basics',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Project Structure', link: '/basics/project-structure/' },
                { label: 'Components', link: '/basics/astro-components/' },
                { label: 'Pages', link: '/basics/astro-pages/' },
                { label: 'Layouts', link: '/basics/astro-layouts/' },
                { label: 'Astro Template Syntax', link: '/basics/astro-syntax/' },
                { label: 'Rendering Modes', link: '/basics/rendering-modes/' },
                { label: 'Integrations', link: '/basics/integrations/' },
              ],
            },
            {
              label: 'Create routes',
              autogenerate: { directory: '/guides/routing/' },
            },
            {
              label: 'Manage your Content',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Authoring Content', link: '/guides/content/' },
                { label: 'Markdown', link: '/guides/content/markdown/' },
                { label: 'Content Collections', link: '/guides/content/content-collections/' },
                { label: 'Connect a CMS', link: '/guides/content/cms/' },
                { label: 'Add an RSS feed', link: '/guides/content/cms/' },
            
              ],
            },
            
            {
              label: 'Connect your data',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Data Fetching', link: '/guides/data/data-fetching/' },
                { label: 'Astro DB', link: '/guides/data/astro-db/' },
                { label: 'Backend services', link: '/guides/data/backend-services/' },
                { label: 'E-Commerce', link: '/guides/data/ecommerce/' },
                { label: 'Authentication', link: '/guides/data/authentication/' },
              ],
            },
            {
              label: 'Client-side Interactivity',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Scripts & Event Handling', link: '/guides/interactivity/scripts/' },
                { label: 'UI Frameworks', link: '/guides/interactivity/framework-components' },
      
              ],
            },
            {
              label: 'Imports and Assets',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Imports', link: '/guides/imports/' },
                { label: 'Images', link: '/guides/imports/images/' },
                { label: 'Fonts', link: '/guides/imports/fonts/' },
                { label: 'CSS & Styling', link: '/guides/imports/styling/' },
              ],
            },						
    
            {
              label: 'Maintain your project',
              items: [
                // Each item here is one entry in the navigation menu.
                { label: 'Upgrade Astro', link: '/guides/maintain/upgrade/' },
                { label: 'Testing', link: '/guides/maintain/testing' },
                { label: 'Troubleshooting', link: '/guides/maintain/troubleshooting/' },
      
              ],
            },
            {
              label: 'Extend Astro',
              items: [
                { label: 'Build an Integration', link: '/reference/api/publish-to-npm/' },
                { label: 'Build a dev toolbar app', link: '/reference/api/publish-to-npm/' },
                { label: 'Build a Studio app', link: '/reference/api/publish-to-npm/' },
                { label: 'Build a theme', link: '/reference/api/publish-to-npm/' },
    
              ]
            },
          ],
        },
        {
          label: "Reference",
          items: [
          {
            label: 'B',
            items: [
              // Each item here is one entry in the navigation menu.
              { label: 'Astro API Reference', link: '/reference/api-reference/' },
              { label: 'Configuration Reference', link: '/reference/configuration-reference/' },
              { label: 'CLI Reference', link: '/reference/cli-reference/' },
              { label: 'Template Directives Reference', link: '/reference/template-directives/' },
              { label: 'Built-in Components', link: '/reference/error-reference/' },
              { label: 'Error Reference', link: '/reference/error-reference/' },
              
            ],
          },
          {
            label: 'Other Development APIs',
            items: [
              // Each item here is one entry in the navigation menu.
             
              { label: 'Integrations API', link: '/reference/api/integrations-api/' },
              { label: 'Adapter API', link: '/reference/api/adapter-api/' },
              { label: 'Dev Toolbar App API', link: '/reference/api/dev-toolbar-api/' },
              { label: 'Image Service API', link: '/reference/api/image-service-api/' },
  
    
            ],
          },
         ]
        },
      ],
      components: {
        Sidebar: "./src/components/Sidebar.astro",
      },
    }),
  ],
});
