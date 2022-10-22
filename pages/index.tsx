import type { NextPage } from 'next';
// import HeroSection from '../components/hero-section';
import Layout from '../components/layout';

const title = 'Trener Rafał | Trener Personalny';
const subtitle = 'Trener Rafał subtitle';

const Home: NextPage = () => {
  // @ts-ignore
  return (
    <Layout title="Home" description={`${title} - ${subtitle}`}>
      {/*<HeroSection />*/}
      <div>sample div</div>
    </Layout>
  );
};

export default Home;
