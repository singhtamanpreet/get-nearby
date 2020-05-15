export const FEATURE_KEYS = {
  grocery: "grocery",
  medical: "medical",
  atm: "atm",
};
export const FEATURE_TYPES = [
  {
    name: "Grocery Stores",
    key: FEATURE_KEYS.grocery,
    active: true,
  },
  {
    name: "Medical Stores",
    key: FEATURE_KEYS.medical,
    active: false,
  },
  {
    name: "ATM",
    key: FEATURE_KEYS.atm,
    active: false,
  },
];

export const FEATURE_HEADER_MAPPING = {
  grocery: "Groceries",
  medical: "Medical",
  atm: "ATM",
  search: "Search",
};
