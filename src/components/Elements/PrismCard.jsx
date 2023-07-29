import React, { Fragment } from "react";
import { Highlight } from "prism-react-renderer";
import clsx from "clsx";




const codeLanguage = "javascript";
const code = `function App({Component, pageProps}) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
  export default App
  `;
const phpLanguage = "php";
const php = `public function show()
{
    return view('shop', [
        'products' => Products::all()
    ]);
}`;
const cssLanguage = "css";
const css = `module.exports = {
    theme: {
      screens: {
        'mobile': '640px',
        'desktop': '1280px',
      },
    }
  }
`;

const variants = {
  javascript: {
    isActive: true,
    codeLanguage: codeLanguage,
    code: code,
  },
  php: {
    isActive: true,
    codeLanguage: phpLanguage,
    code: php,
  },
  css: {
    isActive: true,
    codeLanguage: cssLanguage,
    code: css,
  },
};

const PrismCard = ({ variant = "javascript" }) => {
 
  const tabs = [
    {
      name: "moderni-web-dizajn.js",
      isActive: variant === "javascript" || false,
    },
    { name: "shop.php", isActive: variant === "php" || false },
    { name: "tailwind.config.js", isActive: variant === "css" || false },
  ];
  return (
    <div className="relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur">
      <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
      <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
      <div className="pl-4 pt-4">
        <svg
          aria-hidden="true"
          className="h-2.5 w-auto stroke-slate-500/30"
          fill="none"
        >
          <circle cx="5" cy="5" r="4.5" />
          <circle cx="21" cy="5" r="4.5" />
          <circle cx="37" cy="5" r="4.5" />
        </svg>
        <div className="mt-4 flex space-x-2 text-xs">
          {tabs.map((tab) => (
            <div
              key={tab.name}
              className={clsx("flex h-6 rounded-full", {
                "bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300":
                  tab.isActive,
                "text-slate-500": !tab.isActive,
              })}
            >
              <div
                className={clsx("flex items-center rounded-full px-2.5", {
                  "bg-slate-800": tab.isActive,
                })}
              >
                {tab.name}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-start px-1 text-sm">
          <div
            aria-hidden="true"
            className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-600"
          >
            {Array.from({
              length: variants[variant].code.split("\n").length,
            }).map((_, index) => (
              <Fragment key={index}>
                {(index + 1).toString().padStart(2, "0")}
                <br />
              </Fragment>
            ))}
          </div>
          <Highlight
            code={variants[variant].code}
            language={variants[variant].codeLanguage}
          >
            {({ className, tokens, getLineProps, getTokenProps }) => (
              <pre
                className={clsx(
                  className,
                  "flex overflow-x-auto pb-6 text-cyan-300"
                )}
              >
                <code className={clsx('px-4')}>
                  {tokens.map((line, index) => (
                    <div key={index} {...getLineProps({ line })}>
                      {line.map((token, index) => (
                        <span key={index} {...getTokenProps({ token })} />
                      ))}
                    </div>
                  ))}
                </code>
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default PrismCard;
