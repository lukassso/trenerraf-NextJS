import Layout from '@/components/common/layout';
import HeroSection from '@/components/one-page/hero-section';
import SuccessStories from '@/components/one-page/success-stories-section';
import ExperiencesSection from '@/components/one-page/experiences-section';
import AboutSection from '@/components/one-page/about-section';
import TestimonialsSection from '@/components/one-page/testimonials-section';
import AskYourselfSection from '@/components/one-page/ask-yourself-section';

const MAIN_DESCRIPTION =
  'Zapraszam na wspólne treningi na Mokotowie. Osobisty trening dostosowany do Twoich potrzeb. Pokażę Ci jak poprawić sylwetkę za pomocą odpowiednich ćwiczeń.';
const MAIN_TITLE = 'Trener Personalny Rafał Kiszło';

export default function Index() {
  return (
    <>
      <Layout description={MAIN_DESCRIPTION} title={MAIN_TITLE}>
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
