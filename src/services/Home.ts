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
  for (; i >= 0; i--) {
    for (let j = length; j >= 0; j--) {
      k = length - i;
      if (!xs[k]) {
        xs[k] = [];
      }
      id = gua8[j] + gua8[i];
      o = getGuaData(id);
      xs[k].push({ id: id, name: o.name });
    }
  }

  return xs;
}
