import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Panduan Penginputan',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Panduan lengkap untuk proses penginputan data dan metadata dokumen hukum ke dalam sistem JDIH Komisi Yudisial.
      </>
    ),
  },
  {
    title: 'Panduan Abstrak',
     Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Petunjuk detail tentang cara menyusun dan menginput abstrak dokumen hukum sesuai dengan standar yang ditetapkan.
      </>
    ),
  },
  {
    title: 'Panduan Berkas',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Informasi teknis tentang cara mengunggah dan mengelola berkas-berkas dokumen hukum dalam sistem.
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
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
