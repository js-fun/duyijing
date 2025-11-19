import { getGuaData, XianTian } from "./Yijing";

type GuaSimple = {
  id: string;
  name: string;
};

/**
 * 64 Gua table
 * Generate 64 Guas base on XianTian-8-Gua
 */
export function getSixFourGuas() {
  const gua8 = XianTian.map(function (o) {
    return o.id;
  });
  const length = gua8.length - 1;
  let i = length;
  let k;
  let id;
  let o;
  const xs: Array<Array<GuaSimple>> = [];
  // `k` starts from zero, which means generates row for 64gua table from top down.
  // Hence `i` points to Xia Gua, `j` points to Shang Gua
  //
  // Given the 64 binary representation starts from Xia Gua.
  // e.g. 000001 山地剥, 001->山, 000->地
  // Therefore the first row has all same Xia Gua.
  //
  for (; i >= 0; i--) {
    for (let j = length; j >= 0; j--) {
      k = length - i;
      if (!xs[k]) {
        xs[k] = [];
      }
      const row = xs[k]!;
      const xiaId = gua8[i];
      const shangId = gua8[j];
      if (!xiaId || !shangId) {
        throw new Error(`Unable to find gua ids for indices ${i} and ${j}`);
      }
      id = xiaId + shangId;
      o = getGuaData(id);
      row.push({ id: id, name: o.name });
    }
  }

  return xs;
}
