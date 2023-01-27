import Layout from '@/components/common/layout';
import HeroSection from '@/components/one-page/hero-section';
import SuccessStories from '@/components/one-page/success-stories-section';
import ExperiencesSection from '@/components/one-page/experiences-section';
import AboutSection from '@/components/one-page/about-section';
import TestimonialsSection from '@/components/one-page/testimonials-section';
// import AskYourselfSection from '@/components/one-page/ask-yourself-section';
import {
  INDEX_DESCRIPTION,
  INDEX_DESCRIPTION_OG,
  INDEX_IMAGES_URL_OG,
  INDEX_TITLE,
  INDEX_TITLE_OG,
  INDEX_URL_OG,
} from '@/lib/seo-links';
import { URL_GOOGLE_API_PLACE_ID } from '@/lib/constants';

export default function Index({ res }) {
  console.log(res);
  return (
    <>
      <Layout
        description={INDEX_DESCRIPTION}
        title={INDEX_TITLE}
        ogTitle={INDEX_TITLE_OG}
        ogDescription={INDEX_DESCRIPTION_OG}
        ogImageUrl={INDEX_IMAGES_URL_OG}
        ogUrl={INDEX_URL_OG}
      >
        <HeroSection />
        <SuccessStories />
        <ExperiencesSection />
        <AboutSection />
        <TestimonialsSection res={res} />
        {/*<AskYourselfSection />*/}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  let res = null;
  try {
    const response = await fetch(URL_GOOGLE_API_PLACE_ID);
    res = await response.json();
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      res,
    },
  };
}
