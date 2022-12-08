import React from "react";
import { Link } from "../../Elements/Index";
const PrevNext = ({ previousPage, nextPage }) => {
  return (
    <div className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8">
    <dl className="mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800">
      {previousPage && (
        <div>
          <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
            Predhodna
          </dt>
          <dd className="mt-1">
            <Link
              to={previousPage.href}
              className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              &larr; {previousPage.title}
            </Link>
          </dd>
        </div>
      )}
      {nextPage && (
        <div className="ml-auto text-right">
          <dt className="font-display text-sm font-medium text-slate-900 dark:text-white">
            Sljedeća
          </dt>
          <dd className="mt-1">
            <Link
              to={nextPage.href}
              className="text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
            >
              {nextPage.title} &rarr;
            </Link>
          </dd>
        </div>
      )}
    </dl>
    </div>
  );
};

export default PrevNext;
