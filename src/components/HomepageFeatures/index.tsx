import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/Happy_musician.svg').default,
    description: (
      <>
        Designed to facilitate getting Resonate's development environment
        up and running quickly and without difficulty.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/Resonate_Ear.svg').default,
    description: (
      <>
        Save time by avoiding hunting for information in multiple places and use what
        aims to be a single source of truth for all things related to Resonate's tech.
      </>
    ),
  },
  {
    title: 'Powered by Community',
    Svg: require('@site/static/img/P2P.svg').default,
    description: (
      <>
        Extend your skills and get involved with a flourishing open-source development
        community and contribute to Resonate's growing technology ecosystem.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
