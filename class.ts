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
    return new Lab(...chromaLab)
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
        c = new Wb(A(d, 0, 100), Math.max(0, k ? b.v - m : b.v - m * Math.min(Db[c] / n, 1.25)), (b.hue - q + 360) % 360);
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
function xb(lab: Lab) {
    return new Wb(lab.b, Math.sqrt(Math.pow(lab.i, 2) + Math.pow(lab.j, 2)), (180 * Math.atan2(lab.j, lab.i) / Math.PI + 360) % 360, lab.alpha)
};

class Wb {
    b
    v
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
        alpha = alpha || 1; this.b = a;
        this.v = b;
        // this.hue = c;
        // this.alpha = d;
        compareValue(a, Number.MAX_VALUE, "lightness");
        compareValue(b, Number.MAX_VALUE, "chroma");
        compareValue(hue, 360, "hue");
        compareValue(alpha, 1, "alpha")

    }
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


function hsl2rgb(hsl: Hsl) {
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

/**
 * 更有颜色生成列表
 *
 * @author cyia
 * @date 2019-05-07
 * @param hslList
 * @returns
 */
function bd(hslList: Hsl[]) {
    let sourceColorList = [];
    let generatorColorList = [];
    hslList.forEach((hsl) => {
        let rgbColor = hsl2rgb(hsl);
        sourceColorList.push(rgbColor);
        generatorColorList.push(X(rgbColor));
    })
    return {
        sourceColorList,
        generatorColorList
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

    }/**比较是否相等 */
    isEqual(target) {
        return Math.abs(this.red - target.red) < O && Math.abs(this.green - target.green) < O && Math.abs(this.blue - target.blue) < O && Math.abs(this.alpha - target.alpha) < O
    }
};
/**主入口 */
export function main( /**rgb颜色 */b) {
    let primaryColor = new Rgb(b[0], b[1], b[2], b[3] || 1)
    let list = [];
    console.log('primary', primaryColor)
    let colorList = [X(primaryColor)]
    // console.log(colorList)
    let index = colorList[0].findIndex((color) => primaryColor.isEqual(color))
    console.log(index)
    list.push(colorList);
    new SetColorList(colorList, [index],'主要primary')
    /**------complementary------- */
    var complementaryColor = hsl2rgb(rb(primaryColor).rotate(180));
    // 互补
    console.log('complementary', complementaryColor)
    colorList = [X(complementaryColor)]
    let cIndex = colorList[0].findIndex((color) => complementaryColor.isEqual(color))
    console.log(cIndex)
    list.push(colorList);
    new SetColorList(colorList, [cIndex],'互补complementary')

    /**-------------- */
    let hslTemp1 = rb(primaryColor);
    let temp2List = [hslTemp1.rotate(-30), hslTemp1.rotate(30)];

    let temp3 = bd(temp2List);
    //相似
    console.log('准备转换的', temp3)
    let analogousIndexList = []
    analogousIndexList = temp3.generatorColorList.map((list, i) => list.findIndex((color) => temp3.sourceColorList[i].isEqual(color)))
    console.log(analogousIndexList)
    new SetColorList(temp3.generatorColorList, analogousIndexList,'类型analogous')

    list.push(temp3.generatorColorList);
    /******************** */
    let hslTemp3 = rb(primaryColor);
    // console.log(b)
    let temp4List = [hslTemp3.rotate(60), hslTemp3.rotate(120)];
    // console.log(b)
    let temp5 = bd(temp4List);
    //三元
    console.log('准备转换的', temp5)
    let triadicIndexList = []
    triadicIndexList = temp5.generatorColorList.map((list, i) => list.findIndex((color) => temp5.sourceColorList[i].isEqual(color)))
    console.log(triadicIndexList)
    list.push(temp5.generatorColorList);
    new SetColorList(temp5.generatorColorList, triadicIndexList,'三元triadic')
    /************* */
    // list.forEach((list) => {
    //     list.forEach((list) => {
    //         list.forEach(({ red, green, blue }) => {
    //             let c = chroma.gl(red, green, blue, 1).hex()
    //             console.log(c)
    //         })
    //         console.log('-----')
    //     })
    // })
    return list
}
class SetColorList {
    constructor(colorList, colorIndexList, message: string) {
        console.log(colorIndexList)
        let div = document.createElement('div')
        div.appendChild(document.createTextNode(message))
        colorList.forEach((list, i) => {
            list.forEach(({ red, green, blue }, j) => {
                let colorDiv = document.createElement('div')
                colorDiv.style.width = '50px'
                colorDiv.style.height = '50px'
                colorDiv.style.backgroundColor = chroma.gl(red, green, blue, 1).hex()
                console.log(colorIndexList[i], j)
                colorDiv.style.borderRadius = colorIndexList[i] == j ? '99px' : '';
                colorDiv.style.display = 'inline-block'
                div.appendChild(colorDiv)
            })

        })
        document.body.appendChild(div)
    }

}