import React from 'react';
import { Seo } from '../components/Seo';
import { motion } from "framer-motion";
import { BredCumbs } from "../components/Elements/Index";
import { AboutHero, About, OurMission } from '../components/Sections/About/Index'
import {Cta} from '../components/Sections/Index'
import {
    staggerContainerVariant,
  } from "../components/Motion/variants";
const AboutUsPage = ({location}) => {
    const breadcumbs = [
        {
          title: "O nama",
          slug: location.pathname,
        },
      ];
    return (
        <motion.div initial="hidden"
        animate='show'
        variants={staggerContainerVariant}>
          <AboutHero breadcumbs={<BredCumbs items={breadcumbs} />}/>
          <About/> 
          <OurMission/>  
          <Cta/>
        </motion.div>
    );
};

export default AboutUsPage;
export const Head = () => <Seo title="O nama" />;