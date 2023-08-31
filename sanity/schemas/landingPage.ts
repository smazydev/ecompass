export default {
    name: 'landingPage',
    title: 'Landing Page Content',
    type: 'document',
    fields: [
      {
        name: 'navbar',
        title: 'Navbar',
        type: 'object',
        fields: [
          {
            name: 'logoImage',
            title: 'Logo Image',
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string'
              }
            ]
          },
          {
            name: 'navLinks',
            title: 'Navigation Links',
            type: 'array',
            of: [
              {
                type: 'object',
                name: 'navLink',
                title: 'Navigation Link',
                fields: [
                  {
                    name: 'text',
                    title: 'Link Text',
                    type: 'string'
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'url'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'jumbotron',
        title: 'Jumbotron Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string'
          },
          {
            name: 'image1',
            title: 'Image 1',
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string'
              }
            ]
          },
          {
            name: 'description',
            title: 'Description',
            type: 'text'
          },
          {
            name: 'ctaButton',
            title: 'Call to Action Button',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string'
              },
              {
                name: 'url',
                title: 'Button URL',
                type: 'url'
              }
            ]
          },
          {
            name: 'image2',
            title: 'Image 2',
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string'
              }
            ]
          }
        ]
      },      
      {
        name: 'services',
        title: 'Services Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string'
          },
          {
            name: 'services',
            title: 'Services Provided',
            type: 'array',
            of: [
              {
                type: 'string'
              }
            ]
          }
        ]
      },
     {
        name: 'howItWorks',
        title: 'How It Works',
        type: 'object',
        fields: [
          {
            name: 'title',
            title: 'Main Heading',
            type: 'string'
          },
          {
            name: 'images',
            title: 'Images',
            type: 'array',
            of: [
              {
                type: 'image',
                fields: [
                  {
                    name: 'alt',
                    title: 'Alternative Text',
                    type: 'string'
                  }
                ]
              }
            ]
          },
          {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            of: [
              {
                name: 'step',
                title: 'Step',
                type: 'object',
                fields: [
                  {
                    name: 'stepNumber',
                    title: 'Step Number',
                    type: 'string'
                  },
                  {
                    name: 'stepTitle',
                    title: 'Step Title',
                    type: 'string'
                  },
                  {
                    name: 'description',
                    title: 'Description',
                    type: 'text'
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'ctaSection',
        title: 'Call to Action Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string'
          },
          {
            name: 'image',
            title: 'Image',
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string'
              }
            ]
          },
          {
            name: 'ctaButton',
            title: 'CTA Button',
            type: 'object',
            fields: [
              {
                name: 'text',
                title: 'Button Text',
                type: 'string'
              },
              {
                name: 'url',
                title: 'Button URL',
                type: 'url'
              }
            ]
          }
        ]
      },
      {
        name: 'footerSection',
        title: 'Footer Section',
        type: 'object',
        fields: [
          {
            name: 'heading',
            title: 'Heading',
            type: 'string'
          },
          {
            name: 'logoImage',
            title: 'Logo Image',
            type: 'image',
            fields: [
              {
                name: 'alt',
                title: 'Alternative Text',
                type: 'string'
              }
            ]
          },
          {
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
              {
                type: 'object',
                name: 'socialLink',
                title: 'Social Link',
                fields: [
                  {
                    name: 'platform',
                    title: 'Platform Name',
                    type: 'string'
                  },
                  {
                    name: 'url',
                    title: 'URL',
                    type: 'string'
                  },
                  {
                    name: 'icon',
                    title: 'Platform Icon',
                    type: 'image',
                    fields: [
                      {
                        name: 'alt',
                        title: 'Alternative Text',
                        type: 'string'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
  