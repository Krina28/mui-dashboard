export const chartData = [
  {
    label: "Submitted",
    value: 10000,
  },
  {
    label: "Accepted",
    value: 8000,
  },
  {
    label: "Rejected",
    value: 1000,
  },
  {
    label: "Errored",
    value: 1000,
  },
];

export const chartData2 = [
  {
    label: "Submitted",
    value: 10000,
  },
  {
    label: "Accepted",
    value: 8000,
  },
  {
    label: "Rejected",
    value: 1000,
  },
  {
    label: "Errored",
    value: 1000,
  },
];

export const platforms = [
  {
    label: "Accepted",
    value: 8000,
  },
  {
    label: "Rejected",
    value: 1000,
  },
];

const normalize = (v, v2) => Number.parseFloat(((v * v2) / 100).toFixed(2));

export const mobileAndDesktopOS = [
  ...chartData2.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other" : v.label,
    value: normalize(v.value, platforms[0].value),
  })),
  ...chartData.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other" : v.label,
    value: normalize(v.value, platforms[1].value),
  })),
];

export const valueFormatter = (item) => `${item.value}%`;
