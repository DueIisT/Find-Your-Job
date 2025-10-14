export const dataset = [
  {
    seoul: 1000,
    month: 'Jan',
  },
  {
    seoul: 1200,
    month: 'Feb',
  },
  {
    seoul: 1400,
    month: 'Mar',
  },
  {
    seoul: 1100,
    month: 'Apr',
  },
  {
    seoul: 990,
    month: 'May',
  },
  {
    seoul: 1440,
    month: 'June',
  },
  {
    seoul: 1700,
    month: 'July',
  },
  {
    seoul:  1800,
    month: 'Aug',
  },
  {
    seoul: 1301,
    month: 'Sept',
  },
  {
    seoul: 1550,
    month: 'Oct',
  },
  {
    seoul: 1220,
    month: 'Nov',
  },
  {
    seoul: 1400,
    month: 'Dec',
  },
];

export function valueFormatter(value: number | null) {
  return `${value}$`;
}
