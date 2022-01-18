import { formatDateShort } from "../utils.js";

export default function Listing({ title, items }) {
  return (
    <div>
      <h2 className="mt-0 mb-4">{title}</h2>
      <ul className="flex flex-col list-none gap-x-8 divide-y dark:divide-gray-700 sm:divide-y-0">
        {items.map((item) => <ListItem key={item.url} {...item} />)}
      </ul>
    </div>
  );
}

function ListItem({ title, url, description, date }) {
  return (
    <li className="sm:flex sm:flex-row sm:items-center py-2 sm:py-1 gap-0 sm:gap-2 sm:leading-tight">
      <a
        href={url}
        className="uppercase font-bold inline-block sm:flex-shrink-0 sm:overflow-hidden sm:overflow-ellipsis "
      >
        {title}
      </a>
      <div className="hidden sm:block basis-16 flex-1 mt-1 border-t-2 h-1 border-dotted border-gray-400 dark:border-gray-700">
      </div>
      {description &&
        (
          <span className="inline italic ml-2 sm:ml-0 sm:text-right sm:overflow-ellipsis sm:overflow-hidden sm:whitespace-nowrap text-gray-500 dark:text-gray-400">
            {description}
          </span>
        )}
      {date &&
        (
          <time
            className="hidden sm:block whitespace-nowrap text-gray-500 dark:text-gray-400 sm:ml-2"
            dateTime={date}
          >
            {formatDateShort(date)}
          </time>
        )}
    </li>
  );
}
