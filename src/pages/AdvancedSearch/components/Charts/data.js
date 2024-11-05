export const chartData = [
  {
    label: "Submitted",
    value: 72.72,
  },
  {
    label: "Pending",
    value: 16.38,
  },
  {
    label: "Enrolled",
    value: 3.83,
  },
  {
    label: "Not Submitted",
    value: 2.42,
  },
  {
    label: "Processed",
    value: 4.65,
  },
];

export const chartData2 = [
  {
    label: "Processed",
    value: 70.48,
  },
  {
    label: "Enrolled",
    value: 28.8,
  },
  {
    label: "Pending",
    value: 0.71,
  },
];

export const platforms = [
  {
    label: "Enrolled",
    value: 59.12,
  },
  {
    label: "Pending",
    value: 40.88,
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
