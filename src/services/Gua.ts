// import { SixtyFourGua } from "@freizl/yijing/zh-TW/64gua.json";
import { getGuaData, XianTian } from "./Yijing";

const bushiKeys = /[6-9]{6}/;
const digitalGuaKeys = /[1-9]{3}-[0-9]{3}-[0-9]{3}/;

/**
 * Allow use 6,7,8,9 as key value
 * which are values coming out from 卜噬
 */
function normalizeKey(originalKey: string) {
  let key = originalKey;
  if (originalKey.match(digitalGuaKeys)) {
    const ds = originalKey.split("-");
    const xiaGuaIndex = parseInt(ds[2]) % 8 || 8;
    const xiaGuaId = XianTian[xiaGuaIndex - 1].id;
    const shangGuaIndex = parseInt(ds[1]) % 8 || 8;
    const shangGuaId = XianTian[shangGuaIndex - 1].id;

    key = shangGuaId + xiaGuaId;
  }

  const xs = key.split("");
  const ys = xs.map(function (x) {
    return parseInt(x) % 2;
  });
  return ys.join("");
}

function zongGua(key: string) {
  const xs = key.split("");
  xs.reverse();
  return xs.join("");
}

function cuoGua(key: string) {
  return key
    .split("")
    .map(function (v) {
      return v === "1" ? "0" : "1";
    })
    .join("");
}

function jiaoGua(key: string) {
  const xs = key.split(""),
    ys = xs.slice(0, 3),
    zs = xs.slice(3, 6);
  return zs.concat(ys).join("");
}

function zhiGua(originalKey: string, normalizedKey: string) {
  if (originalKey.match(digitalGuaKeys)) {
    const ds = originalKey.split("-");
    const yaoBianIndex = parseInt(ds[0]) % 6 || 6;

    return normalizedKey
      .split("")
      .map(function (v, index) {
        // 初爻在最右边 即最大index. 数字卦得到数字表明主要的爻 以及爻变.
        // 所以 (6-yaoBianIndex)
        if (index === 6 - yaoBianIndex) {
          if (v === "1") {
            return "0";
          } else {
            return "1";
          }
        } else {
          return v;
        }
      })
      .join("");
  } else {
    const xs = originalKey.split("").map(function (k) {
      switch (k) {
        case "6":
          return "9";
        case "9":
          return "6";
        default:
          return k;
      }
    });
    return normalizeKey(xs.join(""));
  }
}

// type GuaViewObject = {
//   kind: string;
//   id: string;
//   url: string;
//   title: string;
//   displayName: string;
// }

export function transform(originalKey: string) {
  const id = normalizeKey(originalKey);
  const populateValue = (kind: string, key: string) => {
    const value = getGuaData(key);
    const title = value.name + "卦";
    return {
      id: key,
      kind,
      url: "/gua/" + value.name,
      displayName: kind === "主卦" ? title : kind + " - " + value.name,
    };
  };

  const result = {
    base: populateValue("主卦", id),
    xs: [],
  };

  if (originalKey.match(bushiKeys) || originalKey.match(digitalGuaKeys)) {
    result.xs = [
      populateValue("之卦", zhiGua(originalKey, id)),
      populateValue("綜卦", zongGua(id)),
      populateValue("錯卦", cuoGua(id)),
      populateValue("交卦", jiaoGua(id)),
    ];
  }

  return result;
}
