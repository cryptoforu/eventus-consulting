import React from "react";
import { Seo } from "../components/Seo";
import { PageHero, Cta } from "../components/Sections/Index";
import { PageWrapper, BredCumbs } from "../components/Elements/Index";
import { Cards, Services, Features } from "../components/Sections/WebDev/Index";

const WebDevPage = ({ location }) => {
  const breadcumbs = [
    {
      title: "Web Usluge",
      slug: location.pathname,
    },
  ];

  return (
    <PageWrapper location={location}>
      <PageHero
        title="Inovativna web rješenja."
        gradientTitle="Usmjereni na klijenta"
        breadcumbs={<BredCumbs items={breadcumbs} />}
      />
      <Cards />
      <Services />
      <Features />
      <Cta/>
    </PageWrapper>
  );
};

export default WebDevPage;
export const Head = () => <Seo title="Web Usluge" />;
