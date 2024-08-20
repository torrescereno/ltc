function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "numeric",
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

export { formatDate };
