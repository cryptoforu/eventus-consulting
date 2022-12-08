import React from "react";
import { useBreadcrumbs, useBreadcrumbItem } from "react-aria";
import clsx from "clsx";
import { navigate } from "gatsby";
import { HomeIcon } from "@heroicons/react/24/outline";
const BreadCumbs = ({items}) => {
  return (
    <Breadcrumbs>
      <BreadcrumbItem isFirst onPress={() => navigate('/')} />
      {items.map((item, i) =>
        items.length - 1 === i ? (
          <BreadcrumbItem key={i}>{item.title}</BreadcrumbItem>
        ) : (
          <BreadcrumbItem key={i} onPress={() => navigate(item.slug)}>
            {item.title}
          </BreadcrumbItem>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadCumbs;

function Breadcrumbs(props) {
  let { navProps } = useBreadcrumbs(props);
  let children = React.Children.toArray(props.children);

  return (
    <nav {...navProps} className='flex justify-center'>
      <ol className="flex items-center space-x-4">
        {children.map((child, i) =>
          React.cloneElement(child, { isCurrent: i === children.length - 1 })
        )}
      </ol>
    </nav>
  );
}

function BreadcrumbItem(props) {
  let ref = React.useRef();
  let { itemProps } = useBreadcrumbItem({ ...props, elementType: "span" }, ref);
  return props.isFirst ? (
    <li>
      <div>
        <span
          {...itemProps}
          ref={ref}
          className="text-gray-400 hover:text-gray-500 cursor-pointer"
        >
          <HomeIcon className="flex-shrink-0 h-5 w-5" aria-hidden="true" />
          <span className="sr-only">Home</span>
        </span>
      </div>
    </li>
  ) : (
    <li>
      <div className="flex items-center">
        <svg
          className="flex-shrink-0 h-5 w-5 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
        </svg>
        <span
          {...itemProps}
          ref={ref}
          className={clsx(
            props.isCurrent
              ? "ml-4 text-sm font-semibold text-cyan-500"
              : "ml-4 text-sm font-medium text-gray-500 hover:text-gray-700 cursor-pointer capitalize"
          )}
        >
          {props.children}
        </span>
      </div>
    </li>
  );
}
