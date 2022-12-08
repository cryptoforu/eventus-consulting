import React, { forwardRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import clsx from "clsx";
import {
  ChatBubbleOvalLeftIcon,
  UserCircleIcon,
  MagnifyingGlassIcon,
  HeartIcon,
  HomeIcon,
  
} from "@heroicons/react/24/outline";
import { Button } from "./Index";
import {defaultStory} from '../../data/insta_story'
function InstaLogo() {
  return (
    <StaticImage
      src="../../images/Instagram_Glyph_Gradient.png"
      className="h-12 w-12"
      alt="instagram oglasavanje"
    />
  );
}

const SocialCard = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        "md:max-w-md px-7 pb-10 pt-2 mx-auto bg-white dark:bg-black rounded-2xl shadow-xl",
        className
      )}
      {...props}
    >
      <div className="mx-auto">
        <div className="flex flex-col ">{children}</div>
      </div>
    </div>
  );
};

export default SocialCard;

SocialCard.Header = forwardRef(function SocialCardHeader(
  { messageCount, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("flex items-center justify-center py-2 mb-4 border-b  border-slate-200", className)}
    >
      <div className="flex-1 items-center">
        {/* Logo  */}
        <InstaLogo />
      </div>

      <div className="flex-1 w-full">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-end-7">
            <div className="relative flex  place-items-end">
              <div className="relative">
                <Button
                  variant="icon"
                  className="p-1 
                                hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200
                                transition-all duration-150 delay-100"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="500"
                    height="500"
                    className="w-6 h-6 mx-1 fill-slate-700 dark:fill-slate-300"
                  >
                    <path
                      d="M9 4C6.2545455 4 4 6.2545455 4 9L4 41C4 43.745455 6.2545455 46 9 46L41 46C43.745455 46 46 43.745455 46 41L46 9C46 6.2545455 43.745455 4 41 4L9 4 z M 9 6L41 6C42.654545 6 44 7.3454545 44 9L44 41C44 42.654545 42.654545 44 41 44L9 44C7.3454545 44 6 42.654545 6 41L6 9C6 7.3454545 7.3454545 6 9 6 z M 24 13L24 24L13 24L13 26L24 26L24 37L26 37L26 26L37 26L37 24L26 24L26 13L24 13 z"
                      fill="currentColor"
                    />
                  </svg>
                </Button>
              </div>
              <div className="relative">
                <Button
                  variant="icon"
                  className="p-1 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-200
                                transition-all duration-150 delay-100"
                >
                  <ChatBubbleOvalLeftIcon className="w-6 h-6 mx-1 text-slate-700 dark:text-slate-300" />

                  <span className="top-0 left-5 absolute flex items-center justify-center w-3.5 h-3.5 bg-red-500 border-2 border-white dark:border-gray-800 rounded-full p-1">
                    <span className="text-white text-xs">{messageCount}</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
SocialCard.StoryHead = forwardRef(function SocialCardStoryHead(
  { children, className, notDefault },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("flex mx-auto mb-5 border-b pb-2 border-gray-100", className)}
    >
      {/* Story Bar  */}
      <ul className="flex items-center justify-center space-x-2">
        <li className="flex flex-col items-center space-y-2">
          <Button variant="icon" className="relative">
            <StaticImage
              className="w-10 h-10 rounded-full"
              src="../../images/logo_eventus.png"
              alt=""
            />
            <span className="bottom-0 left-8 absolute w-4 h-4 flex items-center  justify-center bg-blue-600 border-2 border-white dark:border-gray-800 rounded-full text-white text-xs">
              +
            </span>
          </Button>

          <span className="text-sm font-medium text-slate-800 dark:text-slate-100">econsult</span>
        </li>
        {notDefault ? children : defaultStory.map((story, i) => (
          <SocialCard.Story key={i} storyImage={story.storyImage} storyText={story.storyText}/>
        ))}
      </ul>
    </div>
  );
});
SocialCard.Story = forwardRef(function SocialCardStory(
  { className, storyImage, storyText },
  ref
) {
  return (
    <li
      ref={ref}
      className={clsx("flex flex-col items-center space-y-2", className)}
    >
      {/* Ring  */}
      <div
        className="p-0.5 flex justify-center items-center
                                            bg-gradient-to-tl from-yellow-200 to-orange-500 
                                            rounded-full relative cursor-pointer
                                            hover:from-orange-300 hover:to-red-400
                                            transition-all duration-150 delay-100"
      >
        <div className="block bg-white p-1 rounded-full"> 
          {/* className='w-16 rounded-full' */}
          {storyImage}
        </div>
      </div>

      {/* Story Text  */}
      <span className="story-text font-medium text-slate-800 dark:text-slate-100">{storyText}</span>
    </li>
  );
});
SocialCard.PostContainer = forwardRef(function SocialCardPostContainer(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx("flex flex-col h-80 overflow-hidden px-5 py-2", className)}
    >
      {children}
    </div>
  );
});
SocialCard.Post = forwardRef(function SocialCardPost(
  { postImage },
  ref
) {
  return (
    <div
      ref={ref}
      className="flex justify-center items-center
                                    relative cursor-pointer mb-6
                                    transition-all duration-150 delay-100"
    >
      {/* Post Item  */}
      {/*      className='h-full w-full rounded-3xl' */}
      {postImage}

      {/* Post Owner  */}

      {/* Post Counts  */}
    </div>
  );
});
SocialCard.Navigation = forwardRef(function SocialCardNavigation(
  { className },
  ref
) {
  return (
    <div ref={ref} className={clsx("absolute bottom-0 left-0 w-full", className)}>
      <div className="px-7  bg-white dark:bg-black shadow-lg rounded-2xl">
        <div className="flex flex-row items-center justify-center space-x-3">
          {/* Item #1  */}
          <div className="flex group">
            <div className="p-2 text-gray-400 hover:text-yellow-500">
              <span className="flex flex-col items-center">
                <HomeIcon
                  className="w-6 h-6 mx-1 text-gray-500 group-hover:text-gray-700
                            transition-color duration-200"
                />

                <span className="text-xs transition-all duration-200">
                  Home
                </span>

                
              </span>
            </div>
          </div>

          {/* Item #2  */}
          <div className="flex group">
            <div className="p-2 text-gray-400 hover:text-yellow-500">
              <span className="flex flex-col items-center">
                <MagnifyingGlassIcon
                  className="w-6 h-6 mx-1 text-gray-500 group-hover:text-gray-700
                            transition-color duration-200"
                />
                <span className="text-xs transition-all duration-200">
                  Explore
                </span>
                
              </span>
            </div>
          </div>

          {/* Item #3 Active  */}
          <div className="flex group">
            <div className="p-2 text-yellow-500 hover:text-yellow-500">
              <span className="flex flex-col items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  width="500"
                  height="500"
                  className="w-6 h-6 mx-1 text-gray-700 group-hover:text-gray-700
                            transition-color duration-200"
                >
                  <path
                    d="M15 4C8.9365932 4 4 8.9365932 4 15L4 35C4 41.063407 8.9365932 46 15 46L35 46C41.063407 46 46 41.063407 46 35L46 15C46 8.9365932 41.063407 4 35 4L15 4 z M 16.740234 6L27.425781 6L33.259766 16L22.574219 16L16.740234 6 z M 29.740234 6L35 6C39.982593 6 44 10.017407 44 15L44 16L35.574219 16L29.740234 6 z M 14.486328 6.1035156L20.259766 16L6 16L6 15C6 10.199833 9.7581921 6.3829803 14.486328 6.1035156 z M 6 18L44 18L44 35C44 39.982593 39.982593 44 35 44L15 44C10.017407 44 6 39.982593 6 35L6 18 z M 21.978516 23.013672C20.435152 23.049868 19 24.269284 19 25.957031L19 35.041016C19 37.291345 21.552344 38.713255 23.509766 37.597656L31.498047 33.056641C33.442844 31.951609 33.442844 29.044485 31.498047 27.939453L23.509766 23.398438L23.507812 23.398438C23.018445 23.120603 22.49297 23.001607 21.978516 23.013672 z M 21.982422 24.986328C22.158626 24.988232 22.342399 25.035052 22.521484 25.136719L30.511719 29.677734C31.220922 30.080703 31.220922 30.915391 30.511719 31.318359L22.519531 35.859375C21.802953 36.267773 21 35.808686 21 35.041016L21 25.957031C21 25.573196 21.201402 25.267385 21.492188 25.107422C21.63758 25.02744 21.806217 24.984424 21.982422 24.986328 z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-xs transition-all duration-200">
                  Reels
                </span>
           
                
              </span>
            </div>
          </div>

          {/* Item #4  */}
          <div className="flex group">
            <div className="p-2 text-gray-400 hover:text-yellow-500">
              <span className="flex flex-col items-center">
                <HeartIcon
                  className="w-6 h-6 mx-1 text-gray-500 group-hover:text-gray-700
                            transition-color duration-200"
                />

                <span className="text-xs  transition-all duration-200">
                  Likes
                </span>
               </span>
            </div>
          </div>

          {/* Item #5  */}
          <div className="flex group">
            <div className="p-2 text-gray-400 hover:text-yellow-500">
              <span className="flex flex-col items-center">
                <UserCircleIcon
                  className="w-6 h-6 mx-1 text-gray-500 group-hover:text-gray-700
                            transition-color duration-200"
                />

                <span className="text-xs transition-all duration-200">
                  Account
                </span>
               </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
