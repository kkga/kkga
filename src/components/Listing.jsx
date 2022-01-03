import { formatDateShort } from "../utils.js";

export default function Listing({ title, items }) {
  return (
    <div>
      <h3 className="mt-0 mb-4">{title}</h3>
      <ul className="flex flex-col list-none gap-x-8 gap-y-4 sm:gap-y-2">
        {items.map((item) => <ListItem key={item.url} {...item} />)}
      </ul>
    </div>
  );
}

function ListItem({ title, url, description, date }) {
  return (
    <li className="flex flex-col sm:flex-row sm:items-center gap-0 sm:gap-2 leading-tight">
      <a
        href={url}
        className="flex-shrink-0 block overflow-hidden overflow-ellipsis uppercase font-black"
      >
        {title}
      </a>
      <div className="hidden sm:block basis-16 flex-1 mt-1 border-t-2 h-1 border-dotted border-gray-400 dark:border-gray-700">
      </div>
      {description &&
        (
          <span className="italic sm:text-right sm:overflow-ellipsis sm:overflow-hidden sm:whitespace-nowrap">
            {description}
          </span>
        )}
      {date &&
        (
          <time
            className="hidden sm:block whitespace-nowrap sm:ml-2"
            dateTime={date}
          >
            {formatDateShort(date)}
          </time>
        )}
    </li>
  );
}
