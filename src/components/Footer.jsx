export default function Footer({ children }) {
  return (
    <footer className="flex flex-col gap-8 px-4 sm:px-6 py-4 text-gray-500 dark:text-gray-600">
      {children}
      <div className="sm:flex justify-between">
        <nav className="flex gap-1">
          <a className="text-current" href="/">index</a>
          <span>&middot;</span>
          <a className="text-current" href="/til">til</a>
          <span>&middot;</span>
          <a className="text-current" href="/dlog">dlog</a>
          <span>&middot;</span>
          <a className="text-current" href="/now">now</a>
          <span>&middot;</span>
          <a className="text-current" href="/uses">uses</a>
          <span>&middot;</span>
          <a className="text-current" href="/rss.xml">rss</a>
        </nav>
        <span>
          &copy; 2019&ndash;2021 Gadzhi Kharkharov
        </span>
      </div>
    </footer>
  );
}
