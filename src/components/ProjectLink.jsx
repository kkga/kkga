import React from "react";

export default function ProjectLink({ title, url }) {
  return (
    <div className="inline-flex flex-col md:flex-row gap-2 my-4 py-2 px-4 -mx-4 md:px-8 md:-mx-8 bg-gray-100 dark:bg-gray-800">
      <span className="block my-0 text-gray-500 font-bold uppercase">
        Project link:
      </span>
      <a className="font-bold" href={url}>{title} ↗</a>
    </div>
  );
}
