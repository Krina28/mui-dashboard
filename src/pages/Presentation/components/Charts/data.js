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

export const mobileAndDesktopOS = [
  ...chartData2.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other" : v.label,
    value: v.value,
  })),
  ...chartData.map((v) => ({
    ...v,
    label: v.label === "Other" ? "Other" : v.label,
    value: v.value,
  })),
];

export const valueFormatter = (item) => `${item.value}%`;
