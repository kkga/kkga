import React from "react";
import metadata from "../data/metadata.json";
import { formatDateFull } from "../utils.js";

export default function PageHeader(
  { title, description, showAboutLink = false, date, tags },
) {
  return (
    <header className="py-3 px-4 sm:px-8 bg-white dark:bg-gray-900 sm:flex justify-between items-baseline font-mono text-sm">
      <div>
        {title
          ? (
            <h1 className="m-0 uppercase text-sm font-mono font-bold">
              {title}
            </h1>
          )
          : (
            <a href="/" className="uppercase text-sm font-bold">
              {metadata.shortTitle}
            </a>
          )}
      </div>
      <div className="sm:text-right text-gray-500 italic">
        {description && <p className="m-0">{description}</p>}

        {showAboutLink && (
          <p className="m-0">
            <a href="/about">More about me</a>.
          </p>
        )}

        {date &&
          <time dateTime={date}>{formatDateFull(date)}</time>}

        {tags && (
          <>
            <span className="mx-2">/</span>
            <ul className="inline-flex gap-2 m-0 list-none">
              {tags.map((tag) => {
                const tagUrl = `/tags/${tag}`;

                return (
                  <li className="m-0 inline">
                    <a href={tagUrl}>#{tag}</a>
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
    </header>
  );
}
