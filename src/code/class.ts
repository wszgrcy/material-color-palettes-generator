import { BUILTIN_LABCOLOR_LIST, Cb, Db, O } from './const';
import { Lab } from './color-class';
import chroma from 'chroma-js';
import { ColorPalettes, ColorPalettesGroup } from './color-palettes.type';

/**
 * 用来验证是否超过范围
 *
 * @author cyia
 * @date 2019-05-06
 * @param a
 * @param b 最大值
 * @param c
 */
export function compareValue(a, b, c) {
  if (isNaN(a) || 0 > a || a > b) {
    throw new RangeError(a + ' for ' + c + ' is not between 0 and ' + b);
  }
}

function Qb(labColor: Lab, labColorList: any = BUILTIN_LABCOLOR_LIST) {
  if (!labColorList.length || !labColorList[0].length) {
    throw Error('Invalid golden palettes');
  }
  let c = Infinity;
  let d = labColorList[0];
  let e = -1;
  let g = 0;
  for (; g < labColorList.length; g++) {
    for (let h = 0; h < labColorList[g].length && 0 < c; h++) {
      const k = labColorList[g][h];
      const l = (k.b + labColor.b) / 2;
      let m = Math.sqrt(Math.pow(k.i, 2) + Math.pow(k.j, 2));
      let q = Math.sqrt(Math.pow(labColor.i, 2) + Math.pow(labColor.j, 2));
      let t = (m + q) / 2;
      t = 0.5 * (1 - Math.sqrt(Math.pow(t, 7) / (Math.pow(t, 7) + Math.pow(25, 7))));
      let n = k.i * (1 + t),
        r = labColor.i * (1 + t),
        N = Math.sqrt(Math.pow(n, 2) + Math.pow(k.j, 2)),
        H = Math.sqrt(Math.pow(r, 2) + Math.pow(labColor.j, 2));
      t = H - N;
      const ja = (N + H) / 2;
      n = Ab(k.j, n);
      r = Ab(labColor.j, r);
      N =
        2 *
        Math.sqrt(N * H) *
        Math.sin(
          (((1e-4 > Math.abs(m) || 1e-4 > Math.abs(q) ? 0 : 180 >= Math.abs(r - n) ? r - n : r <= n ? r - n + 360 : r - n - 360) / 2) *
            Math.PI) /
            180
        );
      m =
        1e-4 > Math.abs(m) || 1e-4 > Math.abs(q)
          ? 0
          : 180 >= Math.abs(r - n)
          ? (n + r) / 2
          : 360 > n + r
          ? (n + r + 360) / 2
          : (n + r - 360) / 2;
      q = 1 + 0.045 * ja;
      H =
        1 +
        0.015 *
          ja *
          (1 -
            0.17 * Math.cos(((m - 30) * Math.PI) / 180) +
            0.24 * Math.cos((2 * m * Math.PI) / 180) +
            0.32 * Math.cos(((3 * m + 6) * Math.PI) / 180) -
            0.2 * Math.cos(((4 * m - 63) * Math.PI) / 180));
      const temp1 = Math.sqrt(
        Math.pow((labColor.b - k.b) / (1 + (0.015 * Math.pow(l - 50, 2)) / Math.sqrt(20 + Math.pow(l - 50, 2))), 2) +
          Math.pow(t / (1 * q), 2) +
          Math.pow(N / (1 * H), 2) +
          (t / (1 * q)) *
            Math.sqrt(Math.pow(ja, 7) / (Math.pow(ja, 7) + Math.pow(25, 7))) *
            Math.sin((60 * Math.exp(-Math.pow((m - 275) / 25, 2)) * Math.PI) / 180) *
            -2 *
            (N / (1 * H))
      );
      temp1 < c && ((c = temp1), (d = labColorList[g]), (e = h));
    }
  }
  return {
    fc: d,
    ec: e,
  };
}
const Ab = (a, b) => {
  if (1e-4 > Math.abs(a) && 1e-4 > Math.abs(b)) {
    return 0;
  }
  a = (180 * Math.atan2(a, b)) / Math.PI;
  return 0 <= a ? a : a + 360;
};
/**
 * @description rgb颜色转换为lab颜色
 * @param {Rgb} rgb
 * @returns
 */
function rgb2lab(rgb: Rgb) {
  const chromaLab = chroma.gl(rgb.red, rgb.green, rgb.blue, rgb.alpha).lab();
  return new Lab(...chromaLab);
}

