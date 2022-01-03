export default function Figure({ children, caption, className }) {
  return (
    <figure className={`my-6 ${className && className}`}>
      {children}
      <figcaption className="italic mt-2 text-sm text-center text-gray-500">
        {caption}
      </figcaption>
    </figure>
  );
}
