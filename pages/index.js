import Layout from '@/components/common/layout';
import HeroSection from '@/components/one-page/hero-section';
import SuccessStories from '@/components/one-page/success-stories-section';
import ExperiencesSection from '@/components/one-page/experiences-section';
import AboutSection from '@/components/one-page/about-section';
import TestimonialsSection from '@/components/one-page/testimonials-section';
import AskYourselfSection from '@/components/one-page/ask-yourself-section';
import {
  INDEX_DESCRIPTION,
  INDEX_DESCRIPTION_OG,
  INDEX_IMAGES_URL_OG,
  INDEX_TITLE,
  INDEX_TITLE_OG,
  INDEX_URL_OG,
} from '@/lib/seo-links';

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
        <TestimonialsSection />
        {/*<AskYourselfSection />*/}
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const key = process.env.PLACES_KEY;
  let res = null;

  try {
    const respose = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJf14O7JLNHkcR-AJhS_VKLCw&key=${key}`,
    );
    res = await respose.json();
  } catch (error) {
    console.log(error);
  }

  return {
    props: {
      res,
    },
  };
}
