import Layout from '@/components/common/layout';
import HeroSection from '@/components/one-page/hero-section';
import SuccessStories from '@/components/one-page/success-stories-section';
import ExperiencesSection from '@/components/one-page/experiences-section';
import AboutSection from '@/components/one-page/about-section';
import TestimonialsSection from '@/components/one-page/testimonials-section';
import AskYourselfSection from '@/components/one-page/ask-yourself-section';
import {INDEX_DESCRIPTION, INDEX_DESCRIPTION_OG, INDEX_TITLE, INDEX_TITLE_OG} from './_app';

export default function Index() {
  return (
    <>
      <Layout description={INDEX_DESCRIPTION} title={INDEX_TITLE} ogTitle={INDEX_TITLE_OG} ogDescription={INDEX_DESCRIPTION_OG}>

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
