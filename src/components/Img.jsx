export default function Img({ src, border }) {
  return (
    <img
      className={`m-0 ${
        border ? "border border-gray-400 dark:border-gray-800" : ""
      }`}
      src={src}
    />
  );
}
