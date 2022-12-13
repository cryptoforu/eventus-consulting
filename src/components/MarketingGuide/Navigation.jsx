import { navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Button, Link, Logo } from "../Elements/Index";
const Navigation = () => {
  const data = useStaticQuery(graphql`
  query PrezentacijaQuery {
    file(relativePath: {eq: "Digitalni-marketing-vodic.pdf"}) {
    publicURL
  }
  }
  `)
  return (
    <header className="fixed top-0 left-0 z-50 w-full shadow-md shadow-slate-900/5 transition duration-500 dark:shadow-none sm:px-6 lg:px-8 bg-transparent text-slate-900">
      <nav>
        <div className="relative z-50 flex justify-between py-4 px-4">
          <div className="relative z-10 flex items-center gap-16">
            <Link to="/" aria-label="logo">
              <Logo className="h-10 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <Button
              variant="rounded"
              color="gradPurple"
              onPress={() => navigate("/", { replace: true, state: { refresh: true} })}
            >
              Povratak
            </Button>
            <Button variant="rounded" className='hidden md:block'>
        <a href={data.file.publicURL} target='_blank' rel="noreferrer">Skini PDF Verziju <StaticImage src='../../images/pdf_512px.png' className="w-6 h-6" alt='pdf'/></a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
