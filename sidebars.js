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

  introduction: [
    'introduction/README',
    {
      'type': 'html',
      'value': '<hr/>',
    },
    {
      'type': 'html',
      'value': '<span class=\'menu__link\'><b><small> Infrastructure </small></b></span>',
    },
    'introduction/welcome',
  ]

};

module.exports = sidebars;
