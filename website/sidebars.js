/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  projectSidebar: [

    'introduction',

    {
      type: 'category',
      label: 'Know more',
      link: {
        type: 'generated-index',
      },
      collapsed: false,
      collapsible: true,
      items: [

        'motivation',
        'curriculum-vitae'

      ]
    },

    {
      type: "category",
      label: "Projects",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "projects/index",
      },
      items: [
        "projects/foobar-365",
        "projects/capstone",
      ]
    },

    {
      type: "category",
      label: "Snippets",
      collapsed: true,
      collapsible: true,

      link: {
        id: "snippets/index",
        type: "doc",
      },
      items: [
        "snippets/freq-cli",
        "snippets/space-time",
        'snippets/foo-equations'
      ]
    },
  ],

  tutorialSidebar: [

    {
      type: "category",
      label: "Getting started",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "tutorials/index",
      },
      items: [
        "tutorials/python-virtual-env"
      ]
    },

    {
      type: 'category',
      label: 'Docusaurus',
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "tutorials/docusaurus/index",
      },
      items: [
        "tutorials/docusaurus/create-a-document",
        "tutorials/docusaurus/create-a-page",
        "tutorials/docusaurus/create-a-blog-post",
        "tutorials/docusaurus/deploy-your-site",
        "tutorials/docusaurus/markdown-features",
        "tutorials/docusaurus/manage-docs-versions",
        "tutorials/docusaurus/translate-your-site",
        "tutorials/docusaurus/congratulations",

        {
          type: 'category',
          label: "Extended",
          collapsed: true,
          collapsible: true,
          link: {
            type: "doc",
            id: 'tutorials/docusaurus/extended/index'
          },
          items: [
            "tutorials/docusaurus/extended/custom-config",
            "tutorials/docusaurus/extended/classic-preset",

          ]
        }

      ],

    },
  ],


  // But you can create a sidebar manually

  /* tutorialSidebar: [
     'tutorials/index',
     {
       type: 'category',
       label: 'Tutorial',
       items: ['tutorial-basics/create-a-document'],
     },
   ],*/

};

export default sidebars;
