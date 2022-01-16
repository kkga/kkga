import metadata from "../data/metadata.json";

export default function FaceAndLinks() {
  return (
    <div className="my-8 flex items-start gap-4">
      <img className="rounded w-32 shrink-0" src="/img/about/face.jpg" />
      <ul className="my-0 text-sm list-none space-y-1">
        {Object.keys(metadata.links).map((key) => {
          return (
            <li key={key}>
              <a href={metadata.links[key]}>{key}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
