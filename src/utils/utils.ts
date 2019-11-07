const randomatic = require("randomatic");

export const generateId = (size?: number) => {
  return randomatic("aA0", size ? size : 15);
};

export const generateRandom = () => {
  return randomatic("0000");
};

export const parseStringDataToObject = <T>(value: string): T | undefined => {
  return value ? (JSON.parse(value) as T) : undefined;
};
