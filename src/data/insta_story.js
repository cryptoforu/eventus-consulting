import React from "react"
import { StaticImage } from "gatsby-plugin-image"
export const defaultStory = [
    {
        storyImage: (
            <StaticImage
                      src="../images/instagram/insta_user_avatar2.webp"
                      className="w-10 rounded-full"
                      alt="instagram oglasavanje"
                    />
        ),
        storyText: 'Elisa'
    },
    {
        storyImage: (
            <StaticImage
                      src="../images/instagram/insta_user_avatar3.webp"
                      className="w-10 rounded-full"
                      alt="instagram oglasavanje"
                    />
        ),
        storyText: 'web_dev' 
    },
    {
        storyImage: (
            <StaticImage
                      src="../images/instagram/insta_user_avatar4.webp"
                      className="w-10 rounded-full"
                      alt="instagram oglasavanje"
                    />
        ),
        storyText: "hentoni_doe"
    },
    {
        storyImage: (
            <StaticImage
                      src="../images/instagram/insta_user_avatar5.webp"
                      className="w-10 rounded-full"
                      alt="instagram oglasavanje"
                    />
        ),
        storyText: "business"
    }
]