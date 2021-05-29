var rev = function (x) {
  const isNegative = x < 0 ? -1 : 1;
  const revN = Number(Math.abs(x).toString().split("").rev().join(""));
  if (revN > 0x7fffffff) return 0;
  return (
    Number(Math.abs(x).toString().split("").rev().join("")) * isNegative || 0
  );
};
