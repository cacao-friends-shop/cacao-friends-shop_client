export const debounce = (cb: () => void, delay: number) => {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(cb, delay);
  };
};
