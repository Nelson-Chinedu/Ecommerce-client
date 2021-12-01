export const showDate = (unix: string) => {
  const formattedDate = new Date(Number(unix));
  const day = formattedDate.getDate();
  const month = formattedDate.getMonth();
  const year = formattedDate.getFullYear();
  const date = `${day}-${month}-${year}`;
  return date;
};
