import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'e6e'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '139'),
    exact: true
  },
  {
    path: '/blog/Infinite-Nests',
    component: ComponentCreator('/blog/Infinite-Nests', 'a6d'),
    exact: true
  },
  {
    path: '/blog/resources',
    component: ComponentCreator('/blog/resources', 'f7f'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'a43'),
    exact: true
  },
  {
    path: '/blog/tags/maths',
    component: ComponentCreator('/blog/tags/maths', 'd5f'),
    exact: true
  },
  {
    path: '/blog/tags/settheory',
    component: ComponentCreator('/blog/tags/settheory', '77c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '622'),
    exact: true
  },
  {
    path: '/search',
    component: ComponentCreator('/search', '180'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'b48'),
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
        path: '/docs/Calculus/Elementary/Limits',
        component: ComponentCreator('/docs/Calculus/Elementary/Limits', '71d'),
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
        path: '/docs/Intro',
        component: ComponentCreator('/docs/Intro', '1f0'),
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
        path: '/docs/Neural Networks/Attention and Transformers/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Attention and Transformers/Introduction', 'f60'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Convolutional Neural Networks/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Convolutional Neural Networks/Introduction', '1ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Deep Learning Principles/Activation Functions',
        component: ComponentCreator('/docs/Neural Networks/Deep Learning Principles/Activation Functions', '5e5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Deep Learning Principles/Dying Neurons',
        component: ComponentCreator('/docs/Neural Networks/Deep Learning Principles/Dying Neurons', 'ad8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Deep Learning Principles/Optimising Deep Networks: A Toolkit for Tackling Gradient Challenges',
        component: ComponentCreator('/docs/Neural Networks/Deep Learning Principles/Optimising Deep Networks: A Toolkit for Tackling Gradient Challenges', '457'),
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
        path: '/docs/Neural Networks/Deep Reinforcement Learning/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Deep Reinforcement Learning/Introduction', '15b'),
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
        path: '/docs/Neural Networks/Fundamentals/Backpropagation/Computational Graph',
        component: ComponentCreator('/docs/Neural Networks/Fundamentals/Backpropagation/Computational Graph', 'b00'),
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
        path: '/docs/Neural Networks/Fundamentals/Neural Networks',
        component: ComponentCreator('/docs/Neural Networks/Fundamentals/Neural Networks', 'cfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Graph Neural Networks/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Graph Neural Networks/Introduction', 'acc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Radial Basis Function Networks/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Radial Basis Function Networks/Introduction', 'cac'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Recurrent Neural Networks/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Recurrent Neural Networks/Introduction', '02f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Neural Networks/Restricted Boltzmann Machine/Introduction',
        component: ComponentCreator('/docs/Neural Networks/Restricted Boltzmann Machine/Introduction', '1e6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Probability/Combinatorics/Graph Theory Basics',
        component: ComponentCreator('/docs/Probability/Combinatorics/Graph Theory Basics', '10f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Probability/Combinatorics/Permutations and Combinations',
        component: ComponentCreator('/docs/Probability/Combinatorics/Permutations and Combinations', '282'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Probability/Combinatorics/Pigeonhole Principle',
        component: ComponentCreator('/docs/Probability/Combinatorics/Pigeonhole Principle', '398'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/Probability/Discrete Random Variables',
        component: ComponentCreator('/docs/Probability/Discrete Random Variables', '31f'),
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
