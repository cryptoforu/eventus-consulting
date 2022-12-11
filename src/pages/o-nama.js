import React from 'react';
import { Seo } from '../components/Seo';
import { motion } from "framer-motion";
import { BredCumbs } from "../components/Elements/Index";
import { AboutHero, About } from '../components/Sections/About/Index'
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
        </motion.div>
    );
};

export default AboutUsPage;
export const Head = () => <Seo title="O nama" />;