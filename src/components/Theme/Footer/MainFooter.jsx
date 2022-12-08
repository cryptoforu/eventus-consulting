import React from "react";
import { Logo, Link, Heading } from "../../Elements/Index";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./Index";
import { useSiteData } from "../../../hooks/useSiteData";
const currentYear = new Date().getFullYear();
const MainFooter = () => {
  const { contactDetails } = useSiteData().contact;

  return (
    <footer className="py-20 sm:py-24">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="-mb-0.5 w-full"
        viewBox="0 0 1367.743 181.155"
      >
        <path
          className="fill-current text-slate-100 dark:text-slate-800"
          id="wave"
          data-name="wave"
          d="M0,0S166.91-56.211,405.877-49.5,715.838,14.48,955.869,26.854,1366,0,1366,0V115H0Z"
          transform="translate(1.743 66.155)"
        ></path>
      </svg>
      <div className="bg-gradient-to-b from-gray-100 to-transparent dark:from-gray-800 dark:to-transparent pt-1">
        <div className="container m-auto space-y-8 px-6 text-gray-600 dark:text-gray-400 md:px-12 lg:px-20">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8">
            <Link to="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="flex gap-6">
              <Link
                to={contactDetails.facebook}
                className="hover:text-cyan-400"
                aria-label="facebook"
              >
                <FacebookIcon className="h-6 w-6" />
              </Link>
              <Link
                to={contactDetails.instagram}
                className="hover:text-cyan-400"
                aria-label="instagram"
              >
                <InstagramIcon className="h-6 w-6" />
              </Link>
              <Link
                to={contactDetails.linkedin}
                className="hover:text-cyan-400"
                aria-label="linkedin"
              >
                <LinkedinIcon className="h-6 w-6" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            <div>
              <Heading headingLevel="h6">Eventus Consulting</Heading>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <Link to="/" className="transition hover:text-cyan-600">
                    O Nama
                  </Link>
                </li>
                <li>
                  <Link to="/" className="transition hover:text-cyan-600">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Heading headingLevel="h6">Kontaktirajte Nas</Heading>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <Link
                    to={`tel:${contactDetails.phone}`}
                    className="transition hover:text-cyan-600"
                  >
                    {contactDetails.phone}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`email:${contactDetails.email}`}
                    className="transition hover:text-cyan-600"
                  >
                    {contactDetails.email}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Heading headingLevel="h6">Adresa</Heading>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <Link
                    to="https://goo.gl/maps/Xmb5gezS19JAgCGS9"
                    className="transition hover:text-cyan-600"
                  >
                    {contactDetails.address}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <Heading headingLevel="h6">Radno Vrijeme</Heading>
              <ul className="mt-4 list-inside space-y-4">
                <li>
                  <div className="transition hover:text-cyan-600">
                    {contactDetails.workDays}
                  </div>
                </li>
                <li>
                  <div className="transition hover:text-cyan-600">
                    {contactDetails.workTime}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between rounded-md bg-gray-200 px-4 py-3 text-gray-600">
            <span>
              &copy; Eventus Consulting <span id="year">{currentYear}</span>
            </span>
            <div className="space-x-2">
              <Link
                to="/"
                className="font-medium transition hover:text-cyan-600"
              >
                Pravila o Zaštiti Privatnosti
              </Link>
              <span>||</span>
              <Link
                to="/"
                className="font-medium transition hover:text-cyan-600"
              >
                Uslovi Korištenja
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
