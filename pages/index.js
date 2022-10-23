import Layout from '@/components/layout';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import Container from '@/components/container';

export default function Index() {
  return (
    <>
      <Layout description="Main description" title="Main title">
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <Container>hello section</Container>
      </Layout>
    </>
  );
}
