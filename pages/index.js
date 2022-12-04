import Layout from '@/components/common/layout';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import AboutSection from '@/containers/../components/one-page/about-section';
import HeroSection from '@/containers/../components/one-page/hero-section';
import SuccessStories from '@/containers/../components/one-page/success-stories-section';
import TestimonialsSection from '@/containers/../components/one-page/testimonials-section';
import ExperiencesSection from '@/containers/../components/one-page/experiences-section';
import AskYourselfSection from '@/containers/../components/one-page/ask-yourself-section';

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
        <AskYourselfSection />
      </Layout>
    </>
  );
}
