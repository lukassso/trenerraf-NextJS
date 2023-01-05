import Layout from '@/components/common/layout';
import HeroSection from '@/components/one-page/hero-section';
import SuccessStories from '@/components/one-page/success-stories-section';
import ExperiencesSection from '@/components/one-page/experiences-section';
import AboutSection from '@/components/one-page/about-section';
import TestimonialsSection from '@/components/one-page/testimonials-section';
import AskYourselfSection from '@/components/one-page/ask-yourself-section';
import { INDEX_DESCRIPTION, INDEX_TITLE } from './_app';

export default function Index() {
  return (
    <>
      <Layout description={INDEX_DESCRIPTION} title={INDEX_TITLE}>
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
