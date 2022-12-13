import './src/styles/global.css'
import "@fontsource/inter"
import "@fontsource/lexend"
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import Layout from './wrapPageElement'
import SSR from './wrapRootElement'

export const wrapRootElement = SSR;
export const wrapPageElement = Layout;

export const onRouteUpdate = ({ location, prevLocation }) => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh() 
    console.log('new pathname', location.pathname)
    console.log('old pathname', prevLocation ? prevLocation.pathname : null)
}