import { BUILTIN_LABCOLOR_LIST, Cb, Db, O } from './const';
import { Lab } from './color-class';
import chroma from 'chroma-js';




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
    if (isNaN(a) || 0 > a || a > b)
        throw new RangeError(a + " for " + c + " is not between 0 and " + b);
}


function Qb(labColor: Lab, labColorList: any = BUILTIN_LABCOLOR_LIST) {
    if (!labColorList.length || !labColorList[0].length)
        throw Error("Invalid golden palettes");
    for (var c = Infinity, d = labColorList[0], e = -1, g = 0; g < labColorList.length; g++)
        for (var h = 0; h < labColorList[g].length && 0 < c; h++) {
            var k = labColorList[g][h]
                , l = (k.b + labColor.b) / 2
                , m = Math.sqrt(Math.pow(k.i, 2) + Math.pow(k.j, 2))
                , q = Math.sqrt(Math.pow(labColor.i, 2) + Math.pow(labColor.j, 2))
                , t = (m + q) / 2;
            t = .5 * (1 - Math.sqrt(Math.pow(t, 7) / (Math.pow(t, 7) + Math.pow(25, 7))));
            var n = k.i * (1 + t)
                , r = labColor.i * (1 + t)
                , N = Math.sqrt(Math.pow(n, 2) + Math.pow(k.j, 2))
                , H = Math.sqrt(Math.pow(r, 2) + Math.pow(labColor.j, 2));
            t = H - N;
            var ja = (N + H) / 2;
            n = Ab(k.j, n);
            r = Ab(labColor.j, r);
            N = 2 * Math.sqrt(N * H) * Math.sin((1E-4 > Math.abs(m) || 1E-4 > Math.abs(q) ? 0 : 180 >= Math.abs(r - n) ? r - n : r <= n ? r - n + 360 : r - n - 360) / 2 * Math.PI / 180);
            m = 1E-4 > Math.abs(m) || 1E-4 > Math.abs(q) ? 0 : 180 >= Math.abs(r - n) ? (n + r) / 2 : 360 > n + r ? (n + r + 360) / 2 : (n + r - 360) / 2;
            q = 1 + .045 * ja;
            H = 1 + .015 * ja * (1 - .17 * Math.cos((m - 30) * Math.PI / 180) + .24 * Math.cos(2 * m * Math.PI / 180) + .32 * Math.cos((3 * m + 6) * Math.PI / 180) - .2 * Math.cos((4 * m - 63) * Math.PI / 180));
            let temp1 =
                Math.sqrt(Math.pow((labColor.b - k.b) / (1 + .015 * Math.pow(l - 50, 2) / Math.sqrt(20 + Math.pow(l - 50, 2))), 2) + Math.pow(t / (1 * q), 2) + Math.pow(N / (1 * H), 2) + t / (1 * q) * Math.sqrt(Math.pow(ja, 7) / (Math.pow(ja, 7) + Math.pow(25, 7))) * Math.sin(60 * Math.exp(-Math.pow((m - 275) / 25, 2)) * Math.PI / 180) * -2 * (N / (1 * H)));
            temp1 < c && (c = temp1,
                d = labColorList[g],
                e = h)
        }
    return {
        fc: d,
        ec: e
    }
}
var Ab = function (a, b) {
    if (1E-4 > Math.abs(a) && 1E-4 > Math.abs(b))
        return 0;
    a = 180 * Math.atan2(a, b) / Math.PI;
    return 0 <= a ? a : a + 360
};
/**rgb颜色转换为lab颜色 */
function rgb2lab(rgb: Rgb) {
    let chromaLab = chroma.gl(rgb.red, rgb.green, rgb.blue, rgb.alpha).lab()
    console.log(chromaLab)
    return new Lab(...chromaLab)
    // var b = R(rgb.red)
    //     , c = R(rgb.green)
    //     , d = R(rgb.blue)
    //     , e = .2126729 * b + .7151522 * c + .072175 * d;
    // return new Lab(116 * W(e) - 16, 500 * (W((.4124564 * b + .3575761 * c + .1804375 * d) / .95047) - W(e)), 200 * (W(e) - W((.0193339 * b + .119192 * c + .9503041 * d) / 1.08883)), rgb.alpha)
}
function R(a) {
    return .04045 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4)
}
function W(a) {
    var b = 6 / 29
        , c = 1 / (3 * Math.pow(b, 2));
    return a > Math.pow(b, 3) ? Math.pow(a, 1 / 3) : c * a + 4 / 29
}


