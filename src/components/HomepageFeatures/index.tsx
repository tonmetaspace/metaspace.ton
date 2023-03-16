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
    title: 'Private by design',
    Svg: require('@site/static/img/aegis.svg').default,
    description: (
      <>
        You control access to your Metaspace, so worlds are only discoverable to people you share the link with.
      </>
    ),
  },
  {
    title: 'Works across devices',
    Svg: require('@site/static/img/devices.svg').default,
    description: (
      <>
        Guests can join from any device with a modern browser — no downloads required.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open.svg').default,
    description: (
      <>
        Metaspace is built in the open — you can check out the source code <a target="_blank" rel="noreferrer" href="https://github.com/tonmetaspace">here</a>.
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
