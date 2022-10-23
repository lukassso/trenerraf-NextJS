import Layout from '@/components/layout';
import Head from 'next/head';
import { CMS_NAME } from '@/lib/constants';
import AboutSection from '@/containers/about-section';
import HeroSection from '@/containers/hero-section';
import SuccessStoriesSection from '@/containers/success-stories-section';
import TestimonialsSection from '@/containers/testimonials-section';
import ExperiencesSection from '@/containers/experiences-section';
import AskYourselfSection from '@/containers/ask-yourself-section';

export default function Index() {
  return (
    <>
      <Layout description="Main description" title="Main title">
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <HeroSection />
        <SuccessStoriesSection />
        <ExperiencesSection />
        <AboutSection />
        <TestimonialsSection />
        <AskYourselfSection />
      </Layout>
    </>
  );
}
