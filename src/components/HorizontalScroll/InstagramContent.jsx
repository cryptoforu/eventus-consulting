import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import {
  Heading,
  GradientText,
  Prose,
  Button,
  SocialCard,
  Container,
} from "../Elements/Index";

export function InstaCon() {
  return (
    <Container className="mt-20">
      <div className="grid grid-cols-12 items-center gap-8">
        <div className="relative z-10 order-last col-span-6 space-y-6">
          <div className="relative py-16">
            <Heading
              headingLevel="h2"
              className="font-bold text-5xl sm:text-6xl md:text-7xl xl:text-8xl"
            >
              Budite Prvi Na Drustvenim <GradientText>Mrezama</GradientText>.
            </Heading>
            <Prose className={"max-w-lg"}>
              <p className="mt-4 text-lg">
                Marketing na društvenim mrežama je proces kreiranja sadržaja za
                platforme društvenih medija za promoviranje vaših proizvoda
                i/ili usluga, izgradnju zajednice s vašom ciljnom publikom i
                usmjeravanje prometa na vaše poslovanje.
              </p>
            </Prose>
            <div className="mt-6">
              <Button
                variant="rounded"
                color="gray"
                whileTap={{ scale: 1.3, borderRadius: "6px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 10,
                  mass: 1,
                }}
              >
                Pogledaj Sve
              </Button>
            </div>
          </div>
        </div>
        <div className="relative col-span-6">
          <div className="z-10 mx-auto w-full max-h-fit">
            <SocialCard className={"relative"}>
              <SocialCard.Header messageCount="4" />
              <SocialCard.StoryHead />
              <SocialCard.PostContainer>
                <div>
                  <SocialCard.Post
                    postImage={
                      <StaticImage
                        src="../../images/instagram/insta1.webp"
                        className="h-full w-full rounded-3xl"
                        alt="instagram oglasi"
                      />
                    }
                    likeCount="126"
                    commentCount="40"
                  />
                </div>
              </SocialCard.PostContainer>
              <SocialCard.Navigation />
            </SocialCard>
          </div>
        </div>
      </div>
    </Container>
  );
}
