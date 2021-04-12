import { ThemeProvider } from "theme-ui";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import Services from "sections/services";
import Testimonials from "sections/testimonials";
import OurTeam from "sections/our-team";
import OtherServices from "sections/other-services";
import WhyUs from "sections/why-us";
import SubscribeUs from "sections/subscribe-us";
import Blog from "sections/blog";
import CoreFeature from "sections/core-feature";
import Instaclone from "sections/instagramclone";
import Twitterclone from "sections/twitterclone";
import Movieapp from "sections/movieapp";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <SEO title="Gicklatt" description="Gicklatt cv and blog site" />
        {/*<Banner />*/}
        <CoreFeature />

        <OtherServices />

        <WhyUs />
        <Instaclone />
        <Twitterclone />
        <Movieapp />
        {/*<Testimonials />*/}
        {/*<OurTeam />*/}
        {/*<Services />*/}
        {/*<WhyUs />*/}
        {/**<Blog /> */}
        {/* <SubscribeUs /> */}
      </Layout>
    </ThemeProvider>
  );
}
