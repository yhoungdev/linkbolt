const formatNumber = (arg: number) => {
  const format = new Intl.NumberFormat().format(arg);
  return format;
};
export { formatNumber };
