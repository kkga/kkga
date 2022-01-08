import metadata from "../data/metadata.json";
import { formatDateFull } from "../utils.js";

export default function MainHeader(
  { title, description, date, tags, children },
) {
  return (
    <header className="lg:grid grid-cols-header items-baseline p-4 sm:px-6">
      <div className="text-sm">
        {title
          ? (
            <h1 className="m-0 text-sm uppercase text-left font-bold font-mono">
              {title}
            </h1>
          )
          : (
            <>
              <span className="font-bold mr-2">&larr;</span>
              <a href="/" className="uppercase font-bold">
                index
              </a>
            </>
          )}
      </div>

      <div className="mt-4 lg:m-0">
        {description && <span>{description}</span>}
        {children}
      </div>

      <div className="lg:text-right">
        {date &&
          <time className="block" dateTime={date}>{formatDateFull(date)}</time>}
      </div>

      <div className="lg:text-right">
        {tags && (
          <ul className="inline-flex gap-2 m-0 list-none">
            {tags.map((tag) => {
              const tagUrl = `/tags/${tag}`;

              return (
                <li key={tagUrl} className="m-0 inline">
                  <a href={tagUrl}>#{tag}</a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </header>
  );
}
