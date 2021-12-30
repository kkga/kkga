import React from "react";

export default function Footer({ children }) {
  return (
    <div
      slot="footer"
      className="flex flex-col gap-8 px-4 sm:px-8 py-4 dark:bg-gray-800 bg-gray-100"
    >
      <div className="sm:flex justify-between">
        <span className="text-gray-500">
          Gadzhi Kharkharov &copy; 2019&ndash;present
        </span>

        <nav className="flex gap-1 text-gray-500">
          <a className="text-current" href="/">index</a>
          <span>&middot;</span>
          <a className="text-current" href="/now">now</a>
          <span>&middot;</span>
          <a className="text-current" href="/uses">uses</a>
        </nav>
      </div>
    </div>
  );
}
