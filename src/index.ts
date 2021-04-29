/**
 * If you call this function it will greet you, try it with your name 😉
 *
 * @param {string} [str] a name of a person
 * @returns
 */
export const sayHello = (str?: string) => {
  return str ? `hello ${str}` : `hello`;
};