function X(a) {
  const b = BUILTIN_LABCOLOR_LIST;
  const c = rgb2lab(a),
    d = Qb(c, b);
  const temp1 = d.fc;
  const temp2 = d.ec;
  let e = temp1[temp2],
    g = xb(e),
    h = xb(c),
    k = 30 > xb(temp1[5]).v,
    l = g.b - h.b,
    m = g.v - h.v,
    q = g.hue - h.hue,
    t = Cb[temp2],
    n = Db[temp2],
    r = 100;
  return temp1.map(function(b, c) {
    if (b === e) {
      return (r = Math.max(h.b - 1.7, 0)), a;
    }
    b = xb(b);
    let d = b.b - (Cb[c] / t) * l;
    d = Math.min(d, r);
    c = new Wb(A(d, 0, 100), Math.max(0, k ? b.v - m : b.v - m * Math.min(Db[c] / n, 1.25)), (b.hue - q + 360) % 360);
    r = Math.max(c.b - 1.7, 0);
    b = (c.hue * Math.PI) / 180;
    c = new Lab(c.b, c.v * Math.cos(b), c.v * Math.sin(b), c.alpha);
    let g = (c.b + 16) / 116;
    b = 0.95047 * zb(g + c.i / 500);
    d = 1 * zb(g);
    g = 1.08883 * zb(g - c.j / 200);
    return new Rgb(
      A(yb(3.2404542 * b + -1.5371385 * d + -0.4985314 * g), 0, 1),
      A(yb(-0.969266 * b + 1.8760108 * d + 0.041556 * g), 0, 1),
      A(yb(0.0556434 * b + -0.2040259 * d + 1.0572252 * g), 0, 1),
      c.alpha
    );
  });
}
function xb(lab: Lab) {
  return new Wb(
    lab.b,
    Math.sqrt(Math.pow(lab.i, 2) + Math.pow(lab.j, 2)),
    ((180 * Math.atan2(lab.j, lab.i)) / Math.PI + 360) % 360,
    lab.alpha
  );
}

class Wb {
  b;
  v;
  /**
   *Creates an instance of Wb.
   * @author cyia
   * @date 2019-05-07
   * @param a lightness
   * @param b
   * @param hue hue
   * @param [alpha=1]
   */
  constructor(a, b, public hue: number, public alpha = 1) {
    alpha = alpha || 1;
    this.b = a;
    this.v = b;
    // this.hue = c;
    // this.alpha = d;
    compareValue(a, Number.MAX_VALUE, 'lightness');
    compareValue(b, Number.MAX_VALUE, 'chroma');
    compareValue(hue, 360, 'hue');
    compareValue(alpha, 1, 'alpha');
  }
}

/**
 * a,b中的最大值和c相比的最小值
 *
 * @author cyia
 * @date 2019-05-06
 * @param a
 * @param b
 * @param c
 * @returns
 */
function A(a, b, c) {
  return Math.min(Math.max(a, b), c);
}
function zb(a) {
  const b = 6 / 29,
    c = 3 * Math.pow(b, 2);
  return a > b ? Math.pow(a, 3) : c * (a - 4 / 29);
}
function yb(a) {
  return 0.0031308 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - 0.055;
}

function hsl2rgb(hsl: Hsl) {
  const b = (1 - Math.abs(2 * hsl.lightness - 1)) * hsl.saturation;
  return kb(hsl.hue, hsl.alpha, b, Math.max(0, hsl.lightness - b / 2));
}
function kb(hue: number, alpha: number, c, d) {
  let e = d,
    g = d;
  hue = (hue % 360) / 60;
  const h = c * (1 - Math.abs((hue % 2) - 1));
  switch (Math.floor(hue)) {
    case 0:
      e += c;
      g += h;
      break;
    case 1:
      e += h;
      g += c;
      break;
    case 2:
      g += c;
      d += h;
      break;
    case 3:
      g += h;
      d += c;
      break;
    case 4:
      e += h;
      d += c;
      break;
    case 5:
      (e += c), (d += h);
  }
  return new Rgb(e, g, d, alpha);
}

function rb(a) {
  let b = Math.max(a.red, a.green, a.blue),
    c = Math.min(a.red, a.green, a.blue),
    d = 0,
    e = 0,
    g = A(0.5 * (b + c), 0, 1);
  b - c > O &&
    (b === a.red
      ? (d = (60 * (a.green - a.blue)) / (b - c))
      : b === a.green
      ? (d = (60 * (a.blue - a.red)) / (b - c) + 120)
      : b === a.blue && (d = (60 * (a.red - a.green)) / (b - c) + 240),
    (e = 0 < g && 0.5 >= g ? A((b - c) / (2 * g), 0, 1) : A((b - c) / (2 - 2 * g), 0, 1)));
  d = Math.round(d + 360) % 360;
  return new Hsl(d, e, g, a.alpha);
}

/**
 * 更有颜色生成列表
 *
 * @author cyia
 * @date 2019-05-07
 * @param hslList
 * @returns
 */
function bd(hslList: Hsl[]) {
  const sourceColorList = [];
  const generatorColorList = [];
  hslList.forEach((hsl) => {
    const rgbColor = hsl2rgb(hsl);
    sourceColorList.push(rgbColor);
    generatorColorList.push(X(rgbColor));
  });
  return {
    sourceColorList,
    generatorColorList,
  };
}

