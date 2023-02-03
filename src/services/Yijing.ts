import type { SixtyFourGua } from "@freizl/yijing";
import YData from "@freizl/yijing/zh-TW/64gua.json";
import XianTianData from "@freizl/yijing/zh-TW/xian-tian-8gua.json";

export const XianTian = XianTianData;
export const Y = YData;

const keyedData = new Map<string, SixtyFourGua>();
Y.forEach(val => {
  keyedData.set(val.id, val);
});

export function getGuaData(key: string) {
  const re = keyedData.get(key);
  if (!re) {
    throw Error(`Unable to find Gua via key ${key}`);
  }
  return re;
}
