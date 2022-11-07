export function stringToColor(s: string) {
  // ! fixme: refactor
  // ref: https://mui.com/components/avatars/#letter-avatars
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < s.length; i += 1) {
    hash = s.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += value.toString(16).substring(-2);
  }
  /* eslint-enable no-bitwise */
  return color;
}
