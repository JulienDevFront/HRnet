/**
 * This function post of data at the location in key
 * - - -
 * @param key type `String`
 * @param value type `Object`
 */
export function methodPOST(key: string, value: {}) {
  const storage = JSON.parse(localStorage.getItem(key) || "[]");
  const update = [...storage, value];
  localStorage.setItem(key, JSON.stringify(update));
}

/**
 * This function get the datas of the key of the local storage
 * - - -
 * @param key type `String`
 */
export function methodGET<T>(key: string): T {
  return JSON.parse(localStorage.getItem(key) || "[]") as T;
}

/**
 * This function delete an ID object and return the other items in local storage
 * - - -
 * @param key type `String`
 * @param id type `String`
 */
export function methodDELETE(key: string, id: string) {
  const storage = (methodGET(key) ?? []) as { id: string }[];
  const update = storage.filter((item) => item.id !== id);
  return localStorage.setItem(key, JSON.stringify(update));
}
