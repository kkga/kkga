export const getFileModifiedDate = (file) => {
  const { mtime } = fs.statSync(file);
  return new Date(mtime);
};

export const formatDateShort = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    month: "short",
    year: "2-digit",
  });

export const formatDateFull = (date) =>
  new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const toTitleCase = (str) =>
  str.replace(
    /\w\S*/g,
    function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    },
  );
