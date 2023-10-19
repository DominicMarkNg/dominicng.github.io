import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', '8fa'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '139'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '4dd'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', '8cb'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8fd'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a43'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'fa3'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'e76'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'f33'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'e1e'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '39f'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '622'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'a55'),
    routes: [
      {
        path: '/docs/category/probability',
        component: ComponentCreator('/docs/category/probability', '36c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Linear Algebra/Intro',
        component: ComponentCreator('/docs/Linear Algebra/Intro', '0f4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Linear Algebra/Matrix Operations, Special Matrices, and Matrix Decompositions',
        component: ComponentCreator('/docs/Linear Algebra/Matrix Operations, Special Matrices, and Matrix Decompositions', 'f0a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Probability/Set Theory',
        component: ComponentCreator('/docs/Probability/Set Theory', '6f0'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '2ac'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