function X(a) {
    var b = BUILTIN_LABCOLOR_LIST
    var c = rgb2lab(a)
        , d = Qb(c, b);
    let temp1 = d.fc;
    let temp2 = d.ec;
    var e = temp1[temp2]
        , g = xb(e)
        , h = xb(c)
        , k = 30 > xb(temp1[5]).v
        , l = g.b - h.b
        , m = g.v - h.v
        , q = g.hue - h.hue
        , t = Cb[temp2]
        , n = Db[temp2]
        , r = 100;
    return temp1.map(function (b, c) {
        if (b === e)
            return r = Math.max(h.b - 1.7, 0),
                a;
        b = xb(b);
        var d = b.b - Cb[c] / t * l;
        d = Math.min(d, r);
        c = new wb(A(d, 0, 100), Math.max(0, k ? b.v - m : b.v - m * Math.min(Db[c] / n, 1.25)), (b.hue - q + 360) % 360);
        r = Math.max(c.b - 1.7, 0);
        b = c.hue * Math.PI / 180;
        c = new Lab(c.b, c.v * Math.cos(b), c.v * Math.sin(b), c.alpha);
        var g = (c.b + 16) / 116;
        b = .95047 * zb(g + c.i / 500);
        d = 1 * zb(g);
        g = 1.08883 * zb(g - c.j / 200);
        return new Rgb(A(yb(3.2404542 * b + -1.5371385 * d + -.4985314 * g), 0, 1), A(yb(-.969266 * b + 1.8760108 * d + .041556 * g), 0, 1), A(yb(.0556434 * b + -.2040259 * d + 1.0572252 * g), 0, 1), c.alpha)
    })
}
function xb(a) {
    return new wb(a.b, Math.sqrt(Math.pow(a.i, 2) + Math.pow(a.j, 2)), (180 * Math.atan2(a.j, a.i) / Math.PI + 360) % 360, a.alpha)
};

function wb(a, b, c, d = 1) {
    d = void 0 === d ? 1 : d;
    this.b = a;
    this.v = b;
    this.hue = c;
    this.alpha = d;
    compareValue(a, Number.MAX_VALUE, "lightness");
    compareValue(b, Number.MAX_VALUE, "chroma");
    compareValue(c, 360, "hue");
    compareValue(d, 1, "alpha")
};

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
    return Math.min(Math.max(a, b), c)
};
function zb(a) {
    var b = 6 / 29
        , c = 3 * Math.pow(b, 2);
    return a > b ? Math.pow(a, 3) : c * (a - 4 / 29)
}
function yb(a) {
    return .0031308 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055
}


function lb(hsl: Hsl) {
    var b = (1 - Math.abs(2 * hsl.lightness - 1)) * hsl.saturation;
    return kb(hsl.hue, hsl.alpha, b, Math.max(0, hsl.lightness - b / 2))
}
function kb(hue: number, alpha: number, c, d) {
    var e = d
        , g = d;
    hue = hue % 360 / 60;
    var h = c * (1 - Math.abs(hue % 2 - 1));
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
            e += c,
                d += h
    }
    return new Rgb(e, g, d, alpha)
}

function rb(a) {
    var b = Math.max(a.red, a.green, a.blue)
        , c = Math.min(a.red, a.green, a.blue)
        , d = 0
        , e = 0
        , g = A(.5 * (b + c), 0, 1);
    b - c > O && (b === a.red ? d = 60 * (a.green - a.blue) / (b - c) : b === a.green ? d = 60 * (a.blue - a.red) / (b - c) + 120 : b === a.blue && (d = 60 * (a.red - a.green) / (b - c) + 240),
        e = 0 < g && .5 >= g ? A((b - c) / (2 * g), 0, 1) : A((b - c) / (2 - 2 * g), 0, 1));
    d = Math.round(d + 360) % 360;
    return new Hsl(d, e, g, a.alpha)
}

function bd(a) {
    var b = []
        , c = [];
    a = w(a);
    for (var d = a.next(); !d.done; d = a.next())
        d = lb(d.value),
            b.push(d),
            c.push(X(d));
    return {
        Eb: b,
        yb: c
    }
}
function w(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    }
}
function aa(a) {
    var b = 0;
    return function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
                done: !0
            }
    }
}

class Hsl {
    constructor(public hue: number, public saturation: number, public lightness: number, public alpha = 1) {
        alpha = alpha || 1
        compareValue(hue, 360, "hue");
        compareValue(saturation, 1, "saturation");
        compareValue(lightness, 1, "lightness");
        compareValue(alpha, 1, "alpha")
    }

    M() {
        return "hsla(" + this.hue + ", " + 100 * this.saturation + "%, " + (100 * this.lightness + "%, " + this.alpha + ")")
    }
    rotate(deg: number) {
        return new Hsl((this.hue + deg + 360) % 360, this.saturation, this.lightness, this.alpha)
    }

};
class Rgb {
    constructor(public red: number, public green: number, public blue: number, public alpha = 1) {
        alpha = alpha || 1
        compareValue(red, 1, "red");
        compareValue(green, 1, "green");
        compareValue(blue, 1, "blue");
        compareValue(alpha, 1, "alpha")

    }
};
/**主入口 */
export function main( /**rgb颜色 */b) {
    let list = [];
    console.log(b)
    list.push([X(b)]);
    var d = lb(rb(b).rotate(180));
    console.log(d)
    list.push([X(d)]);
    let hslTemp1 = rb(b);
    let temp2 = [hslTemp1.rotate(-30), hslTemp1.rotate(30)];
    let temp3 = bd(temp2);
    console.log(temp2)
    list.push(temp3.yb);
    b = rb(b);
    b = [b.rotate(60), b.rotate(120)];
    console.log(b)
    b = bd(b);
    list.push(b.yb);
    list.forEach((list) => {
        list.forEach((list) => {
            list.forEach(({ red, green, blue }) => {
                let c = chroma.gl(red, green, blue, 1).hex()
                console.log(c)
            })
            console.log('-----')
        })
    })
    return list
}