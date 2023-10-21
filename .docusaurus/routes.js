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
    component: ComponentCreator('/docs', 'a11'),
    routes: [
      {
        path: '/docs/Calculus/Elementary/Basic Rules + Proofs',
        component: ComponentCreator('/docs/Calculus/Elementary/Basic Rules + Proofs', 'e83'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/Concavity',
        component: ComponentCreator('/docs/Calculus/Elementary/Concavity', '0e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/Derivatives',
        component: ComponentCreator('/docs/Calculus/Elementary/Derivatives', 'b0c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/Derivatives of special equations',
        component: ComponentCreator('/docs/Calculus/Elementary/Derivatives of special equations', '695'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/LHopitalsrule',
        component: ComponentCreator('/docs/Calculus/Elementary/LHopitalsrule', '551'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/Mean Value Function',
        component: ComponentCreator('/docs/Calculus/Elementary/Mean Value Function', 'bed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/Power Rule, Product Rule, and Quotient Rule',
        component: ComponentCreator('/docs/Calculus/Elementary/Power Rule, Product Rule, and Quotient Rule', '82d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Elementary/Secant Line',
        component: ComponentCreator('/docs/Calculus/Elementary/Secant Line', 'ba3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Directional Derivatives',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Directional Derivatives', '7bf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Gradient',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Gradient', 'b9e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Partial Derivatives',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Partial Derivatives', 'a2f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Partial Derivatives Formal',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Partial Derivatives Formal', '70b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Second Partial Derivatives',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Second Partial Derivatives', 'f55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Slope',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Slope', 'cc8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Calculus/Multivariable Calculus/Why does the partial derivative point up',
        component: ComponentCreator('/docs/Calculus/Multivariable Calculus/Why does the partial derivative point up', '404'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
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
        path: '/docs/Neural Networks/Deep Learning Principles/Problems with Depth',
        component: ComponentCreator('/docs/Neural Networks/Deep Learning Principles/Problems with Depth', '89d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Deep Learning Principles/Problems with Depth copy',
        component: ComponentCreator('/docs/Neural Networks/Deep Learning Principles/Problems with Depth copy', '5f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Fundamentals/Backpropagation/A Vector Perspective',
        component: ComponentCreator('/docs/Neural Networks/Fundamentals/Backpropagation/A Vector Perspective', '331'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Fundamentals/Backpropagation/Graphs',
        component: ComponentCreator('/docs/Neural Networks/Fundamentals/Backpropagation/Graphs', 'c5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Fundamentals/Backpropagation/Steps in Backpropagation',
        component: ComponentCreator('/docs/Neural Networks/Fundamentals/Backpropagation/Steps in Backpropagation', 'af8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Fundamentals/Basic Architecture',
        component: ComponentCreator('/docs/Neural Networks/Fundamentals/Basic Architecture', '8f7'),
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
