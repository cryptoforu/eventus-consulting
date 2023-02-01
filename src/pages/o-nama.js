import React from "react";
import { Seo } from "../components/Seo";
import { BredCumbs, PageWrapper } from "../components/Elements/Index";
import { About, OurMission } from "../components/Sections/About/Index";
import { Cta, PageHero } from "../components/Sections/Index";

const AboutUsPage = ({ location }) => {
  const breadcumbs = [
    {
      title: "O nama",
      slug: location.pathname,
    },
  ];
  return (
    <PageWrapper location={location}>
      <PageHero
        title="Vođeni saradnjom."
        gradientTitle="Pokrenuti idejama"
        breadcumbs={<BredCumbs items={breadcumbs} />}
      />
      <About />
      <OurMission />
      <Cta />
    </PageWrapper>
  );
};

export default AboutUsPage;
export const Head = () => <Seo title="O nama" />;
