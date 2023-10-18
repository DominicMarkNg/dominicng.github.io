import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Mathematics',
    Svg: require('@site/static/img/mathematics_icon.svg').default, // replace with appropriate SVG
    description: (
      <>
        My notes on measure theory, probability, linear algebra, and matrix calculus
      </>
    ),
  },
  {
    title: 'Data Science',
    Svg: require('@site/static/img/machine_learning_icon.svg').default, // replace with appropriate SVG
    description: (
      <>
        Recreating basic algorithms and implementing basic neural networks
      </>
    ),
  },
  {
    title: 'Neurology and Medicine',
    Svg: require('@site/static/img/neurology_icon.svg').default, // replace with appropriate SVG
    description: (
      <>
        My notes from studying for the USMLE/ MRCP
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
