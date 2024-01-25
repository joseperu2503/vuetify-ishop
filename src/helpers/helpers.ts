export function formatPrice(value?: number) {
  if (!value) return 0;
  let val = (value / 1).toFixed(2)
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
