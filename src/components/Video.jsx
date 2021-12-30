export default function Video({ src }) {
  return (
    <video
      className="shadow-md m-0"
      controls
      autoPlay
      loop
      muted
      width="100%"
    >
      <source src={src} />
    </video>
  );
}
