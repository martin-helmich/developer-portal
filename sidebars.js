// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  platformSidebar: [
    {
      type: 'category',
      label: 'Platform',
      link: {
        type: "generated-index",
        title: "Platform",
        slug: "/category/platform",
        keywords: []
      },
      items: [{
        type: 'autogenerated',
        dirName: 'platform'
      }],
    },
  ],

  contributingSidebar: [
    {
      type: 'category',
      label: 'Contribution',
      link: {
        type: "doc",
        id: "contribution/index",
      },
      items: [{
        type: 'autogenerated',
        dirName: 'contribution'
      }],
    },
  ],

  apiSidebar: [
    {
      type: 'category',
      label: 'Using the API',
      link: {
        type: "generated-index",
        title: "Using the API",
        slug: "/category/api",
        keywords: []
      },
      items: [{
        type: 'autogenerated',
        dirName: 'api'
      }],
    },
    {
      type: "category",
      label: "API Reference",
      items: require("./sidebar.reference.json"),
      link: {
        type: "doc",
        id: "reference/index"
        // type: "generated-index",
        // title: "API Reference",
        // slug: "/reference",
        // keywords: ["api-reference"]
      }
    }
  ],
};

module.exports = sidebars;
