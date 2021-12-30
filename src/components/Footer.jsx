import React from "react";

export default function Footer({ children }) {
  return (
    <div
      slot="footer"
      class="flex flex-col gap-8 px-4 sm:px-8 py-4 dark:bg-gray-800 bg-gray-100"
    >
      <div class="sm:flex justify-between">
        <span class="text-gray-500">
          Gadzhi Kharkharov &copy; 2019&ndash;present
        </span>

        <nav class="flex gap-2 text-gray-500">
          <a class="text-current" href="/">index</a>
          <span>&middot;</span>
          <a class="text-current" href="/now">now</a>
          <span>&middot;</span>
          <a class="text-current" href="/uses">uses</a>
        </nav>
      </div>
    </div>
  );
}
