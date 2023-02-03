import Y from "@freizl/yijing/zh-TW/64gua.json";
import XianTianData from "@freizl/yijing/zh-TW/xian-tian-8gua.json";

type KeyedData = Record<string, any>;

// TODO: Create Map instead Object
const keyedData: KeyedData = Y.reduce(function (pre: KeyedData, val) {
  pre[val.id] = val;
  return pre;
}, {});

export function getGuaData(key: string) {
  return keyedData[key] || {};
}

export const XianTian = XianTianData;
