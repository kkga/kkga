export default function ProjectLink({ title, url }) {
  return (
    <>
      <a
        href={url}
        className="rounded inline-block my-2 py-1 px-3
        text-sm font-bold italic
        text-current
        hover:no-underline
        bg-gray-300
        hover:bg-accent-600 hover:text-white
        dark:bg-accent-900
        hover:dark:bg-accent-800"
      >
        {title} ↗
      </a>
      <br />
    </>
  );
}
