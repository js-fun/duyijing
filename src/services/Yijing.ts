import type { SixtyFourGua } from "@freizl/yijing";
import YData from "@freizl/yijing/zh-CN/64gua.json";
import XianTianData from "@freizl/yijing/zh-CN/xian-tian-8gua.json";
import XiCiData from "@freizl/yijing/zh-CN/xi-ci.json";
import WenYanData from "@freizl/yijing/zh-CN/wen-yan.json";
import ShuoGuaData from "@freizl/yijing/zh-CN/shuo-gua.json";
import XuGuaData from "@freizl/yijing/zh-CN/xu-gua.json";
import ZaGuaData from "@freizl/yijing/zh-CN/za-gua.json";

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
  { url: "/", title: "易经" },
  { url: "/doc/yijing/1", title: "易传上" },
  { url: "/doc/yijing/2", title: "易传下" },
  { url: "/doc/tuan/1", title: "彖传上" },
  { url: "/doc/tuan/2", title: "彖传下" },
  { url: "/doc/xiang/1", title: "象传上" },
  { url: "/doc/xiang/2", title: "象传下" },
  { url: "/doc/xi-ci/1", title: XiCi.title + "上" },
  { url: "/doc/xi-ci/2", title: XiCi.title + "下" },
  { url: "/doc/wen-yan", title: WenYan.title },
  { url: "/doc/shuo-gua", title: ShuoGua.title },
  { url: "/doc/xu-gua", title: XuGua.title },
  { url: "/doc/za-gua", title: ZaGua.title },
];
