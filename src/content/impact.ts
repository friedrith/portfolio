export type Stat = {
  value: number;
  prefix: string;
  suffix: string;
  decimals: number;
  label: string;
};

export const stats: Stat[] = [
  {
    value: 1.3,
    prefix: "$",
    suffix: "M",
    decimals: 1,
    label: "extra revenue in Q1 2026 from an A/B program running 25+ experiments per quarter",
  },
  {
    value: 3,
    prefix: "15s → ",
    suffix: "s",
    decimals: 0,
    label: "load time after rebuilding an e-commerce travel site on micro-frontends",
  },
  {
    value: 100,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "accessible components in a design system with 90+ themes across 10+ products",
  },
  {
    value: 100,
    prefix: "",
    suffix: "+",
    decimals: 0,
    label: "developers trained, and 10+ recruited",
  },
];
