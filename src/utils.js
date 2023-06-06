export function getViewersFormatted(value) {
  return value < 1000
    ? value
    : value < 100000
    ? `${(value / 1000).toFixed(1)}K`
    : value < 1000000
    ? `${(value / 1000).toFixed(0)}K`
    : `${(value / 100000000).toFixed(1)}M`;
}
