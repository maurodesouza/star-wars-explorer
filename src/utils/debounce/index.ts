const debounce =
  <T>(
    fn: (args: T) => void,
    wait = 300,
    time?: ReturnType<typeof setTimeout>
  ) =>
  (...args: T[]) =>
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    clearTimeout(time, (time = setTimeout(() => fn(...args), wait)));

export { debounce };
