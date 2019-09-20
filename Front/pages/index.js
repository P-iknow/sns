import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import AppLayout from '../components/AppLayout';

const index = () => {
  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css"
        />
      </Head>
      <AppLayout>
        <Link href="/about">
          <a>about</a>
        </Link>
      </AppLayout>
    </>
  );
};

export default index;
