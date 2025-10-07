/**
 * This function return the `date` with the format `xx/xx/xx`
 * - - -
 * @param date type `string`
 */
export function formatDate(date: string) {
  const [y, m, d] = date.split("-");
  return `${d}/${m}/${y}`;
}
