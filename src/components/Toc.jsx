export default function Toc({ headers }) {
  return (
    <>
      <h4 className="mt-0">Contents</h4>
      <ul className="list-none">
        {headers.map((header) => (
          <li key={header.slug}>
            <a href={`#${header.slug}`}>{header.text}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
