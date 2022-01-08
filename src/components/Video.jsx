export default function Video({ src, border }) {
  return (
    <video
      controls
      autoPlay
      loop
      muted
      className={`m-0 ${
        border ? "border border-gray-400 dark:border-gray-800" : ""
      }`}
    >
      <source src={src} />
    </video>
  );
}
