import React from 'react';
import { useIsSSR } from 'react-aria';
import { MainNav } from './Navbar/Index';
import { BackToTop, ScrollSmooth } from './Index'
import { MainFooter } from './Footer/Index';
const Layout = ({children, location}) => {
    let isSSR = useIsSSR()
    const isHomePage = location.pathname === '/'
    return (
        <div className='bg-indigo-50 dark:bg-slate-900' id="viewport">
           {!isSSR && <ScrollSmooth/>} 
        <MainNav isHomepage={isHomePage}/>
        <main id='content'>
            {children}
            <MainFooter/>
        </main>
        
        <BackToTop/>
        </div>
    );
};

export default Layout;