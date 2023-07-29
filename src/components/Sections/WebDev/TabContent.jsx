import React from "react";
import { useLottie } from "lottie-react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Heading } from "../../Elements/Index";
const Animation = (props) => {
  const options = {
    animationData: props.animation,
    loop: true,
  };
  const { View } = useLottie(options, {padding: '8px'});
  return <>{View}</>;
};

const TabContent = ({ item }) => { 
  return (
    <div className="mt-20 p-8 overflow-hidden rounded-2xl bg-slate-200 dark:bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
      <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div className="mt-10 mx-4 relative lg:mt-0 lg:col-start-1">
          <Animation animation={item.animation} />
        </div>
        <div className="lg:col-start-2 lg:self-start">
          <Heading
            headingLevel="h3"
            className={
              "text-2xl font-extrabold text-gray-900 dark:text-slate-100 tracking-tight sm:text-3xl"
            }
          >
            {item.content.title}
          </Heading>
          <Heading
            className={"mt-3 text-lg text-slate-600 dark:text-slate-300"}
          >
            {item.content.description}
          </Heading>
          <dl className="mt-10 space-y-10">
            {item.features.map((feature) => (
              <div key={feature.title} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <div className="h-6 w-6" aria-hidden="true">
                      <GatsbyImage
                        image={getImage(feature.icon)}
                        alt={feature.title}
                      />
                    </div>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-400">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default TabContent;
