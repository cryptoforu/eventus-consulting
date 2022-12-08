import React from "react";
import { Link } from "./Index";

const Card = React.forwardRef(({ image, title, desc, to },ref) => {
  return (
    <div ref={ref} className="relative overflow-hidden space-y-4 rounded-3xl border border-cyan-100 dark:border-slate-700 shadow-2xl shadow-slate-900/10 dark:shadow-none bg-white dark:bg-slate-800 px-8 py-12  sm:px-12 lg:px-8">
      {image}
      <h3 className="text-2xl font-semibold text-slate-800 dark:text-white">
        {title}
      </h3>
      <p className="mb-6 text-slate-600 dark:text-slate-300">{desc}</p>
      <Link to={to} className="block font-medium text-cyan-500">
        Saznaj Vise
      </Link>
    </div>
  );
});

export default Card;
