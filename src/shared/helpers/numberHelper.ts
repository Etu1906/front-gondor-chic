export const formatGondariar = (number: number): string => {
  return `${number.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} Gondariar`;
};
