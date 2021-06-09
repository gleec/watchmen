import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import Header from '../components/Header';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
