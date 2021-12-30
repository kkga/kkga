import React from "react";

export default function ProjectLink({ title, url }) {
  return (
    <>
      <a
        href={url}
        className="inline-block my-2 py-1 px-3
        shadow-sm hover:no-underline
        bg-accent-50 border border-accent-300
        dark:text-white dark:border-accent-800 dark:bg-accent-900
        hover:bg-accent-100 hover:shadow-accent-500/50 hover:border-accent-500
        hover:dark:bg-accent-800 hover:dark:shadow-accent-500/50 hover:dark:border-accent-600
        "
      >
        {title} ↗
      </a>
      <br />
    </>
  );
}
