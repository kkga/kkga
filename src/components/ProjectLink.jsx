export default function ProjectLink({ title, url }) {
  return (
    <>
      <a href={url} className="inline-block my-1 italic font-mono">
        {title} ↗
      </a>
      <br />
    </>
  );
}
