import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Home from '../src/components/Home';

export default function Landing() {
  return (
    <div className={styles.container}>
      <Home />
    </div>
  );
}
