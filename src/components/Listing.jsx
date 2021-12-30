import React from "react";
import { formatDateShort } from "../utils.js";

export default function Listing({ title, items }) {
  return (
    <div>
      <h3 className="mt-0">{title}</h3>
      <ul className="list-none space-y-4 sm:space-y-2 m-0">
        {items.map((item) => {
          return <ListItem key={item.url} {...item} />;
        })}
      </ul>
    </div>
  );
}

function ListItem({ title, url, description, date }) {
  return (
    <li key={url} className="sm:flex items-baseline gap-2">
      <a
        href={url}
        className="flex-shrink-0 block overflow-hidden overflow-ellipsis uppercase font-bold"
      >
        {title}
      </a>
      <div className="hidden sm:block flex-1 border-b border-gray-300 dark:border-gray-700 self-center" />
      {description &&
        (
          <span className="italic sm:text-right block sm:overflow-ellipsis sm:overflow-hidden sm:whitespace-nowrap text-gray-500">
            {description}
          </span>
        )}
      {date &&
        (
          <div className="hidden sm:block flex-shrink-0 text-gray-500">
            <time dateTime={date}>
              {formatDateShort(date)}
            </time>
          </div>
        )}
    </li>
  );
}
