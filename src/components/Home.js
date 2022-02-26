import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shadow Super Devs!</title>
        <meta name='description' content="Shadow Super Devs NFT's!" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Shadowy Super Devs!</h1>
      </main>
    </div>
  );
}
