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
