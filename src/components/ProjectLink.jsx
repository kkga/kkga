export default function ProjectLink({ title, url }) {
  return (
    <>
      <a
        href={url}
        className="rounded inline-block my-2 py-1 px-3
        text-xs font-bold
        text-current
        hover:no-underline
        bg-gray-300
        hover:bg-accent-600 hover:text-white
        dark:bg-gray-800
        hover:dark:bg-accent-900"
      >
        {title} ↗
      </a>
      <br />
    </>
  );
}
