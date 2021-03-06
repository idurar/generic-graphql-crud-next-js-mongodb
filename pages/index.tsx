import type { NextPage } from 'next';

import Image from 'next/image';
import Head from 'next/head';
import background from '@/styles/images/background.jpg';

import PlaceList from '@/components/PlaceList';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Generic CRUD with Apollo Graphql Server Next.js and Mongodb Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          style={{
            overflow: 'hidden',
            borderRadius: '10px',
            width: '1100px',
            maxWidth: '100%',
            height: '462px',
            margin: '100px auto',
          }}
        >
          <Image src={background} width={'1100'} height={462} />
        </div>
      </main>
    </div>
  );
};

export default Home;
