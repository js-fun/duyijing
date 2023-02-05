import type { SixtyFourGua } from "@freizl/yijing";
import YData from "@freizl/yijing/zh-TW/64gua.json";
import XianTianData from "@freizl/yijing/zh-TW/xian-tian-8gua.json";
import XiCiData from "@freizl/yijing/zh-TW/xi-ci.json";
import WenYanData from "@freizl/yijing/zh-TW/wen-yan.json";
import ShuoGuaData from "@freizl/yijing/zh-TW/shuo-gua.json";
import XuGuaData from "@freizl/yijing/zh-TW/xu-gua.json";
import ZaGuaData from "@freizl/yijing/zh-TW/za-gua.json";

export const Y = YData;
export const XianTian = XianTianData;
export const XiCi = XiCiData;
export const WenYan = WenYanData;
export const ShuoGua = ShuoGuaData;
export const XuGua = XuGuaData;
export const ZaGua = ZaGuaData;

const keyedData = new Map<string, SixtyFourGua>();
Y.forEach((val) => {
  keyedData.set(val.id, val);
});

export function getGuaData(key: string) {
  const re = keyedData.get(key);
  if (!re) {
    throw Error(`Unable to find Gua via key ${key}`);
  }
  return re;
}

export const navs = [
  { url: "/", title: "易經" },
  { url: "/doc/yijing/1", title: "易經上" },
  { url: "/doc/yijing/2", title: "易經下" },
  { url: "/doc/tuan/1", title: "彖傳上" },
  { url: "/doc/tuan/2", title: "彖傳下" },
  { url: "/doc/xiang/1", title: "象傳上" },
  { url: "/doc/xiang/2", title: "象傳下" },
  { url: "/doc/xi-ci", title: XiCi.title },
  { url: "/doc/wen-yan", title: WenYan.title },
  { url: "/doc/shuo-gua", title: ShuoGua.title },
  { url: "/doc/xu-gua", title: XuGua.title },
  { url: "/doc/za-gua", title: ZaGua.title },
];
