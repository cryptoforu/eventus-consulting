import React from 'react'
import Layout from './wrapPageElement'
import SSR from './wrapRootElement'
const themeScript = `
  let mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

  function updateTheme(savedTheme) {
    let theme = 'dark'
    try {
      if (!savedTheme) {
        savedTheme = window.localStorage.theme
      }
      if (savedTheme === 'dark') {
        theme = 'dark'
        document.documentElement.classList.add('dark')
      } else if (savedTheme === 'light') {
        theme = 'light'
        document.documentElement.classList.remove('dark')
      } else if (mediaQuery.matches) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
    } catch {
      theme = 'light'
      document.documentElement.classList.remove('dark')
    }
    return theme
  }

  function updateThemeWithoutTransitions(savedTheme) {
    updateTheme(savedTheme)
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }

  document.documentElement.setAttribute('data-theme', updateTheme())

  new MutationObserver(([{ oldValue }]) => {
    let newValue = document.documentElement.getAttribute('data-theme')
    if (newValue !== oldValue) {
      try {
        window.localStorage.setItem('theme', newValue)
      } catch {}
      updateThemeWithoutTransitions(newValue)
    }
  }).observe(document.documentElement, { attributeFilter: ['data-theme'], attributeOldValue: true })

  mediaQuery.addEventListener('change', updateThemeWithoutTransitions)
  window.addEventListener('storage', updateThemeWithoutTransitions)
`;

const HtmlAttributes = {
  className: "h-full bg-indigo-50 dark:bg-slate-900 antialiased", lang: 'bs',
};

const HeadComponents = [
  <script key='darkmode' dangerouslySetInnerHTML={{ __html: themeScript }} />,
];

const BodyAttributes = {
  className: "flex h-full flex-col",
};



export const onRenderBody = (
  { setHtmlAttributes, setHeadComponents, setBodyAttributes }
  
) => {
  setHtmlAttributes(HtmlAttributes);
  setHeadComponents(HeadComponents);
  setBodyAttributes(BodyAttributes);
  
};
export const wrapRootElement = SSR;
export const wrapPageElement = Layout;