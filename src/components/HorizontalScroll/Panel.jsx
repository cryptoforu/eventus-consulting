import React from 'react';

const Panel = ({content, image}) => {
    return (
      <div className="relative py-16 w-full h-full flex items-center justify-center">
        <div className="lg:mx-auto lg:max-w-screen-2xl	lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6  lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
           {content}
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 sm:pr-6  lg:px-0 lg:m-0 lg:relative lg:h-full lg:w-full">
             {image}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Panel;