class Hsl {
  constructor(public hue: number, public saturation: number, public lightness: number, public alpha = 1) {
    alpha = alpha || 1;
    compareValue(hue, 360, 'hue');
    compareValue(saturation, 1, 'saturation');
    compareValue(lightness, 1, 'lightness');
    compareValue(alpha, 1, 'alpha');
  }

  M() {
    return 'hsla(' + this.hue + ', ' + 100 * this.saturation + '%, ' + (100 * this.lightness + '%, ' + this.alpha + ')');
  }
  rotate(deg: number) {
    return new Hsl((this.hue + deg + 360) % 360, this.saturation, this.lightness, this.alpha);
  }
}
class Rgb {
  constructor(public red: number, public green: number, public blue: number, public alpha = 1) {
    alpha = alpha || 1;
    compareValue(red, 1, 'red');
    compareValue(green, 1, 'green');
    compareValue(blue, 1, 'blue');
    compareValue(alpha, 1, 'alpha');
  } /**比较是否相等 */
  isEqual(target) {
    return (
      Math.abs(this.red - target.red) < O &&
      Math.abs(this.green - target.green) < O &&
      Math.abs(this.blue - target.blue) < O &&
      Math.abs(this.alpha - target.alpha) < O
    );
  }
}

/**
 * @description 主入口
 * @export
 * @param {number[]} rgba rgb颜色
 * @returns
 */
export function main(rgba: number[]): ColorPalettesGroup {
  const primaryColor = new Rgb(rgba[0], rgba[1], rgba[2], rgba[3] || 1);
  let primary: ColorPalettes;
  const list = [];
  // console.log('primary', primaryColor);
  let colorList = [X(primaryColor)];
  // console.log(colorList)
  const index = colorList[0].findIndex((color) => primaryColor.isEqual(color));
  // console.log(index);
  list.push(colorList);
  // console.log(colorList, [index], '主要primary');
  // new SetColorList(colorList, [index], '主要primary');
  primary = {
    index: [index],
    list: colorList,
  };
  let complementary: ColorPalettes;
  /**------complementary------- */
  const complementaryColor = hsl2rgb(rb(primaryColor).rotate(180));
  // 互补
  // console.log('complementary', complementaryColor);
  colorList = [X(complementaryColor)];
  const cIndex = colorList[0].findIndex((color) => complementaryColor.isEqual(color));
  // console.log(cIndex);
  list.push(colorList);
  // new SetColorList(colorList, [cIndex], '互补complementary');
  complementary = { index: [cIndex], list: colorList };
  /**-------------- */
  const hslTemp1 = rb(primaryColor);
  const temp2List = [hslTemp1.rotate(-30), hslTemp1.rotate(30)];

  const temp3 = bd(temp2List);
  // 相似
  // console.log('准备转换的', temp3);
  let analogousIndexList = [];
  analogousIndexList = temp3.generatorColorList.map((list, i) => list.findIndex((color) => temp3.sourceColorList[i].isEqual(color)));
  // console.log(analogousIndexList);
  let analogous: ColorPalettes;
  // new SetColorList(temp3.generatorColorList, analogousIndexList, '类型analogous');
  analogous = {
    index: analogousIndexList,
    list: temp3.generatorColorList,
  };
  list.push(temp3.generatorColorList);
  /******************** */
  const hslTemp3 = rb(primaryColor);
  // console.log(b)
  const temp4List = [hslTemp3.rotate(60), hslTemp3.rotate(120)];
  // console.log(b)
  const temp5 = bd(temp4List);
  // 三元
  // console.log('准备转换的', temp5);
  let triadicIndexList = [];
  triadicIndexList = temp5.generatorColorList.map((list, i) => list.findIndex((color) => temp5.sourceColorList[i].isEqual(color)));
  // console.log(triadicIndexList);
  list.push(temp5.generatorColorList);
  // new SetColorList(temp5.generatorColorList, triadicIndexList, '三元triadic');
  const triadic: ColorPalettes = {
    index: triadicIndexList,
    list: temp5.generatorColorList,
  };
  return {
    primary,
    complementary,
    analogous,
    triadic,
  };
}
// class SetColorList {
//   constructor(colorList, colorIndexList, message: string) {
//     console.log(colorIndexList);
//     const div = document.createElement('div');
//     div.appendChild(document.createTextNode(message));
//     colorList.forEach((list, i) => {
//       list.forEach(({ red, green, blue }, j) => {
//         const colorDiv = document.createElement('div');
//         colorDiv.style.width = '50px';
//         colorDiv.style.height = '50px';
//         colorDiv.style.backgroundColor = chroma.gl(red, green, blue, 1).hex();
//         console.log(colorIndexList[i], j);
//         colorDiv.style.borderRadius = colorIndexList[i] == j ? '99px' : '';
//         colorDiv.style.display = 'inline-block';
//         div.appendChild(colorDiv);
//       });
//     });
//     document.body.appendChild(div);
//   }
// }
