import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  mySidebar: [
    "the-keyword",
    "contributing",
    "ms365-at-kitiplex",
    "policy-and-guidelines",
    {
      label: "Website Configuration",
      type: "category",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "website-configuration",
      },
      items: ["deployment", "custom-styling", "custom-algolia"],
    },

    {
      type: "category",
      label: "Guides",
      items: [
        {
          type: "autogenerated",
          dirName: "guides",
        },
      ],
    },

    

    "media-embeds",
  ],

  demoSidebar: [
    "demo-overview",
    {
      type: "category",
      label: "Samples",
      items: [
        {
          type: "autogenerated",
          dirName: "demo",
        },
      ],
    },
  ],

  mspSidebar: [
    "msp",
    {
      type: "category",
      label: "Getting Started",
      items: [
        {
          type: "autogenerated",
          dirName: "msp",
        },
      ]

    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
