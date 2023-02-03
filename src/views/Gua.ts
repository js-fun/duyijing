import Y from "@freizl/yijing/zh-TW/64gua.json";

var bushiKeys = /[6-9]{6}/;
var digitalGuaKeys = /[1-9]{3}-[0-9]{3}-[0-9]{3}/;

var keyedData = Y.reduce(function (pre, val) {
  pre[val.id] = val;
  return pre;
}, {});

function getGuaData(key) {
  return keyedData[key] || {};
}

// /**
//  * Transform all datas with key is name
//  */
// function namedData() {
//   return yijing.datas.reduce(function (pre, val) {
//     pre[val.name] = val;
//     return pre;
//   }, {});
// }


/**
 * 64 Gua
 */
export function getSixFourGuas() {
  /* Generate 64 Guas base on XianTian-8-Gua */
  // TODO: may be simplified by directly look into WIN.yijing.datas
  var gua8 = Y.xianTian8Gua.map(function (o) { return o.id; }),
    length = gua8.length - 1,
    i = length,
    k,
    id,
    o,
    xs = [];
  for (; i >= 0; i--) {
    for (var j = length; j >= 0; j--) {
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

/**
 * Allow use 6,7,8,9 as key value
 * which are values coming out from 卜噬
 */
function normalizeKey(originalKey) {
  var key = originalKey;
  if (originalKey.match(digitalGuaKeys)) {
    var ds = originalKey.split('-');
    var xiaGuaIndex = parseInt(ds[2]) % 8 || 8;
    var xiaGuaId = yijing.xianTian8Gua[xiaGuaIndex - 1].id;
    var shangGuaIndex = parseInt(ds[1]) % 8 || 8;
    var shangGuaId = yijing.xianTian8Gua[shangGuaIndex - 1].id;

    key = shangGuaId + xiaGuaId;
  }

  var xs = key.split('');
  var ys = xs.map(function (x) { return x % 2; });
  return ys.join('');
}

function zongGua(key) {
  var xs = key.split('');
  xs.reverse();
  return xs.join('');
}

function cuoGua(key) {
  var xs = [];
  key.split('').forEach(function (v) {
    xs.push(v === '1' ? '0' : '1');
  });
  return xs.join('');
}

function jiaoGua(key) {
  var xs = key.split(''),
    ys = xs.slice(0, 3),
    zs = xs.slice(3, 6);
  return zs.concat(ys).join('');
}

function zhiGua(originalKey, normalizedKey) {

  if (originalKey.match(digitalGuaKeys)) {
    var ds = originalKey.split('-');
    var yaoBianIndex = parseInt(ds[0]) % 6 || 6;

    return normalizedKey.split('')
      .map(function (v, index) {
        // 初爻在最右边 即最大index. 数字卦得到数字表明主要的爻 以及爻变.
        // 所以 (6-yaoBianIndex)
        if (index === (6 - yaoBianIndex)) {
          if (v === '1') {
            return '0';
          } else {
            return '1';
          }
        } else {
          return v;
        }
      })
      .join('');
  } else {
    var xs = originalKey.split('').map(function (k) {
      switch (k) {
        case '6': return '9';
        case '9': return '6';
        default: return k;
      }
    });
    return normalizeKey(xs.join(''));

  }
}

export function transform(originalKey) {
  var id = normalizeKey(originalKey);
  var xs = {
    base: { id: id },
    zong: { type: '綜卦', id: zongGua(id) },
    cuo: { type: '錯卦', id: cuoGua(id) },
    jiao: { type: '交卦', id: jiaoGua(id) }
  };

  if (originalKey.match(bushiKeys) || originalKey.match(digitalGuaKeys)) {
    xs.zhi = { type: '之卦', id: zhiGua(originalKey, id) };
  }

  Object.keys(xs).forEach(function (key) {
    const value = xs[key];
    value.name = getGuaData(value.id).name;
    value.url = '/gua/' + value.name;
    value.title = value.name + '卦';
    value.displayName = key === 'base' ? value.name + '卦' : value.type + ' - ' + value.title;
  });
  return xs;
}
