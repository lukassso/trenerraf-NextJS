import Layout from '@/components/common/layout';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import HeroSection from '@/components/one-page/hero-section';
import SuccessStories from '@/components/one-page/success-stories-section';
import ExperiencesSection from '@/components/one-page/experiences-section';
import AboutSection from '@/components/one-page/about-section';
import TestimonialsSection from '@/components/one-page/testimonials-section';
import AskYourselfSection from '@/components/one-page/ask-yourself-section';

export default function Index() {
  return (
    <>
      <Layout description="Main description" title="Main title">
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <HeroSection />
        <SuccessStories />
        <ExperiencesSection />
        <AboutSection />
        <TestimonialsSection />
        {/*<AskYourselfSection />*/}
      </Layout>
    </>
  );
}
