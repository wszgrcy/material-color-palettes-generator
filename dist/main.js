/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./class.ts":
/*!******************!*\
  !*** ./class.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./const.ts");
var color_class_1 = __webpack_require__(/*! ./color-class */ "./color-class.ts");
var chroma_js_1 = __importDefault(__webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js"));
/**
 * 用来验证是否超过范围
 *
 * @author cyia
 * @date 2019-05-06
 * @param a
 * @param b 最大值
 * @param c
 */
function compareValue(a, b, c) {
    if (isNaN(a) || 0 > a || a > b)
        throw new RangeError(a + " for " + c + " is not between 0 and " + b);
}
exports.compareValue = compareValue;
function Qb(labColor, labColorList) {
    if (labColorList === void 0) { labColorList = const_1.BUILTIN_LABCOLOR_LIST; }
    if (!labColorList.length || !labColorList[0].length)
        throw Error("Invalid golden palettes");
    for (var c = Infinity, d = labColorList[0], e = -1, g = 0; g < labColorList.length; g++)
        for (var h = 0; h < labColorList[g].length && 0 < c; h++) {
            var k = labColorList[g][h], l = (k.b + labColor.b) / 2, m = Math.sqrt(Math.pow(k.i, 2) + Math.pow(k.j, 2)), q = Math.sqrt(Math.pow(labColor.i, 2) + Math.pow(labColor.j, 2)), t = (m + q) / 2;
            t = .5 * (1 - Math.sqrt(Math.pow(t, 7) / (Math.pow(t, 7) + Math.pow(25, 7))));
            var n = k.i * (1 + t), r = labColor.i * (1 + t), N = Math.sqrt(Math.pow(n, 2) + Math.pow(k.j, 2)), H = Math.sqrt(Math.pow(r, 2) + Math.pow(labColor.j, 2));
            t = H - N;
            var ja = (N + H) / 2;
            n = Ab(k.j, n);
            r = Ab(labColor.j, r);
            N = 2 * Math.sqrt(N * H) * Math.sin((1E-4 > Math.abs(m) || 1E-4 > Math.abs(q) ? 0 : 180 >= Math.abs(r - n) ? r - n : r <= n ? r - n + 360 : r - n - 360) / 2 * Math.PI / 180);
            m = 1E-4 > Math.abs(m) || 1E-4 > Math.abs(q) ? 0 : 180 >= Math.abs(r - n) ? (n + r) / 2 : 360 > n + r ? (n + r + 360) / 2 : (n + r - 360) / 2;
            q = 1 + .045 * ja;
            H = 1 + .015 * ja * (1 - .17 * Math.cos((m - 30) * Math.PI / 180) + .24 * Math.cos(2 * m * Math.PI / 180) + .32 * Math.cos((3 * m + 6) * Math.PI / 180) - .2 * Math.cos((4 * m - 63) * Math.PI / 180));
            var temp1 = Math.sqrt(Math.pow((labColor.b - k.b) / (1 + .015 * Math.pow(l - 50, 2) / Math.sqrt(20 + Math.pow(l - 50, 2))), 2) + Math.pow(t / (1 * q), 2) + Math.pow(N / (1 * H), 2) + t / (1 * q) * Math.sqrt(Math.pow(ja, 7) / (Math.pow(ja, 7) + Math.pow(25, 7))) * Math.sin(60 * Math.exp(-Math.pow((m - 275) / 25, 2)) * Math.PI / 180) * -2 * (N / (1 * H)));
            temp1 < c && (c = temp1,
                d = labColorList[g],
                e = h);
        }
    return {
        fc: d,
        ec: e
    };
}
var Ab = function (a, b) {
    if (1E-4 > Math.abs(a) && 1E-4 > Math.abs(b))
        return 0;
    a = 180 * Math.atan2(a, b) / Math.PI;
    return 0 <= a ? a : a + 360;
};
/**rgb颜色转换为lab颜色 */
function rgb2lab(rgb) {
    var chromaLab = chroma_js_1.default.gl(rgb.red, rgb.green, rgb.blue, rgb.alpha).lab();
    return new (color_class_1.Lab.bind.apply(color_class_1.Lab, [void 0].concat(chromaLab)))();
}
function X(a) {
    var b = const_1.BUILTIN_LABCOLOR_LIST;
    var c = rgb2lab(a), d = Qb(c, b);
    var temp1 = d.fc;
    var temp2 = d.ec;
    var e = temp1[temp2], g = xb(e), h = xb(c), k = 30 > xb(temp1[5]).v, l = g.b - h.b, m = g.v - h.v, q = g.hue - h.hue, t = const_1.Cb[temp2], n = const_1.Db[temp2], r = 100;
    return temp1.map(function (b, c) {
        if (b === e)
            return r = Math.max(h.b - 1.7, 0),
                a;
        b = xb(b);
        var d = b.b - const_1.Cb[c] / t * l;
        d = Math.min(d, r);
        c = new Wb(A(d, 0, 100), Math.max(0, k ? b.v - m : b.v - m * Math.min(const_1.Db[c] / n, 1.25)), (b.hue - q + 360) % 360);
        r = Math.max(c.b - 1.7, 0);
        b = c.hue * Math.PI / 180;
        c = new color_class_1.Lab(c.b, c.v * Math.cos(b), c.v * Math.sin(b), c.alpha);
        var g = (c.b + 16) / 116;
        b = .95047 * zb(g + c.i / 500);
        d = 1 * zb(g);
        g = 1.08883 * zb(g - c.j / 200);
        return new Rgb(A(yb(3.2404542 * b + -1.5371385 * d + -.4985314 * g), 0, 1), A(yb(-.969266 * b + 1.8760108 * d + .041556 * g), 0, 1), A(yb(.0556434 * b + -.2040259 * d + 1.0572252 * g), 0, 1), c.alpha);
    });
}
function xb(a) {
    console.log(a);
    return new Wb(a.b, Math.sqrt(Math.pow(a.i, 2) + Math.pow(a.j, 2)), (180 * Math.atan2(a.j, a.i) / Math.PI + 360) % 360, a.alpha);
}
;
var Wb = /** @class */ (function () {
    function Wb(a, b, hue, alpha) {
        if (alpha === void 0) { alpha = 1; }
        this.hue = hue;
        this.alpha = alpha;
        alpha = alpha || 1;
        this.b = a;
        this.v = b;
        // this.hue = c;
        // this.alpha = d;
        compareValue(a, Number.MAX_VALUE, "lightness");
        compareValue(b, Number.MAX_VALUE, "chroma");
        compareValue(hue, 360, "hue");
        compareValue(alpha, 1, "alpha");
    }
    return Wb;
}());
;
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
;
function zb(a) {
    var b = 6 / 29, c = 3 * Math.pow(b, 2);
    return a > b ? Math.pow(a, 3) : c * (a - 4 / 29);
}
function yb(a) {
    return .0031308 >= a ? 12.92 * a : 1.055 * Math.pow(a, 1 / 2.4) - .055;
}
function lb(hsl) {
    var b = (1 - Math.abs(2 * hsl.lightness - 1)) * hsl.saturation;
    return kb(hsl.hue, hsl.alpha, b, Math.max(0, hsl.lightness - b / 2));
}
function kb(hue, alpha, c, d) {
    var e = d, g = d;
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
                d += h;
    }
    return new Rgb(e, g, d, alpha);
}
function rb(a) {
    var b = Math.max(a.red, a.green, a.blue), c = Math.min(a.red, a.green, a.blue), d = 0, e = 0, g = A(.5 * (b + c), 0, 1);
    b - c > const_1.O && (b === a.red ? d = 60 * (a.green - a.blue) / (b - c) : b === a.green ? d = 60 * (a.blue - a.red) / (b - c) + 120 : b === a.blue && (d = 60 * (a.red - a.green) / (b - c) + 240),
        e = 0 < g && .5 >= g ? A((b - c) / (2 * g), 0, 1) : A((b - c) / (2 - 2 * g), 0, 1));
    d = Math.round(d + 360) % 360;
    return new Hsl(d, e, g, a.alpha);
}
function bd(a) {
    var b = [], c = [];
    a = w(a);
    for (var d = a.next(); !d.done; d = a.next())
        d = lb(d.value),
            b.push(d),
            c.push(X(d));
    return {
        Eb: b,
        yb: c
    };
}
function w(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    };
}
function aa(a) {
    var b = 0;
    return function () {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        };
    };
}
var Hsl = /** @class */ (function () {
    function Hsl(hue, saturation, lightness, alpha) {
        if (alpha === void 0) { alpha = 1; }
        this.hue = hue;
        this.saturation = saturation;
        this.lightness = lightness;
        this.alpha = alpha;
        alpha = alpha || 1;
        compareValue(hue, 360, "hue");
        compareValue(saturation, 1, "saturation");
        compareValue(lightness, 1, "lightness");
        compareValue(alpha, 1, "alpha");
    }
    Hsl.prototype.M = function () {
        return "hsla(" + this.hue + ", " + 100 * this.saturation + "%, " + (100 * this.lightness + "%, " + this.alpha + ")");
    };
    Hsl.prototype.rotate = function (deg) {
        return new Hsl((this.hue + deg + 360) % 360, this.saturation, this.lightness, this.alpha);
    };
    return Hsl;
}());
;
var Rgb = /** @class */ (function () {
    function Rgb(red, green, blue, alpha) {
        if (alpha === void 0) { alpha = 1; }
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.alpha = alpha;
        alpha = alpha || 1;
        compareValue(red, 1, "red");
        compareValue(green, 1, "green");
        compareValue(blue, 1, "blue");
        compareValue(alpha, 1, "alpha");
    }
    return Rgb;
}());
;
/**主入口 */
function main(/**rgb颜色 */ b) {
    var list = [];
    console.log(b);
    list.push([X(b)]);
    var d = lb(rb(b).rotate(180));
    console.log(d);
    list.push([X(d)]);
    var hslTemp1 = rb(b);
    var temp2 = [hslTemp1.rotate(-30), hslTemp1.rotate(30)];
    var temp3 = bd(temp2);
    console.log(temp2);
    list.push(temp3.yb);
    b = rb(b);
    b = [b.rotate(60), b.rotate(120)];
    console.log(b);
    b = bd(b);
    list.push(b.yb);
    list.forEach(function (list) {
        list.forEach(function (list) {
            list.forEach(function (_a) {
                var red = _a.red, green = _a.green, blue = _a.blue;
                var c = chroma_js_1.default.gl(red, green, blue, 1).hex();
                console.log(c);
            });
            console.log('-----');
        });
    });
    return list;
}
exports.main = main;


/***/ }),

/***/ "./color-class.ts":
/*!************************!*\
  !*** ./color-class.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// import { compareValue } from './class';
Object.defineProperty(exports, "__esModule", { value: true });
var Lab = /** @class */ (function () {
    /**
     *
     * @author cyia
     * @date 2019-05-06
     * @param l 亮度
     * @param a 从绿色到红色的分量
     * @param b 从蓝色到黄色的分量
     */
    function Lab(l, a, b, alpha) {
        if (alpha === void 0) { alpha = 1; }
        this.alpha = alpha;
        alpha = alpha || 1;
        this.compareValue(l, 100, "lightness");
        this.compareValue(alpha, 1, "alpha");
        //doc暂时兼容
        this.b = l;
        this.i = a;
        this.j = b;
    }
    /**
     * 比较颜色是否相等
     *
     * @author cyia
     * @date 2019-05-07
     * @param a
     * @returns
     */
    Lab.prototype.ka = function (a) {
        return 1E-4 > Math.abs(this.b - a.b) && 1E-4 > Math.abs(this.i - a.i) && 1E-4 > Math.abs(this.j - a.j) && Math.abs(this.alpha - a.alpha) < Math.pow(2, -16);
    };
    Lab.prototype.compareValue = function (a, b, c) {
        if (isNaN(a) || 0 > a || a > b)
            throw new RangeError(a + " for " + c + " is not between 0 and " + b);
    };
    return Lab;
}());
exports.Lab = Lab;


/***/ }),

/***/ "./const.ts":
/*!******************!*\
  !*** ./const.ts ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var color_class_1 = __webpack_require__(/*! ./color-class */ "./color-class.ts");
exports.BUILTIN_LABCOLOR_LIST = [[new color_class_1.Lab(94.67497003305085, 7.266715066863771, 1.000743882272359), new color_class_1.Lab(86.7897416761699, 18.370736761658012, 4.23637133971424), new color_class_1.Lab(72.0939162832561, 31.7948058298117, 13.2972443996896), new color_class_1.Lab(61.79353370051851, 44.129498163764545, 20.721477326799608), new color_class_1.Lab(57.194195398949574, 59.6450006197361, 34.999830012940194), new color_class_1.Lab(55.603951071861374, 66.01287384845483, 47.67169313982772), new color_class_1.Lab(51.66348502954747, 64.7487785020625, 43.244876694855286), new color_class_1.Lab(47.09455666350969, 62.29836039074277, 40.67775424698388), new color_class_1.Lab(43.77122063388739, 60.28633509183384, 40.31444686692952), new color_class_1.Lab(39.555187078007386, 58.703681355389975, 41.66495027798629)], [new color_class_1.Lab(92.68053776327665, 9.515385232804263, -.8994072969754852), new color_class_1.Lab(81.86756643628922, 25.05688089723257, -1.9475235115390621), new color_class_1.Lab(70.90987389545768, 42.21705257720526, -1.095154624057959), new color_class_1.Lab(61.08140805216186, 58.871233307587204, 2.1008764804626434), new color_class_1.Lab(54.97970219986448, 68.56530938366889, 7.327430728560569), new color_class_1.Lab(50.872250340749176, 74.60459195925529, 15.353576256896073), new color_class_1.Lab(47.27738650144558, 70.77855776427805, 11.70434273264508), new color_class_1.Lab(42.58424189486517, 65.5411953138309, 7.595596439803797), new color_class_1.Lab(37.977492407254836, 60.74362621842075, 2.9847124951453474), new color_class_1.Lab(29.699290034849604, 51.90485023721311, -4.830186634107636)], [new color_class_1.Lab(92.4362655169016, 7.542927467702299, -6.039842848605881), new color_class_1.Lab(81.07399776904751, 19.563870217805036, -15.719625491986044), new color_class_1.Lab(68.71394717711831, 33.79992812490556, -26.49539972339321), new color_class_1.Lab(56.596161226236305, 47.5856631835152, -36.480816605410915), new color_class_1.Lab(48.002791217624434, 57.30866443934879, -43.2561127152548), new color_class_1.Lab(40.66211534692161, 64.01910773818436, -48.05930162591041), new color_class_1.Lab(37.690702208992185, 61.13762767732481, -49.384803274243026), new color_class_1.Lab(33.56291870731981, 57.637381239254104, -51.39557249855828), new color_class_1.Lab(29.865391314234515, 54.29737439901333, -52.6601973712463), new color_class_1.Lab(23.16724235420436, 48.51764437280498, -55.16267949015293)], [new color_class_1.Lab(92.49103426017201, 4.712320025752947, -6.532868071709763), new color_class_1.Lab(81.24668319505597, 11.50642734909485, -16.666600637245367), new color_class_1.Lab(68.61488216554629, 20.395329051982824, -28.522018851715416), new color_class_1.Lab(55.60369793053023, 30.933537768905005, -41.16439122358484), new color_class_1.Lab(45.834566190969426, 39.28806272235674, -50.523322052772635), new color_class_1.Lab(36.608620229358664, 47.29686002828143, -59.111766586186846), new color_class_1.Lab(34.189791237562616, 46.60426065139123, -59.53961627676729), new color_class_1.Lab(30.52713367338361, 46.01498224754519, -60.19975052509064), new color_class_1.Lab(27.44585524877222, 44.96180431854785, -60.46395810756433), new color_class_1.Lab(21.98627670328218, 44.29296076245473, -60.93653655172098)], [new color_class_1.Lab(92.86314411983918, 1.5318147061061937, -6.025243528950552), new color_class_1.Lab(81.8348073705298, 4.460934955458907, -15.873561009736136), new color_class_1.Lab(69.7796913795672, 7.9043652558912765, -26.3170846346932), new color_class_1.Lab(57.48786519938736, 12.681019504822533, -37.23202012914528), new color_class_1.Lab(47.74592578811101, 18.520799302452374, -46.47540679000397), new color_class_1.Lab(38.334403614455404, 25.57700668170812, -55.28224153299287), new color_class_1.Lab(35.15116453901552, 26.231812080381168, -54.53700978785404), new color_class_1.Lab(31.080429988007957, 27.07394930110124, -53.97505274579958), new color_class_1.Lab(27.026672080454922, 28.165266427558983, -53.28987325482218), new color_class_1.Lab(19.751201587921678, 30.60784576895101, -52.13866519297474)], [new color_class_1.Lab(94.70682457348717, -2.835484735987326, -6.978044694792707), new color_class_1.Lab(86.8839842970016, -5.16908728759552, -17.88561192754956), new color_class_1.Lab(79.0451532401558, -6.817753527015746, -28.968537490432176), new color_class_1.Lab(71.15083697242613, -5.994763756850707, -39.72549451158927), new color_class_1.Lab(65.48106058907833, -2.735745792537936, -48.15471238926561), new color_class_1.Lab(60.43009440850862, 2.079928897321559, -55.10935847069616), new color_class_1.Lab(55.62267676922188, 4.998684384486918, -55.02164729429915), new color_class_1.Lab(49.27006645904875, 8.470398370314381, -54.494796838457546), new color_class_1.Lab(43.16828856394358, 11.968483076143844, -53.972567377977974), new color_class_1.Lab(32.17757793894193, 18.96054990229354, -53.45146365049088)], [new color_class_1.Lab(95.35713467762652, -4.797149155388203, -6.550002550504308), new color_class_1.Lab(88.27942649540043, -10.836006614583892, -16.359361821940375), new color_class_1.Lab(81.10009044900976, -15.323054522981716, -26.419121191320947), new color_class_1.Lab(74.44713958259777, -16.664432625362547, -35.19702686900037), new color_class_1.Lab(69.87836465637318, -14.291515332054693, -41.827430329755174), new color_class_1.Lab(65.68851259178913, -9.612635721963692, -47.34091616039191), new color_class_1.Lab(60.88357994308973, -7.252819027184943, -46.67753731595634), new color_class_1.Lab(54.26166495426166, -3.8141836897908066, -45.97939475762498), new color_class_1.Lab(48.10661895072673, -1.378998784464347, -44.34466750206778), new color_class_1.Lab(36.34401147057282, 5.067812404713545, -43.11786257561915)], [new color_class_1.Lab(95.69295154599753, -6.898716127301141, -3.994284229654421), new color_class_1.Lab(89.52842524059004, -16.412398289601725, -9.260466069266693), new color_class_1.Lab(83.32031214655748, -24.83036840728098, -14.568673583304603), new color_class_1.Lab(77.35338313752958, -30.201708572215104, -18.92358284721101), new color_class_1.Lab(73.45322093857781, -31.88590390189383, -21.130459992513686), new color_class_1.Lab(69.97638465064783, -30.679850324547953, -23.186685661136707), new color_class_1.Lab(64.44491716553777, -29.08337434584457, -21.154935769156214), new color_class_1.Lab(56.99816432961103, -27.31081477279451, -17.86988815767443), new color_class_1.Lab(49.75464182255671, -25.335383503694242, -15.024722591662787), new color_class_1.Lab(36.52725894264432, -22.129641744194515, -9.176159146894303)], [new color_class_1.Lab(94.18453941589918, -6.08351703428972, -1.5488916051161983), new color_class_1.Lab(85.68177077414457, -15.333179440298606, -2.8519825761476048), new color_class_1.Lab(76.85067847190405, -24.844059173189713, -3.8750785132192656), new color_class_1.Lab(68.02762242570138, -32.566861154120716, -4.015231084407134), new color_class_1.Lab(61.667257304525464, -36.06752603289354, -3.4734046401753815), new color_class_1.Lab(55.67310397390196, -36.66069960626328, -2.125617915169653), new color_class_1.Lab(51.059149495197715, -34.65019160301408, -1.3910484300432513), new color_class_1.Lab(45.269081019218405, -32.13244775422941, -.4526371852697775), new color_class_1.Lab(39.36899076059384, -29.25264468583161, -.03562564673170732), new color_class_1.Lab(28.58363043701477, -24.585465516136413, 1.8037402162492389)], [new color_class_1.Lab(95.30530183565223, -6.430415645739263, 4.292950594459599), new color_class_1.Lab(88.49014579152143, -15.23147744952702, 10.848261177683138), new color_class_1.Lab(81.22616870575376, -24.993886168551583, 18.144696803330884), new color_class_1.Lab(74.30361721558802, -35.56088696067356, 26.781515251907727), new color_class_1.Lab(69.0430995277442, -42.61556126595995, 33.17109563126665), new color_class_1.Lab(63.977421814072926, -48.54292673319982, 39.73241526342939), new color_class_1.Lab(58.777960853461366, -46.1153692478013, 37.838910745225576), new color_class_1.Lab(52.41108688974904, -43.21761792485762, 35.62250659009424), new color_class_1.Lab(46.2813873076426, -40.25816227675361, 33.32343229338761), new color_class_1.Lab(34.685655305814514, -34.75343878510312, 28.866739034359767)], [new color_class_1.Lab(96.70518169355954, -4.929987845095463, 6.397084523168894), new color_class_1.Lab(91.66416061199438, -12.057032041945693, 16.054604579275143), new color_class_1.Lab(86.2244395865449, -19.613646834080622, 26.384906423454236), new color_class_1.Lab(80.83404879636919, -27.080171840756893, 37.378493742021334), new color_class_1.Lab(76.79543725108964, -32.76659719736752, 45.912190572444445), new color_class_1.Lab(72.90025297028019, -37.549139223927384, 53.51959496103027), new color_class_1.Lab(67.21532310272079, -36.56304870773486, 50.49629051268894), new color_class_1.Lab(59.91051142210195, -35.77011466063357, 46.56465847976187), new color_class_1.Lab(52.51015841084511, -34.47903440699235, 42.20723868724268), new color_class_1.Lab(39.41191983353878, -32.80460974352642, 35.255490585630014)], [new color_class_1.Lab(97.99506057883428, -4.059632482741494, 9.355797602381521), new color_class_1.Lab(94.80926235976536, -9.237091467352855, 23.230650064824985), new color_class_1.Lab(91.85205843526167, -15.053917327011114, 38.86115182206598), new color_class_1.Lab(88.75812142080242, -19.542900400164097, 53.71785675783709), new color_class_1.Lab(86.27404180729515, -22.173992891121596, 63.978639065232514), new color_class_1.Lab(84.20566835376492, -24.270643520989342, 72.79624067033038), new color_class_1.Lab(78.27915100603997, -21.181850056402496, 68.82763412297965), new color_class_1.Lab(70.82385811892824, -17.788148932525672, 64.00327817988128), new color_class_1.Lab(62.936867012868035, -13.697412111684903, 58.513000509287835), new color_class_1.Lab(49.498610881452535, -6.485230564384715, 49.67432722833751)], [new color_class_1.Lab(98.93885129752759, -3.0098470288543178, 10.765736833790008), new color_class_1.Lab(97.22689784824074, -6.174599368734491, 26.22932417355146), new color_class_1.Lab(95.58092947828766, -8.907132848473886, 43.56297291446567), new color_class_1.Lab(94.09009515702486, -10.509628942710735, 60.20019514231188), new color_class_1.Lab(93.06546746683087, -11.008558476013008, 71.76500826005477), new color_class_1.Lab(92.12975017760128, -10.830023094868302, 80.9090559640089), new color_class_1.Lab(87.12188349168609, -2.3764300099239355, 78.14868195373407), new color_class_1.Lab(80.96200442419905, 8.849333792729064, 75.05050700092679), new color_class_1.Lab(75.00342770718086, 20.340173566879283, 72.24841925958934), new color_class_1.Lab(65.48207757431567, 39.647064970476094, 68.34872841768654)], [new color_class_1.Lab(97.5642392074337, -1.445525639405032, 11.881254316297674), new color_class_1.Lab(93.67057953749456, -1.8693096862072434, 30.02888670415651), new color_class_1.Lab(89.94571492804107, -1.0224503814769692, 49.649542361642276), new color_class_1.Lab(86.71009164153801, 1.0496066396428194, 68.77377342409739), new color_class_1.Lab(83.78773993319211, 5.248231820098425, 78.92920457852716), new color_class_1.Lab(81.52191382080228, 9.403655370707199, 82.69257112982746), new color_class_1.Lab(78.17240973804697, 16.628512886531887, 81.09358318806208), new color_class_1.Lab(73.80899654381052, 26.53614315250874, 78.21754052181723), new color_class_1.Lab(70.1134511665764, 35.3007623359744, 75.87510992138593), new color_class_1.Lab(63.86460405565717, 50.94648214505959, 72.17815682124423)], [new color_class_1.Lab(96.30459517801387, .923151172282477, 10.598439446083074), new color_class_1.Lab(90.68320082865087, 4.103774964681062, 26.485793721916128), new color_class_1.Lab(85.00055287186233, 9.047181758866651, 44.51407622580792), new color_class_1.Lab(79.42428495742953, 16.452610724439875, 62.08721739074201), new color_class_1.Lab(75.47792699289774, 23.395742928451867, 72.64347611236501), new color_class_1.Lab(72.04246561548388, 30.681921012382098, 77.08579298904603), new color_class_1.Lab(68.94724338946975, 35.22014778433863, 74.88425044595111), new color_class_1.Lab(64.83017495535229, 40.91200730099703, 71.9596053545428), new color_class_1.Lab(60.8534207471871, 46.41483590510681, 69.18061963415211), new color_class_1.Lab(54.77571742962287, 55.282751019360035, 65.10193403547922)], [new color_class_1.Lab(93.69219844671957, 5.763979334358293, 3.1700162796469034), new color_class_1.Lab(86.04629434276428, 15.750843803958192, 14.828476927090994), new color_class_1.Lab(77.54010042938336, 27.90113842540043, 25.99645229289065), new color_class_1.Lab(69.74095456707857, 41.14487377552256, 39.443320178900024), new color_class_1.Lab(64.37085344539341, 51.890379620443575, 50.81312471046415), new color_class_1.Lab(60.06780837277435, 61.65258736118817, 61.54771829165221), new color_class_1.Lab(57.28707915232363, 60.3250664308812, 60.07341536376447), new color_class_1.Lab(53.810052616293845, 58.36760943780162, 58.19586806694884), new color_class_1.Lab(50.301352405105874, 56.40104898089937, 55.924141992404344), new color_class_1.Lab(43.86477994548343, 52.970887703910726, 52.30067989225532)], [new color_class_1.Lab(93.29864888069987, .9915456090475727, 1.442353076378411), new color_class_1.Lab(82.80884359004081, 3.116221903342209, 3.3523059451463055), new color_class_1.Lab(70.95493047668185, 5.469742193344784, 5.449009494553492), new color_class_1.Lab(58.712934619103066, 7.990991075363385, 8.352488495367627), new color_class_1.Lab(49.150208552875895, 10.570984981000397, 10.831440151197924), new color_class_1.Lab(39.63200151837749, 13.138881961627241, 13.531574711511885), new color_class_1.Lab(35.600996682015754, 12.40352847757295, 12.10432183902449), new color_class_1.Lab(30.084271265759952, 11.317148149878081, 10.547484304296217), new color_class_1.Lab(24.555014696416578, 10.816613316782464, 8.506555306791984), new color_class_1.Lab(18.35055226514404, 10.225725550338765, 7.058582769882571)], [new color_class_1.Lab(98.27202740980219, -1.6418393644634932E-5, 6.567357457853973E-6), new color_class_1.Lab(96.53749336548567, -1.616917905122861E-5, 6.467671598286984E-6), new color_class_1.Lab(94.0978378987781, -1.581865383126768E-5, 6.327461532507073E-6), new color_class_1.Lab(89.17728373493613, -1.511167768697419E-5, 6.044671074789676E-6), new color_class_1.Lab(76.61119902231323, -1.330620591488696E-5, 5.322482343750323E-6), new color_class_1.Lab(65.11424774127516, -1.1654345155598378E-5, 4.661738062239351E-6), new color_class_1.Lab(49.238989620828065, -9.373417431124409E-6, 3.7493669724497636E-6), new color_class_1.Lab(41.14266843804848, -8.210152946386273E-6, 3.2840611896567395E-6), new color_class_1.Lab(27.974857206003705, -6.318226192236764E-6, 2.5272904768947058E-6), new color_class_1.Lab(12.740011331302725, -4.129311698131133E-6, 1.6517246792524531E-6)], [new color_class_1.Lab(94.27665212516236, -.637571046109342, -1.313515378996688), new color_class_1.Lab(85.77788001492097, -2.2777811084512822, -3.0177758416151557), new color_class_1.Lab(76.12296325015231, -3.401502988883809, -5.16867892977908), new color_class_1.Lab(66.16340108908365, -4.819627183079045, -7.520697631614404), new color_class_1.Lab(58.35752478513645, -5.7195089100892105, -9.165988916613488), new color_class_1.Lab(50.70748082202715, -6.837992965799455, -10.956055112409357), new color_class_1.Lab(44.85917867647632, -6.411990559239578, -9.74511982878765), new color_class_1.Lab(36.92458930566504, -5.319878610845596, -8.341943474561553), new color_class_1.Lab(29.115334784637618, -4.168907828645069, -6.8629962199973304), new color_class_1.Lab(19.958338450799914, -3.3116721453186617, -5.4486142104736786)]];
exports.Cb = [2.048875457, 5.124792061, 8.751659557, 12.07628774, 13.91449542, 15.92738893, 15.46585818, 15.09779227, 15.13738673, 15.09818372];
exports.Db = [1.762442714, 4.213532634, 7.395827458, 11.07174158, 13.89634504, 16.37591477, 16.27071136, 16.54160806, 17.35916727, 19.88410864];
/**应该是个精度变量 */
exports.O = Math.pow(2, -16);


/***/ }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chroma_js_1 = __importDefault(__webpack_require__(/*! chroma-js */ "./node_modules/chroma-js/chroma.js"));
var class_1 = __webpack_require__(/*! ./class */ "./class.ts");
var color = chroma_js_1.default('#F44336').gl();
var glColor = { red: color[0], green: color[1], blue: color[2], alpha: color[3] || 1 };
var list = class_1.main(glColor);
console.log(list);


/***/ }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * chroma.js - JavaScript library for color conversions
 *
 * Copyright (c) 2011-2018, Gregor Aisch
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. The name Gregor Aisch may not be used to endorse or promote products
 * derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL GREGOR AISCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT,
 * INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
 * BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 * -------------------------------------------------------
 *
 * chroma.js includes colors from colorbrewer2.org, which are released under
 * the following license:
 *
 * Copyright (c) 2002 Cynthia Brewer, Mark Harrower,
 * and The Pennsylvania State University.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 *
 * ------------------------------------------------------
 *
 * Named colors are taken from X11 Color Names.
 * http://www.w3.org/TR/css3-color/#svg-color
 *
 * @preserve
 */

(function (global, factory) {
     true ? module.exports = factory() :
    undefined;
}(this, (function () { 'use strict';

    var limit = function (x, min, max) {
        if ( min === void 0 ) min=0;
        if ( max === void 0 ) max=1;

        return x < min ? min : x > max ? max : x;
    };

    var clip_rgb = function (rgb) {
        rgb._clipped = false;
        rgb._unclipped = rgb.slice(0);
        for (var i=0; i<=3; i++) {
            if (i < 3) {
                if (rgb[i] < 0 || rgb[i] > 255) { rgb._clipped = true; }
                rgb[i] = limit(rgb[i], 0, 255);
            } else if (i === 3) {
                rgb[i] = limit(rgb[i], 0, 1);
            }
        }
        return rgb;
    };

    // ported from jQuery's $.type
    var classToType = {};
    for (var i = 0, list = ['Boolean', 'Number', 'String', 'Function', 'Array', 'Date', 'RegExp', 'Undefined', 'Null']; i < list.length; i += 1) {
        var name = list[i];

        classToType[("[object " + name + "]")] = name.toLowerCase();
    }
    var type = function(obj) {
        return classToType[Object.prototype.toString.call(obj)] || "object";
    };

    var unpack = function (args, keyOrder) {
        if ( keyOrder === void 0 ) keyOrder=null;

    	// if called with more than 3 arguments, we return the arguments
        if (args.length >= 3) { return Array.prototype.slice.call(args); }
        // with less than 3 args we check if first arg is object
        // and use the keyOrder string to extract and sort properties
    	if (type(args[0]) == 'object' && keyOrder) {
    		return keyOrder.split('')
    			.filter(function (k) { return args[0][k] !== undefined; })
    			.map(function (k) { return args[0][k]; });
    	}
    	// otherwise we just return the first argument
    	// (which we suppose is an array of args)
        return args[0];
    };

    var last = function (args) {
        if (args.length < 2) { return null; }
        var l = args.length-1;
        if (type(args[l]) == 'string') { return args[l].toLowerCase(); }
        return null;
    };

    var PI = Math.PI;

    var utils = {
    	clip_rgb: clip_rgb,
    	limit: limit,
    	type: type,
    	unpack: unpack,
    	last: last,
    	PI: PI,
    	TWOPI: PI*2,
    	PITHIRD: PI/3,
    	DEG2RAD: PI / 180,
    	RAD2DEG: 180 / PI
    };

    var input = {
    	format: {},
    	autodetect: []
    };

    var last$1 = utils.last;
    var clip_rgb$1 = utils.clip_rgb;
    var type$1 = utils.type;


    var Color = function Color() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var me = this;
        if (type$1(args[0]) === 'object' &&
            args[0].constructor &&
            args[0].constructor === this.constructor) {
            // the argument is already a Color instance
            return args[0];
        }

        // last argument could be the mode
        var mode = last$1(args);
        var autodetect = false;

        if (!mode) {
            autodetect = true;
            if (!input.sorted) {
                input.autodetect = input.autodetect.sort(function (a,b) { return b.p - a.p; });
                input.sorted = true;
            }
            // auto-detect format
            for (var i = 0, list = input.autodetect; i < list.length; i += 1) {
                var chk = list[i];

                mode = chk.test.apply(chk, args);
                if (mode) { break; }
            }
        }

        if (input.format[mode]) {
            var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0,-1));
            me._rgb = clip_rgb$1(rgb);
        } else {
            throw new Error('unknown format: '+args);
        }

        // add alpha channel
        if (me._rgb.length === 3) { me._rgb.push(1); }
    };

    Color.prototype.toString = function toString () {
        if (type$1(this.hex) == 'function') { return this.hex(); }
        return ("[" + (this._rgb.join(',')) + "]");
    };

    var Color_1 = Color;

    var chroma = function () {
    	var args = [], len = arguments.length;
    	while ( len-- ) args[ len ] = arguments[ len ];

    	return new (Function.prototype.bind.apply( chroma.Color, [ null ].concat( args) ));
    };

    chroma.Color = Color_1;
    chroma.version = '2.0.3';

    var chroma_1 = chroma;

    var unpack$1 = utils.unpack;
    var max = Math.max;

    var rgb2cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$1(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r = r / 255;
        g = g / 255;
        b = b / 255;
        var k = 1 - max(r,max(g,b));
        var f = k < 1 ? 1 / (1-k) : 0;
        var c = (1-r-k) * f;
        var m = (1-g-k) * f;
        var y = (1-b-k) * f;
        return [c,m,y,k];
    };

    var rgb2cmyk_1 = rgb2cmyk;

    var unpack$2 = utils.unpack;

    var cmyk2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$2(args, 'cmyk');
        var c = args[0];
        var m = args[1];
        var y = args[2];
        var k = args[3];
        var alpha = args.length > 4 ? args[4] : 1;
        if (k === 1) { return [0,0,0,alpha]; }
        return [
            c >= 1 ? 0 : 255 * (1-c) * (1-k), // r
            m >= 1 ? 0 : 255 * (1-m) * (1-k), // g
            y >= 1 ? 0 : 255 * (1-y) * (1-k), // b
            alpha
        ];
    };

    var cmyk2rgb_1 = cmyk2rgb;

    var unpack$3 = utils.unpack;
    var type$2 = utils.type;



    Color_1.prototype.cmyk = function() {
        return rgb2cmyk_1(this._rgb);
    };

    chroma_1.cmyk = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['cmyk']) ));
    };

    input.format.cmyk = cmyk2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$3(args, 'cmyk');
            if (type$2(args) === 'array' && args.length === 4) {
                return 'cmyk';
            }
        }
    });

    var unpack$4 = utils.unpack;
    var last$2 = utils.last;
    var rnd = function (a) { return Math.round(a*100)/100; };

    /*
     * supported arguments:
     * - hsl2css(h,s,l)
     * - hsl2css(h,s,l,a)
     * - hsl2css([h,s,l], mode)
     * - hsl2css([h,s,l,a], mode)
     * - hsl2css({h,s,l,a}, mode)
     */
    var hsl2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hsla = unpack$4(args, 'hsla');
        var mode = last$2(args) || 'lsa';
        hsla[0] = rnd(hsla[0] || 0);
        hsla[1] = rnd(hsla[1]*100) + '%';
        hsla[2] = rnd(hsla[2]*100) + '%';
        if (mode === 'hsla' || (hsla.length > 3 && hsla[3]<1)) {
            hsla[3] = hsla.length > 3 ? hsla[3] : 1;
            mode = 'hsla';
        } else {
            hsla.length = 3;
        }
        return (mode + "(" + (hsla.join(',')) + ")");
    };

    var hsl2css_1 = hsl2css;

    var unpack$5 = utils.unpack;

    /*
     * supported arguments:
     * - rgb2hsl(r,g,b)
     * - rgb2hsl(r,g,b,a)
     * - rgb2hsl([r,g,b])
     * - rgb2hsl([r,g,b,a])
     * - rgb2hsl({r,g,b,a})
     */
    var rgb2hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$5(args, 'rgba');
        var r = args[0];
        var g = args[1];
        var b = args[2];

        r /= 255;
        g /= 255;
        b /= 255;

        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);

        var l = (max + min) / 2;
        var s, h;

        if (max === min){
            s = 0;
            h = Number.NaN;
        } else {
            s = l < 0.5 ? (max - min) / (max + min) : (max - min) / (2 - max - min);
        }

        if (r == max) { h = (g - b) / (max - min); }
        else if (g == max) { h = 2 + (b - r) / (max - min); }
        else if (b == max) { h = 4 + (r - g) / (max - min); }

        h *= 60;
        if (h < 0) { h += 360; }
        if (args.length>3 && args[3]!==undefined) { return [h,s,l,args[3]]; }
        return [h,s,l];
    };

    var rgb2hsl_1 = rgb2hsl;

    var unpack$6 = utils.unpack;
    var last$3 = utils.last;


    var round = Math.round;

    /*
     * supported arguments:
     * - rgb2css(r,g,b)
     * - rgb2css(r,g,b,a)
     * - rgb2css([r,g,b], mode)
     * - rgb2css([r,g,b,a], mode)
     * - rgb2css({r,g,b,a}, mode)
     */
    var rgb2css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$6(args, 'rgba');
        var mode = last$3(args) || 'rgb';
        if (mode.substr(0,3) == 'hsl') {
            return hsl2css_1(rgb2hsl_1(rgba), mode);
        }
        rgba[0] = round(rgba[0]);
        rgba[1] = round(rgba[1]);
        rgba[2] = round(rgba[2]);
        if (mode === 'rgba' || (rgba.length > 3 && rgba[3]<1)) {
            rgba[3] = rgba.length > 3 ? rgba[3] : 1;
            mode = 'rgba';
        }
        return (mode + "(" + (rgba.slice(0,mode==='rgb'?3:4).join(',')) + ")");
    };

    var rgb2css_1 = rgb2css;

    var RE_HEX = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    var RE_HEXA = /^#?([A-Fa-f0-9]{8})$/;

    var hex2rgb = function (hex) {
        if (hex.match(RE_HEX)) {
            // remove optional leading #
            if (hex.length === 4 || hex.length === 7) {
                hex = hex.substr(1);
            }
            // expand short-notation to full six-digit
            if (hex.length === 3) {
                hex = hex.split('');
                hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
            }
            var u = parseInt(hex, 16);
            var r = u >> 16;
            var g = u >> 8 & 0xFF;
            var b = u & 0xFF;
            return [r,g,b,1];
        }

        // match rgba hex format, eg #FF000077
        if (hex.match(RE_HEXA)) {
            if (hex.length === 9) {
                // remove optional leading #
                hex = hex.substr(1);
            }
            var u$1 = parseInt(hex, 16);
            var r$1 = u$1 >> 24 & 0xFF;
            var g$1 = u$1 >> 16 & 0xFF;
            var b$1 = u$1 >> 8 & 0xFF;
            var a = Math.round((u$1 & 0xFF) / 0xFF * 100) / 100;
            return [r$1,g$1,b$1,a];
        }

        // we used to check for css colors here
        // if _input.css? and rgb = _input.css hex
        //     return rgb

        throw new Error(("unknown hex color: " + hex));
    };

    var hex2rgb_1 = hex2rgb;

    var unpack$7 = utils.unpack;
    var round$1 = Math.round;

    var hsl2rgb = function () {
        var assign;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$7(args, 'hsl');
        var h = args[0];
        var s = args[1];
        var l = args[2];
        var r,g,b;
        if (s === 0) {
            r = g = b = l*255;
        } else {
            var t3 = [0,0,0];
            var c = [0,0,0];
            var t2 = l < 0.5 ? l * (1+s) : l+s-l*s;
            var t1 = 2 * l - t2;
            var h_ = h / 360;
            t3[0] = h_ + 1/3;
            t3[1] = h_;
            t3[2] = h_ - 1/3;
            for (var i=0; i<3; i++) {
                if (t3[i] < 0) { t3[i] += 1; }
                if (t3[i] > 1) { t3[i] -= 1; }
                if (6 * t3[i] < 1)
                    { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                else if (2 * t3[i] < 1)
                    { c[i] = t2; }
                else if (3 * t3[i] < 2)
                    { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                else
                    { c[i] = t1; }
            }
            (assign = [round$1(c[0]*255),round$1(c[1]*255),round$1(c[2]*255)], r = assign[0], g = assign[1], b = assign[2]);
        }
        if (args.length > 3) {
            // keep alpha channel
            return [r,g,b,args[3]];
        }
        return [r,g,b,1];
    };

    var hsl2rgb_1 = hsl2rgb;

    /**
    	X11 color names

    	http://www.w3.org/TR/css3-color/#svg-color
    */

    var w3cx11 = {
        aliceblue: '#f0f8ff',
        antiquewhite: '#faebd7',
        aqua: '#00ffff',
        aquamarine: '#7fffd4',
        azure: '#f0ffff',
        beige: '#f5f5dc',
        bisque: '#ffe4c4',
        black: '#000000',
        blanchedalmond: '#ffebcd',
        blue: '#0000ff',
        blueviolet: '#8a2be2',
        brown: '#a52a2a',
        burlywood: '#deb887',
        cadetblue: '#5f9ea0',
        chartreuse: '#7fff00',
        chocolate: '#d2691e',
        coral: '#ff7f50',
        cornflower: '#6495ed',
        cornflowerblue: '#6495ed',
        cornsilk: '#fff8dc',
        crimson: '#dc143c',
        cyan: '#00ffff',
        darkblue: '#00008b',
        darkcyan: '#008b8b',
        darkgoldenrod: '#b8860b',
        darkgray: '#a9a9a9',
        darkgreen: '#006400',
        darkgrey: '#a9a9a9',
        darkkhaki: '#bdb76b',
        darkmagenta: '#8b008b',
        darkolivegreen: '#556b2f',
        darkorange: '#ff8c00',
        darkorchid: '#9932cc',
        darkred: '#8b0000',
        darksalmon: '#e9967a',
        darkseagreen: '#8fbc8f',
        darkslateblue: '#483d8b',
        darkslategray: '#2f4f4f',
        darkslategrey: '#2f4f4f',
        darkturquoise: '#00ced1',
        darkviolet: '#9400d3',
        deeppink: '#ff1493',
        deepskyblue: '#00bfff',
        dimgray: '#696969',
        dimgrey: '#696969',
        dodgerblue: '#1e90ff',
        firebrick: '#b22222',
        floralwhite: '#fffaf0',
        forestgreen: '#228b22',
        fuchsia: '#ff00ff',
        gainsboro: '#dcdcdc',
        ghostwhite: '#f8f8ff',
        gold: '#ffd700',
        goldenrod: '#daa520',
        gray: '#808080',
        green: '#008000',
        greenyellow: '#adff2f',
        grey: '#808080',
        honeydew: '#f0fff0',
        hotpink: '#ff69b4',
        indianred: '#cd5c5c',
        indigo: '#4b0082',
        ivory: '#fffff0',
        khaki: '#f0e68c',
        laserlemon: '#ffff54',
        lavender: '#e6e6fa',
        lavenderblush: '#fff0f5',
        lawngreen: '#7cfc00',
        lemonchiffon: '#fffacd',
        lightblue: '#add8e6',
        lightcoral: '#f08080',
        lightcyan: '#e0ffff',
        lightgoldenrod: '#fafad2',
        lightgoldenrodyellow: '#fafad2',
        lightgray: '#d3d3d3',
        lightgreen: '#90ee90',
        lightgrey: '#d3d3d3',
        lightpink: '#ffb6c1',
        lightsalmon: '#ffa07a',
        lightseagreen: '#20b2aa',
        lightskyblue: '#87cefa',
        lightslategray: '#778899',
        lightslategrey: '#778899',
        lightsteelblue: '#b0c4de',
        lightyellow: '#ffffe0',
        lime: '#00ff00',
        limegreen: '#32cd32',
        linen: '#faf0e6',
        magenta: '#ff00ff',
        maroon: '#800000',
        maroon2: '#7f0000',
        maroon3: '#b03060',
        mediumaquamarine: '#66cdaa',
        mediumblue: '#0000cd',
        mediumorchid: '#ba55d3',
        mediumpurple: '#9370db',
        mediumseagreen: '#3cb371',
        mediumslateblue: '#7b68ee',
        mediumspringgreen: '#00fa9a',
        mediumturquoise: '#48d1cc',
        mediumvioletred: '#c71585',
        midnightblue: '#191970',
        mintcream: '#f5fffa',
        mistyrose: '#ffe4e1',
        moccasin: '#ffe4b5',
        navajowhite: '#ffdead',
        navy: '#000080',
        oldlace: '#fdf5e6',
        olive: '#808000',
        olivedrab: '#6b8e23',
        orange: '#ffa500',
        orangered: '#ff4500',
        orchid: '#da70d6',
        palegoldenrod: '#eee8aa',
        palegreen: '#98fb98',
        paleturquoise: '#afeeee',
        palevioletred: '#db7093',
        papayawhip: '#ffefd5',
        peachpuff: '#ffdab9',
        peru: '#cd853f',
        pink: '#ffc0cb',
        plum: '#dda0dd',
        powderblue: '#b0e0e6',
        purple: '#800080',
        purple2: '#7f007f',
        purple3: '#a020f0',
        rebeccapurple: '#663399',
        red: '#ff0000',
        rosybrown: '#bc8f8f',
        royalblue: '#4169e1',
        saddlebrown: '#8b4513',
        salmon: '#fa8072',
        sandybrown: '#f4a460',
        seagreen: '#2e8b57',
        seashell: '#fff5ee',
        sienna: '#a0522d',
        silver: '#c0c0c0',
        skyblue: '#87ceeb',
        slateblue: '#6a5acd',
        slategray: '#708090',
        slategrey: '#708090',
        snow: '#fffafa',
        springgreen: '#00ff7f',
        steelblue: '#4682b4',
        tan: '#d2b48c',
        teal: '#008080',
        thistle: '#d8bfd8',
        tomato: '#ff6347',
        turquoise: '#40e0d0',
        violet: '#ee82ee',
        wheat: '#f5deb3',
        white: '#ffffff',
        whitesmoke: '#f5f5f5',
        yellow: '#ffff00',
        yellowgreen: '#9acd32'
    };

    var w3cx11_1 = w3cx11;

    var RE_RGB = /^rgb\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*\)$/;
    var RE_RGBA = /^rgba\(\s*(-?\d+),\s*(-?\d+)\s*,\s*(-?\d+)\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_RGB_PCT = /^rgb\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_RGBA_PCT = /^rgba\(\s*(-?\d+(?:\.\d+)?)%,\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;
    var RE_HSL = /^hsl\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*\)$/;
    var RE_HSLA = /^hsla\(\s*(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)%\s*,\s*(-?\d+(?:\.\d+)?)%\s*,\s*([01]|[01]?\.\d+)\)$/;

    var round$2 = Math.round;

    var css2rgb = function (css) {
        css = css.toLowerCase().trim();
        // named X11 colors
        if (w3cx11_1[css]) {
            return hex2rgb_1(w3cx11_1[css]);
        }
        var m;

        // rgb(250,20,0)
        if ((m = css.match(RE_RGB))) {
            var rgb = m.slice(1,4);
            for (var i=0; i<3; i++) {
                rgb[i] = +rgb[i];
            }
            rgb[3] = 1;  // default alpha
            return rgb;
        }

        // rgba(250,20,0,0.4)
        if ((m = css.match(RE_RGBA))) {
            var rgb$1 = m.slice(1,5);
            for (var i$1=0; i$1<4; i$1++) {
                rgb$1[i$1] = +rgb$1[i$1];
            }
            return rgb$1;
        }

        // rgb(100%,0%,0%)
        if ((m = css.match(RE_RGB_PCT))) {
            var rgb$2 = m.slice(1,4);
            for (var i$2=0; i$2<3; i$2++) {
                rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
            }
            rgb$2[3] = 1;  // default alpha
            return rgb$2;
        }

        // rgba(100%,0%,0%,0.4)
        if ((m = css.match(RE_RGBA_PCT))) {
            var rgb$3 = m.slice(1,5);
            for (var i$3=0; i$3<3; i$3++) {
                rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
            }
            rgb$3[3] = +rgb$3[3];
            return rgb$3;
        }

        // hsl(0,100%,50%)
        if ((m = css.match(RE_HSL))) {
            var hsl = m.slice(1,4);
            hsl[1] *= 0.01;
            hsl[2] *= 0.01;
            var rgb$4 = hsl2rgb_1(hsl);
            rgb$4[3] = 1;
            return rgb$4;
        }

        // hsla(0,100%,50%,0.5)
        if ((m = css.match(RE_HSLA))) {
            var hsl$1 = m.slice(1,4);
            hsl$1[1] *= 0.01;
            hsl$1[2] *= 0.01;
            var rgb$5 = hsl2rgb_1(hsl$1);
            rgb$5[3] = +m[4];  // default alpha = 1
            return rgb$5;
        }
    };

    css2rgb.test = function (s) {
        return RE_RGB.test(s) ||
            RE_RGBA.test(s) ||
            RE_RGB_PCT.test(s) ||
            RE_RGBA_PCT.test(s) ||
            RE_HSL.test(s) ||
            RE_HSLA.test(s);
    };

    var css2rgb_1 = css2rgb;

    var type$3 = utils.type;




    Color_1.prototype.css = function(mode) {
        return rgb2css_1(this._rgb, mode);
    };

    chroma_1.css = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['css']) ));
    };

    input.format.css = css2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                return 'css';
            }
        }
    });

    var unpack$8 = utils.unpack;

    input.format.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$8(args, 'rgba');
        rgb[0] *= 255;
        rgb[1] *= 255;
        rgb[2] *= 255;
        return rgb;
    };

    chroma_1.gl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['gl']) ));
    };

    Color_1.prototype.gl = function() {
        var rgb = this._rgb;
        return [rgb[0]/255, rgb[1]/255, rgb[2]/255, rgb[3]];
    };

    var unpack$9 = utils.unpack;

    var rgb2hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$9(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var min = Math.min(r, g, b);
        var max = Math.max(r, g, b);
        var delta = max - min;
        var c = delta * 100 / 255;
        var _g = min / (255 - delta) * 100;
        var h;
        if (delta === 0) {
            h = Number.NaN;
        } else {
            if (r === max) { h = (g - b) / delta; }
            if (g === max) { h = 2+(b - r) / delta; }
            if (b === max) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, c, _g];
    };

    var rgb2hcg_1 = rgb2hcg;

    var unpack$a = utils.unpack;
    var floor = Math.floor;

    /*
     * this is basically just HSV with some minor tweaks
     *
     * hue.. [0..360]
     * chroma .. [0..1]
     * grayness .. [0..1]
     */

    var hcg2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$a(args, 'hcg');
        var h = args[0];
        var c = args[1];
        var _g = args[2];
        var r,g,b;
        _g = _g * 255;
        var _c = c * 255;
        if (c === 0) {
            r = g = b = _g;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;
            var i = floor(h);
            var f = h - i;
            var p = _g * (1 - c);
            var q = p + _c * (1 - f);
            var t = p + _c * f;
            var v = p + _c;
            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var hcg2rgb_1 = hcg2rgb;

    var unpack$b = utils.unpack;
    var type$4 = utils.type;






    Color_1.prototype.hcg = function() {
        return rgb2hcg_1(this._rgb);
    };

    chroma_1.hcg = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcg']) ));
    };

    input.format.hcg = hcg2rgb_1;

    input.autodetect.push({
        p: 1,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$b(args, 'hcg');
            if (type$4(args) === 'array' && args.length === 3) {
                return 'hcg';
            }
        }
    });

    var unpack$c = utils.unpack;
    var last$4 = utils.last;
    var round$3 = Math.round;

    var rgb2hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$c(args, 'rgba');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var a = ref[3];
        var mode = last$4(args) || 'auto';
        if (a === undefined) { a = 1; }
        if (mode === 'auto') {
            mode = a < 1 ? 'rgba' : 'rgb';
        }
        r = round$3(r);
        g = round$3(g);
        b = round$3(b);
        var u = r << 16 | g << 8 | b;
        var str = "000000" + u.toString(16); //#.toUpperCase();
        str = str.substr(str.length - 6);
        var hxa = '0' + round$3(a * 255).toString(16);
        hxa = hxa.substr(hxa.length - 2);
        switch (mode.toLowerCase()) {
            case 'rgba': return ("#" + str + hxa);
            case 'argb': return ("#" + hxa + str);
            default: return ("#" + str);
        }
    };

    var rgb2hex_1 = rgb2hex;

    var type$5 = utils.type;




    Color_1.prototype.hex = function(mode) {
        return rgb2hex_1(this._rgb, mode);
    };

    chroma_1.hex = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hex']) ));
    };

    input.format.hex = hex2rgb_1;
    input.autodetect.push({
        p: 4,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$5(h) === 'string' && [3,4,6,7,8,9].includes(h.length)) {
                return 'hex';
            }
        }
    });

    var unpack$d = utils.unpack;
    var TWOPI = utils.TWOPI;
    var min = Math.min;
    var sqrt = Math.sqrt;
    var acos = Math.acos;

    var rgb2hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/rgb2hsi.cpp
        */
        var ref = unpack$d(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        r /= 255;
        g /= 255;
        b /= 255;
        var h;
        var min_ = min(r,g,b);
        var i = (r+g+b) / 3;
        var s = i > 0 ? 1 - min_/i : 0;
        if (s === 0) {
            h = NaN;
        } else {
            h = ((r-g)+(r-b)) / 2;
            h /= sqrt((r-g)*(r-g) + (r-b)*(g-b));
            h = acos(h);
            if (b > g) {
                h = TWOPI - h;
            }
            h /= TWOPI;
        }
        return [h*360,s,i];
    };

    var rgb2hsi_1 = rgb2hsi;

    var unpack$e = utils.unpack;
    var limit$1 = utils.limit;
    var TWOPI$1 = utils.TWOPI;
    var PITHIRD = utils.PITHIRD;
    var cos = Math.cos;

    /*
     * hue [0..360]
     * saturation [0..1]
     * intensity [0..1]
     */
    var hsi2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        borrowed from here:
        http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
        */
        args = unpack$e(args, 'hsi');
        var h = args[0];
        var s = args[1];
        var i = args[2];
        var r,g,b;

        if (isNaN(h)) { h = 0; }
        if (isNaN(s)) { s = 0; }
        // normalize hue
        if (h > 360) { h -= 360; }
        if (h < 0) { h += 360; }
        h /= 360;
        if (h < 1/3) {
            b = (1-s)/3;
            r = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            g = 1 - (b+r);
        } else if (h < 2/3) {
            h -= 1/3;
            r = (1-s)/3;
            g = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            b = 1 - (r+g);
        } else {
            h -= 2/3;
            g = (1-s)/3;
            b = (1+s*cos(TWOPI$1*h)/cos(PITHIRD-TWOPI$1*h))/3;
            r = 1 - (g+b);
        }
        r = limit$1(i*r*3);
        g = limit$1(i*g*3);
        b = limit$1(i*b*3);
        return [r*255, g*255, b*255, args.length > 3 ? args[3] : 1];
    };

    var hsi2rgb_1 = hsi2rgb;

    var unpack$f = utils.unpack;
    var type$6 = utils.type;






    Color_1.prototype.hsi = function() {
        return rgb2hsi_1(this._rgb);
    };

    chroma_1.hsi = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsi']) ));
    };

    input.format.hsi = hsi2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$f(args, 'hsi');
            if (type$6(args) === 'array' && args.length === 3) {
                return 'hsi';
            }
        }
    });

    var unpack$g = utils.unpack;
    var type$7 = utils.type;






    Color_1.prototype.hsl = function() {
        return rgb2hsl_1(this._rgb);
    };

    chroma_1.hsl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsl']) ));
    };

    input.format.hsl = hsl2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$g(args, 'hsl');
            if (type$7(args) === 'array' && args.length === 3) {
                return 'hsl';
            }
        }
    });

    var unpack$h = utils.unpack;
    var min$1 = Math.min;
    var max$1 = Math.max;

    /*
     * supported arguments:
     * - rgb2hsv(r,g,b)
     * - rgb2hsv([r,g,b])
     * - rgb2hsv({r,g,b})
     */
    var rgb2hsl$1 = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$h(args, 'rgb');
        var r = args[0];
        var g = args[1];
        var b = args[2];
        var min_ = min$1(r, g, b);
        var max_ = max$1(r, g, b);
        var delta = max_ - min_;
        var h,s,v;
        v = max_ / 255.0;
        if (max_ === 0) {
            h = Number.NaN;
            s = 0;
        } else {
            s = delta / max_;
            if (r === max_) { h = (g - b) / delta; }
            if (g === max_) { h = 2+(b - r) / delta; }
            if (b === max_) { h = 4+(r - g) / delta; }
            h *= 60;
            if (h < 0) { h += 360; }
        }
        return [h, s, v]
    };

    var rgb2hsv = rgb2hsl$1;

    var unpack$i = utils.unpack;
    var floor$1 = Math.floor;

    var hsv2rgb = function () {
        var assign, assign$1, assign$2, assign$3, assign$4, assign$5;

        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];
        args = unpack$i(args, 'hsv');
        var h = args[0];
        var s = args[1];
        var v = args[2];
        var r,g,b;
        v *= 255;
        if (s === 0) {
            r = g = b = v;
        } else {
            if (h === 360) { h = 0; }
            if (h > 360) { h -= 360; }
            if (h < 0) { h += 360; }
            h /= 60;

            var i = floor$1(h);
            var f = h - i;
            var p = v * (1 - s);
            var q = v * (1 - s * f);
            var t = v * (1 - s * (1 - f));

            switch (i) {
                case 0: (assign = [v, t, p], r = assign[0], g = assign[1], b = assign[2]); break
                case 1: (assign$1 = [q, v, p], r = assign$1[0], g = assign$1[1], b = assign$1[2]); break
                case 2: (assign$2 = [p, v, t], r = assign$2[0], g = assign$2[1], b = assign$2[2]); break
                case 3: (assign$3 = [p, q, v], r = assign$3[0], g = assign$3[1], b = assign$3[2]); break
                case 4: (assign$4 = [t, p, v], r = assign$4[0], g = assign$4[1], b = assign$4[2]); break
                case 5: (assign$5 = [v, p, q], r = assign$5[0], g = assign$5[1], b = assign$5[2]); break
            }
        }
        return [r,g,b,args.length > 3?args[3]:1];
    };

    var hsv2rgb_1 = hsv2rgb;

    var unpack$j = utils.unpack;
    var type$8 = utils.type;






    Color_1.prototype.hsv = function() {
        return rgb2hsv(this._rgb);
    };

    chroma_1.hsv = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hsv']) ));
    };

    input.format.hsv = hsv2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$j(args, 'hsv');
            if (type$8(args) === 'array' && args.length === 3) {
                return 'hsv';
            }
        }
    });

    var labConstants = {
        // Corresponds roughly to RGB brighter/darker
        Kn: 18,

        // D65 standard referent
        Xn: 0.950470,
        Yn: 1,
        Zn: 1.088830,

        t0: 0.137931034,  // 4 / 29
        t1: 0.206896552,  // 6 / 29
        t2: 0.12841855,   // 3 * t1 * t1
        t3: 0.008856452,  // t1 * t1 * t1
    };

    var unpack$k = utils.unpack;
    var pow = Math.pow;

    var rgb2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$k(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2xyz(r,g,b);
        var x = ref$1[0];
        var y = ref$1[1];
        var z = ref$1[2];
        var l = 116 * y - 16;
        return [l < 0 ? 0 : l, 500 * (x - y), 200 * (y - z)];
    };

    var rgb_xyz = function (r) {
        if ((r /= 255) <= 0.04045) { return r / 12.92; }
        return pow((r + 0.055) / 1.055, 2.4);
    };

    var xyz_lab = function (t) {
        if (t > labConstants.t3) { return pow(t, 1 / 3); }
        return t / labConstants.t2 + labConstants.t0;
    };

    var rgb2xyz = function (r,g,b) {
        r = rgb_xyz(r);
        g = rgb_xyz(g);
        b = rgb_xyz(b);
        var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
        var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
        var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
        return [x,y,z];
    };

    var rgb2lab_1 = rgb2lab;

    var unpack$l = utils.unpack;
    var pow$1 = Math.pow;

    /*
     * L* [0..100]
     * a [-100..100]
     * b [-100..100]
     */
    var lab2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$l(args, 'lab');
        var l = args[0];
        var a = args[1];
        var b = args[2];
        var x,y,z, r,g,b_;

        y = (l + 16) / 116;
        x = isNaN(a) ? y : y + a / 500;
        z = isNaN(b) ? y : y - b / 200;

        y = labConstants.Yn * lab_xyz(y);
        x = labConstants.Xn * lab_xyz(x);
        z = labConstants.Zn * lab_xyz(z);

        r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
        g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
        b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

        return [r,g,b_,args.length > 3 ? args[3] : 1];
    };

    var xyz_rgb = function (r) {
        return 255 * (r <= 0.00304 ? 12.92 * r : 1.055 * pow$1(r, 1 / 2.4) - 0.055)
    };

    var lab_xyz = function (t) {
        return t > labConstants.t1 ? t * t * t : labConstants.t2 * (t - labConstants.t0)
    };

    var lab2rgb_1 = lab2rgb;

    var unpack$m = utils.unpack;
    var type$9 = utils.type;






    Color_1.prototype.lab = function() {
        return rgb2lab_1(this._rgb);
    };

    chroma_1.lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lab']) ));
    };

    input.format.lab = lab2rgb_1;

    input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$m(args, 'lab');
            if (type$9(args) === 'array' && args.length === 3) {
                return 'lab';
            }
        }
    });

    var unpack$n = utils.unpack;
    var RAD2DEG = utils.RAD2DEG;
    var sqrt$1 = Math.sqrt;
    var atan2 = Math.atan2;
    var round$4 = Math.round;

    var lab2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$n(args, 'lab');
        var l = ref[0];
        var a = ref[1];
        var b = ref[2];
        var c = sqrt$1(a * a + b * b);
        var h = (atan2(b, a) * RAD2DEG + 360) % 360;
        if (round$4(c*10000) === 0) { h = Number.NaN; }
        return [l, c, h];
    };

    var lab2lch_1 = lab2lch;

    var unpack$o = utils.unpack;



    var rgb2lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$o(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        var ref$1 = rgb2lab_1(r,g,b);
        var l = ref$1[0];
        var a = ref$1[1];
        var b_ = ref$1[2];
        return lab2lch_1(l,a,b_);
    };

    var rgb2lch_1 = rgb2lch;

    var unpack$p = utils.unpack;
    var DEG2RAD = utils.DEG2RAD;
    var sin = Math.sin;
    var cos$1 = Math.cos;

    var lch2lab = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        /*
        Convert from a qualitative parameter h and a quantitative parameter l to a 24-bit pixel.
        These formulas were invented by David Dalrymple to obtain maximum contrast without going
        out of gamut if the parameters are in the range 0-1.

        A saturation multiplier was added by Gregor Aisch
        */
        var ref = unpack$p(args, 'lch');
        var l = ref[0];
        var c = ref[1];
        var h = ref[2];
        if (isNaN(h)) { h = 0; }
        h = h * DEG2RAD;
        return [l, cos$1(h) * c, sin(h) * c]
    };

    var lch2lab_1 = lch2lab;

    var unpack$q = utils.unpack;



    var lch2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        args = unpack$q(args, 'lch');
        var l = args[0];
        var c = args[1];
        var h = args[2];
        var ref = lch2lab_1 (l,c,h);
        var L = ref[0];
        var a = ref[1];
        var b_ = ref[2];
        var ref$1 = lab2rgb_1 (L,a,b_);
        var r = ref$1[0];
        var g = ref$1[1];
        var b = ref$1[2];
        return [r, g, b, args.length > 3 ? args[3] : 1];
    };

    var lch2rgb_1 = lch2rgb;

    var unpack$r = utils.unpack;


    var hcl2rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var hcl = unpack$r(args, 'hcl').reverse();
        return lch2rgb_1.apply(void 0, hcl);
    };

    var hcl2rgb_1 = hcl2rgb;

    var unpack$s = utils.unpack;
    var type$a = utils.type;






    Color_1.prototype.lch = function() { return rgb2lch_1(this._rgb); };
    Color_1.prototype.hcl = function() { return rgb2lch_1(this._rgb).reverse(); };

    chroma_1.lch = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['lch']) ));
    };
    chroma_1.hcl = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['hcl']) ));
    };

    input.format.lch = lch2rgb_1;
    input.format.hcl = hcl2rgb_1;

    ['lch','hcl'].forEach(function (m) { return input.autodetect.push({
        p: 2,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$s(args, m);
            if (type$a(args) === 'array' && args.length === 3) {
                return m;
            }
        }
    }); });

    var type$b = utils.type;





    Color_1.prototype.name = function() {
        var hex = rgb2hex_1(this._rgb, 'rgb');
        for (var i = 0, list = Object.keys(w3cx11_1); i < list.length; i += 1) {
            var n = list[i];

            if (w3cx11_1[n] === hex) { return n.toLowerCase(); }
        }
        return hex;
    };

    input.format.named = function (name) {
        name = name.toLowerCase();
        if (w3cx11_1[name]) { return hex2rgb_1(w3cx11_1[name]); }
        throw new Error('unknown color name: '+name);
    };

    input.autodetect.push({
        p: 5,
        test: function (h) {
            var rest = [], len = arguments.length - 1;
            while ( len-- > 0 ) rest[ len ] = arguments[ len + 1 ];

            if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                return 'named';
            }
        }
    });

    var unpack$t = utils.unpack;

    var rgb2num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var ref = unpack$t(args, 'rgb');
        var r = ref[0];
        var g = ref[1];
        var b = ref[2];
        return (r << 16) + (g << 8) + b;
    };

    var rgb2num_1 = rgb2num;

    var type$c = utils.type;

    var num2rgb = function (num) {
        if (type$c(num) == "number" && num >= 0 && num <= 0xFFFFFF) {
            var r = num >> 16;
            var g = (num >> 8) & 0xFF;
            var b = num & 0xFF;
            return [r,g,b,1];
        }
        throw new Error("unknown num color: "+num);
    };

    var num2rgb_1 = num2rgb;

    var type$d = utils.type;



    Color_1.prototype.num = function() {
        return rgb2num_1(this._rgb);
    };

    chroma_1.num = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['num']) ));
    };

    input.format.num = num2rgb_1;

    input.autodetect.push({
        p: 5,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                return 'num';
            }
        }
    });

    var unpack$u = utils.unpack;
    var type$e = utils.type;
    var round$5 = Math.round;

    Color_1.prototype.rgb = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        if (rnd === false) { return this._rgb.slice(0,3); }
        return this._rgb.slice(0,3).map(round$5);
    };

    Color_1.prototype.rgba = function(rnd) {
        if ( rnd === void 0 ) rnd=true;

        return this._rgb.slice(0,4).map(function (v,i) {
            return i<3 ? (rnd === false ? v : round$5(v)) : v;
        });
    };

    chroma_1.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['rgb']) ));
    };

    input.format.rgb = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgba = unpack$u(args, 'rgba');
        if (rgba[3] === undefined) { rgba[3] = 1; }
        return rgba;
    };

    input.autodetect.push({
        p: 3,
        test: function () {
            var args = [], len = arguments.length;
            while ( len-- ) args[ len ] = arguments[ len ];

            args = unpack$u(args, 'rgba');
            if (type$e(args) === 'array' && (args.length === 3 ||
                args.length === 4 && type$e(args[3]) == 'number' && args[3] >= 0 && args[3] <= 1)) {
                return 'rgb';
            }
        }
    });

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     */

    var log = Math.log;

    var temperature2rgb = function (kelvin) {
        var temp = kelvin / 100;
        var r,g,b;
        if (temp < 66) {
            r = 255;
            g = -155.25485562709179 - 0.44596950469579133 * (g = temp-2) + 104.49216199393888 * log(g);
            b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp-10) + 115.67994401066147 * log(b);
        } else {
            r = 351.97690566805693 + 0.114206453784165 * (r = temp-55) - 40.25366309332127 * log(r);
            g = 325.4494125711974 + 0.07943456536662342 * (g = temp-50) - 28.0852963507957 * log(g);
            b = 255;
        }
        return [r,g,b,1];
    };

    var temperature2rgb_1 = temperature2rgb;

    /*
     * Based on implementation by Neil Bartlett
     * https://github.com/neilbartlett/color-temperature
     **/


    var unpack$v = utils.unpack;
    var round$6 = Math.round;

    var rgb2temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        var rgb = unpack$v(args, 'rgb');
        var r = rgb[0], b = rgb[2];
        var minTemp = 1000;
        var maxTemp = 40000;
        var eps = 0.4;
        var temp;
        while (maxTemp - minTemp > eps) {
            temp = (maxTemp + minTemp) * 0.5;
            var rgb$1 = temperature2rgb_1(temp);
            if ((rgb$1[2] / rgb$1[0]) >= (b / r)) {
                maxTemp = temp;
            } else {
                minTemp = temp;
            }
        }
        return round$6(temp);
    };

    var rgb2temperature_1 = rgb2temperature;

    Color_1.prototype.temp =
    Color_1.prototype.kelvin =
    Color_1.prototype.temperature = function() {
        return rgb2temperature_1(this._rgb);
    };

    chroma_1.temp =
    chroma_1.kelvin =
    chroma_1.temperature = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return new (Function.prototype.bind.apply( Color_1, [ null ].concat( args, ['temp']) ));
    };

    input.format.temp =
    input.format.kelvin =
    input.format.temperature = temperature2rgb_1;

    var type$f = utils.type;

    Color_1.prototype.alpha = function(a, mutate) {
        if ( mutate === void 0 ) mutate=false;

        if (a !== undefined && type$f(a) === 'number') {
            if (mutate) {
                this._rgb[3] = a;
                return this;
            }
            return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
        }
        return this._rgb[3];
    };

    Color_1.prototype.clipped = function() {
        return this._rgb._clipped || false;
    };

    Color_1.prototype.darken = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lab = me.lab();
    	lab[0] -= labConstants.Kn * amount;
    	return new Color_1(lab, 'lab').alpha(me.alpha(), true);
    };

    Color_1.prototype.brighten = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.darken(-amount);
    };

    Color_1.prototype.darker = Color_1.prototype.darken;
    Color_1.prototype.brighter = Color_1.prototype.brighten;

    Color_1.prototype.get = function(mc) {
        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) { return src[i]; }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var type$g = utils.type;
    var pow$2 = Math.pow;

    var EPS = 1e-7;
    var MAX_ITER = 20;

    Color_1.prototype.luminance = function(lum) {
        if (lum !== undefined && type$g(lum) === 'number') {
            if (lum === 0) {
                // return pure black
                return new Color_1([0,0,0,this._rgb[3]], 'rgb');
            }
            if (lum === 1) {
                // return pure white
                return new Color_1([255,255,255,this._rgb[3]], 'rgb');
            }
            // compute new color using...
            var cur_lum = this.luminance();
            var mode = 'rgb';
            var max_iter = MAX_ITER;

            var test = function (low, high) {
                var mid = low.interpolate(high, 0.5, mode);
                var lm = mid.luminance();
                if (Math.abs(lum - lm) < EPS || !max_iter--) {
                    // close enough
                    return mid;
                }
                return lm > lum ? test(low, mid) : test(mid, high);
            };

            var rgb = (cur_lum > lum ? test(new Color_1([0,0,0]), this) : test(this, new Color_1([255,255,255]))).rgb();
            return new Color_1(rgb.concat( [this._rgb[3]]));
        }
        return rgb2luminance.apply(void 0, (this._rgb).slice(0,3));
    };


    var rgb2luminance = function (r,g,b) {
        // relative luminance
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
        r = luminance_x(r);
        g = luminance_x(g);
        b = luminance_x(b);
        return 0.2126 * r + 0.7152 * g + 0.0722 * b;
    };

    var luminance_x = function (x) {
        x /= 255;
        return x <= 0.03928 ? x/12.92 : pow$2((x+0.055)/1.055, 2.4);
    };

    var interpolator = {};

    var type$h = utils.type;


    var mix = function (col1, col2, f) {
        if ( f === void 0 ) f=0.5;
        var rest = [], len = arguments.length - 3;
        while ( len-- > 0 ) rest[ len ] = arguments[ len + 3 ];

        var mode = rest[0] || 'lrgb';
        if (!interpolator[mode] && !rest.length) {
            // fall back to the first supported mode
            mode = Object.keys(interpolator)[0];
        }
        if (!interpolator[mode]) {
            throw new Error(("interpolation mode " + mode + " is not defined"));
        }
        if (type$h(col1) !== 'object') { col1 = new Color_1(col1); }
        if (type$h(col2) !== 'object') { col2 = new Color_1(col2); }
        return interpolator[mode](col1, col2, f)
            .alpha(col1.alpha() + f * (col2.alpha() - col1.alpha()));
    };

    Color_1.prototype.mix =
    Color_1.prototype.interpolate = function(col2, f) {
    	if ( f === void 0 ) f=0.5;
    	var rest = [], len = arguments.length - 2;
    	while ( len-- > 0 ) rest[ len ] = arguments[ len + 2 ];

    	return mix.apply(void 0, [ this, col2, f ].concat( rest ));
    };

    Color_1.prototype.premultiply = function(mutate) {
    	if ( mutate === void 0 ) mutate=false;

    	var rgb = this._rgb;
    	var a = rgb[3];
    	if (mutate) {
    		this._rgb = [rgb[0]*a, rgb[1]*a, rgb[2]*a, a];
    		return this;
    	} else {
    		return new Color_1([rgb[0]*a, rgb[1]*a, rgb[2]*a, a], 'rgb');
    	}
    };

    Color_1.prototype.saturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	var me = this;
    	var lch = me.lch();
    	lch[1] += labConstants.Kn * amount;
    	if (lch[1] < 0) { lch[1] = 0; }
    	return new Color_1(lch, 'lch').alpha(me.alpha(), true);
    };

    Color_1.prototype.desaturate = function(amount) {
    	if ( amount === void 0 ) amount=1;

    	return this.saturate(-amount);
    };

    var type$i = utils.type;

    Color_1.prototype.set = function(mc, value, mutate) {
        if ( mutate === void 0 ) mutate=false;

        var ref = mc.split('.');
        var mode = ref[0];
        var channel = ref[1];
        var src = this[mode]();
        if (channel) {
            var i = mode.indexOf(channel);
            if (i > -1) {
                if (type$i(value) == 'string') {
                    switch(value.charAt(0)) {
                        case '+': src[i] += +value; break;
                        case '-': src[i] += +value; break;
                        case '*': src[i] *= +(value.substr(1)); break;
                        case '/': src[i] /= +(value.substr(1)); break;
                        default: src[i] = +value;
                    }
                } else if (type$i(value) === 'number') {
                    src[i] = value;
                } else {
                    throw new Error("unsupported value for Color.set");
                }
                var out = new Color_1(src, mode);
                if (mutate) {
                    this._rgb = out._rgb;
                    return this;
                }
                return out;
            }
            throw new Error(("unknown channel " + channel + " in mode " + mode));
        } else {
            return src;
        }
    };

    var rgb$1 = function (col1, col2, f) {
        var xyz0 = col1._rgb;
        var xyz1 = col2._rgb;
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'rgb'
        )
    };

    // register interpolator
    interpolator.rgb = rgb$1;

    var sqrt$2 = Math.sqrt;
    var pow$3 = Math.pow;

    var lrgb = function (col1, col2, f) {
        var ref = col1._rgb;
        var x1 = ref[0];
        var y1 = ref[1];
        var z1 = ref[2];
        var ref$1 = col2._rgb;
        var x2 = ref$1[0];
        var y2 = ref$1[1];
        var z2 = ref$1[2];
        return new Color_1(
            sqrt$2(pow$3(x1,2) * (1-f) + pow$3(x2,2) * f),
            sqrt$2(pow$3(y1,2) * (1-f) + pow$3(y2,2) * f),
            sqrt$2(pow$3(z1,2) * (1-f) + pow$3(z2,2) * f),
            'rgb'
        )
    };

    // register interpolator
    interpolator.lrgb = lrgb;

    var lab$1 = function (col1, col2, f) {
        var xyz0 = col1.lab();
        var xyz1 = col2.lab();
        return new Color_1(
            xyz0[0] + f * (xyz1[0]-xyz0[0]),
            xyz0[1] + f * (xyz1[1]-xyz0[1]),
            xyz0[2] + f * (xyz1[2]-xyz0[2]),
            'lab'
        )
    };

    // register interpolator
    interpolator.lab = lab$1;

    var _hsx = function (col1, col2, f, m) {
        var assign, assign$1;

        var xyz0, xyz1;
        if (m === 'hsl') {
            xyz0 = col1.hsl();
            xyz1 = col2.hsl();
        } else if (m === 'hsv') {
            xyz0 = col1.hsv();
            xyz1 = col2.hsv();
        } else if (m === 'hcg') {
            xyz0 = col1.hcg();
            xyz1 = col2.hcg();
        } else if (m === 'hsi') {
            xyz0 = col1.hsi();
            xyz1 = col2.hsi();
        } else if (m === 'lch' || m === 'hcl') {
            m = 'hcl';
            xyz0 = col1.hcl();
            xyz1 = col2.hcl();
        }

        var hue0, hue1, sat0, sat1, lbv0, lbv1;
        if (m.substr(0, 1) === 'h') {
            (assign = xyz0, hue0 = assign[0], sat0 = assign[1], lbv0 = assign[2]);
            (assign$1 = xyz1, hue1 = assign$1[0], sat1 = assign$1[1], lbv1 = assign$1[2]);
        }

        var sat, hue, lbv, dh;

        if (!isNaN(hue0) && !isNaN(hue1)) {
            // both colors have hue
            if (hue1 > hue0 && hue1 - hue0 > 180) {
                dh = hue1-(hue0+360);
            } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                dh = hue1+360-hue0;
            } else{
                dh = hue1 - hue0;
            }
            hue = hue0 + f * dh;
        } else if (!isNaN(hue0)) {
            hue = hue0;
            if ((lbv1 == 1 || lbv1 == 0) && m != 'hsv') { sat = sat0; }
        } else if (!isNaN(hue1)) {
            hue = hue1;
            if ((lbv0 == 1 || lbv0 == 0) && m != 'hsv') { sat = sat1; }
        } else {
            hue = Number.NaN;
        }

        if (sat === undefined) { sat = sat0 + f * (sat1 - sat0); }
        lbv = lbv0 + f * (lbv1-lbv0);
        return new Color_1([hue, sat, lbv], m);
    };

    var lch$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'lch');
    };

    // register interpolator
    interpolator.lch = lch$1;
    interpolator.hcl = lch$1;

    var num$1 = function (col1, col2, f) {
        var c1 = col1.num();
        var c2 = col2.num();
        return new Color_1(c1 + f * (c2-c1), 'num')
    };

    // register interpolator
    interpolator.num = num$1;

    var hcg$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hcg');
    };

    // register interpolator
    interpolator.hcg = hcg$1;

    var hsi$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsi');
    };

    // register interpolator
    interpolator.hsi = hsi$1;

    var hsl$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsl');
    };

    // register interpolator
    interpolator.hsl = hsl$1;

    var hsv$1 = function (col1, col2, f) {
    	return _hsx(col1, col2, f, 'hsv');
    };

    // register interpolator
    interpolator.hsv = hsv$1;

    var clip_rgb$2 = utils.clip_rgb;
    var pow$4 = Math.pow;
    var sqrt$3 = Math.sqrt;
    var PI$1 = Math.PI;
    var cos$2 = Math.cos;
    var sin$1 = Math.sin;
    var atan2$1 = Math.atan2;

    var average = function (colors, mode) {
        if ( mode === void 0 ) mode='lrgb';

        var l = colors.length;
        // convert colors to Color objects
        colors = colors.map(function (c) { return new Color_1(c); });
        if (mode === 'lrgb') {
            return _average_lrgb(colors)
        }
        var first = colors.shift();
        var xyz = first.get(mode);
        var cnt = [];
        var dx = 0;
        var dy = 0;
        // initial color
        for (var i=0; i<xyz.length; i++) {
            xyz[i] = xyz[i] || 0;
            cnt.push(isNaN(xyz[i]) ? 0 : 1);
            if (mode.charAt(i) === 'h' && !isNaN(xyz[i])) {
                var A = xyz[i] / 180 * PI$1;
                dx += cos$2(A);
                dy += sin$1(A);
            }
        }

        var alpha = first.alpha();
        colors.forEach(function (c) {
            var xyz2 = c.get(mode);
            alpha += c.alpha();
            for (var i=0; i<xyz.length; i++) {
                if (!isNaN(xyz2[i])) {
                    cnt[i]++;
                    if (mode.charAt(i) === 'h') {
                        var A = xyz2[i] / 180 * PI$1;
                        dx += cos$2(A);
                        dy += sin$1(A);
                    } else {
                        xyz[i] += xyz2[i];
                    }
                }
            }
        });

        for (var i$1=0; i$1<xyz.length; i$1++) {
            if (mode.charAt(i$1) === 'h') {
                var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                while (A$1 < 0) { A$1 += 360; }
                while (A$1 >= 360) { A$1 -= 360; }
                xyz[i$1] = A$1;
            } else {
                xyz[i$1] = xyz[i$1]/cnt[i$1];
            }
        }
        alpha /= l;
        return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
    };


    var _average_lrgb = function (colors) {
        var l = colors.length;
        var f = 1/l;
        var xyz = [0,0,0,0];
        for (var i = 0, list = colors; i < list.length; i += 1) {
            var col = list[i];

            var rgb = col._rgb;
            xyz[0] += pow$4(rgb[0],2) * f;
            xyz[1] += pow$4(rgb[1],2) * f;
            xyz[2] += pow$4(rgb[2],2) * f;
            xyz[3] += rgb[3] * f;
        }
        xyz[0] = sqrt$3(xyz[0]);
        xyz[1] = sqrt$3(xyz[1]);
        xyz[2] = sqrt$3(xyz[2]);
        if (xyz[3] > 0.9999999) { xyz[3] = 1; }
        return new Color_1(clip_rgb$2(xyz));
    };

    // minimal multi-purpose interface

    // @requires utils color analyze


    var type$j = utils.type;

    var pow$5 = Math.pow;

    var scale = function(colors) {

        // constructor
        var _mode = 'rgb';
        var _nacol = chroma_1('#ccc');
        var _spread = 0;
        // const _fixed = false;
        var _domain = [0, 1];
        var _pos = [];
        var _padding = [0,0];
        var _classes = false;
        var _colors = [];
        var _out = false;
        var _min = 0;
        var _max = 1;
        var _correctLightness = false;
        var _colorCache = {};
        var _useCache = true;
        var _gamma = 1;

        // private methods

        var setColors = function(colors) {
            colors = colors || ['#fff', '#000'];
            if (colors && type$j(colors) === 'string' && chroma_1.brewer &&
                chroma_1.brewer[colors.toLowerCase()]) {
                colors = chroma_1.brewer[colors.toLowerCase()];
            }
            if (type$j(colors) === 'array') {
                // handle single color
                if (colors.length === 1) {
                    colors = [colors[0], colors[0]];
                }
                // make a copy of the colors
                colors = colors.slice(0);
                // convert to chroma classes
                for (var c=0; c<colors.length; c++) {
                    colors[c] = chroma_1(colors[c]);
                }
                // auto-fill color position
                _pos.length = 0;
                for (var c$1=0; c$1<colors.length; c$1++) {
                    _pos.push(c$1/(colors.length-1));
                }
            }
            resetCache();
            return _colors = colors;
        };

        var getClass = function(value) {
            if (_classes != null) {
                var n = _classes.length-1;
                var i = 0;
                while (i < n && value >= _classes[i]) {
                    i++;
                }
                return i-1;
            }
            return 0;
        };

        var tmap = function (t) { return t; };

        // const classifyValue = function(value) {
        //     let val = value;
        //     if (_classes.length > 2) {
        //         const n = _classes.length-1;
        //         const i = getClass(value);
        //         const minc = _classes[0] + ((_classes[1]-_classes[0]) * (0 + (_spread * 0.5)));  // center of 1st class
        //         const maxc = _classes[n-1] + ((_classes[n]-_classes[n-1]) * (1 - (_spread * 0.5)));  // center of last class
        //         val = _min + ((((_classes[i] + ((_classes[i+1] - _classes[i]) * 0.5)) - minc) / (maxc-minc)) * (_max - _min));
        //     }
        //     return val;
        // };

        var getColor = function(val, bypassMap) {
            var col, t;
            if (bypassMap == null) { bypassMap = false; }
            if (isNaN(val) || (val === null)) { return _nacol; }
            if (!bypassMap) {
                if (_classes && (_classes.length > 2)) {
                    // find the class
                    var c = getClass(val);
                    t = c / (_classes.length-2);
                } else if (_max !== _min) {
                    // just interpolate between min/max
                    t = (val - _min) / (_max - _min);
                } else {
                    t = 1;
                }
            } else {
                t = val;
            }

            if (!bypassMap) {
                t = tmap(t);  // lightness correction
            }

            if (_gamma !== 1) { t = pow$5(t, _gamma); }

            t = _padding[0] + (t * (1 - _padding[0] - _padding[1]));

            t = Math.min(1, Math.max(0, t));

            var k = Math.floor(t * 10000);

            if (_useCache && _colorCache[k]) {
                col = _colorCache[k];
            } else {
                if (type$j(_colors) === 'array') {
                    //for i in [0.._pos.length-1]
                    for (var i=0; i<_pos.length; i++) {
                        var p = _pos[i];
                        if (t <= p) {
                            col = _colors[i];
                            break;
                        }
                        if ((t >= p) && (i === (_pos.length-1))) {
                            col = _colors[i];
                            break;
                        }
                        if (t > p && t < _pos[i+1]) {
                            t = (t-p)/(_pos[i+1]-p);
                            col = chroma_1.interpolate(_colors[i], _colors[i+1], t, _mode);
                            break;
                        }
                    }
                } else if (type$j(_colors) === 'function') {
                    col = _colors(t);
                }
                if (_useCache) { _colorCache[k] = col; }
            }
            return col;
        };

        var resetCache = function () { return _colorCache = {}; };

        setColors(colors);

        // public interface

        var f = function(v) {
            var c = chroma_1(getColor(v));
            if (_out && c[_out]) { return c[_out](); } else { return c; }
        };

        f.classes = function(classes) {
            if (classes != null) {
                if (type$j(classes) === 'array') {
                    _classes = classes;
                    _domain = [classes[0], classes[classes.length-1]];
                } else {
                    var d = chroma_1.analyze(_domain);
                    if (classes === 0) {
                        _classes = [d.min, d.max];
                    } else {
                        _classes = chroma_1.limits(d, 'e', classes);
                    }
                }
                return f;
            }
            return _classes;
        };


        f.domain = function(domain) {
            if (!arguments.length) {
                return _domain;
            }
            _min = domain[0];
            _max = domain[domain.length-1];
            _pos = [];
            var k = _colors.length;
            if ((domain.length === k) && (_min !== _max)) {
                // update positions
                for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                    var d = list[i];

                  _pos.push((d-_min) / (_max-_min));
                }
            } else {
                for (var c=0; c<k; c++) {
                    _pos.push(c/(k-1));
                }
            }
            _domain = [_min, _max];
            return f;
        };

        f.mode = function(_m) {
            if (!arguments.length) {
                return _mode;
            }
            _mode = _m;
            resetCache();
            return f;
        };

        f.range = function(colors, _pos) {
            setColors(colors, _pos);
            return f;
        };

        f.out = function(_o) {
            _out = _o;
            return f;
        };

        f.spread = function(val) {
            if (!arguments.length) {
                return _spread;
            }
            _spread = val;
            return f;
        };

        f.correctLightness = function(v) {
            if (v == null) { v = true; }
            _correctLightness = v;
            resetCache();
            if (_correctLightness) {
                tmap = function(t) {
                    var L0 = getColor(0, true).lab()[0];
                    var L1 = getColor(1, true).lab()[0];
                    var pol = L0 > L1;
                    var L_actual = getColor(t, true).lab()[0];
                    var L_ideal = L0 + ((L1 - L0) * t);
                    var L_diff = L_actual - L_ideal;
                    var t0 = 0;
                    var t1 = 1;
                    var max_iter = 20;
                    while ((Math.abs(L_diff) > 1e-2) && (max_iter-- > 0)) {
                        (function() {
                            if (pol) { L_diff *= -1; }
                            if (L_diff < 0) {
                                t0 = t;
                                t += (t1 - t) * 0.5;
                            } else {
                                t1 = t;
                                t += (t0 - t) * 0.5;
                            }
                            L_actual = getColor(t, true).lab()[0];
                            return L_diff = L_actual - L_ideal;
                        })();
                    }
                    return t;
                };
            } else {
                tmap = function (t) { return t; };
            }
            return f;
        };

        f.padding = function(p) {
            if (p != null) {
                if (type$j(p) === 'number') {
                    p = [p,p];
                }
                _padding = p;
                return f;
            } else {
                return _padding;
            }
        };

        f.colors = function(numColors, out) {
            // If no arguments are given, return the original colors that were provided
            if (arguments.length < 2) { out = 'hex'; }
            var result = [];

            if (arguments.length === 0) {
                result = _colors.slice(0);

            } else if (numColors === 1) {
                result = [f(0.5)];

            } else if (numColors > 1) {
                var dm = _domain[0];
                var dd = _domain[1] - dm;
                result = __range__(0, numColors, false).map(function (i) { return f( dm + ((i/(numColors-1)) * dd) ); });

            } else { // returns all colors based on the defined classes
                colors = [];
                var samples = [];
                if (_classes && (_classes.length > 2)) {
                    for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                        samples.push((_classes[i-1]+_classes[i])*0.5);
                    }
                } else {
                    samples = _domain;
                }
                result = samples.map(function (v) { return f(v); });
            }

            if (chroma_1[out]) {
                result = result.map(function (c) { return c[out](); });
            }
            return result;
        };

        f.cache = function(c) {
            if (c != null) {
                _useCache = c;
                return f;
            } else {
                return _useCache;
            }
        };

        f.gamma = function(g) {
            if (g != null) {
                _gamma = g;
                return f;
            } else {
                return _gamma;
            }
        };

        f.nodata = function(d) {
            if (d != null) {
                _nacol = chroma_1(d);
                return f;
            } else {
                return _nacol;
            }
        };

        return f;
    };

    function __range__(left, right, inclusive) {
      var range = [];
      var ascending = left < right;
      var end = !inclusive ? right : ascending ? right + 1 : right - 1;
      for (var i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
        range.push(i);
      }
      return range;
    }

    //
    // interpolates between a set of colors uzing a bezier spline
    //

    // @requires utils lab




    var bezier = function(colors) {
        var assign, assign$1, assign$2;

        var I, lab0, lab1, lab2;
        colors = colors.map(function (c) { return new Color_1(c); });
        if (colors.length === 2) {
            // linear interpolation
            (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 3) {
            // quadratic bezier interpolation
            (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t) * lab0[i]) + (2 * (1-t) * t * lab1[i]) + (t * t * lab2[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 4) {
            // cubic bezier interpolation
            var lab3;
            (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
            I = function(t) {
                var lab = ([0, 1, 2].map(function (i) { return ((1-t)*(1-t)*(1-t) * lab0[i]) + (3 * (1-t) * (1-t) * t * lab1[i]) + (3 * (1-t) * t * t * lab2[i]) + (t*t*t * lab3[i]); }));
                return new Color_1(lab, 'lab');
            };
        } else if (colors.length === 5) {
            var I0 = bezier(colors.slice(0, 3));
            var I1 = bezier(colors.slice(2, 5));
            I = function(t) {
                if (t < 0.5) {
                    return I0(t*2);
                } else {
                    return I1((t-0.5)*2);
                }
            };
        }
        return I;
    };

    var bezier_1 = function (colors) {
        var f = bezier(colors);
        f.scale = function () { return scale(f); };
        return f;
    };

    /*
     * interpolates between a set of colors uzing a bezier spline
     * blend mode formulas taken from http://www.venture-ware.com/kevin/coding/lets-learn-math-photoshop-blend-modes/
     */




    var blend = function (bottom, top, mode) {
        if (!blend[mode]) {
            throw new Error('unknown blend mode ' + mode);
        }
        return blend[mode](bottom, top);
    };

    var blend_f = function (f) { return function (bottom,top) {
            var c0 = chroma_1(top).rgb();
            var c1 = chroma_1(bottom).rgb();
            return chroma_1.rgb(f(c0, c1));
        }; };

    var each = function (f) { return function (c0, c1) {
            var out = [];
            out[0] = f(c0[0], c1[0]);
            out[1] = f(c0[1], c1[1]);
            out[2] = f(c0[2], c1[2]);
            return out;
        }; };

    var normal = function (a) { return a; };
    var multiply = function (a,b) { return a * b / 255; };
    var darken$1 = function (a,b) { return a > b ? b : a; };
    var lighten = function (a,b) { return a > b ? a : b; };
    var screen = function (a,b) { return 255 * (1 - (1-a/255) * (1-b/255)); };
    var overlay = function (a,b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255 ) * ( 1 - b / 255 )); };
    var burn = function (a,b) { return 255 * (1 - (1 - b / 255) / (a/255)); };
    var dodge = function (a,b) {
        if (a === 255) { return 255; }
        a = 255 * (b / 255) / (1 - a / 255);
        return a > 255 ? 255 : a
    };

    // # add = (a,b) ->
    // #     if (a + b > 255) then 255 else a + b

    blend.normal = blend_f(each(normal));
    blend.multiply = blend_f(each(multiply));
    blend.screen = blend_f(each(screen));
    blend.overlay = blend_f(each(overlay));
    blend.darken = blend_f(each(darken$1));
    blend.lighten = blend_f(each(lighten));
    blend.dodge = blend_f(each(dodge));
    blend.burn = blend_f(each(burn));
    // blend.add = blend_f(each(add));

    var blend_1 = blend;

    // cubehelix interpolation
    // based on D.A. Green "A colour scheme for the display of astronomical intensity images"
    // http://astron-soc.in/bulletin/11June/289392011.pdf

    var type$k = utils.type;
    var clip_rgb$3 = utils.clip_rgb;
    var TWOPI$2 = utils.TWOPI;
    var pow$6 = Math.pow;
    var sin$2 = Math.sin;
    var cos$3 = Math.cos;


    var cubehelix = function(start, rotations, hue, gamma, lightness) {
        if ( start === void 0 ) start=300;
        if ( rotations === void 0 ) rotations=-1.5;
        if ( hue === void 0 ) hue=1;
        if ( gamma === void 0 ) gamma=1;
        if ( lightness === void 0 ) lightness=[0,1];

        var dh = 0, dl;
        if (type$k(lightness) === 'array') {
            dl = lightness[1] - lightness[0];
        } else {
            dl = 0;
            lightness = [lightness, lightness];
        }

        var f = function(fract) {
            var a = TWOPI$2 * (((start+120)/360) + (rotations * fract));
            var l = pow$6(lightness[0] + (dl * fract), gamma);
            var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
            var amp = (h * l * (1-l)) / 2;
            var cos_a = cos$3(a);
            var sin_a = sin$2(a);
            var r = l + (amp * ((-0.14861 * cos_a) + (1.78277* sin_a)));
            var g = l + (amp * ((-0.29227 * cos_a) - (0.90649* sin_a)));
            var b = l + (amp * (+1.97294 * cos_a));
            return chroma_1(clip_rgb$3([r*255,g*255,b*255,1]));
        };

        f.start = function(s) {
            if ((s == null)) { return start; }
            start = s;
            return f;
        };

        f.rotations = function(r) {
            if ((r == null)) { return rotations; }
            rotations = r;
            return f;
        };

        f.gamma = function(g) {
            if ((g == null)) { return gamma; }
            gamma = g;
            return f;
        };

        f.hue = function(h) {
            if ((h == null)) { return hue; }
            hue = h;
            if (type$k(hue) === 'array') {
                dh = hue[1] - hue[0];
                if (dh === 0) { hue = hue[1]; }
            } else {
                dh = 0;
            }
            return f;
        };

        f.lightness = function(h) {
            if ((h == null)) { return lightness; }
            if (type$k(h) === 'array') {
                lightness = h;
                dl = h[1] - h[0];
            } else {
                lightness = [h,h];
                dl = 0;
            }
            return f;
        };

        f.scale = function () { return chroma_1.scale(f); };

        f.hue(hue);

        return f;
    };

    var digits = '0123456789abcdef';

    var floor$2 = Math.floor;
    var random = Math.random;

    var random_1 = function () {
        var code = '#';
        for (var i=0; i<6; i++) {
            code += digits.charAt(floor$2(random() * 16));
        }
        return new Color_1(code, 'hex');
    };

    var log$1 = Math.log;
    var pow$7 = Math.pow;
    var floor$3 = Math.floor;
    var abs = Math.abs;


    var analyze = function (data, key) {
        if ( key === void 0 ) key=null;

        var r = {
            min: Number.MAX_VALUE,
            max: Number.MAX_VALUE*-1,
            sum: 0,
            values: [],
            count: 0
        };
        if (type(data) === 'object') {
            data = Object.values(data);
        }
        data.forEach(function (val) {
            if (key && type(val) === 'object') { val = val[key]; }
            if (val !== undefined && val !== null && !isNaN(val)) {
                r.values.push(val);
                r.sum += val;
                if (val < r.min) { r.min = val; }
                if (val > r.max) { r.max = val; }
                r.count += 1;
            }
        });

        r.domain = [r.min, r.max];

        r.limits = function (mode, num) { return limits(r, mode, num); };

        return r;
    };


    var limits = function (data, mode, num) {
        if ( mode === void 0 ) mode='equal';
        if ( num === void 0 ) num=7;

        if (type(data) == 'array') {
            data = analyze(data);
        }
        var min = data.min;
        var max = data.max;
        var values = data.values.sort(function (a,b) { return a-b; });

        if (num === 1) { return [min,max]; }

        var limits = [];

        if (mode.substr(0,1) === 'c') { // continuous
            limits.push(min);
            limits.push(max);
        }

        if (mode.substr(0,1) === 'e') { // equal interval
            limits.push(min);
            for (var i=1; i<num; i++) {
                limits.push(min+((i/num)*(max-min)));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'l') { // log scale
            if (min <= 0) {
                throw new Error('Logarithmic scales are only possible for values > 0');
            }
            var min_log = Math.LOG10E * log$1(min);
            var max_log = Math.LOG10E * log$1(max);
            limits.push(min);
            for (var i$1=1; i$1<num; i$1++) {
                limits.push(pow$7(10, min_log + ((i$1/num) * (max_log - min_log))));
            }
            limits.push(max);
        }

        else if (mode.substr(0,1) === 'q') { // quantile scale
            limits.push(min);
            for (var i$2=1; i$2<num; i$2++) {
                var p = ((values.length-1) * i$2)/num;
                var pb = floor$3(p);
                if (pb === p) {
                    limits.push(values[pb]);
                } else { // p > pb
                    var pr = p - pb;
                    limits.push((values[pb]*(1-pr)) + (values[pb+1]*pr));
                }
            }
            limits.push(max);

        }

        else if (mode.substr(0,1) === 'k') { // k-means clustering
            /*
            implementation based on
            http://code.google.com/p/figue/source/browse/trunk/figue.js#336
            simplified for 1-d input values
            */
            var cluster;
            var n = values.length;
            var assignments = new Array(n);
            var clusterSizes = new Array(num);
            var repeat = true;
            var nb_iters = 0;
            var centroids = null;

            // get seed values
            centroids = [];
            centroids.push(min);
            for (var i$3=1; i$3<num; i$3++) {
                centroids.push(min + ((i$3/num) * (max-min)));
            }
            centroids.push(max);

            while (repeat) {
                // assignment step
                for (var j=0; j<num; j++) {
                    clusterSizes[j] = 0;
                }
                for (var i$4=0; i$4<n; i$4++) {
                    var value = values[i$4];
                    var mindist = Number.MAX_VALUE;
                    var best = (void 0);
                    for (var j$1=0; j$1<num; j$1++) {
                        var dist = abs(centroids[j$1]-value);
                        if (dist < mindist) {
                            mindist = dist;
                            best = j$1;
                        }
                        clusterSizes[best]++;
                        assignments[i$4] = best;
                    }
                }

                // update centroids step
                var newCentroids = new Array(num);
                for (var j$2=0; j$2<num; j$2++) {
                    newCentroids[j$2] = null;
                }
                for (var i$5=0; i$5<n; i$5++) {
                    cluster = assignments[i$5];
                    if (newCentroids[cluster] === null) {
                        newCentroids[cluster] = values[i$5];
                    } else {
                        newCentroids[cluster] += values[i$5];
                    }
                }
                for (var j$3=0; j$3<num; j$3++) {
                    newCentroids[j$3] *= 1/clusterSizes[j$3];
                }

                // check convergence
                repeat = false;
                for (var j$4=0; j$4<num; j$4++) {
                    if (newCentroids[j$4] !== centroids[j$4]) {
                        repeat = true;
                        break;
                    }
                }

                centroids = newCentroids;
                nb_iters++;

                if (nb_iters > 200) {
                    repeat = false;
                }
            }

            // finished k-means clustering
            // the next part is borrowed from gabrielflor.it
            var kClusters = {};
            for (var j$5=0; j$5<num; j$5++) {
                kClusters[j$5] = [];
            }
            for (var i$6=0; i$6<n; i$6++) {
                cluster = assignments[i$6];
                kClusters[cluster].push(values[i$6]);
            }
            var tmpKMeansBreaks = [];
            for (var j$6=0; j$6<num; j$6++) {
                tmpKMeansBreaks.push(kClusters[j$6][0]);
                tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length-1]);
            }
            tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a,b){ return a-b; });
            limits.push(tmpKMeansBreaks[0]);
            for (var i$7=1; i$7 < tmpKMeansBreaks.length; i$7+= 2) {
                var v = tmpKMeansBreaks[i$7];
                if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                    limits.push(v);
                }
            }
        }
        return limits;
    };

    var analyze_1 = {analyze: analyze, limits: limits};

    var contrast = function (a, b) {
        // WCAG contrast ratio
        // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.luminance();
        var l2 = b.luminance();
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    };

    var sqrt$4 = Math.sqrt;
    var atan2$2 = Math.atan2;
    var abs$1 = Math.abs;
    var cos$4 = Math.cos;
    var PI$2 = Math.PI;

    var deltaE = function(a, b, L, C) {
        if ( L === void 0 ) L=1;
        if ( C === void 0 ) C=1;

        // Delta E (CMC)
        // see http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CMC.html
        a = new Color_1(a);
        b = new Color_1(b);
        var ref = Array.from(a.lab());
        var L1 = ref[0];
        var a1 = ref[1];
        var b1 = ref[2];
        var ref$1 = Array.from(b.lab());
        var L2 = ref$1[0];
        var a2 = ref$1[1];
        var b2 = ref$1[2];
        var c1 = sqrt$4((a1 * a1) + (b1 * b1));
        var c2 = sqrt$4((a2 * a2) + (b2 * b2));
        var sl = L1 < 16.0 ? 0.511 : (0.040975 * L1) / (1.0 + (0.01765 * L1));
        var sc = ((0.0638 * c1) / (1.0 + (0.0131 * c1))) + 0.638;
        var h1 = c1 < 0.000001 ? 0.0 : (atan2$2(b1, a1) * 180.0) / PI$2;
        while (h1 < 0) { h1 += 360; }
        while (h1 >= 360) { h1 -= 360; }
        var t = (h1 >= 164.0) && (h1 <= 345.0) ? (0.56 + abs$1(0.2 * cos$4((PI$2 * (h1 + 168.0)) / 180.0))) : (0.36 + abs$1(0.4 * cos$4((PI$2 * (h1 + 35.0)) / 180.0)));
        var c4 = c1 * c1 * c1 * c1;
        var f = sqrt$4(c4 / (c4 + 1900.0));
        var sh = sc * (((f * t) + 1.0) - f);
        var delL = L1 - L2;
        var delC = c1 - c2;
        var delA = a1 - a2;
        var delB = b1 - b2;
        var dH2 = ((delA * delA) + (delB * delB)) - (delC * delC);
        var v1 = delL / (L * sl);
        var v2 = delC / (C * sc);
        var v3 = sh;
        return sqrt$4((v1 * v1) + (v2 * v2) + (dH2 / (v3 * v3)));
    };

    // simple Euclidean distance
    var distance = function(a, b, mode) {
        if ( mode === void 0 ) mode='lab';

        // Delta E (CIE 1976)
        // see http://www.brucelindbloom.com/index.html?Equations.html
        a = new Color_1(a);
        b = new Color_1(b);
        var l1 = a.get(mode);
        var l2 = b.get(mode);
        var sum_sq = 0;
        for (var i in l1) {
            var d = (l1[i] || 0) - (l2[i] || 0);
            sum_sq += d*d;
        }
        return Math.sqrt(sum_sq);
    };

    var valid = function () {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        try {
            new (Function.prototype.bind.apply( Color_1, [ null ].concat( args) ));
            return true;
        } catch (e) {
            return false;
        }
    };

    // some pre-defined color scales:




    var scales = {
    	cool: function cool() { return scale([chroma_1.hsl(180,1,.9), chroma_1.hsl(250,.7,.4)]) },
    	hot: function hot() { return scale(['#000','#f00','#ff0','#fff'], [0,.25,.75,1]).mode('rgb') }
    };

    /**
        ColorBrewer colors for chroma.js

        Copyright (c) 2002 Cynthia Brewer, Mark Harrower, and The
        Pennsylvania State University.

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0

        Unless required by applicable law or agreed to in writing, software distributed
        under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
        CONDITIONS OF ANY KIND, either express or implied. See the License for the
        specific language governing permissions and limitations under the License.
    */

    var colorbrewer = {
        // sequential
        OrRd: ['#fff7ec', '#fee8c8', '#fdd49e', '#fdbb84', '#fc8d59', '#ef6548', '#d7301f', '#b30000', '#7f0000'],
        PuBu: ['#fff7fb', '#ece7f2', '#d0d1e6', '#a6bddb', '#74a9cf', '#3690c0', '#0570b0', '#045a8d', '#023858'],
        BuPu: ['#f7fcfd', '#e0ecf4', '#bfd3e6', '#9ebcda', '#8c96c6', '#8c6bb1', '#88419d', '#810f7c', '#4d004b'],
        Oranges: ['#fff5eb', '#fee6ce', '#fdd0a2', '#fdae6b', '#fd8d3c', '#f16913', '#d94801', '#a63603', '#7f2704'],
        BuGn: ['#f7fcfd', '#e5f5f9', '#ccece6', '#99d8c9', '#66c2a4', '#41ae76', '#238b45', '#006d2c', '#00441b'],
        YlOrBr: ['#ffffe5', '#fff7bc', '#fee391', '#fec44f', '#fe9929', '#ec7014', '#cc4c02', '#993404', '#662506'],
        YlGn: ['#ffffe5', '#f7fcb9', '#d9f0a3', '#addd8e', '#78c679', '#41ab5d', '#238443', '#006837', '#004529'],
        Reds: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
        RdPu: ['#fff7f3', '#fde0dd', '#fcc5c0', '#fa9fb5', '#f768a1', '#dd3497', '#ae017e', '#7a0177', '#49006a'],
        Greens: ['#f7fcf5', '#e5f5e0', '#c7e9c0', '#a1d99b', '#74c476', '#41ab5d', '#238b45', '#006d2c', '#00441b'],
        YlGnBu: ['#ffffd9', '#edf8b1', '#c7e9b4', '#7fcdbb', '#41b6c4', '#1d91c0', '#225ea8', '#253494', '#081d58'],
        Purples: ['#fcfbfd', '#efedf5', '#dadaeb', '#bcbddc', '#9e9ac8', '#807dba', '#6a51a3', '#54278f', '#3f007d'],
        GnBu: ['#f7fcf0', '#e0f3db', '#ccebc5', '#a8ddb5', '#7bccc4', '#4eb3d3', '#2b8cbe', '#0868ac', '#084081'],
        Greys: ['#ffffff', '#f0f0f0', '#d9d9d9', '#bdbdbd', '#969696', '#737373', '#525252', '#252525', '#000000'],
        YlOrRd: ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'],
        PuRd: ['#f7f4f9', '#e7e1ef', '#d4b9da', '#c994c7', '#df65b0', '#e7298a', '#ce1256', '#980043', '#67001f'],
        Blues: ['#f7fbff', '#deebf7', '#c6dbef', '#9ecae1', '#6baed6', '#4292c6', '#2171b5', '#08519c', '#08306b'],
        PuBuGn: ['#fff7fb', '#ece2f0', '#d0d1e6', '#a6bddb', '#67a9cf', '#3690c0', '#02818a', '#016c59', '#014636'],
        Viridis: ['#440154', '#482777', '#3f4a8a', '#31678e', '#26838f', '#1f9d8a', '#6cce5a', '#b6de2b', '#fee825'],

        // diverging

        Spectral: ['#9e0142', '#d53e4f', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#e6f598', '#abdda4', '#66c2a5', '#3288bd', '#5e4fa2'],
        RdYlGn: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee08b', '#ffffbf', '#d9ef8b', '#a6d96a', '#66bd63', '#1a9850', '#006837'],
        RdBu: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#f7f7f7', '#d1e5f0', '#92c5de', '#4393c3', '#2166ac', '#053061'],
        PiYG: ['#8e0152', '#c51b7d', '#de77ae', '#f1b6da', '#fde0ef', '#f7f7f7', '#e6f5d0', '#b8e186', '#7fbc41', '#4d9221', '#276419'],
        PRGn: ['#40004b', '#762a83', '#9970ab', '#c2a5cf', '#e7d4e8', '#f7f7f7', '#d9f0d3', '#a6dba0', '#5aae61', '#1b7837', '#00441b'],
        RdYlBu: ['#a50026', '#d73027', '#f46d43', '#fdae61', '#fee090', '#ffffbf', '#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695'],
        BrBG: ['#543005', '#8c510a', '#bf812d', '#dfc27d', '#f6e8c3', '#f5f5f5', '#c7eae5', '#80cdc1', '#35978f', '#01665e', '#003c30'],
        RdGy: ['#67001f', '#b2182b', '#d6604d', '#f4a582', '#fddbc7', '#ffffff', '#e0e0e0', '#bababa', '#878787', '#4d4d4d', '#1a1a1a'],
        PuOr: ['#7f3b08', '#b35806', '#e08214', '#fdb863', '#fee0b6', '#f7f7f7', '#d8daeb', '#b2abd2', '#8073ac', '#542788', '#2d004b'],

        // qualitative

        Set2: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
        Accent: ['#7fc97f', '#beaed4', '#fdc086', '#ffff99', '#386cb0', '#f0027f', '#bf5b17', '#666666'],
        Set1: ['#e41a1c', '#377eb8', '#4daf4a', '#984ea3', '#ff7f00', '#ffff33', '#a65628', '#f781bf', '#999999'],
        Set3: ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9', '#bc80bd', '#ccebc5', '#ffed6f'],
        Dark2: ['#1b9e77', '#d95f02', '#7570b3', '#e7298a', '#66a61e', '#e6ab02', '#a6761d', '#666666'],
        Paired: ['#a6cee3', '#1f78b4', '#b2df8a', '#33a02c', '#fb9a99', '#e31a1c', '#fdbf6f', '#ff7f00', '#cab2d6', '#6a3d9a', '#ffff99', '#b15928'],
        Pastel2: ['#b3e2cd', '#fdcdac', '#cbd5e8', '#f4cae4', '#e6f5c9', '#fff2ae', '#f1e2cc', '#cccccc'],
        Pastel1: ['#fbb4ae', '#b3cde3', '#ccebc5', '#decbe4', '#fed9a6', '#ffffcc', '#e5d8bd', '#fddaec', '#f2f2f2'],
    };

    // add lowercase aliases for case-insensitive matches
    for (var i$1 = 0, list$1 = Object.keys(colorbrewer); i$1 < list$1.length; i$1 += 1) {
        var key = list$1[i$1];

        colorbrewer[key.toLowerCase()] = colorbrewer[key];
    }

    var colorbrewer_1 = colorbrewer;

    // feel free to comment out anything to rollup
    // a smaller chroma.js built

    // io --> convert colors















    // operators --> modify existing Colors










    // interpolators










    // generators -- > create new colors
    chroma_1.average = average;
    chroma_1.bezier = bezier_1;
    chroma_1.blend = blend_1;
    chroma_1.cubehelix = cubehelix;
    chroma_1.mix = chroma_1.interpolate = mix;
    chroma_1.random = random_1;
    chroma_1.scale = scale;

    // other utility methods
    chroma_1.analyze = analyze_1.analyze;
    chroma_1.contrast = contrast;
    chroma_1.deltaE = deltaE;
    chroma_1.distance = distance;
    chroma_1.limits = analyze_1.limits;
    chroma_1.valid = valid;

    // scale
    chroma_1.scales = scales;

    // colors
    chroma_1.colors = w3cx11_1;
    chroma_1.brewer = colorbrewer_1;

    var chroma_js = chroma_1;

    return chroma_js;

})));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vY29sb3ItY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL2Nocm9tYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsK0RBQTJEO0FBQzNELGlGQUFvQztBQUNwQyw4R0FBK0I7QUFLL0I7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFnQixZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2hDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsTUFBTSxJQUFJLFVBQVUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxHQUFHLENBQUMsR0FBRyx3QkFBd0IsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBSEQsb0NBR0M7QUFHRCxTQUFTLEVBQUUsQ0FBQyxRQUFhLEVBQUUsWUFBeUM7SUFBekMsOENBQW9CLDZCQUFxQjtJQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQy9DLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2hFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2hELENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlLLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZNLElBQUksS0FBSyxHQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMs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LEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDakIsQ0FBQyxHQUFHLFVBQUUsQ0FBQyxLQUFLLENBQUMsRUFDYixDQUFDLEdBQUcsVUFBRSxDQUFDLEtBQUssQ0FBQyxFQUNiLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDZCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztRQUNWLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsSCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDLEdBQUcsSUFBSSxpQkFBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUN6QixDQUFDLEdBQUcsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUMvQixDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUMsR0FBRyxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2hDLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU8sR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzVNLENBQUMsQ0FBQztBQUNOLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDZCxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO0FBQ25JLENBQUM7QUFBQSxDQUFDO0FBRUY7SUFHSSxZQUFZLENBQUMsRUFBRSxDQUFDLEVBQVMsR0FBVyxFQUFTLEtBQVM7UUFBVCxpQ0FBUztRQUE3QixRQUFHLEdBQUgsR0FBRyxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBSTtRQUNsRCxLQUFLLEdBQUcsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixZQUFZLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDL0MsWUFBWSxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzVDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQzlCLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQztJQUVuQyxDQUFDO0lBQ0wsU0FBQztBQUFELENBQUM7QUFBQSxDQUFDO0FBRUY7Ozs7Ozs7OztHQVNHO0FBQ0gsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDO0FBQUEsQ0FBQztBQUNGLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUNSLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7QUFDcEQsQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSTtBQUMxRSxDQUFDO0FBR0QsU0FBUyxFQUFFLENBQUMsR0FBUTtJQUNoQixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztJQUMvRCxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ3hFLENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3hDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1osR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4QyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7UUFDckIsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUM7Z0JBQ0YsQ0FBQyxJQUFJLENBQUM7S0FDakI7SUFDRCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQztBQUNsQyxDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNULElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDbEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDcEMsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEwsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDSixDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUN4QyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckIsT0FBTztRQUNILEVBQUUsRUFBRSxDQUFDO1FBQ0wsRUFBRSxFQUFFLENBQUM7S0FDUjtBQUNMLENBQUM7QUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ1IsSUFBSSxDQUFDLEdBQUcsV0FBVyxJQUFJLE9BQU8sTUFBTSxJQUFJLE1BQU0sQ0FB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LENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsZ0JBQWdCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLGlCQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxpQkFBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksaUJBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0FBQ2pyWixVQUFFLEdBQUcsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7QUFDdkksVUFBRSxHQUFHLENBQUMsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxDQUFDLENB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCLGdDQUFnQyxZQUFZO0FBQzVDLGdDQUFnQyxZQUFZO0FBQzVDO0FBQ0EscUJBQXFCLG1DQUFtQztBQUN4RDtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0EscUJBQXFCLCtDQUErQztBQUNwRTtBQUNBLHFCQUFxQixXQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUJBQXVCLE9BQU87QUFDOUIsdUJBQXVCLE9BQU87QUFDOUI7QUFDQSxzQkFBc0IsVUFBVTtBQUNoQyxvQkFBb0IsVUFBVTtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtB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Q0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixlQUFlO0FBQ3hDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QywwQkFBMEI7QUFDbEUsd0NBQXdDLDBCQUEwQjtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixXQUFXO0FBQ25DLDJCQUEyQixXQUFXO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0EsNEJBQTRCLGtFQUFrRTtBQUM5RiwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3REFBd0QscUJBQXFCO0FBQzdFOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLENBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFpbi50c1wiKTtcbiIsImltcG9ydCB7IEJVSUxUSU5fTEFCQ09MT1JfTElTVCwgQ2IsIERiLCBPIH0gZnJvbSAnLi9jb25zdCc7XHJcbmltcG9ydCB7IExhYiB9IGZyb20gJy4vY29sb3ItY2xhc3MnO1xyXG5pbXBvcnQgY2hyb21hIGZyb20gJ2Nocm9tYS1qcyc7XHJcblxyXG5cclxuXHJcblxyXG4vKipcclxuICog55So5p2l6aqM6K+B5piv5ZCm6LaF6L+H6IyD5Zu0XHJcbiAqXHJcbiAqIEBhdXRob3IgY3lpYVxyXG4gKiBAZGF0ZSAyMDE5LTA1LTA2XHJcbiAqIEBwYXJhbSBhIFxyXG4gKiBAcGFyYW0gYiDmnIDlpKflgLxcclxuICogQHBhcmFtIGNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYXJlVmFsdWUoYSwgYiwgYykge1xyXG4gICAgaWYgKGlzTmFOKGEpIHx8IDAgPiBhIHx8IGEgPiBiKVxyXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGEgKyBcIiBmb3IgXCIgKyBjICsgXCIgaXMgbm90IGJldHdlZW4gMCBhbmQgXCIgKyBiKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFFiKGxhYkNvbG9yOiBMYWIsIGxhYkNvbG9yTGlzdDogYW55ID0gQlVJTFRJTl9MQUJDT0xPUl9MSVNUKSB7XHJcbiAgICBpZiAoIWxhYkNvbG9yTGlzdC5sZW5ndGggfHwgIWxhYkNvbG9yTGlzdFswXS5sZW5ndGgpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGdvbGRlbiBwYWxldHRlc1wiKTtcclxuICAgIGZvciAodmFyIGMgPSBJbmZpbml0eSwgZCA9IGxhYkNvbG9yTGlzdFswXSwgZSA9IC0xLCBnID0gMDsgZyA8IGxhYkNvbG9yTGlzdC5sZW5ndGg7IGcrKylcclxuICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGxhYkNvbG9yTGlzdFtnXS5sZW5ndGggJiYgMCA8IGM7IGgrKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IGxhYkNvbG9yTGlzdFtnXVtoXVxyXG4gICAgICAgICAgICAgICAgLCBsID0gKGsuYiArIGxhYkNvbG9yLmIpIC8gMlxyXG4gICAgICAgICAgICAgICAgLCBtID0gTWF0aC5zcXJ0KE1hdGgucG93KGsuaSwgMikgKyBNYXRoLnBvdyhrLmosIDIpKVxyXG4gICAgICAgICAgICAgICAgLCBxID0gTWF0aC5zcXJ0KE1hdGgucG93KGxhYkNvbG9yLmksIDIpICsgTWF0aC5wb3cobGFiQ29sb3IuaiwgMikpXHJcbiAgICAgICAgICAgICAgICAsIHQgPSAobSArIHEpIC8gMjtcclxuICAgICAgICAgICAgdCA9IC41ICogKDEgLSBNYXRoLnNxcnQoTWF0aC5wb3codCwgNykgLyAoTWF0aC5wb3codCwgNykgKyBNYXRoLnBvdygyNSwgNykpKSk7XHJcbiAgICAgICAgICAgIHZhciBuID0gay5pICogKDEgKyB0KVxyXG4gICAgICAgICAgICAgICAgLCByID0gbGFiQ29sb3IuaSAqICgxICsgdClcclxuICAgICAgICAgICAgICAgICwgTiA9IE1hdGguc3FydChNYXRoLnBvdyhuLCAyKSArIE1hdGgucG93KGsuaiwgMikpXHJcbiAgICAgICAgICAgICAgICAsIEggPSBNYXRoLnNxcnQoTWF0aC5wb3cociwgMikgKyBNYXRoLnBvdyhsYWJDb2xvci5qLCAyKSk7XHJcbiAgICAgICAgICAgIHQgPSBIIC0gTjtcclxuICAgICAgICAgICAgdmFyIGphID0gKE4gKyBIKSAvIDI7XHJcbiAgICAgICAgICAgIG4gPSBBYihrLmosIG4pO1xyXG4gICAgICAgICAgICByID0gQWIobGFiQ29sb3Iuaiwgcik7XHJcbiAgICAgICAgICAgIE4gPSAyICogTWF0aC5zcXJ0KE4gKiBIKSAqIE1hdGguc2luKCgxRS00ID4gTWF0aC5hYnMobSkgfHwgMUUtNCA+IE1hdGguYWJzKHEpID8gMCA6IDE4MCA+PSBNYXRoLmFicyhyIC0gbikgPyByIC0gbiA6IHIgPD0gbiA/IHIgLSBuICsgMzYwIDogciAtIG4gLSAzNjApIC8gMiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBtID0gMUUtNCA+IE1hdGguYWJzKG0pIHx8IDFFLTQgPiBNYXRoLmFicyhxKSA/IDAgOiAxODAgPj0gTWF0aC5hYnMociAtIG4pID8gKG4gKyByKSAvIDIgOiAzNjAgPiBuICsgciA/IChuICsgciArIDM2MCkgLyAyIDogKG4gKyByIC0gMzYwKSAvIDI7XHJcbiAgICAgICAgICAgIHEgPSAxICsgLjA0NSAqIGphO1xyXG4gICAgICAgICAgICBIID0gMSArIC4wMTUgKiBqYSAqICgxIC0gLjE3ICogTWF0aC5jb3MoKG0gLSAzMCkgKiBNYXRoLlBJIC8gMTgwKSArIC4yNCAqIE1hdGguY29zKDIgKiBtICogTWF0aC5QSSAvIDE4MCkgKyAuMzIgKiBNYXRoLmNvcygoMyAqIG0gKyA2KSAqIE1hdGguUEkgLyAxODApIC0gLjIgKiBNYXRoLmNvcygoNCAqIG0gLSA2MykgKiBNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wMSA9XHJcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQoTWF0aC5wb3coKGxhYkNvbG9yLmIgLSBrLmIpIC8gKDEgKyAuMDE1ICogTWF0aC5wb3cobCAtIDUwLCAyKSAvIE1hdGguc3FydCgyMCArIE1hdGgucG93KGwgLSA1MCwgMikpKSwgMikgKyBNYXRoLnBvdyh0IC8gKDEgKiBxKSwgMikgKyBNYXRoLnBvdyhOIC8gKDEgKiBIKSwgMikgKyB0IC8gKDEgKiBxKSAqIE1hdGguc3FydChNYXRoLnBvdyhqYSwgNykgLyAoTWF0aC5wb3coamEsIDcpICsgTWF0aC5wb3coMjUsIDcpKSkgKiBNYXRoLnNpbig2MCAqIE1hdGguZXhwKC1NYXRoLnBvdygobSAtIDI3NSkgLyAyNSwgMikpICogTWF0aC5QSSAvIDE4MCkgKiAtMiAqIChOIC8gKDEgKiBIKSkpO1xyXG4gICAgICAgICAgICB0ZW1wMSA8IGMgJiYgKGMgPSB0ZW1wMSxcclxuICAgICAgICAgICAgICAgIGQgPSBsYWJDb2xvckxpc3RbZ10sXHJcbiAgICAgICAgICAgICAgICBlID0gaClcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZjOiBkLFxyXG4gICAgICAgIGVjOiBlXHJcbiAgICB9XHJcbn1cclxudmFyIEFiID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIGlmICgxRS00ID4gTWF0aC5hYnMoYSkgJiYgMUUtNCA+IE1hdGguYWJzKGIpKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgYSA9IDE4MCAqIE1hdGguYXRhbjIoYSwgYikgLyBNYXRoLlBJO1xyXG4gICAgcmV0dXJuIDAgPD0gYSA/IGEgOiBhICsgMzYwXHJcbn07XHJcbi8qKnJnYuminOiJsui9rOaNouS4umxhYuminOiJsiAqL1xyXG5mdW5jdGlvbiByZ2IybGFiKHJnYjogUmdiKSB7XHJcbiAgICBsZXQgY2hyb21hTGFiID0gY2hyb21hLmdsKHJnYi5yZWQsIHJnYi5ncmVlbiwgcmdiLmJsdWUsIHJnYi5hbHBoYSkubGFiKClcclxuICAgIHJldHVybiBuZXcgTGFiKC4uLmNocm9tYUxhYilcclxuXHJcbn1cclxuZnVuY3Rpb24gWChhKSB7XHJcbiAgICB2YXIgYiA9IEJVSUxUSU5fTEFCQ09MT1JfTElTVFxyXG4gICAgdmFyIGMgPSByZ2IybGFiKGEpXHJcbiAgICAgICAgLCBkID0gUWIoYywgYik7XHJcbiAgICBsZXQgdGVtcDEgPSBkLmZjO1xyXG4gICAgbGV0IHRlbXAyID0gZC5lYztcclxuICAgIHZhciBlID0gdGVtcDFbdGVtcDJdXHJcbiAgICAgICAgLCBnID0geGIoZSlcclxuICAgICAgICAsIGggPSB4YihjKVxyXG4gICAgICAgICwgayA9IDMwID4geGIodGVtcDFbNV0pLnZcclxuICAgICAgICAsIGwgPSBnLmIgLSBoLmJcclxuICAgICAgICAsIG0gPSBnLnYgLSBoLnZcclxuICAgICAgICAsIHEgPSBnLmh1ZSAtIGguaHVlXHJcbiAgICAgICAgLCB0ID0gQ2JbdGVtcDJdXHJcbiAgICAgICAgLCBuID0gRGJbdGVtcDJdXHJcbiAgICAgICAgLCByID0gMTAwO1xyXG4gICAgcmV0dXJuIHRlbXAxLm1hcChmdW5jdGlvbiAoYiwgYykge1xyXG4gICAgICAgIGlmIChiID09PSBlKVxyXG4gICAgICAgICAgICByZXR1cm4gciA9IE1hdGgubWF4KGguYiAtIDEuNywgMCksXHJcbiAgICAgICAgICAgICAgICBhO1xyXG4gICAgICAgIGIgPSB4YihiKTtcclxuICAgICAgICB2YXIgZCA9IGIuYiAtIENiW2NdIC8gdCAqIGw7XHJcbiAgICAgICAgZCA9IE1hdGgubWluKGQsIHIpO1xyXG4gICAgICAgIGMgPSBuZXcgV2IoQShkLCAwLCAxMDApLCBNYXRoLm1heCgwLCBrID8gYi52IC0gbSA6IGIudiAtIG0gKiBNYXRoLm1pbihEYltjXSAvIG4sIDEuMjUpKSwgKGIuaHVlIC0gcSArIDM2MCkgJSAzNjApO1xyXG4gICAgICAgIHIgPSBNYXRoLm1heChjLmIgLSAxLjcsIDApO1xyXG4gICAgICAgIGIgPSBjLmh1ZSAqIE1hdGguUEkgLyAxODA7XHJcbiAgICAgICAgYyA9IG5ldyBMYWIoYy5iLCBjLnYgKiBNYXRoLmNvcyhiKSwgYy52ICogTWF0aC5zaW4oYiksIGMuYWxwaGEpO1xyXG4gICAgICAgIHZhciBnID0gKGMuYiArIDE2KSAvIDExNjtcclxuICAgICAgICBiID0gLjk1MDQ3ICogemIoZyArIGMuaSAvIDUwMCk7XHJcbiAgICAgICAgZCA9IDEgKiB6YihnKTtcclxuICAgICAgICBnID0gMS4wODg4MyAqIHpiKGcgLSBjLmogLyAyMDApO1xyXG4gICAgICAgIHJldHVybiBuZXcgUmdiKEEoeWIoMy4yNDA0NTQyICogYiArIC0xLjUzNzEzODUgKiBkICsgLS40OTg1MzE0ICogZyksIDAsIDEpLCBBKHliKC0uOTY5MjY2ICogYiArIDEuODc2MDEwOCAqIGQgKyAuMDQxNTU2ICogZyksIDAsIDEpLCBBKHliKC4wNTU2NDM0ICogYiArIC0uMjA0MDI1OSAqIGQgKyAxLjA1NzIyNTIgKiBnKSwgMCwgMSksIGMuYWxwaGEpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHhiKGEpIHtcclxuICAgIGNvbnNvbGUubG9nKGEpXHJcbiAgICByZXR1cm4gbmV3IFdiKGEuYiwgTWF0aC5zcXJ0KE1hdGgucG93KGEuaSwgMikgKyBNYXRoLnBvdyhhLmosIDIpKSwgKDE4MCAqIE1hdGguYXRhbjIoYS5qLCBhLmkpIC8gTWF0aC5QSSArIDM2MCkgJSAzNjAsIGEuYWxwaGEpXHJcbn07XHJcblxyXG5jbGFzcyBXYiB7XHJcbiAgICBiXHJcbiAgICB2XHJcbiAgICBjb25zdHJ1Y3RvcihhLCBiLCBwdWJsaWMgaHVlOiBudW1iZXIsIHB1YmxpYyBhbHBoYSA9IDEpIHtcclxuICAgICAgICBhbHBoYSA9IGFscGhhIHx8IDE7IHRoaXMuYiA9IGE7XHJcbiAgICAgICAgdGhpcy52ID0gYjtcclxuICAgICAgICAvLyB0aGlzLmh1ZSA9IGM7XHJcbiAgICAgICAgLy8gdGhpcy5hbHBoYSA9IGQ7XHJcbiAgICAgICAgY29tcGFyZVZhbHVlKGEsIE51bWJlci5NQVhfVkFMVUUsIFwibGlnaHRuZXNzXCIpO1xyXG4gICAgICAgIGNvbXBhcmVWYWx1ZShiLCBOdW1iZXIuTUFYX1ZBTFVFLCBcImNocm9tYVwiKTtcclxuICAgICAgICBjb21wYXJlVmFsdWUoaHVlLCAzNjAsIFwiaHVlXCIpO1xyXG4gICAgICAgIGNvbXBhcmVWYWx1ZShhbHBoYSwgMSwgXCJhbHBoYVwiKVxyXG5cclxuICAgIH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBhLGLkuK3nmoTmnIDlpKflgLzlkoxj55u45q+U55qE5pyA5bCP5YC8XHJcbiAqXHJcbiAqIEBhdXRob3IgY3lpYVxyXG4gKiBAZGF0ZSAyMDE5LTA1LTA2XHJcbiAqIEBwYXJhbSBhXHJcbiAqIEBwYXJhbSBiXHJcbiAqIEBwYXJhbSBjXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBBKGEsIGIsIGMpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChhLCBiKSwgYylcclxufTtcclxuZnVuY3Rpb24gemIoYSkge1xyXG4gICAgdmFyIGIgPSA2IC8gMjlcclxuICAgICAgICAsIGMgPSAzICogTWF0aC5wb3coYiwgMik7XHJcbiAgICByZXR1cm4gYSA+IGIgPyBNYXRoLnBvdyhhLCAzKSA6IGMgKiAoYSAtIDQgLyAyOSlcclxufVxyXG5mdW5jdGlvbiB5YihhKSB7XHJcbiAgICByZXR1cm4gLjAwMzEzMDggPj0gYSA/IDEyLjkyICogYSA6IDEuMDU1ICogTWF0aC5wb3coYSwgMSAvIDIuNCkgLSAuMDU1XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBsYihoc2w6IEhzbCkge1xyXG4gICAgdmFyIGIgPSAoMSAtIE1hdGguYWJzKDIgKiBoc2wubGlnaHRuZXNzIC0gMSkpICogaHNsLnNhdHVyYXRpb247XHJcbiAgICByZXR1cm4ga2IoaHNsLmh1ZSwgaHNsLmFscGhhLCBiLCBNYXRoLm1heCgwLCBoc2wubGlnaHRuZXNzIC0gYiAvIDIpKVxyXG59XHJcbmZ1bmN0aW9uIGtiKGh1ZTogbnVtYmVyLCBhbHBoYTogbnVtYmVyLCBjLCBkKSB7XHJcbiAgICB2YXIgZSA9IGRcclxuICAgICAgICAsIGcgPSBkO1xyXG4gICAgaHVlID0gaHVlICUgMzYwIC8gNjA7XHJcbiAgICB2YXIgaCA9IGMgKiAoMSAtIE1hdGguYWJzKGh1ZSAlIDIgLSAxKSk7XHJcbiAgICBzd2l0Y2ggKE1hdGguZmxvb3IoaHVlKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZSArPSBjO1xyXG4gICAgICAgICAgICBnICs9IGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZSArPSBoO1xyXG4gICAgICAgICAgICBnICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgZyArPSBjO1xyXG4gICAgICAgICAgICBkICs9IGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgZyArPSBoO1xyXG4gICAgICAgICAgICBkICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgZSArPSBoO1xyXG4gICAgICAgICAgICBkICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgZSArPSBjLFxyXG4gICAgICAgICAgICAgICAgZCArPSBoXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IFJnYihlLCBnLCBkLCBhbHBoYSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmIoYSkge1xyXG4gICAgdmFyIGIgPSBNYXRoLm1heChhLnJlZCwgYS5ncmVlbiwgYS5ibHVlKVxyXG4gICAgICAgICwgYyA9IE1hdGgubWluKGEucmVkLCBhLmdyZWVuLCBhLmJsdWUpXHJcbiAgICAgICAgLCBkID0gMFxyXG4gICAgICAgICwgZSA9IDBcclxuICAgICAgICAsIGcgPSBBKC41ICogKGIgKyBjKSwgMCwgMSk7XHJcbiAgICBiIC0gYyA+IE8gJiYgKGIgPT09IGEucmVkID8gZCA9IDYwICogKGEuZ3JlZW4gLSBhLmJsdWUpIC8gKGIgLSBjKSA6IGIgPT09IGEuZ3JlZW4gPyBkID0gNjAgKiAoYS5ibHVlIC0gYS5yZWQpIC8gKGIgLSBjKSArIDEyMCA6IGIgPT09IGEuYmx1ZSAmJiAoZCA9IDYwICogKGEucmVkIC0gYS5ncmVlbikgLyAoYiAtIGMpICsgMjQwKSxcclxuICAgICAgICBlID0gMCA8IGcgJiYgLjUgPj0gZyA/IEEoKGIgLSBjKSAvICgyICogZyksIDAsIDEpIDogQSgoYiAtIGMpIC8gKDIgLSAyICogZyksIDAsIDEpKTtcclxuICAgIGQgPSBNYXRoLnJvdW5kKGQgKyAzNjApICUgMzYwO1xyXG4gICAgcmV0dXJuIG5ldyBIc2woZCwgZSwgZywgYS5hbHBoYSlcclxufVxyXG5cclxuZnVuY3Rpb24gYmQoYSkge1xyXG4gICAgdmFyIGIgPSBbXVxyXG4gICAgICAgICwgYyA9IFtdO1xyXG4gICAgYSA9IHcoYSk7XHJcbiAgICBmb3IgKHZhciBkID0gYS5uZXh0KCk7ICFkLmRvbmU7IGQgPSBhLm5leHQoKSlcclxuICAgICAgICBkID0gbGIoZC52YWx1ZSksXHJcbiAgICAgICAgICAgIGIucHVzaChkKSxcclxuICAgICAgICAgICAgYy5wdXNoKFgoZCkpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBFYjogYixcclxuICAgICAgICB5YjogY1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHcoYSkge1xyXG4gICAgdmFyIGIgPSBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLml0ZXJhdG9yICYmIGFbU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIHJldHVybiBiID8gYi5jYWxsKGEpIDoge1xyXG4gICAgICAgIG5leHQ6IGFhKGEpXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWEoYSkge1xyXG4gICAgdmFyIGIgPSAwO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gYiA8IGEubGVuZ3RoID8ge1xyXG4gICAgICAgICAgICBkb25lOiAhMSxcclxuICAgICAgICAgICAgdmFsdWU6IGFbYisrXVxyXG4gICAgICAgIH0gOiB7XHJcbiAgICAgICAgICAgICAgICBkb25lOiAhMFxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEhzbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHVlOiBudW1iZXIsIHB1YmxpYyBzYXR1cmF0aW9uOiBudW1iZXIsIHB1YmxpYyBsaWdodG5lc3M6IG51bWJlciwgcHVibGljIGFscGhhID0gMSkge1xyXG4gICAgICAgIGFscGhhID0gYWxwaGEgfHwgMVxyXG4gICAgICAgIGNvbXBhcmVWYWx1ZShodWUsIDM2MCwgXCJodWVcIik7XHJcbiAgICAgICAgY29tcGFyZVZhbHVlKHNhdHVyYXRpb24sIDEsIFwic2F0dXJhdGlvblwiKTtcclxuICAgICAgICBjb21wYXJlVmFsdWUobGlnaHRuZXNzLCAxLCBcImxpZ2h0bmVzc1wiKTtcclxuICAgICAgICBjb21wYXJlVmFsdWUoYWxwaGEsIDEsIFwiYWxwaGFcIilcclxuICAgIH1cclxuXHJcbiAgICBNKCkge1xyXG4gICAgICAgIHJldHVybiBcImhzbGEoXCIgKyB0aGlzLmh1ZSArIFwiLCBcIiArIDEwMCAqIHRoaXMuc2F0dXJhdGlvbiArIFwiJSwgXCIgKyAoMTAwICogdGhpcy5saWdodG5lc3MgKyBcIiUsIFwiICsgdGhpcy5hbHBoYSArIFwiKVwiKVxyXG4gICAgfVxyXG4gICAgcm90YXRlKGRlZzogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBIc2woKHRoaXMuaHVlICsgZGVnICsgMzYwKSAlIDM2MCwgdGhpcy5zYXR1cmF0aW9uLCB0aGlzLmxpZ2h0bmVzcywgdGhpcy5hbHBoYSlcclxuICAgIH1cclxuXHJcbn07XHJcbmNsYXNzIFJnYiB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVkOiBudW1iZXIsIHB1YmxpYyBncmVlbjogbnVtYmVyLCBwdWJsaWMgYmx1ZTogbnVtYmVyLCBwdWJsaWMgYWxwaGEgPSAxKSB7XHJcbiAgICAgICAgYWxwaGEgPSBhbHBoYSB8fCAxXHJcbiAgICAgICAgY29tcGFyZVZhbHVlKHJlZCwgMSwgXCJyZWRcIik7XHJcbiAgICAgICAgY29tcGFyZVZhbHVlKGdyZWVuLCAxLCBcImdyZWVuXCIpO1xyXG4gICAgICAgIGNvbXBhcmVWYWx1ZShibHVlLCAxLCBcImJsdWVcIik7XHJcbiAgICAgICAgY29tcGFyZVZhbHVlKGFscGhhLCAxLCBcImFscGhhXCIpXHJcblxyXG4gICAgfVxyXG59O1xyXG4vKirkuLvlhaXlj6MgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1haW4oIC8qKnJnYuminOiJsiAqL2IpIHtcclxuICAgIGxldCBsaXN0ID0gW107XHJcbiAgICBjb25zb2xlLmxvZyhiKVxyXG4gICAgbGlzdC5wdXNoKFtYKGIpXSk7XHJcbiAgICB2YXIgZCA9IGxiKHJiKGIpLnJvdGF0ZSgxODApKTtcclxuICAgIGNvbnNvbGUubG9nKGQpXHJcbiAgICBsaXN0LnB1c2goW1goZCldKTtcclxuICAgIGxldCBoc2xUZW1wMSA9IHJiKGIpO1xyXG4gICAgbGV0IHRlbXAyID0gW2hzbFRlbXAxLnJvdGF0ZSgtMzApLCBoc2xUZW1wMS5yb3RhdGUoMzApXTtcclxuICAgIGxldCB0ZW1wMyA9IGJkKHRlbXAyKTtcclxuICAgIGNvbnNvbGUubG9nKHRlbXAyKVxyXG4gICAgbGlzdC5wdXNoKHRlbXAzLnliKTtcclxuICAgIGIgPSByYihiKTtcclxuICAgIGIgPSBbYi5yb3RhdGUoNjApLCBiLnJvdGF0ZSgxMjApXTtcclxuICAgIGNvbnNvbGUubG9nKGIpXHJcbiAgICBiID0gYmQoYik7XHJcbiAgICBsaXN0LnB1c2goYi55Yik7XHJcbiAgICBsaXN0LmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgICAgICBsaXN0LmZvckVhY2goKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKCh7IHJlZCwgZ3JlZW4sIGJsdWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGMgPSBjaHJvbWEuZ2wocmVkLCBncmVlbiwgYmx1ZSwgMSkuaGV4KClcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGMpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLScpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICByZXR1cm4gbGlzdFxyXG59IiwiLy8gaW1wb3J0IHsgY29tcGFyZVZhbHVlIH0gZnJvbSAnLi9jbGFzcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGFiIHtcclxuICAgIGJcclxuICAgIGlcclxuICAgIGpcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBhdXRob3IgY3lpYVxyXG4gICAgICogQGRhdGUgMjAxOS0wNS0wNlxyXG4gICAgICogQHBhcmFtIGwg5Lqu5bqmXHJcbiAgICAgKiBAcGFyYW0gYSDku47nu7/oibLliLDnuqLoibLnmoTliIbph48gXHJcbiAgICAgKiBAcGFyYW0gYiDku47ok53oibLliLDpu4ToibLnmoTliIbph49cclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobDogbnVtYmVyLCBhOiBudW1iZXIsIGI6IG51bWJlciwgcHVibGljIGFscGhhID0gMSkge1xyXG4gICAgICAgIGFscGhhID0gYWxwaGEgfHwgMVxyXG4gICAgICAgIHRoaXMuY29tcGFyZVZhbHVlKGwsIDEwMCwgXCJsaWdodG5lc3NcIik7XHJcbiAgICAgICAgdGhpcy5jb21wYXJlVmFsdWUoYWxwaGEsIDEsIFwiYWxwaGFcIilcclxuICAgICAgICAvL2RvY+aaguaXtuWFvOWuuVxyXG4gICAgICAgIHRoaXMuYiA9IGxcclxuICAgICAgICB0aGlzLmkgPSBhXHJcbiAgICAgICAgdGhpcy5qID0gYlxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5q+U6L6D6aKc6Imy5piv5ZCm55u4562JXHJcbiAgICAgKlxyXG4gICAgICogQGF1dGhvciBjeWlhXHJcbiAgICAgKiBAZGF0ZSAyMDE5LTA1LTA3XHJcbiAgICAgKiBAcGFyYW0gYVxyXG4gICAgICogQHJldHVybnNcclxuICAgICAqL1xyXG4gICAga2EoYSkge1xyXG4gICAgICAgIHJldHVybiAxRS00ID4gTWF0aC5hYnModGhpcy5iIC0gYS5iKSAmJiAxRS00ID4gTWF0aC5hYnModGhpcy5pIC0gYS5pKSAmJiAxRS00ID4gTWF0aC5hYnModGhpcy5qIC0gYS5qKSAmJiBNYXRoLmFicyh0aGlzLmFscGhhIC0gYS5hbHBoYSkgPCBNYXRoLnBvdygyLCAtMTYpXHJcbiAgICB9XHJcbiAgICBjb21wYXJlVmFsdWUoYSwgYiwgYykge1xyXG4gICAgICAgIGlmIChpc05hTihhKSB8fCAwID4gYSB8fCBhID4gYilcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoYSArIFwiIGZvciBcIiArIGMgKyBcIiBpcyBub3QgYmV0d2VlbiAwIGFuZCBcIiArIGIpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTGFiIH0gZnJvbSAnLi9jb2xvci1jbGFzcyc7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEJVSUxUSU5fTEFCQ09MT1JfTElTVCA9IFtbbmV3IExhYig5NC42NzQ5NzAwMzMwNTA4NSwgNy4yNjY3MTUwNjY4NjM3NzEsIDEuMDAwNzQzODgyMjcyMzU5KSwgbmV3IExhYig4Ni43ODk3NDE2NzYxNjk5LCAxOC4zNzA3MzY3NjE2NTgwMTIsIDQuMjM2MzcxMzM5NzE0MjQpLCBuZXcgTGFiKDcyLjA5MzkxNjI4MzI1NjEsIDMxLjc5NDgwNTgyOTgxMTcsIDEzLjI5NzI0NDM5OTY4OTYpLCBuZXcgTGFiKDYxLjc5MzUzMzcwMDUxODUxLCA0NC4xMjk0OTgxNjM3NjQ1NDUsIDIwLjcyMTQ3NzMyNjc5OTYwOCksIG5ldyBMYWIoNTcuMTk0MTk1Mzk4OTQ5NTc0LCA1OS42NDUwMDA2MTk3MzYxLCAzNC45OTk4MzAwMTI5NDAxOTQpLCBuZXcgTGFiKDU1LjYwMzk1MTA3MTg2MTM3NCwgNjYuMDEyODczODQ4NDU0ODMsIDQ3LjY3MTY5MzEzOTgyNzcyKSwgbmV3IExhYig1MS42NjM0ODUwMjk1NDc0NywgNjQuNzQ4Nzc4NTAyMDYyNSwgNDMuMjQ0ODc2Njk0ODU1Mjg2KSwgbmV3IExhYig0Ny4wOTQ1NTY2NjM1MDk2OSwgNjIuMjk4MzYwMzkwNzQyNzcsIDQwLjY3Nzc1NDI0Njk4Mzg4KSwgbmV3IExhYig0My43NzEyMjA2MzM4ODczOSwgNjAuMjg2MzM1MDkxODMzODQsIDQwLjMxNDQ0Njg2NjkyOTUyKSwgbmV3IExhYigzOS41NTUxODcwNzgwMDczODYsIDU4LjcwMzY4MTM1NTM4OTk3NSwgNDEuNjY0OTUwMjc3OTg2MjkpXSwgW25ldyBMYWIoOTIuNjgwNTM3NzYzMjc2NjUsIDkuNTE1Mzg1MjMyODA0MjYzLCAtLjg5OTQwNzI5Njk3NTQ4NTIpLCBuZXcgTGFiKDgxLjg2NzU2NjQzNjI4OTIyLCAyNS4wNTY4ODA4OTcyMzI1NywgLTEuOTQ3NTIzNTExNTM5MDYyMSksIG5ldyBMYWIoNzAuOTA5ODczODk1NDU3NjgsIDQyLjIxNzA1MjU3NzIwNTI2LCAtMS4wOTUxNTQ2MjQwNTc5NTkpLCBuZXcgTGFiKDYxLjA4MTQwODA1MjE2MTg2LCA1OC44NzEyMzMzMDc1ODcyMDQsIDIuMTAwODc2NDgwNDYyNjQzNCksIG5ldyBMYWIoNTQuOTc5NzAyMTk5ODY0NDgsIDY4LjU2NTMwOTM4MzY2ODg5LCA3LjMyNzQzMDcyODU2MDU2OSksIG5ldyBMYWIoNTAuODcyMjUwMzQwNzQ5MTc2LCA3NC42MDQ1OTE5NTkyNTUyOSwgMTUuMzUzNTc2MjU2ODk2MDczKSwgbmV3IExhYig0Ny4yNzczODY1MDE0NDU1OCwgNzAuNzc4NTU3NzY0Mjc4MDUsIDExLjcwNDM0MjczMjY0NTA4KSwgbmV3IExhYig0Mi41ODQyNDE4OTQ4NjUxNywgNjUuNTQxMTk1MzEzODMwOSwgNy41OTU1OTY0Mzk4MDM3OTcpLCBuZXcgTGFiKDM3Ljk3NzQ5MjQwNzI1NDgzNiwgNjAuNzQzNjI2MjE4NDIwNzUsIDIuOTg0NzEyNDk1MTQ1MzQ3NCksIG5ldyBMYWIoMjkuNjk5MjkwMDM0ODQ5NjA0LCA1MS45MDQ4NTAyMzcyMTMxMSwgLTQuODMwMTg2NjM0MTA3NjM2KV0sIFtuZXcgTGFiKDkyLjQzNjI2NTUxNjkwMTYsIDcuNTQyOTI3NDY3NzAyMjk5LCAtNi4wMzk4NDI4NDg2MDU4ODEpLCBuZXcgTGFiKDgxLjA3Mzk5Nzc2OTA0NzUxLCAxOS41NjM4NzAyMTc4MDUwMzYsIC0xNS43MTk2MjU0OTE5ODYwNDQpLCBuZXcgTGFiKDY4LjcxMzk0NzE3NzExODMxLCAzMy43OTk5MjgxMjQ5MDU1NiwgLTI2LjQ5NTM5OTcyMzM5MzIxKSwgbmV3IExhYig1Ni41OTYxNjEyMjYyMzYzMDUsIDQ3LjU4NTY2MzE4MzUxNTIsIC0zNi40ODA4MTY2MDU0MTA5MTUpLCBuZXcgTGFiKDQ4LjAwMjc5MTIxNzYyNDQzNCwgNTcuMzA4NjY0NDM5MzQ4NzksIC00My4yNTYxMTI3MTUyNTQ4KSwgbmV3IExhYig0MC42NjIxMTUzNDY5MjE2MSwgNjQuMDE5MTA3NzM4MTg0MzYsIC00OC4wNTkzMDE2MjU5MTA0MSksIG5ldyBMYWIoMzcuNjkwNzAyMjA4OTkyMTg1LCA2MS4xMzc2Mjc2NzczMjQ4MSwgLTQ5LjM4NDgwMzI3NDI0MzAyNiksIG5ldyBMYWIoMzMuNTYyOTE4NzA3MzE5ODEsIDU3LjYzNzM4MTIzOTI1NDEwNCwgLTUxLjM5NTU3MjQ5ODU1ODI4KSwgbmV3IExhYigyOS44NjUzOTEzMTQyMzQ1MTUsIDU0LjI5NzM3NDM5OTAxMzMzLCAtNTIuNjYwMTk3MzcxMjQ2MyksIG5ldyBMYWIoMjMuMTY3MjQyMzU0MjA0MzYsIDQ4LjUxNzY0NDM3MjgwNDk4LCAtNTUuMTYyNjc5NDkwMTUyOTMpXSwgW25ldyBMYWIoOTIuNDkxMDM0MjYwMTcyMDEsIDQuNzEyMzIwMDI1NzUyOTQ3LCAtNi41MzI4NjgwNzE3MDk3NjMpLCBuZXcgTGFiKDgxLjI0NjY4MzE5NTA1NTk3LCAxMS41MDY0MjczNDkwOTQ4NSwgLTE2LjY2NjYwMDYzNzI0NTM2NyksIG5ldyBMYWIoNjguNjE0ODgyMTY1NTQ2MjksIDIwLjM5NTMyOTA1MTk4MjgyNCwgLTI4LjUyMjAxODg1MTcxNTQxNiksIG5ldyBMYWIoNTUuNjAzNjk3OTMwNTMwMjMsIDMwLjkzMzUzNzc2ODkwNTAwNSwgLTQxLjE2NDM5MTIyMzU4NDg0KSwgbmV3IExhYig0NS44MzQ1NjYxOTA5Njk0MjYsIDM5LjI4ODA2MjcyMjM1Njc0LCAtNTAuNTIzMzIyMDUyNzcyNjM1KSwgbmV3IExhYigzNi42MDg2MjAyMjkzNTg2NjQsIDQ3LjI5Njg2MDAyODI4MTQzLCAtNTkuMTExNzY2NTg2MTg2ODQ2KSwgbmV3IExhYigzNC4xODk3OTEyMzc1NjI2MTYsIDQ2LjYwNDI2MDY1MTM5MTIzLCAtNTkuNTM5NjE2Mjc2NzY3MjkpLCBuZXcgTGFiKDMwLjUyNzEzMzY3MzM4MzYxLCA0Ni4wMTQ5ODIyNDc1NDUxOSwgLTYwLjE5OTc1MDUyNTA5MDY0KSwgbmV3IExhYigyNy40NDU4NTUyNDg3NzIyMiwgNDQuOTYxODA0MzE4NTQ3ODUsIC02MC40NjM5NTgxMDc1NjQzMyksIG5ldyBMYWIoMjEuOTg2Mjc2NzAzMjgyMTgsIDQ0LjI5Mjk2MDc2MjQ1NDczLCAtNjAuOTM2NTM2NTUxNzIwOTgpXSwgW25ldyBMYWIoOTIuODYzMTQ0MTE5ODM5MTgsIDEuNTMxODE0NzA2MTA2MTkzNywgLTYuMDI1MjQzNTI4OTUwNTUyKSwgbmV3IExhYig4MS44MzQ4MDczNzA1Mjk4LCA0LjQ2MDkzNDk1NTQ1ODkwNywgLTE1Ljg3MzU2MTAwOTczNjEzNiksIG5ldyBMYWIoNjkuNzc5NjkxMzc5NTY3MiwgNy45MDQzNjUyNTU4OTEyNzY1LCAtMjYuMzE3MDg0NjM0NjkzMiksIG5ldyBMYWIoNTcuNDg3ODY1MTk5Mzg3MzYsIDEyLjY4MTAxOTUwNDgyMjUzMywgLTM3LjIzMjAyMDEyOTE0NTI4KSwgbmV3IExhYig0Ny43NDU5MjU3ODgxMTEwMSwgMTguNTIwNzk5MzAyNDUyMzc0LCAtNDYuNDc1NDA2NzkwMDAzOTcpLCBuZXcgTGFiKDM4LjMzNDQwMzYxNDQ1NTQwNCwgMjUuNTc3MDA2NjgxNzA4MTIsIC01NS4yODIyNDE1MzI5OTI4NyksIG5ldyBMYWIoMzUuMTUxMTY0NTM5MDE1NTIsIDI2LjIzMTgxMjA4MDM4MTE2OCwgLTU0LjUzNzAwOTc4Nzg1NDA0KSwgbmV3IExhYigzMS4wODA0Mjk5ODgwMDc5NTcsIDI3LjA3Mzk0OTMwMTEwMTI0LCAtNTMuOTc1MDUyNzQ1Nzk5NTgpLCBuZXcgTGFiKDI3LjAyNjY3MjA4MDQ1NDkyMiwgMjguMTY1MjY2NDI3NTU4OTgzLCAtNTMuMjg5ODczMjU0ODIyMTgpLCBuZXcgTGFiKDE5Ljc1MTIwMTU4NzkyMTY3OCwgMzAuNjA3ODQ1NzY4OTUxMDEsIC01Mi4xMzg2NjUxOTI5NzQ3NCldLCBbbmV3IExhYig5NC43MDY4MjQ1NzM0ODcxNywgLTIuODM1NDg0NzM1OTg3MzI2LCAtNi45NzgwNDQ2OTQ3OTI3MDcpLCBuZXcgTGFiKDg2Ljg4Mzk4NDI5NzAwMTYsIC01LjE2OTA4NzI4NzU5NTUyLCAtMTcuODg1NjExOTI3NTQ5NTYpLCBuZXcgTGFiKDc5LjA0NTE1MzI0MDE1NTgsIC02LjgxNzc1MzUyNzAxNTc0NiwgLTI4Ljk2ODUzNzQ5MDQzMjE3NiksIG5ldyBMYWIoNzEuMTUwODM2OTcyNDI2MTMsIC01Ljk5NDc2Mzc1Njg1MDcwNywgLTM5LjcyNTQ5NDUxMTU4OTI3KSwgbmV3IExhYig2NS40ODEwNjA1ODkwNzgzMywgLTIuNzM1NzQ1NzkyNTM3OTM2LCAtNDguMTU0NzEyMzg5MjY1NjEpLCBuZXcgTGFiKDYwLjQzMDA5NDQwODUwODYyLCAyLjA3OTkyODg5NzMyMTU1OSwgLTU1LjEwOTM1ODQ3MDY5NjE2KSwgbmV3IExhYig1NS42MjI2NzY3NjkyMjE4OCwgNC45OTg2ODQzODQ0ODY5MTgsIC01NS4wMjE2NDcyOTQyOTkxNSksIG5ldyBMYWIoNDkuMjcwMDY2NDU5MDQ4NzUsIDguNDcwMzk4MzcwMzE0MzgxLCAtNTQuNDk0Nzk2ODM4NDU3NTQ2KSwgbmV3IExhYig0My4xNjgyODg1NjM5NDM1OCwgMTEuOTY4NDgzMDc2MTQzODQ0LCAtNTMuOTcyNTY3Mzc3OTc3OTc0KSwgbmV3IExhYigzMi4xNzc1Nzc5Mzg5NDE5MywgMTguOTYwNTQ5OTAyMjkzNTQsIC01My40NTE0NjM2NTA0OTA4OCldLCBbbmV3IExhYig5NS4zNTcxMzQ2Nzc2MjY1MiwgLTQuNzk3MTQ5MTU1Mzg4MjAzLCAtNi41NTAwMDI1NTA1MDQzMDgpLCBuZXcgTGFiKDg4LjI3OTQyNjQ5NTQwMDQzLCAtMTAuODM2MDA2NjE0NTgzODkyLCAtMTYuMzU5MzYxODIxOTQwMzc1KSwgbmV3IExhYig4MS4xMDAwOTA0NDkwMDk3NiwgLTE1LjMyMzA1NDUyMjk4MTcxNiwgLTI2LjQxOTEyMTE5MTMyMDk0NyksIG5ldyBMYWIoNzQuNDQ3MTM5NTgyNTk3NzcsIC0xNi42NjQ0MzI2MjUzNjI1NDcsIC0zNS4xOTcwMjY4NjkwMDAzNyksIG5ldyBMYWIoNjkuODc4MzY0NjU2MzczMTgsIC0xNC4yOTE1MTUzMzIwNTQ2OTMsIC00MS44Mjc0MzAzMjk3NTUxNzQpLCBuZXcgTGFiKDY1LjY4ODUxMjU5MTc4OTEzLCAtOS42MTI2MzU3MjE5NjM2OTIsIC00Ny4zNDA5MTYxNjAzOTE5MSksIG5ldyBMYWIoNjAuODgzNTc5OTQzMDg5NzMsIC03LjI1MjgxOTAyNzE4NDk0MywgLTQ2LjY3NzUzNzMxNTk1NjM0KSwgbmV3IExhYig1NC4yNjE2NjQ5NTQyNjE2NiwgLTMuODE0MTgzNjg5NzkwODA2NiwgLTQ1Ljk3OTM5NDc1NzYyNDk4KSwgbmV3IExhYig0OC4xMDY2MTg5NTA3MjY3MywgLTEuMzc4OTk4Nzg0NDY0MzQ3LCAtNDQuMzQ0NjY3NTAyMDY3NzgpLCBuZXcgTGFiKDM2LjM0NDAxMTQ3MDU3MjgyLCA1LjA2NzgxMjQwNDcxMzU0NSwgLTQzLjExNzg2MjU3NTYxOTE1KV0sIFtuZXcgTGFiKDk1LjY5Mjk1MTU0NTk5NzUzLCAtNi44OTg3MTYxMjczMDExNDEsIC0zLjk5NDI4NDIyOTY1NDQyMSksIG5ldyBMYWIoODkuNTI4NDI1MjQwNTkwMDQsIC0xNi40MTIzOTgyODk2MDE3MjUsIC05LjI2MDQ2NjA2OTI2NjY5MyksIG5ldyBMYWIoODMuMzIwMzEyMTQ2NTU3NDgsIC0yNC44MzAzNjg0MDcyODA5OCwgLTE0LjU2ODY3MzU4MzMwNDYwMyksIG5ldyBMYWIoNzcuMzUzMzgzMTM3NTI5NTgsIC0zMC4yMDE3MDg1NzIyMTUxMDQsIC0xOC45MjM1ODI4NDcyMTEwMSksIG5ldyBMYWIoNzMuNDUzMjIwOTM4NTc3ODEsIC0zMS44ODU5MDM5MDE4OTM4MywgLTIxLjEzMDQ1OTk5MjUxMzY4NiksIG5ldyBMYWIoNjkuOTc2Mzg0NjUwNjQ3ODMsIC0zMC42Nzk4NTAzMjQ1NDc5NTMsIC0yMy4xODY2ODU2NjExMzY3MDcpLCBuZXcgTGFiKDY0LjQ0NDkxNzE2NTUzNzc3LCAtMjkuMDgzMzc0MzQ1ODQ0NTcsIC0yMS4xNTQ5MzU3NjkxNTYyMTQpLCBuZXcgTGFiKDU2Ljk5ODE2NDMyOTYxMTAzLCAtMjcuMzEwODE0NzcyNzk0NTEsIC0xNy44Njk4ODgxNTc2NzQ0MyksIG5ldyBMYWIoNDkuNzU0NjQxODIyNTU2NzEsIC0yNS4zMzUzODM1MDM2OTQyNDIsIC0xNS4wMjQ3MjI1OTE2NjI3ODcpLCBuZXcgTGFiKDM2LjUyNzI1ODk0MjY0NDMyLCAtMjIuMTI5NjQxNzQ0MTk0NTE1LCAtOS4xNzYxNTkxNDY4OTQzMDMpXSwgW25ldyBMYWIoOTQuMTg0NTM5NDE1ODk5MTgsIC02LjA4MzUxNzAzNDI4OTcyLCAtMS41NDg4OTE2MDUxMTYxOTgzKSwgbmV3IExhYig4NS42ODE3NzA3NzQxNDQ1NywgLTE1LjMzMzE3OTQ0MDI5ODYwNiwgLTIuODUxOTgyNTc2MTQ3NjA0OCksIG5ldyBMYWIoNzYuODUwNjc4NDcxOTA0MDUsIC0yNC44NDQwNTkxNzMxODk3MTMsIC0zLjg3NTA3ODUxMzIxOTI2NTYpLCBuZXcgTGFiKDY4LjAyNzYyMjQyNTcwMTM4LCAtMzIuNTY2ODYxMTU0MTIwNzE2LCAtNC4wMTUyMzEwODQ0MDcxMzQpLCBuZXcgTGFiKDYxLjY2NzI1NzMwNDUyNTQ2NCwgLTM2LjA2NzUyNjAzMjg5MzU0LCAtMy40NzM0MDQ2NDAxNzUzODE1KSwgbmV3IExhYig1NS42NzMxMDM5NzM5MDE5NiwgLTM2LjY2MDY5OTYwNjI2MzI4LCAtMi4xMjU2MTc5MTUxNjk2NTMpLCBuZXcgTGFiKDUxLjA1OTE0OTQ5NTE5NzcxNSwgLTM0LjY1MDE5MTYwMzAxNDA4LCAtMS4zOTEwNDg0MzAwNDMyNTEzKSwgbmV3IExhYig0NS4yNjkwODEwMTkyMTg0MDUsIC0zMi4xMzI0NDc3NTQyMjk0MSwgLS40NTI2MzcxODUyNjk3Nzc1KSwgbmV3IExhYigzOS4zNjg5OTA3NjA1OTM4NCwgLTI5LjI1MjY0NDY4NTgzMTYxLCAtLjAzNTYyNTY0NjczMTcwNzMyKSwgbmV3IExhYigyOC41ODM2MzA0MzcwMTQ3NywgLTI0LjU4NTQ2NTUxNjEzNjQxMywgMS44MDM3NDAyMTYyNDkyMzg5KV0sIFtuZXcgTGFiKDk1LjMwNTMwMTgzNTY1MjIzLCAtNi40MzA0MTU2NDU3MzkyNjMsIDQuMjkyOTUwNTk0NDU5NTk5KSwgbmV3IExhYig4OC40OTAxNDU3OTE1MjE0MywgLTE1LjIzMTQ3NzQ0OTUyNzAyLCAxMC44NDgyNjExNzc2ODMxMzgpLCBuZXcgTGFiKDgxLjIyNjE2ODcwNTc1Mzc2LCAtMjQuOTkzODg2MTY4NTUxNTgzLCAxOC4xNDQ2OTY4MDMzMzA4ODQpLCBuZXcgTGFiKDc0LjMwMzYxNzIxNTU4ODAyLCAtMzUuNTYwODg2OTYwNjczNTYsIDI2Ljc4MTUxNTI1MTkwNzcyNyksIG5ldyBMYWIoNjkuMDQzMDk5NTI3NzQ0MiwgLTQyLjYxNTU2MTI2NTk1OTk1LCAzMy4xNzEwOTU2MzEyNjY2NSksIG5ldyBMYWIoNjMuOTc3NDIxODE0MDcyOTI2LCAtNDguNTQyOTI2NzMzMTk5ODIsIDM5LjczMjQxNTI2MzQyOTM5KSwgbmV3IExhYig1OC43Nzc5NjA4NTM0NjEzNjYsIC00Ni4xMTUzNjkyNDc4MDEzLCAzNy44Mzg5MTA3NDUyMjU1NzYpLCBuZXcgTGFiKDUyLjQxMTA4Njg4OTc0OTA0LCAtNDMuMjE3NjE3OTI0ODU3NjIsIDM1LjYyMjUwNjU5MDA5NDI0KSwgbmV3IExhYig0Ni4yODEzODczMDc2NDI2LCAtNDAuMjU4MTYyMjc2NzUzNjEsIDMzLjMyMzQzMjI5MzM4NzYxKSwgbmV3IExhYigzNC42ODU2NTUzMDU4MTQ1MTQsIC0zNC43NTM0Mzg3ODUxMDMxMiwgMjguODY2NzM5MDM0MzU5NzY3KV0sIFtuZXcgTGFiKDk2LjcwNTE4MTY5MzU1OTU0LCAtNC45Mjk5ODc4NDUwOTU0NjMsIDYuMzk3MDg0NTIzMTY4ODk0KSwgbmV3IExhYig5MS42NjQxNjA2MTE5OTQzOCwgLTEyLjA1NzAzMjA0MTk0NTY5MywgMTYuMDU0NjA0NTc5Mjc1MTQzKSwgbmV3IExhYig4Ni4yMjQ0Mzk1ODY1NDQ5LCAtMTkuNjEzNjQ2ODM0MDgwNjIyLCAyNi4zODQ5MDY0MjM0NTQyMzYpLCBuZXcgTGFiKDgwLjgzNDA0ODc5NjM2OTE5LCAtMjcuMDgwMTcxODQwNzU2ODkzLCAzNy4zNzg0OTM3NDIwMjEzMzQpLCBuZXcgTGFiKDc2Ljc5NTQzNzI1MTA4OTY0LCAtMzIuNzY2NTk3MTk3MzY3NTIsIDQ1LjkxMjE5MDU3MjQ0NDQ0NSksIG5ldyBMYWIoNzIuOTAwMjUyOTcwMjgwMTksIC0zNy41NDkxMzkyMjM5MjczODQsIDUzLjUxOTU5NDk2MTAzMDI3KSwgbmV3IExhYig2Ny4yMTUzMjMxMDI3MjA3OSwgLTM2LjU2MzA0ODcwNzczNDg2LCA1MC40OTYyOTA1MTI2ODg5NCksIG5ldyBMYWIoNTkuOTEwNTExNDIyMTAxOTUsIC0zNS43NzAxMTQ2NjA2MzM1NywgNDYuNTY0NjU4NDc5NzYxODcpLCBuZXcgTGFiKDUyLjUxMDE1ODQxMDg0NTExLCAtMzQuNDc5MDM0NDA2OTkyMzUsIDQyLjIwNzIzODY4NzI0MjY4KSwgbmV3IExhYigzOS40MTE5MTk4MzM1Mzg3OCwgLTMyLjgwNDYwOTc0MzUyNjQyLCAzNS4yNTU0OTA1ODU2MzAwMTQpXSwgW25ldyBMYWIoOTcuOTk1MDYwNTc4ODM0MjgsIC00LjA1OTYzMjQ4Mjc0MTQ5NCwgOS4zNTU3OTc2MDIzODE1MjEpLCBuZXcgTGFiKDk0LjgwOTI2MjM1OTc2NTM2LCAtOS4yMzcwOTE0NjczNTI4NTUsIDIzLjIzMDY1MDA2NDgyNDk4NSksIG5ldyBMYWIoOTEuODUyMDU4NDM1MjYxNjcsIC0xNS4wNTM5MTczMjcwMTExMTQsIDM4Ljg2MTE1MTgyMjA2NTk4KSwgbmV3IExhYig4OC43NTgxMjE0MjA4MDI0MiwgLTE5LjU0MjkwMDQwMDE2NDA5NywgNTMuNzE3ODU2NzU3ODM3MDkpLCBuZXcgTGFiKDg2LjI3NDA0MTgwNzI5NTE1LCAtMjIuMTczOTkyODkxMTIxNTk2LCA2My45Nzg2MzkwNjUyMzI1MTQpLCBuZXcgTGFiKDg0LjIwNTY2ODM1Mzc2NDkyLCAtMjQuMjcwNjQzNTIwOTg5MzQyLCA3Mi43OTYyNDA2NzAzMzAzOCksIG5ldyBMYWIoNzguMjc5MTUxMDA2MDM5OTcsIC0yMS4xODE4NTAwNTY0MDI0OTYsIDY4LjgyNzYzNDEyMjk3OTY1KSwgbmV3IExhYig3MC44MjM4NTgxMTg5MjgyNCwgLTE3Ljc4ODE0ODkzMjUyNTY3MiwgNjQuMDAzMjc4MTc5ODgxMjgpLCBuZXcgTGFiKDYyLjkzNjg2NzAxMjg2ODAzNSwgLTEzLjY5NzQxMjExMTY4NDkwMywgNTguNTEzMDAwNTA5Mjg3ODM1KSwgbmV3IExhYig0OS40OTg2MTA4ODE0NTI1MzUsIC02LjQ4NTIzMDU2NDM4NDcxNSwgNDkuNjc0MzI3MjI4MzM3NTEpXSwgW25ldyBMYWIoOTguOTM4ODUxMjk3NTI3NTksIC0zLjAwOTg0NzAyODg1NDMxNzgsIDEwLjc2NTczNjgzMzc5MDAwOCksIG5ldyBMYWIoOTcuMjI2ODk3ODQ4MjQwNzQsIC02LjE3NDU5OTM2ODczNDQ5MSwgMjYuMjI5MzI0MTczNTUxNDYpLCBuZXcgTGFiKDk1LjU4MDkyOTQ3ODI4NzY2LCAtOC45MDcxMzI4NDg0NzM4ODYsIDQzLjU2Mjk3MjkxNDQ2NTY3KSwgbmV3IExhYig5NC4wOTAwOTUxNTcwMjQ4NiwgLTEwLjUwOTYyODk0MjcxMDczNSwgNjAuMjAwMTk1MTQyMzExODgpLCBuZXcgTGFiKDkzLjA2NTQ2NzQ2NjgzMDg3LCAtMTEuMDA4NTU4NDc2MDEzMDA4LCA3MS43NjUwMDgyNjAwNTQ3NyksIG5ldyBMYWIoOTIuMTI5NzUwMTc3NjAxMjgsIC0xMC44MzAwMjMwOTQ4NjgzMDIsIDgwLjkwOTA1NTk2NDAwODkpLCBuZXcgTGFiKDg3LjEyMTg4MzQ5MTY4NjA5LCAtMi4zNzY0MzAwMDk5MjM5MzU1LCA3OC4xNDg2ODE5NTM3MzQwNyksIG5ldyBMYWIoODAuOTYyMDA0NDI0MTk5MDUsIDguODQ5MzMzNzkyNzI5MDY0LCA3NS4wNTA1MDcwMDA5MjY3OSksIG5ldyBMYWIoNzUuMDAzNDI3NzA3MTgwODYsIDIwLjM0MDE3MzU2Njg3OTI4MywgNzIuMjQ4NDE5MjU5NTg5MzQpLCBuZXcgTGFiKDY1LjQ4MjA3NzU3NDMxNTY3LCAzOS42NDcwNjQ5NzA0NzYwOTQsIDY4LjM0ODcyODQxNzY4NjU0KV0sIFtuZXcgTGFiKDk3LjU2NDIzOTIwNzQzMzcsIC0xLjQ0NTUyNTYzOTQwNTAzMiwgMTEuODgxMjU0MzE2Mjk3Njc0KSwgbmV3IExhYig5My42NzA1Nzk1Mzc0OTQ1NiwgLTEuODY5MzA5Njg2MjA3MjQzNCwgMzAuMDI4ODg2NzA0MTU2NTEpLCBuZXcgTGFiKDg5Ljk0NTcxNDkyODA0MTA3LCAtMS4wMjI0NTAzODE0NzY5NjkyLCA0OS42NDk1NDIzNjE2NDIyNzYpLCBuZXcgTGFiKDg2LjcxMDA5MTY0MTUzODAxLCAxLjA0OTYwNjYzOTY0MjgxOTQsIDY4Ljc3Mzc3MzQyNDA5NzM5KSwgbmV3IExhYig4My43ODc3Mzk5MzMxOTIxMSwgNS4yNDgyMzE4MjAwOTg0MjUsIDc4LjkyOTIwNDU3ODUyNzE2KSwgbmV3IExhYig4MS41MjE5MTM4MjA4MDIyOCwgOS40MDM2NTUzNzA3MDcxOTksIDgyLjY5MjU3MTEyOTgyNzQ2KSwgbmV3IExhYig3OC4xNzI0MDk3MzgwNDY5NywgMTYuNjI4NTEyODg2NTMxODg3LCA4MS4wOTM1ODMxODgwNjIwOCksIG5ldyBMYWIoNzMuODA4OTk2NTQzODEwNTIsIDI2LjUzNjE0MzE1MjUwODc0LCA3OC4yMTc1NDA1MjE4MTcyMyksIG5ldyBMYWIoNzAuMTEzNDUxMTY2NTc2NCwgMzUuMzAwNzYyMzM1OTc0NCwgNzUuODc1MTA5OTIxMzg1OTMpLCBuZXcgTGFiKDYzLjg2NDYwNDA1NTY1NzE3LCA1MC45NDY0ODIxNDUwNTk1OSwgNzIuMTc4MTU2ODIxMjQ0MjMpXSwgW25ldyBMYWIoOTYuMzA0NTk1MTc4MDEzODcsIC45MjMxNTExNzIyODI0NzcsIDEwLjU5ODQzOTQ0NjA4MzA3NCksIG5ldyBMYWIoOTAuNjgzMjAwODI4NjUwODcsIDQuMTAzNzc0OTY0NjgxMDYyLCAyNi40ODU3OTM3MjE5MTYxMjgpLCBuZXcgTGFiKDg1LjAwMDU1Mjg3MTg2MjMzLCA5LjA0NzE4MTc1ODg2NjY1MSwgNDQuNTE0MDc2MjI1ODA3OTIpLCBuZXcgTGFiKDc5LjQyNDI4NDk1NzQyOTUzLCAxNi40NTI2MTA3MjQ0Mzk4NzUsIDYyLjA4NzIxNzM5MDc0MjAxKSwgbmV3IExhYig3NS40Nzc5MjY5OTI4OTc3NCwgMjMuMzk1NzQyOTI4NDUxODY3LCA3Mi42NDM0NzYxMTIzNjUwMSksIG5ldyBMYWIoNzIuMDQyNDY1NjE1NDgzODgsIDMwLjY4MTkyMTAxMjM4MjA5OCwgNzcuMDg1NzkyOTg5MDQ2MDMpLCBuZXcgTGFiKDY4Ljk0NzI0MzM4OTQ2OTc1LCAzNS4yMjAxNDc3ODQzMzg2MywgNzQuODg0MjUwNDQ1OTUxMTEpLCBuZXcgTGFiKDY0LjgzMDE3NDk1NTM1MjI5LCA0MC45MTIwMDczMDA5OTcwMywgNzEuOTU5NjA1MzU0NTQyOCksIG5ldyBMYWIoNjAuODUzNDIwNzQ3MTg3MSwgNDYuNDE0ODM1OTA1MTA2ODEsIDY5LjE4MDYxOTYzNDE1MjExKSwgbmV3IExhYig1NC43NzU3MTc0Mjk2MjI4NywgNTUuMjgyNzUxMDE5MzYwMDM1LCA2NS4xMDE5MzQwMzU0NzkyMildLCBbbmV3IExhYig5My42OTIxOTg0NDY3MTk1NywgNS43NjM5NzkzMzQzNTgyOTMsIDMuMTcwMDE2Mjc5NjQ2OTAzNCksIG5ldyBMYWIoODYuMDQ2Mjk0MzQyNzY0MjgsIDE1Ljc1MDg0MzgwMzk1ODE5MiwgMTQuODI4NDc2OTI3MDkwOTk0KSwgbmV3IExhYig3Ny41NDAxMDA0MjkzODMzNiwgMjcuOTAxMTM4NDI1NDAwNDMsIDI1Ljk5NjQ1MjI5Mjg5MDY1KSwgbmV3IExhYig2OS43NDA5NTQ1NjcwNzg1NywgNDEuMTQ0ODczNzc1NTIyNTYsIDM5LjQ0MzMyMDE3ODkwMDAyNCksIG5ldyBMYWIoNjQuMzcwODUzNDQ1MzkzNDEsIDUxLjg5MDM3OTYyMDQ0MzU3NSwgNTAuODEzMTI0NzEwNDY0MTUpLCBuZXcgTGFiKDYwLjA2NzgwODM3Mjc3NDM1LCA2MS42NTI1ODczNjExODgxNywgNjEuNTQ3NzE4MjkxNjUyMjEpLCBuZXcgTGFiKDU3LjI4NzA3OTE1MjMyMzYzLCA2MC4zMjUwNjY0MzA4ODEyLCA2MC4wNzM0MTUzNjM3NjQ0NyksIG5ldyBMYWIoNTMuODEwMDUyNjE2MjkzODQ1LCA1OC4zNjc2MDk0Mzc4MDE2MiwgNTguMTk1ODY4MDY2OTQ4ODQpLCBuZXcgTGFiKDUwLjMwMTM1MjQwNTEwNTg3NCwgNTYuNDAxMDQ4OTgwODk5MzcsIDU1LjkyNDE0MTk5MjQwNDM0NCksIG5ldyBMYWIoNDMuODY0Nzc5OTQ1NDgzNDMsIDUyLjk3MDg4NzcwMzkxMDcyNiwgNTIuMzAwNjc5ODkyMjU1MzIpXSwgW25ldyBMYWIoOTMuMjk4NjQ4ODgwNjk5ODcsIC45OTE1NDU2MDkwNDc1NzI3LCAxLjQ0MjM1MzA3NjM3ODQxMSksIG5ldyBMYWIoODIuODA4ODQzNTkwMDQwODEsIDMuMTE2MjIxOTAzMzQyMjA5LCAzLjM1MjMwNTk0NTE0NjMwNTUpLCBuZXcgTGFiKDcwLjk1NDkzMDQ3NjY4MTg1LCA1LjQ2OTc0MjE5MzM0NDc4NCwgNS40NDkwMDk0OTQ1NTM0OTIpLCBuZXcgTGFiKDU4LjcxMjkzNDYxOTEwMzA2NiwgNy45OTA5OTEwNzUzNjMzODUsIDguMzUyNDg4NDk1MzY3NjI3KSwgbmV3IExhYig0OS4xNTAyMDg1NTI4NzU4OTUsIDEwLjU3MDk4NDk4MTAwMDM5NywgMTAuODMxNDQwMTUxMTk3OTI0KSwgbmV3IExhYigzOS42MzIwMDE1MTgzNzc0OSwgMTMuMTM4ODgxOTYxNjI3MjQxLCAxMy41MzE1NzQ3MTE1MTE4ODUpLCBuZXcgTGFiKDM1LjYwMDk5NjY4MjAxNTc1NCwgMTIuNDAzNTI4NDc3NTcyOTUsIDEyLjEwNDMyMTgzOTAyNDQ5KSwgbmV3IExhYigzMC4wODQyNzEyNjU3NTk5NTIsIDExLjMxNzE0ODE0OTg3ODA4MSwgMTAuNTQ3NDg0MzA0Mjk2MjE3KSwgbmV3IExhYigyNC41NTUwMTQ2OTY0MTY1NzgsIDEwLjgxNjYxMzMxNjc4MjQ2NCwgOC41MDY1NTUzMDY3OTE5ODQpLCBuZXcgTGFiKDE4LjM1MDU1MjI2NTE0NDA0LCAxMC4yMjU3MjU1NTAzMzg3NjUsIDcuMDU4NTgyNzY5ODgyNTcxKV0sIFtuZXcgTGFiKDk4LjI3MjAyNzQwOTgwMjE5LCAtMS42NDE4MzkzNjQ0NjM0OTMyRS01LCA2LjU2NzM1NzQ1Nzg1Mzk3M0UtNiksIG5ldyBMYWIoOTYuNTM3NDkzMzY1NDg1NjcsIC0xLjYxNjkxNzkwNTEyMjg2MUUtNSwgNi40Njc2NzE1OTgyODY5ODRFLTYpLCBuZXcgTGFiKDk0LjA5NzgzNzg5ODc3ODEsIC0xLjU4MTg2NTM4MzEyNjc2OEUtNSwgNi4zMjc0NjE1MzI1MDcwNzNFLTYpLCBuZXcgTGFiKDg5LjE3NzI4MzczNDkzNjEzLCAtMS41MTExNjc3Njg2OTc0MTlFLTUsIDYuMDQ0NjcxMDc0Nzg5Njc2RS02KSwgbmV3IExhYig3Ni42MTExOTkwMjIzMTMyMywgLTEuMzMwNjIwNTkxNDg4Njk2RS01LCA1LjMyMjQ4MjM0Mzc1MDMyM0UtNiksIG5ldyBMYWIoNjUuMTE0MjQ3NzQxMjc1MTYsIC0xLjE2NTQzNDUxNTU1OTgzNzhFLTUsIDQuNjYxNzM4MDYyMjM5MzUxRS02KSwgbmV3IExhYig0OS4yMzg5ODk2MjA4MjgwNjUsIC05LjM3MzQxNzQzMTEyNDQwOUUtNiwgMy43NDkzNjY5NzI0NDk3NjM2RS02KSwgbmV3IExhYig0MS4xNDI2Njg0MzgwNDg0OCwgLTguMjEwMTUyOTQ2Mzg2MjczRS02LCAzLjI4NDA2MTE4OTY1NjczOTVFLTYpLCBuZXcgTGFiKDI3Ljk3NDg1NzIwNjAwMzcwNSwgLTYuMzE4MjI2MTkyMjM2NzY0RS02LCAyLjUyNzI5MDQ3Njg5NDcwNThFLTYpLCBuZXcgTGFiKDEyLjc0MDAxMTMzMTMwMjcyNSwgLTQuMTI5MzExNjk4MTMxMTMzRS02LCAxLjY1MTcyNDY3OTI1MjQ1MzFFLTYpXSwgW25ldyBMYWIoOTQuMjc2NjUyMTI1MTYyMzYsIC0uNjM3NTcxMDQ2MTA5MzQyLCAtMS4zMTM1MTUzNzg5OTY2ODgpLCBuZXcgTGFiKDg1Ljc3Nzg4MDAxNDkyMDk3LCAtMi4yNzc3ODExMDg0NTEyODIyLCAtMy4wMTc3NzU4NDE2MTUxNTU3KSwgbmV3IExhYig3Ni4xMjI5NjMyNTAxNTIzMSwgLTMuNDAxNTAyOTg4ODgzODA5LCAtNS4xNjg2Nzg5Mjk3NzkwOCksIG5ldyBMYWIoNjYuMTYzNDAxMDg5MDgzNjUsIC00LjgxOTYyNzE4MzA3OTA0NSwgLTcuNTIwNjk3NjMxNjE0NDA0KSwgbmV3IExhYig1OC4zNTc1MjQ3ODUxMzY0NSwgLTUuNzE5NTA4OTEwMDg5MjEwNSwgLTkuMTY1OTg4OTE2NjEzNDg4KSwgbmV3IExhYig1MC43MDc0ODA4MjIwMjcxNSwgLTYuODM3OTkyOTY1Nzk5NDU1LCAtMTAuOTU2MDU1MTEyNDA5MzU3KSwgbmV3IExhYig0NC44NTkxNzg2NzY0NzYzMiwgLTYuNDExOTkwNTU5MjM5NTc4LCAtOS43NDUxMTk4Mjg3ODc2NSksIG5ldyBMYWIoMzYuOTI0NTg5MzA1NjY1MDQsIC01LjMxOTg3ODYxMDg0NTU5NiwgLTguMzQxOTQzNDc0NTYxNTUzKSwgbmV3IExhYigyOS4xMTUzMzQ3ODQ2Mzc2MTgsIC00LjE2ODkwNzgyODY0NTA2OSwgLTYuODYyOTk2MjE5OTk3MzMwNCksIG5ldyBMYWIoMTkuOTU4MzM4NDUwNzk5OTE0LCAtMy4zMTE2NzIxNDUzMTg2NjE3LCAtNS40NDg2MTQyMTA0NzM2Nzg2KV1dXHJcbmV4cG9ydCBjb25zdCBDYiA9IFsyLjA0ODg3NTQ1NywgNS4xMjQ3OTIwNjEsIDguNzUxNjU5NTU3LCAxMi4wNzYyODc3NCwgMTMuOTE0NDk1NDIsIDE1LjkyNzM4ODkzLCAxNS40NjU4NTgxOCwgMTUuMDk3NzkyMjcsIDE1LjEzNzM4NjczLCAxNS4wOTgxODM3Ml1cclxuZXhwb3J0IGNvbnN0IERiID0gWzEuNzYyNDQyNzE0LCA0LjIxMzUzMjYzNCwgNy4zOTU4Mjc0NTgsIDExLjA3MTc0MTU4LCAxMy44OTYzNDUwNCwgMTYuMzc1OTE0NzcsIDE2LjI3MDcxMTM2LCAxNi41NDE2MDgwNiwgMTcuMzU5MTY3MjcsIDE5Ljg4NDEwODY0XTtcclxuLyoq5bqU6K+l5piv5Liq57K+5bqm5Y+Y6YePICovXHJcbmV4cG9ydCBjb25zdCBPID0gTWF0aC5wb3coMiwgLTE2KSIsImltcG9ydCBjaHJvbWEgZnJvbSBcImNocm9tYS1qc1wiO1xyXG5pbXBvcnQgeyBtYWluIH0gZnJvbSAnLi9jbGFzcyc7XHJcblxyXG5sZXQgY29sb3IgPSBjaHJvbWEoJyNGNDQzMzYnKS5nbCgpXHJcbmxldCBnbENvbG9yID0geyByZWQ6IGNvbG9yWzBdLCBncmVlbjogY29sb3JbMV0sIGJsdWU6IGNvbG9yWzJdLCBhbHBoYTogY29sb3JbM10gfHwgMSB9XHJcbmxldCBsaXN0ID0gbWFpbihnbENvbG9yKVxyXG5jb25zb2xlLmxvZyhsaXN0KSIsIi8qKlxuICogY2hyb21hLmpzIC0gSmF2YVNjcmlwdCBsaWJyYXJ5IGZvciBjb2xvciBjb252ZXJzaW9uc1xuICpcbiAqIENvcHlyaWdodCAoYykgMjAxMS0yMDE4LCBHcmVnb3IgQWlzY2hcbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogUmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0XG4gKiBtb2RpZmljYXRpb24sIGFyZSBwZXJtaXR0ZWQgcHJvdmlkZWQgdGhhdCB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnMgYXJlIG1ldDpcbiAqXG4gKiAxLiBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXNcbiAqIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyLlxuICpcbiAqIDIuIFJlZGlzdHJpYnV0aW9ucyBpbiBiaW5hcnkgZm9ybSBtdXN0IHJlcHJvZHVjZSB0aGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSxcbiAqIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIgaW4gdGhlIGRvY3VtZW50YXRpb25cbiAqIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxuICpcbiAqIDMuIFRoZSBuYW1lIEdyZWdvciBBaXNjaCBtYXkgbm90IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4gKiBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbiAqXG4gKiBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIlxuICogQU5EIEFOWSBFWFBSRVNTIE9SIElNUExJRUQgV0FSUkFOVElFUywgSU5DTFVESU5HLCBCVVQgTk9UIExJTUlURUQgVE8sIFRIRVxuICogSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSBBTkQgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQVJFXG4gKiBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBHUkVHT1IgQUlTQ0ggT1IgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCxcbiAqIElORElSRUNULCBJTkNJREVOVEFMLCBTUEVDSUFMLCBFWEVNUExBUlksIE9SIENPTlNFUVVFTlRJQUwgREFNQUdFUyAoSU5DTFVESU5HLFxuICogQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSxcbiAqIERBVEEsIE9SIFBST0ZJVFM7IE9SIEJVU0lORVNTIElOVEVSUlVQVElPTikgSE9XRVZFUiBDQVVTRUQgQU5EIE9OIEFOWSBUSEVPUllcbiAqIE9GIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4gKiBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsXG4gKiBFVkVOIElGIEFEVklTRUQgT0YgVEhFIFBPU1NJQklMSVRZIE9GIFNVQ0ggREFNQUdFLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBjaHJvbWEuanMgaW5jbHVkZXMgY29sb3JzIGZyb20gY29sb3JicmV3ZXIyLm9yZywgd2hpY2ggYXJlIHJlbGVhc2VkIHVuZGVyXG4gKiB0aGUgZm9sbG93aW5nIGxpY2Vuc2U6XG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLFxuICogYW5kIFRoZSBQZW5uc3lsdmFuaWEgU3RhdGUgVW5pdmVyc2l0eS5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4gKiBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhblxuICogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCxcbiAqIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljXG4gKiBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICpcbiAqIE5hbWVkIGNvbG9ycyBhcmUgdGFrZW4gZnJvbSBYMTEgQ29sb3IgTmFtZXMuXG4gKiBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAqXG4gKiBAcHJlc2VydmVcbiAqL1xuXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuICAgIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcbiAgICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAgIChnbG9iYWwuY2hyb21hID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG4gICAgdmFyIGxpbWl0ID0gZnVuY3Rpb24gKHgsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICggbWluID09PSB2b2lkIDAgKSBtaW49MDtcbiAgICAgICAgaWYgKCBtYXggPT09IHZvaWQgMCApIG1heD0xO1xuXG4gICAgICAgIHJldHVybiB4IDwgbWluID8gbWluIDogeCA+IG1heCA/IG1heCA6IHg7XG4gICAgfTtcblxuICAgIHZhciBjbGlwX3JnYiA9IGZ1bmN0aW9uIChyZ2IpIHtcbiAgICAgICAgcmdiLl9jbGlwcGVkID0gZmFsc2U7XG4gICAgICAgIHJnYi5fdW5jbGlwcGVkID0gcmdiLnNsaWNlKDApO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8PTM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgPCAzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJnYltpXSA8IDAgfHwgcmdiW2ldID4gMjU1KSB7IHJnYi5fY2xpcHBlZCA9IHRydWU7IH1cbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdChyZ2JbaV0sIDAsIDI1NSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSBsaW1pdChyZ2JbaV0sIDAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIC8vIHBvcnRlZCBmcm9tIGpRdWVyeSdzICQudHlwZVxuICAgIHZhciBjbGFzc1RvVHlwZSA9IHt9O1xuICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gWydCb29sZWFuJywgJ051bWJlcicsICdTdHJpbmcnLCAnRnVuY3Rpb24nLCAnQXJyYXknLCAnRGF0ZScsICdSZWdFeHAnLCAnVW5kZWZpbmVkJywgJ051bGwnXTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBsaXN0W2ldO1xuXG4gICAgICAgIGNsYXNzVG9UeXBlWyhcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIpXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICB9XG4gICAgdmFyIHR5cGUgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIGNsYXNzVG9UeXBlW09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopXSB8fCBcIm9iamVjdFwiO1xuICAgIH07XG5cbiAgICB2YXIgdW5wYWNrID0gZnVuY3Rpb24gKGFyZ3MsIGtleU9yZGVyKSB7XG4gICAgICAgIGlmICgga2V5T3JkZXIgPT09IHZvaWQgMCApIGtleU9yZGVyPW51bGw7XG5cbiAgICBcdC8vIGlmIGNhbGxlZCB3aXRoIG1vcmUgdGhhbiAzIGFyZ3VtZW50cywgd2UgcmV0dXJuIHRoZSBhcmd1bWVudHNcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID49IDMpIHsgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3MpOyB9XG4gICAgICAgIC8vIHdpdGggbGVzcyB0aGFuIDMgYXJncyB3ZSBjaGVjayBpZiBmaXJzdCBhcmcgaXMgb2JqZWN0XG4gICAgICAgIC8vIGFuZCB1c2UgdGhlIGtleU9yZGVyIHN0cmluZyB0byBleHRyYWN0IGFuZCBzb3J0IHByb3BlcnRpZXNcbiAgICBcdGlmICh0eXBlKGFyZ3NbMF0pID09ICdvYmplY3QnICYmIGtleU9yZGVyKSB7XG4gICAgXHRcdHJldHVybiBrZXlPcmRlci5zcGxpdCgnJylcbiAgICBcdFx0XHQuZmlsdGVyKGZ1bmN0aW9uIChrKSB7IHJldHVybiBhcmdzWzBdW2tdICE9PSB1bmRlZmluZWQ7IH0pXG4gICAgXHRcdFx0Lm1hcChmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXTsgfSk7XG4gICAgXHR9XG4gICAgXHQvLyBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgXHQvLyAod2hpY2ggd2Ugc3VwcG9zZSBpcyBhbiBhcnJheSBvZiBhcmdzKVxuICAgICAgICByZXR1cm4gYXJnc1swXTtcbiAgICB9O1xuXG4gICAgdmFyIGxhc3QgPSBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICBpZiAoYXJncy5sZW5ndGggPCAyKSB7IHJldHVybiBudWxsOyB9XG4gICAgICAgIHZhciBsID0gYXJncy5sZW5ndGgtMTtcbiAgICAgICAgaWYgKHR5cGUoYXJnc1tsXSkgPT0gJ3N0cmluZycpIHsgcmV0dXJuIGFyZ3NbbF0udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xuXG4gICAgdmFyIFBJID0gTWF0aC5QSTtcblxuICAgIHZhciB1dGlscyA9IHtcbiAgICBcdGNsaXBfcmdiOiBjbGlwX3JnYixcbiAgICBcdGxpbWl0OiBsaW1pdCxcbiAgICBcdHR5cGU6IHR5cGUsXG4gICAgXHR1bnBhY2s6IHVucGFjayxcbiAgICBcdGxhc3Q6IGxhc3QsXG4gICAgXHRQSTogUEksXG4gICAgXHRUV09QSTogUEkqMixcbiAgICBcdFBJVEhJUkQ6IFBJLzMsXG4gICAgXHRERUcyUkFEOiBQSSAvIDE4MCxcbiAgICBcdFJBRDJERUc6IDE4MCAvIFBJXG4gICAgfTtcblxuICAgIHZhciBpbnB1dCA9IHtcbiAgICBcdGZvcm1hdDoge30sXG4gICAgXHRhdXRvZGV0ZWN0OiBbXVxuICAgIH07XG5cbiAgICB2YXIgbGFzdCQxID0gdXRpbHMubGFzdDtcbiAgICB2YXIgY2xpcF9yZ2IkMSA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciB0eXBlJDEgPSB1dGlscy50eXBlO1xuXG5cbiAgICB2YXIgQ29sb3IgPSBmdW5jdGlvbiBDb2xvcigpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBpZiAodHlwZSQxKGFyZ3NbMF0pID09PSAnb2JqZWN0JyAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciAmJlxuICAgICAgICAgICAgYXJnc1swXS5jb25zdHJ1Y3RvciA9PT0gdGhpcy5jb25zdHJ1Y3Rvcikge1xuICAgICAgICAgICAgLy8gdGhlIGFyZ3VtZW50IGlzIGFscmVhZHkgYSBDb2xvciBpbnN0YW5jZVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBsYXN0IGFyZ3VtZW50IGNvdWxkIGJlIHRoZSBtb2RlXG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQxKGFyZ3MpO1xuICAgICAgICB2YXIgYXV0b2RldGVjdCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghbW9kZSkge1xuICAgICAgICAgICAgYXV0b2RldGVjdCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIWlucHV0LnNvcnRlZCkge1xuICAgICAgICAgICAgICAgIGlucHV0LmF1dG9kZXRlY3QgPSBpbnB1dC5hdXRvZGV0ZWN0LnNvcnQoZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYi5wIC0gYS5wOyB9KTtcbiAgICAgICAgICAgICAgICBpbnB1dC5zb3J0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYXV0by1kZXRlY3QgZm9ybWF0XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IGlucHV0LmF1dG9kZXRlY3Q7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoayA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgICAgICBtb2RlID0gY2hrLnRlc3QuYXBwbHkoY2hrLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAobW9kZSkgeyBicmVhazsgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlucHV0LmZvcm1hdFttb2RlXSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IGlucHV0LmZvcm1hdFttb2RlXS5hcHBseShudWxsLCBhdXRvZGV0ZWN0ID8gYXJncyA6IGFyZ3Muc2xpY2UoMCwtMSkpO1xuICAgICAgICAgICAgbWUuX3JnYiA9IGNsaXBfcmdiJDEocmdiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBmb3JtYXQ6ICcrYXJncyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgYWxwaGEgY2hhbm5lbFxuICAgICAgICBpZiAobWUuX3JnYi5sZW5ndGggPT09IDMpIHsgbWUuX3JnYi5wdXNoKDEpOyB9XG4gICAgfTtcblxuICAgIENvbG9yLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nICgpIHtcbiAgICAgICAgaWYgKHR5cGUkMSh0aGlzLmhleCkgPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gdGhpcy5oZXgoKTsgfVxuICAgICAgICByZXR1cm4gKFwiW1wiICsgKHRoaXMuX3JnYi5qb2luKCcsJykpICsgXCJdXCIpO1xuICAgIH07XG5cbiAgICB2YXIgQ29sb3JfMSA9IENvbG9yO1xuXG4gICAgdmFyIGNocm9tYSA9IGZ1bmN0aW9uICgpIHtcbiAgICBcdHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgXHR3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgXHRyZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggY2hyb21hLkNvbG9yLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgIH07XG5cbiAgICBjaHJvbWEuQ29sb3IgPSBDb2xvcl8xO1xuICAgIGNocm9tYS52ZXJzaW9uID0gJzIuMC4zJztcblxuICAgIHZhciBjaHJvbWFfMSA9IGNocm9tYTtcblxuICAgIHZhciB1bnBhY2skMSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXg7XG5cbiAgICB2YXIgcmdiMmNteWsgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQxKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgciA9IHIgLyAyNTU7XG4gICAgICAgIGcgPSBnIC8gMjU1O1xuICAgICAgICBiID0gYiAvIDI1NTtcbiAgICAgICAgdmFyIGsgPSAxIC0gbWF4KHIsbWF4KGcsYikpO1xuICAgICAgICB2YXIgZiA9IGsgPCAxID8gMSAvICgxLWspIDogMDtcbiAgICAgICAgdmFyIGMgPSAoMS1yLWspICogZjtcbiAgICAgICAgdmFyIG0gPSAoMS1nLWspICogZjtcbiAgICAgICAgdmFyIHkgPSAoMS1iLWspICogZjtcbiAgICAgICAgcmV0dXJuIFtjLG0seSxrXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjbXlrXzEgPSByZ2IyY215aztcblxuICAgIHZhciB1bnBhY2skMiA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciBjbXlrMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJDIoYXJncywgJ2NteWsnKTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgbSA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB5ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIGsgPSBhcmdzWzNdO1xuICAgICAgICB2YXIgYWxwaGEgPSBhcmdzLmxlbmd0aCA+IDQgPyBhcmdzWzRdIDogMTtcbiAgICAgICAgaWYgKGsgPT09IDEpIHsgcmV0dXJuIFswLDAsMCxhbHBoYV07IH1cbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGMgPj0gMSA/IDAgOiAyNTUgKiAoMS1jKSAqICgxLWspLCAvLyByXG4gICAgICAgICAgICBtID49IDEgPyAwIDogMjU1ICogKDEtbSkgKiAoMS1rKSwgLy8gZ1xuICAgICAgICAgICAgeSA+PSAxID8gMCA6IDI1NSAqICgxLXkpICogKDEtayksIC8vIGJcbiAgICAgICAgICAgIGFscGhhXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIHZhciBjbXlrMnJnYl8xID0gY215azJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJDMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkMiA9IHV0aWxzLnR5cGU7XG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuY215ayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmNteWtfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5jbXlrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnY215ayddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0LmNteWsgPSBjbXlrMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skMyhhcmdzLCAnY215aycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkMihhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY215ayc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skNCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGFzdCQyID0gdXRpbHMubGFzdDtcbiAgICB2YXIgcm5kID0gZnVuY3Rpb24gKGEpIHsgcmV0dXJuIE1hdGgucm91bmQoYSoxMDApLzEwMDsgfTtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIGhzbDJjc3MoaCxzLGwpXG4gICAgICogLSBoc2wyY3NzKGgscyxsLGEpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbF0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKFtoLHMsbCxhXSwgbW9kZSlcbiAgICAgKiAtIGhzbDJjc3Moe2gscyxsLGF9LCBtb2RlKVxuICAgICAqL1xuICAgIHZhciBoc2wyY3NzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoc2xhID0gdW5wYWNrJDQoYXJncywgJ2hzbGEnKTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDIoYXJncykgfHwgJ2xzYSc7XG4gICAgICAgIGhzbGFbMF0gPSBybmQoaHNsYVswXSB8fCAwKTtcbiAgICAgICAgaHNsYVsxXSA9IHJuZChoc2xhWzFdKjEwMCkgKyAnJSc7XG4gICAgICAgIGhzbGFbMl0gPSBybmQoaHNsYVsyXSoxMDApICsgJyUnO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ2hzbGEnIHx8IChoc2xhLmxlbmd0aCA+IDMgJiYgaHNsYVszXTwxKSkge1xuICAgICAgICAgICAgaHNsYVszXSA9IGhzbGEubGVuZ3RoID4gMyA/IGhzbGFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdoc2xhJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGhzbGEubGVuZ3RoID0gMztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChoc2xhLmpvaW4oJywnKSkgKyBcIilcIik7XG4gICAgfTtcblxuICAgIHZhciBoc2wyY3NzXzEgPSBoc2wyY3NzO1xuXG4gICAgdmFyIHVucGFjayQ1ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmhzbChyLGcsYilcbiAgICAgKiAtIHJnYjJoc2wocixnLGIsYSlcbiAgICAgKiAtIHJnYjJoc2woW3IsZyxiXSlcbiAgICAgKiAtIHJnYjJoc2woW3IsZyxiLGFdKVxuICAgICAqIC0gcmdiMmhzbCh7cixnLGIsYX0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQ1KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGcgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG5cbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcblxuICAgICAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgICAgIHZhciBtYXggPSBNYXRoLm1heChyLCBnLCBiKTtcblxuICAgICAgICB2YXIgbCA9IChtYXggKyBtaW4pIC8gMjtcbiAgICAgICAgdmFyIHMsIGg7XG5cbiAgICAgICAgaWYgKG1heCA9PT0gbWluKXtcbiAgICAgICAgICAgIHMgPSAwO1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gbCA8IDAuNSA/IChtYXggLSBtaW4pIC8gKG1heCArIG1pbikgOiAobWF4IC0gbWluKSAvICgyIC0gbWF4IC0gbWluKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyID09IG1heCkgeyBoID0gKGcgLSBiKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGcgPT0gbWF4KSB7IGggPSAyICsgKGIgLSByKSAvIChtYXggLSBtaW4pOyB9XG4gICAgICAgIGVsc2UgaWYgKGIgPT0gbWF4KSB7IGggPSA0ICsgKHIgLSBnKSAvIChtYXggLSBtaW4pOyB9XG5cbiAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aD4zICYmIGFyZ3NbM10hPT11bmRlZmluZWQpIHsgcmV0dXJuIFtoLHMsbCxhcmdzWzNdXTsgfVxuICAgICAgICByZXR1cm4gW2gscyxsXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc2xfMSA9IHJnYjJoc2w7XG5cbiAgICB2YXIgdW5wYWNrJDYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMyA9IHV0aWxzLmxhc3Q7XG5cblxuICAgIHZhciByb3VuZCA9IE1hdGgucm91bmQ7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyY3NzKHIsZyxiKVxuICAgICAqIC0gcmdiMmNzcyhyLGcsYixhKVxuICAgICAqIC0gcmdiMmNzcyhbcixnLGJdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyhbcixnLGIsYV0sIG1vZGUpXG4gICAgICogLSByZ2IyY3NzKHtyLGcsYixhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgcmdiMmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiYSA9IHVucGFjayQ2KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQzKGFyZ3MpIHx8ICdyZ2InO1xuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwzKSA9PSAnaHNsJykge1xuICAgICAgICAgICAgcmV0dXJuIGhzbDJjc3NfMShyZ2IyaHNsXzEocmdiYSksIG1vZGUpO1xuICAgICAgICB9XG4gICAgICAgIHJnYmFbMF0gPSByb3VuZChyZ2JhWzBdKTtcbiAgICAgICAgcmdiYVsxXSA9IHJvdW5kKHJnYmFbMV0pO1xuICAgICAgICByZ2JhWzJdID0gcm91bmQocmdiYVsyXSk7XG4gICAgICAgIGlmIChtb2RlID09PSAncmdiYScgfHwgKHJnYmEubGVuZ3RoID4gMyAmJiByZ2JhWzNdPDEpKSB7XG4gICAgICAgICAgICByZ2JhWzNdID0gcmdiYS5sZW5ndGggPiAzID8gcmdiYVszXSA6IDE7XG4gICAgICAgICAgICBtb2RlID0gJ3JnYmEnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAobW9kZSArIFwiKFwiICsgKHJnYmEuc2xpY2UoMCxtb2RlPT09J3JnYic/Mzo0KS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmNzc18xID0gcmdiMmNzcztcblxuICAgIHZhciBSRV9IRVggPSAvXiM/KFtBLUZhLWYwLTldezZ9fFtBLUZhLWYwLTldezN9KSQvO1xuICAgIHZhciBSRV9IRVhBID0gL14jPyhbQS1GYS1mMC05XXs4fSkkLztcblxuICAgIHZhciBoZXgycmdiID0gZnVuY3Rpb24gKGhleCkge1xuICAgICAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWCkpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgIGlmIChoZXgubGVuZ3RoID09PSA0IHx8IGhleC5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gZXhwYW5kIHNob3J0LW5vdGF0aW9uIHRvIGZ1bGwgc2l4LWRpZ2l0XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIGhleCA9IGhleC5zcGxpdCgnJyk7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4WzBdK2hleFswXStoZXhbMV0raGV4WzFdK2hleFsyXStoZXhbMl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIgPSB1ID4+IDE2O1xuICAgICAgICAgICAgdmFyIGcgPSB1ID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSB1ICYgMHhGRjtcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCByZ2JhIGhleCBmb3JtYXQsIGVnICNGRjAwMDA3N1xuICAgICAgICBpZiAoaGV4Lm1hdGNoKFJFX0hFWEEpKSB7XG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gOSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBvcHRpb25hbCBsZWFkaW5nICNcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3Vic3RyKDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUkMSA9IHBhcnNlSW50KGhleCwgMTYpO1xuICAgICAgICAgICAgdmFyIHIkMSA9IHUkMSA+PiAyNCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgZyQxID0gdSQxID4+IDE2ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiJDEgPSB1JDEgPj4gOCAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYSA9IE1hdGgucm91bmQoKHUkMSAmIDB4RkYpIC8gMHhGRiAqIDEwMCkgLyAxMDA7XG4gICAgICAgICAgICByZXR1cm4gW3IkMSxnJDEsYiQxLGFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gd2UgdXNlZCB0byBjaGVjayBmb3IgY3NzIGNvbG9ycyBoZXJlXG4gICAgICAgIC8vIGlmIF9pbnB1dC5jc3M/IGFuZCByZ2IgPSBfaW5wdXQuY3NzIGhleFxuICAgICAgICAvLyAgICAgcmV0dXJuIHJnYlxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGhleCBjb2xvcjogXCIgKyBoZXgpKTtcbiAgICB9O1xuXG4gICAgdmFyIGhleDJyZ2JfMSA9IGhleDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJDcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kJDEgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGhzbDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ247XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayQ3KGFyZ3MsICdoc2wnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBsID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gbCoyNTU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgdDMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIGMgPSBbMCwwLDBdO1xuICAgICAgICAgICAgdmFyIHQyID0gbCA8IDAuNSA/IGwgKiAoMStzKSA6IGwrcy1sKnM7XG4gICAgICAgICAgICB2YXIgdDEgPSAyICogbCAtIHQyO1xuICAgICAgICAgICAgdmFyIGhfID0gaCAvIDM2MDtcbiAgICAgICAgICAgIHQzWzBdID0gaF8gKyAxLzM7XG4gICAgICAgICAgICB0M1sxXSA9IGhfO1xuICAgICAgICAgICAgdDNbMl0gPSBoXyAtIDEvMztcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPCAwKSB7IHQzW2ldICs9IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAodDNbaV0gPiAxKSB7IHQzW2ldIC09IDE7IH1cbiAgICAgICAgICAgICAgICBpZiAoNiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDEgKyAodDIgLSB0MSkgKiA2ICogdDNbaV07IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgyICogdDNbaV0gPCAxKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MjsgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKDMgKiB0M1tpXSA8IDIpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogKCgyIC8gMykgLSB0M1tpXSkgKiA2OyB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MTsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKGFzc2lnbiA9IFtyb3VuZCQxKGNbMF0qMjU1KSxyb3VuZCQxKGNbMV0qMjU1KSxyb3VuZCQxKGNbMl0qMjU1KV0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDMpIHtcbiAgICAgICAgICAgIC8vIGtlZXAgYWxwaGEgY2hhbm5lbFxuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYixhcmdzWzNdXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMnJnYl8xID0gaHNsMnJnYjtcblxuICAgIC8qKlxuICAgIFx0WDExIGNvbG9yIG5hbWVzXG5cbiAgICBcdGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtY29sb3IvI3N2Zy1jb2xvclxuICAgICovXG5cbiAgICB2YXIgdzNjeDExID0ge1xuICAgICAgICBhbGljZWJsdWU6ICcjZjBmOGZmJyxcbiAgICAgICAgYW50aXF1ZXdoaXRlOiAnI2ZhZWJkNycsXG4gICAgICAgIGFxdWE6ICcjMDBmZmZmJyxcbiAgICAgICAgYXF1YW1hcmluZTogJyM3ZmZmZDQnLFxuICAgICAgICBhenVyZTogJyNmMGZmZmYnLFxuICAgICAgICBiZWlnZTogJyNmNWY1ZGMnLFxuICAgICAgICBiaXNxdWU6ICcjZmZlNGM0JyxcbiAgICAgICAgYmxhY2s6ICcjMDAwMDAwJyxcbiAgICAgICAgYmxhbmNoZWRhbG1vbmQ6ICcjZmZlYmNkJyxcbiAgICAgICAgYmx1ZTogJyMwMDAwZmYnLFxuICAgICAgICBibHVldmlvbGV0OiAnIzhhMmJlMicsXG4gICAgICAgIGJyb3duOiAnI2E1MmEyYScsXG4gICAgICAgIGJ1cmx5d29vZDogJyNkZWI4ODcnLFxuICAgICAgICBjYWRldGJsdWU6ICcjNWY5ZWEwJyxcbiAgICAgICAgY2hhcnRyZXVzZTogJyM3ZmZmMDAnLFxuICAgICAgICBjaG9jb2xhdGU6ICcjZDI2OTFlJyxcbiAgICAgICAgY29yYWw6ICcjZmY3ZjUwJyxcbiAgICAgICAgY29ybmZsb3dlcjogJyM2NDk1ZWQnLFxuICAgICAgICBjb3JuZmxvd2VyYmx1ZTogJyM2NDk1ZWQnLFxuICAgICAgICBjb3Juc2lsazogJyNmZmY4ZGMnLFxuICAgICAgICBjcmltc29uOiAnI2RjMTQzYycsXG4gICAgICAgIGN5YW46ICcjMDBmZmZmJyxcbiAgICAgICAgZGFya2JsdWU6ICcjMDAwMDhiJyxcbiAgICAgICAgZGFya2N5YW46ICcjMDA4YjhiJyxcbiAgICAgICAgZGFya2dvbGRlbnJvZDogJyNiODg2MGInLFxuICAgICAgICBkYXJrZ3JheTogJyNhOWE5YTknLFxuICAgICAgICBkYXJrZ3JlZW46ICcjMDA2NDAwJyxcbiAgICAgICAgZGFya2dyZXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2toYWtpOiAnI2JkYjc2YicsXG4gICAgICAgIGRhcmttYWdlbnRhOiAnIzhiMDA4YicsXG4gICAgICAgIGRhcmtvbGl2ZWdyZWVuOiAnIzU1NmIyZicsXG4gICAgICAgIGRhcmtvcmFuZ2U6ICcjZmY4YzAwJyxcbiAgICAgICAgZGFya29yY2hpZDogJyM5OTMyY2MnLFxuICAgICAgICBkYXJrcmVkOiAnIzhiMDAwMCcsXG4gICAgICAgIGRhcmtzYWxtb246ICcjZTk5NjdhJyxcbiAgICAgICAgZGFya3NlYWdyZWVuOiAnIzhmYmM4ZicsXG4gICAgICAgIGRhcmtzbGF0ZWJsdWU6ICcjNDgzZDhiJyxcbiAgICAgICAgZGFya3NsYXRlZ3JheTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrc2xhdGVncmV5OiAnIzJmNGY0ZicsXG4gICAgICAgIGRhcmt0dXJxdW9pc2U6ICcjMDBjZWQxJyxcbiAgICAgICAgZGFya3Zpb2xldDogJyM5NDAwZDMnLFxuICAgICAgICBkZWVwcGluazogJyNmZjE0OTMnLFxuICAgICAgICBkZWVwc2t5Ymx1ZTogJyMwMGJmZmYnLFxuICAgICAgICBkaW1ncmF5OiAnIzY5Njk2OScsXG4gICAgICAgIGRpbWdyZXk6ICcjNjk2OTY5JyxcbiAgICAgICAgZG9kZ2VyYmx1ZTogJyMxZTkwZmYnLFxuICAgICAgICBmaXJlYnJpY2s6ICcjYjIyMjIyJyxcbiAgICAgICAgZmxvcmFsd2hpdGU6ICcjZmZmYWYwJyxcbiAgICAgICAgZm9yZXN0Z3JlZW46ICcjMjI4YjIyJyxcbiAgICAgICAgZnVjaHNpYTogJyNmZjAwZmYnLFxuICAgICAgICBnYWluc2Jvcm86ICcjZGNkY2RjJyxcbiAgICAgICAgZ2hvc3R3aGl0ZTogJyNmOGY4ZmYnLFxuICAgICAgICBnb2xkOiAnI2ZmZDcwMCcsXG4gICAgICAgIGdvbGRlbnJvZDogJyNkYWE1MjAnLFxuICAgICAgICBncmF5OiAnIzgwODA4MCcsXG4gICAgICAgIGdyZWVuOiAnIzAwODAwMCcsXG4gICAgICAgIGdyZWVueWVsbG93OiAnI2FkZmYyZicsXG4gICAgICAgIGdyZXk6ICcjODA4MDgwJyxcbiAgICAgICAgaG9uZXlkZXc6ICcjZjBmZmYwJyxcbiAgICAgICAgaG90cGluazogJyNmZjY5YjQnLFxuICAgICAgICBpbmRpYW5yZWQ6ICcjY2Q1YzVjJyxcbiAgICAgICAgaW5kaWdvOiAnIzRiMDA4MicsXG4gICAgICAgIGl2b3J5OiAnI2ZmZmZmMCcsXG4gICAgICAgIGtoYWtpOiAnI2YwZTY4YycsXG4gICAgICAgIGxhc2VybGVtb246ICcjZmZmZjU0JyxcbiAgICAgICAgbGF2ZW5kZXI6ICcjZTZlNmZhJyxcbiAgICAgICAgbGF2ZW5kZXJibHVzaDogJyNmZmYwZjUnLFxuICAgICAgICBsYXduZ3JlZW46ICcjN2NmYzAwJyxcbiAgICAgICAgbGVtb25jaGlmZm9uOiAnI2ZmZmFjZCcsXG4gICAgICAgIGxpZ2h0Ymx1ZTogJyNhZGQ4ZTYnLFxuICAgICAgICBsaWdodGNvcmFsOiAnI2YwODA4MCcsXG4gICAgICAgIGxpZ2h0Y3lhbjogJyNlMGZmZmYnLFxuICAgICAgICBsaWdodGdvbGRlbnJvZDogJyNmYWZhZDInLFxuICAgICAgICBsaWdodGdvbGRlbnJvZHllbGxvdzogJyNmYWZhZDInLFxuICAgICAgICBsaWdodGdyYXk6ICcjZDNkM2QzJyxcbiAgICAgICAgbGlnaHRncmVlbjogJyM5MGVlOTAnLFxuICAgICAgICBsaWdodGdyZXk6ICcjZDNkM2QzJyxcbiAgICAgICAgbGlnaHRwaW5rOiAnI2ZmYjZjMScsXG4gICAgICAgIGxpZ2h0c2FsbW9uOiAnI2ZmYTA3YScsXG4gICAgICAgIGxpZ2h0c2VhZ3JlZW46ICcjMjBiMmFhJyxcbiAgICAgICAgbGlnaHRza3libHVlOiAnIzg3Y2VmYScsXG4gICAgICAgIGxpZ2h0c2xhdGVncmF5OiAnIzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c2xhdGVncmV5OiAnIzc3ODg5OScsXG4gICAgICAgIGxpZ2h0c3RlZWxibHVlOiAnI2IwYzRkZScsXG4gICAgICAgIGxpZ2h0eWVsbG93OiAnI2ZmZmZlMCcsXG4gICAgICAgIGxpbWU6ICcjMDBmZjAwJyxcbiAgICAgICAgbGltZWdyZWVuOiAnIzMyY2QzMicsXG4gICAgICAgIGxpbmVuOiAnI2ZhZjBlNicsXG4gICAgICAgIG1hZ2VudGE6ICcjZmYwMGZmJyxcbiAgICAgICAgbWFyb29uOiAnIzgwMDAwMCcsXG4gICAgICAgIG1hcm9vbjI6ICcjN2YwMDAwJyxcbiAgICAgICAgbWFyb29uMzogJyNiMDMwNjAnLFxuICAgICAgICBtZWRpdW1hcXVhbWFyaW5lOiAnIzY2Y2RhYScsXG4gICAgICAgIG1lZGl1bWJsdWU6ICcjMDAwMGNkJyxcbiAgICAgICAgbWVkaXVtb3JjaGlkOiAnI2JhNTVkMycsXG4gICAgICAgIG1lZGl1bXB1cnBsZTogJyM5MzcwZGInLFxuICAgICAgICBtZWRpdW1zZWFncmVlbjogJyMzY2IzNzEnLFxuICAgICAgICBtZWRpdW1zbGF0ZWJsdWU6ICcjN2I2OGVlJyxcbiAgICAgICAgbWVkaXVtc3ByaW5nZ3JlZW46ICcjMDBmYTlhJyxcbiAgICAgICAgbWVkaXVtdHVycXVvaXNlOiAnIzQ4ZDFjYycsXG4gICAgICAgIG1lZGl1bXZpb2xldHJlZDogJyNjNzE1ODUnLFxuICAgICAgICBtaWRuaWdodGJsdWU6ICcjMTkxOTcwJyxcbiAgICAgICAgbWludGNyZWFtOiAnI2Y1ZmZmYScsXG4gICAgICAgIG1pc3R5cm9zZTogJyNmZmU0ZTEnLFxuICAgICAgICBtb2NjYXNpbjogJyNmZmU0YjUnLFxuICAgICAgICBuYXZham93aGl0ZTogJyNmZmRlYWQnLFxuICAgICAgICBuYXZ5OiAnIzAwMDA4MCcsXG4gICAgICAgIG9sZGxhY2U6ICcjZmRmNWU2JyxcbiAgICAgICAgb2xpdmU6ICcjODA4MDAwJyxcbiAgICAgICAgb2xpdmVkcmFiOiAnIzZiOGUyMycsXG4gICAgICAgIG9yYW5nZTogJyNmZmE1MDAnLFxuICAgICAgICBvcmFuZ2VyZWQ6ICcjZmY0NTAwJyxcbiAgICAgICAgb3JjaGlkOiAnI2RhNzBkNicsXG4gICAgICAgIHBhbGVnb2xkZW5yb2Q6ICcjZWVlOGFhJyxcbiAgICAgICAgcGFsZWdyZWVuOiAnIzk4ZmI5OCcsXG4gICAgICAgIHBhbGV0dXJxdW9pc2U6ICcjYWZlZWVlJyxcbiAgICAgICAgcGFsZXZpb2xldHJlZDogJyNkYjcwOTMnLFxuICAgICAgICBwYXBheWF3aGlwOiAnI2ZmZWZkNScsXG4gICAgICAgIHBlYWNocHVmZjogJyNmZmRhYjknLFxuICAgICAgICBwZXJ1OiAnI2NkODUzZicsXG4gICAgICAgIHBpbms6ICcjZmZjMGNiJyxcbiAgICAgICAgcGx1bTogJyNkZGEwZGQnLFxuICAgICAgICBwb3dkZXJibHVlOiAnI2IwZTBlNicsXG4gICAgICAgIHB1cnBsZTogJyM4MDAwODAnLFxuICAgICAgICBwdXJwbGUyOiAnIzdmMDA3ZicsXG4gICAgICAgIHB1cnBsZTM6ICcjYTAyMGYwJyxcbiAgICAgICAgcmViZWNjYXB1cnBsZTogJyM2NjMzOTknLFxuICAgICAgICByZWQ6ICcjZmYwMDAwJyxcbiAgICAgICAgcm9zeWJyb3duOiAnI2JjOGY4ZicsXG4gICAgICAgIHJveWFsYmx1ZTogJyM0MTY5ZTEnLFxuICAgICAgICBzYWRkbGVicm93bjogJyM4YjQ1MTMnLFxuICAgICAgICBzYWxtb246ICcjZmE4MDcyJyxcbiAgICAgICAgc2FuZHlicm93bjogJyNmNGE0NjAnLFxuICAgICAgICBzZWFncmVlbjogJyMyZThiNTcnLFxuICAgICAgICBzZWFzaGVsbDogJyNmZmY1ZWUnLFxuICAgICAgICBzaWVubmE6ICcjYTA1MjJkJyxcbiAgICAgICAgc2lsdmVyOiAnI2MwYzBjMCcsXG4gICAgICAgIHNreWJsdWU6ICcjODdjZWViJyxcbiAgICAgICAgc2xhdGVibHVlOiAnIzZhNWFjZCcsXG4gICAgICAgIHNsYXRlZ3JheTogJyM3MDgwOTAnLFxuICAgICAgICBzbGF0ZWdyZXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc25vdzogJyNmZmZhZmEnLFxuICAgICAgICBzcHJpbmdncmVlbjogJyMwMGZmN2YnLFxuICAgICAgICBzdGVlbGJsdWU6ICcjNDY4MmI0JyxcbiAgICAgICAgdGFuOiAnI2QyYjQ4YycsXG4gICAgICAgIHRlYWw6ICcjMDA4MDgwJyxcbiAgICAgICAgdGhpc3RsZTogJyNkOGJmZDgnLFxuICAgICAgICB0b21hdG86ICcjZmY2MzQ3JyxcbiAgICAgICAgdHVycXVvaXNlOiAnIzQwZTBkMCcsXG4gICAgICAgIHZpb2xldDogJyNlZTgyZWUnLFxuICAgICAgICB3aGVhdDogJyNmNWRlYjMnLFxuICAgICAgICB3aGl0ZTogJyNmZmZmZmYnLFxuICAgICAgICB3aGl0ZXNtb2tlOiAnI2Y1ZjVmNScsXG4gICAgICAgIHllbGxvdzogJyNmZmZmMDAnLFxuICAgICAgICB5ZWxsb3dncmVlbjogJyM5YWNkMzInXG4gICAgfTtcblxuICAgIHZhciB3M2N4MTFfMSA9IHczY3gxMTtcblxuICAgIHZhciBSRV9SR0IgPSAvXnJnYlxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQSA9IC9ecmdiYVxcKFxccyooLT9cXGQrKSxcXHMqKC0/XFxkKylcXHMqLFxccyooLT9cXGQrKVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfUkdCX1BDVCA9IC9ecmdiXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKlxcKSQvO1xuICAgIHZhciBSRV9SR0JBX1BDVCA9IC9ecmdiYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcbiAgICB2YXIgUkVfSFNMID0gL15oc2xcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfSFNMQSA9IC9eaHNsYVxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSxcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklXFxzKixcXHMqKFswMV18WzAxXT9cXC5cXGQrKVxcKSQvO1xuXG4gICAgdmFyIHJvdW5kJDIgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIGNzczJyZ2IgPSBmdW5jdGlvbiAoY3NzKSB7XG4gICAgICAgIGNzcyA9IGNzcy50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgICAgICAgLy8gbmFtZWQgWDExIGNvbG9yc1xuICAgICAgICBpZiAodzNjeDExXzFbY3NzXSkge1xuICAgICAgICAgICAgcmV0dXJuIGhleDJyZ2JfMSh3M2N4MTFfMVtjc3NdKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbTtcblxuICAgICAgICAvLyByZ2IoMjUwLDIwLDApXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0IpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiA9IG0uc2xpY2UoMSw0KTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTwzOyBpKyspIHtcbiAgICAgICAgICAgICAgICByZ2JbaV0gPSArcmdiW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2I7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2JhKDI1MCwyMCwwLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkEpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gbS5zbGljZSgxLDUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTw0OyBpJDErKykge1xuICAgICAgICAgICAgICAgIHJnYiQxW2kkMV0gPSArcmdiJDFbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZ2IkMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYigxMDAlLDAlLDAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDIgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDI9MDsgaSQyPDM7IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDJbaSQyXSA9IHJvdW5kJDIocmdiJDJbaSQyXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDJbM10gPSAxOyAgLy8gZGVmYXVsdCBhbHBoYVxuICAgICAgICAgICAgcmV0dXJuIHJnYiQyO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgxMDAlLDAlLDAlLDAuNClcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQkFfUENUKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMyA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMz0wOyBpJDM8MzsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkM1tpJDNdID0gcm91bmQkMihyZ2IkM1tpJDNdICogMi41NSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZ2IkM1szXSA9ICtyZ2IkM1szXTtcbiAgICAgICAgICAgIHJldHVybiByZ2IkMztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhzbCgwLDEwMCUsNTAlKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMKSkpIHtcbiAgICAgICAgICAgIHZhciBoc2wgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2xbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbFsyXSAqPSAwLjAxO1xuICAgICAgICAgICAgdmFyIHJnYiQ0ID0gaHNsMnJnYl8xKGhzbCk7XG4gICAgICAgICAgICByZ2IkNFszXSA9IDE7XG4gICAgICAgICAgICByZXR1cm4gcmdiJDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2xhKDAsMTAwJSw1MCUsMC41KVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfSFNMQSkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsJDEgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBoc2wkMVsxXSAqPSAwLjAxO1xuICAgICAgICAgICAgaHNsJDFbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNSA9IGhzbDJyZ2JfMShoc2wkMSk7XG4gICAgICAgICAgICByZ2IkNVszXSA9ICttWzRdOyAgLy8gZGVmYXVsdCBhbHBoYSA9IDFcbiAgICAgICAgICAgIHJldHVybiByZ2IkNTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjc3MycmdiLnRlc3QgPSBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gUkVfUkdCLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQkEudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBX1BDVC50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9IU0wudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMQS50ZXN0KHMpO1xuICAgIH07XG5cbiAgICB2YXIgY3NzMnJnYl8xID0gY3NzMnJnYjtcblxuICAgIHZhciB0eXBlJDMgPSB1dGlscy50eXBlO1xuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24obW9kZSkge1xuICAgICAgICByZXR1cm4gcmdiMmNzc18xKHRoaXMuX3JnYiwgbW9kZSk7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NzcyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0LmNzcyA9IGNzczJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJDMoaCkgPT09ICdzdHJpbmcnICYmIGNzczJyZ2JfMS50ZXN0KGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjc3MnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDggPSB1dGlscy51bnBhY2s7XG5cbiAgICBpbnB1dC5mb3JtYXQuZ2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYiA9IHVucGFjayQ4KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHJnYlswXSAqPSAyNTU7XG4gICAgICAgIHJnYlsxXSAqPSAyNTU7XG4gICAgICAgIHJnYlsyXSAqPSAyNTU7XG4gICAgICAgIHJldHVybiByZ2I7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnZ2wnXSkgKSk7XG4gICAgfTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmdsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgICAgIHJldHVybiBbcmdiWzBdLzI1NSwgcmdiWzFdLzI1NSwgcmdiWzJdLzI1NSwgcmdiWzNdXTtcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayQ5ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJoY2cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayQ5KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICAgICAgdmFyIGMgPSBkZWx0YSAqIDEwMCAvIDI1NTtcbiAgICAgICAgdmFyIF9nID0gbWluIC8gKDI1NSAtIGRlbHRhKSAqIDEwMDtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIGlmIChkZWx0YSA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4KSB7IGggPSAoZyAtIGIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChnID09PSBtYXgpIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4KSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgYywgX2ddO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhjZ18xID0gcmdiMmhjZztcblxuICAgIHZhciB1bnBhY2skYSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xuXG4gICAgLypcbiAgICAgKiB0aGlzIGlzIGJhc2ljYWxseSBqdXN0IEhTViB3aXRoIHNvbWUgbWlub3IgdHdlYWtzXG4gICAgICpcbiAgICAgKiBodWUuLiBbMC4uMzYwXVxuICAgICAqIGNocm9tYSAuLiBbMC4uMV1cbiAgICAgKiBncmF5bmVzcyAuLiBbMC4uMV1cbiAgICAgKi9cblxuICAgIHZhciBoY2cycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRhKGFyZ3MsICdoY2cnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBfZyA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgX2cgPSBfZyAqIDI1NTtcbiAgICAgICAgdmFyIF9jID0gYyAqIDI1NTtcbiAgICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IF9nO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGggPT09IDM2MCkgeyBoID0gMDsgfVxuICAgICAgICAgICAgaWYgKGggPiAzNjApIHsgaCAtPSAzNjA7IH1cbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICAgICAgaCAvPSA2MDtcbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSBfZyAqICgxIC0gYyk7XG4gICAgICAgICAgICB2YXIgcSA9IHAgKyBfYyAqICgxIC0gZik7XG4gICAgICAgICAgICB2YXIgdCA9IHAgKyBfYyAqIGY7XG4gICAgICAgICAgICB2YXIgdiA9IHAgKyBfYztcbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhjZzJyZ2JfMSA9IGhjZzJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJGIgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNCA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuaGNnID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGNnXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuaGNnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNnJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQuaGNnID0gaGNnMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skYihhcmdzLCAnaGNnJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ0KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoY2cnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkNCA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJvdW5kJDMgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJoZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRjKGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBhID0gcmVmWzNdO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkNChhcmdzKSB8fCAnYXV0byc7XG4gICAgICAgIGlmIChhID09PSB1bmRlZmluZWQpIHsgYSA9IDE7IH1cbiAgICAgICAgaWYgKG1vZGUgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgbW9kZSA9IGEgPCAxID8gJ3JnYmEnIDogJ3JnYic7XG4gICAgICAgIH1cbiAgICAgICAgciA9IHJvdW5kJDMocik7XG4gICAgICAgIGcgPSByb3VuZCQzKGcpO1xuICAgICAgICBiID0gcm91bmQkMyhiKTtcbiAgICAgICAgdmFyIHUgPSByIDw8IDE2IHwgZyA8PCA4IHwgYjtcbiAgICAgICAgdmFyIHN0ciA9IFwiMDAwMDAwXCIgKyB1LnRvU3RyaW5nKDE2KTsgLy8jLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIHN0ciA9IHN0ci5zdWJzdHIoc3RyLmxlbmd0aCAtIDYpO1xuICAgICAgICB2YXIgaHhhID0gJzAnICsgcm91bmQkMyhhICogMjU1KS50b1N0cmluZygxNik7XG4gICAgICAgIGh4YSA9IGh4YS5zdWJzdHIoaHhhLmxlbmd0aCAtIDIpO1xuICAgICAgICBzd2l0Y2ggKG1vZGUudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgY2FzZSAncmdiYSc6IHJldHVybiAoXCIjXCIgKyBzdHIgKyBoeGEpO1xuICAgICAgICAgICAgY2FzZSAnYXJnYic6IHJldHVybiAoXCIjXCIgKyBoeGEgKyBzdHIpO1xuICAgICAgICAgICAgZGVmYXVsdDogcmV0dXJuIChcIiNcIiArIHN0cik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoZXhfMSA9IHJnYjJoZXg7XG5cbiAgICB2YXIgdHlwZSQ1ID0gdXRpbHMudHlwZTtcblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmhleCA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoZXhfMSh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oZXggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoZXgnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oZXggPSBoZXgycmdiXzE7XG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNCxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkNShoKSA9PT0gJ3N0cmluZycgJiYgWzMsNCw2LDcsOCw5XS5pbmNsdWRlcyhoLmxlbmd0aCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skZCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgVFdPUEkgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgbWluID0gTWF0aC5taW47XG4gICAgdmFyIHNxcnQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGFjb3MgPSBNYXRoLmFjb3M7XG5cbiAgICB2YXIgcmdiMmhzaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9yZ2IyaHNpLmNwcFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJGQoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByIC89IDI1NTtcbiAgICAgICAgZyAvPSAyNTU7XG4gICAgICAgIGIgLz0gMjU1O1xuICAgICAgICB2YXIgaDtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4ocixnLGIpO1xuICAgICAgICB2YXIgaSA9IChyK2crYikgLyAzO1xuICAgICAgICB2YXIgcyA9IGkgPiAwID8gMSAtIG1pbl8vaSA6IDA7XG4gICAgICAgIGlmIChzID09PSAwKSB7XG4gICAgICAgICAgICBoID0gTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCA9ICgoci1nKSsoci1iKSkgLyAyO1xuICAgICAgICAgICAgaCAvPSBzcXJ0KChyLWcpKihyLWcpICsgKHItYikqKGctYikpO1xuICAgICAgICAgICAgaCA9IGFjb3MoaCk7XG4gICAgICAgICAgICBpZiAoYiA+IGcpIHtcbiAgICAgICAgICAgICAgICBoID0gVFdPUEkgLSBoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaCAvPSBUV09QSTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gqMzYwLHMsaV07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNpXzEgPSByZ2IyaHNpO1xuXG4gICAgdmFyIHVucGFjayRlID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsaW1pdCQxID0gdXRpbHMubGltaXQ7XG4gICAgdmFyIFRXT1BJJDEgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgUElUSElSRCA9IHV0aWxzLlBJVEhJUkQ7XG4gICAgdmFyIGNvcyA9IE1hdGguY29zO1xuXG4gICAgLypcbiAgICAgKiBodWUgWzAuLjM2MF1cbiAgICAgKiBzYXR1cmF0aW9uIFswLi4xXVxuICAgICAqIGludGVuc2l0eSBbMC4uMV1cbiAgICAgKi9cbiAgICB2YXIgaHNpMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAvKlxuICAgICAgICBib3Jyb3dlZCBmcm9tIGhlcmU6XG4gICAgICAgIGh0dHA6Ly9odW1tZXIuc3RhbmZvcmQuZWR1L211c2VpbmZvL2RvYy9leGFtcGxlcy9odW1kcnVtL2tleXNjYXBlMi9oc2kycmdiLmNwcFxuICAgICAgICAqL1xuICAgICAgICBhcmdzID0gdW5wYWNrJGUoYXJncywgJ2hzaScpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGkgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG5cbiAgICAgICAgaWYgKGlzTmFOKGgpKSB7IGggPSAwOyB9XG4gICAgICAgIGlmIChpc05hTihzKSkgeyBzID0gMDsgfVxuICAgICAgICAvLyBub3JtYWxpemUgaHVlXG4gICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBoIC89IDM2MDtcbiAgICAgICAgaWYgKGggPCAxLzMpIHtcbiAgICAgICAgICAgIGIgPSAoMS1zKS8zO1xuICAgICAgICAgICAgciA9ICgxK3MqY29zKFRXT1BJJDEqaCkvY29zKFBJVEhJUkQtVFdPUEkkMSpoKSkvMztcbiAgICAgICAgICAgIGcgPSAxIC0gKGIrcik7XG4gICAgICAgIH0gZWxzZSBpZiAoaCA8IDIvMykge1xuICAgICAgICAgICAgaCAtPSAxLzM7XG4gICAgICAgICAgICByID0gKDEtcykvMztcbiAgICAgICAgICAgIGcgPSAoMStzKmNvcyhUV09QSSQxKmgpL2NvcyhQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBiID0gMSAtIChyK2cpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaCAtPSAyLzM7XG4gICAgICAgICAgICBnID0gKDEtcykvMztcbiAgICAgICAgICAgIGIgPSAoMStzKmNvcyhUV09QSSQxKmgpL2NvcyhQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICByID0gMSAtIChnK2IpO1xuICAgICAgICB9XG4gICAgICAgIHIgPSBsaW1pdCQxKGkqciozKTtcbiAgICAgICAgZyA9IGxpbWl0JDEoaSpnKjMpO1xuICAgICAgICBiID0gbGltaXQkMShpKmIqMyk7XG4gICAgICAgIHJldHVybiBbcioyNTUsIGcqMjU1LCBiKjI1NSwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgaHNpMnJnYl8xID0gaHNpMnJnYjtcblxuICAgIHZhciB1bnBhY2skZiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ2ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oc2kgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2lfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oc2kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2knXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oc2kgPSBoc2kycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRmKGFyZ3MsICdoc2knKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDYoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzaSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skZyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ3ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oc2wgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc2xfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oc2wgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc2wnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oc2wgPSBoc2wycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRnKGFyZ3MsICdoc2wnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDcoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzbCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skaCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbWluJDEgPSBNYXRoLm1pbjtcbiAgICB2YXIgbWF4JDEgPSBNYXRoLm1heDtcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc3YocixnLGIpXG4gICAgICogLSByZ2IyaHN2KFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHN2KHtyLGcsYn0pXG4gICAgICovXG4gICAgdmFyIHJnYjJoc2wkMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGgoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgbWluXyA9IG1pbiQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4XyA9IG1heCQxKHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXhfIC0gbWluXztcbiAgICAgICAgdmFyIGgscyx2O1xuICAgICAgICB2ID0gbWF4XyAvIDI1NS4wO1xuICAgICAgICBpZiAobWF4XyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE51bWJlci5OYU47XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHMgPSBkZWx0YSAvIG1heF87XG4gICAgICAgICAgICBpZiAociA9PT0gbWF4XykgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4XykgeyBoID0gMisoYiAtIHIpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGlmIChiID09PSBtYXhfKSB7IGggPSA0KyhyIC0gZykgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaCAqPSA2MDtcbiAgICAgICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbaCwgcywgdl1cbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoc3YgPSByZ2IyaHNsJDE7XG5cbiAgICB2YXIgdW5wYWNrJGkgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yJDEgPSBNYXRoLmZsb29yO1xuXG4gICAgdmFyIGhzdjJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMiwgYXNzaWduJDMsIGFzc2lnbiQ0LCBhc3NpZ24kNTtcblxuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuICAgICAgICBhcmdzID0gdW5wYWNrJGkoYXJncywgJ2hzdicpO1xuICAgICAgICB2YXIgaCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBzID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIHYgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIHYgKj0gMjU1O1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgciA9IGcgPSBiID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG5cbiAgICAgICAgICAgIHZhciBpID0gZmxvb3IkMShoKTtcbiAgICAgICAgICAgIHZhciBmID0gaCAtIGk7XG4gICAgICAgICAgICB2YXIgcCA9IHYgKiAoMSAtIHMpO1xuICAgICAgICAgICAgdmFyIHEgPSB2ICogKDEgLSBzICogZik7XG4gICAgICAgICAgICB2YXIgdCA9IHYgKiAoMSAtIHMgKiAoMSAtIGYpKTtcblxuICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiAoYXNzaWduID0gW3YsIHQsIHBdLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDE6IChhc3NpZ24kMSA9IFtxLCB2LCBwXSwgciA9IGFzc2lnbiQxWzBdLCBnID0gYXNzaWduJDFbMV0sIGIgPSBhc3NpZ24kMVsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAyOiAoYXNzaWduJDIgPSBbcCwgdiwgdF0sIHIgPSBhc3NpZ24kMlswXSwgZyA9IGFzc2lnbiQyWzFdLCBiID0gYXNzaWduJDJbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMzogKGFzc2lnbiQzID0gW3AsIHEsIHZdLCByID0gYXNzaWduJDNbMF0sIGcgPSBhc3NpZ24kM1sxXSwgYiA9IGFzc2lnbiQzWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IChhc3NpZ24kNCA9IFt0LCBwLCB2XSwgciA9IGFzc2lnbiQ0WzBdLCBnID0gYXNzaWduJDRbMV0sIGIgPSBhc3NpZ24kNFsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA1OiAoYXNzaWduJDUgPSBbdiwgcCwgcV0sIHIgPSBhc3NpZ24kNVswXSwgZyA9IGFzc2lnbiQ1WzFdLCBiID0gYXNzaWduJDVbMl0pOyBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsYXJncy5sZW5ndGggPiAzP2FyZ3NbM106MV07XG4gICAgfTtcblxuICAgIHZhciBoc3YycmdiXzEgPSBoc3YycmdiO1xuXG4gICAgdmFyIHVucGFjayRqID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDggPSB1dGlscy50eXBlO1xuXG5cblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmhzdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhzdih0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5oc3YgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydoc3YnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5oc3YgPSBoc3YycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRqKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDgoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2hzdic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsYWJDb25zdGFudHMgPSB7XG4gICAgICAgIC8vIENvcnJlc3BvbmRzIHJvdWdobHkgdG8gUkdCIGJyaWdodGVyL2RhcmtlclxuICAgICAgICBLbjogMTgsXG5cbiAgICAgICAgLy8gRDY1IHN0YW5kYXJkIHJlZmVyZW50XG4gICAgICAgIFhuOiAwLjk1MDQ3MCxcbiAgICAgICAgWW46IDEsXG4gICAgICAgIFpuOiAxLjA4ODgzMCxcblxuICAgICAgICB0MDogMC4xMzc5MzEwMzQsICAvLyA0IC8gMjlcbiAgICAgICAgdDE6IDAuMjA2ODk2NTUyLCAgLy8gNiAvIDI5XG4gICAgICAgIHQyOiAwLjEyODQxODU1LCAgIC8vIDMgKiB0MSAqIHQxXG4gICAgICAgIHQzOiAwLjAwODg1NjQ1MiwgIC8vIHQxICogdDEgKiB0MVxuICAgIH07XG5cbiAgICB2YXIgdW5wYWNrJGsgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyA9IE1hdGgucG93O1xuXG4gICAgdmFyIHJnYjJsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRrKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMnh5eihyLGcsYik7XG4gICAgICAgIHZhciB4ID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5ID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6ID0gcmVmJDFbMl07XG4gICAgICAgIHZhciBsID0gMTE2ICogeSAtIDE2O1xuICAgICAgICByZXR1cm4gW2wgPCAwID8gMCA6IGwsIDUwMCAqICh4IC0geSksIDIwMCAqICh5IC0geildO1xuICAgIH07XG5cbiAgICB2YXIgcmdiX3h5eiA9IGZ1bmN0aW9uIChyKSB7XG4gICAgICAgIGlmICgociAvPSAyNTUpIDw9IDAuMDQwNDUpIHsgcmV0dXJuIHIgLyAxMi45MjsgfVxuICAgICAgICByZXR1cm4gcG93KChyICsgMC4wNTUpIC8gMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciB4eXpfbGFiID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgaWYgKHQgPiBsYWJDb25zdGFudHMudDMpIHsgcmV0dXJuIHBvdyh0LCAxIC8gMyk7IH1cbiAgICAgICAgcmV0dXJuIHQgLyBsYWJDb25zdGFudHMudDIgKyBsYWJDb25zdGFudHMudDA7XG4gICAgfTtcblxuICAgIHZhciByZ2IyeHl6ID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIHIgPSByZ2JfeHl6KHIpO1xuICAgICAgICBnID0gcmdiX3h5eihnKTtcbiAgICAgICAgYiA9IHJnYl94eXooYik7XG4gICAgICAgIHZhciB4ID0geHl6X2xhYigoMC40MTI0NTY0ICogciArIDAuMzU3NTc2MSAqIGcgKyAwLjE4MDQzNzUgKiBiKSAvIGxhYkNvbnN0YW50cy5Ybik7XG4gICAgICAgIHZhciB5ID0geHl6X2xhYigoMC4yMTI2NzI5ICogciArIDAuNzE1MTUyMiAqIGcgKyAwLjA3MjE3NTAgKiBiKSAvIGxhYkNvbnN0YW50cy5Zbik7XG4gICAgICAgIHZhciB6ID0geHl6X2xhYigoMC4wMTkzMzM5ICogciArIDAuMTE5MTkyMCAqIGcgKyAwLjk1MDMwNDEgKiBiKSAvIGxhYkNvbnN0YW50cy5abik7XG4gICAgICAgIHJldHVybiBbeCx5LHpdO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxhYl8xID0gcmdiMmxhYjtcblxuICAgIHZhciB1bnBhY2skbCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcG93JDEgPSBNYXRoLnBvdztcblxuICAgIC8qXG4gICAgICogTCogWzAuLjEwMF1cbiAgICAgKiBhIFstMTAwLi4xMDBdXG4gICAgICogYiBbLTEwMC4uMTAwXVxuICAgICAqL1xuICAgIHZhciBsYWIycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skbChhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGEgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgYiA9IGFyZ3NbMl07XG4gICAgICAgIHZhciB4LHkseiwgcixnLGJfO1xuXG4gICAgICAgIHkgPSAobCArIDE2KSAvIDExNjtcbiAgICAgICAgeCA9IGlzTmFOKGEpID8geSA6IHkgKyBhIC8gNTAwO1xuICAgICAgICB6ID0gaXNOYU4oYikgPyB5IDogeSAtIGIgLyAyMDA7XG5cbiAgICAgICAgeSA9IGxhYkNvbnN0YW50cy5ZbiAqIGxhYl94eXooeSk7XG4gICAgICAgIHggPSBsYWJDb25zdGFudHMuWG4gKiBsYWJfeHl6KHgpO1xuICAgICAgICB6ID0gbGFiQ29uc3RhbnRzLlpuICogbGFiX3h5eih6KTtcblxuICAgICAgICByID0geHl6X3JnYigzLjI0MDQ1NDIgKiB4IC0gMS41MzcxMzg1ICogeSAtIDAuNDk4NTMxNCAqIHopOyAgLy8gRDY1IC0+IHNSR0JcbiAgICAgICAgZyA9IHh5el9yZ2IoLTAuOTY5MjY2MCAqIHggKyAxLjg3NjAxMDggKiB5ICsgMC4wNDE1NTYwICogeik7XG4gICAgICAgIGJfID0geHl6X3JnYigwLjA1NTY0MzQgKiB4IC0gMC4yMDQwMjU5ICogeSArIDEuMDU3MjI1MiAqIHopO1xuXG4gICAgICAgIHJldHVybiBbcixnLGJfLGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIHh5el9yZ2IgPSBmdW5jdGlvbiAocikge1xuICAgICAgICByZXR1cm4gMjU1ICogKHIgPD0gMC4wMDMwNCA/IDEyLjkyICogciA6IDEuMDU1ICogcG93JDEociwgMSAvIDIuNCkgLSAwLjA1NSlcbiAgICB9O1xuXG4gICAgdmFyIGxhYl94eXogPSBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gdCA+IGxhYkNvbnN0YW50cy50MSA/IHQgKiB0ICogdCA6IGxhYkNvbnN0YW50cy50MiAqICh0IC0gbGFiQ29uc3RhbnRzLnQwKVxuICAgIH07XG5cbiAgICB2YXIgbGFiMnJnYl8xID0gbGFiMnJnYjtcblxuICAgIHZhciB1bnBhY2skbSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ5ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5sYWIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJsYWJfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5sYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydsYWInXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5sYWIgPSBsYWIycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRtKGFyZ3MsICdsYWInKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDkoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2xhYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skbiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgUkFEMkRFRyA9IHV0aWxzLlJBRDJERUc7XG4gICAgdmFyIHNxcnQkMSA9IE1hdGguc3FydDtcbiAgICB2YXIgYXRhbjIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciByb3VuZCQ0ID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBsYWIybGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skbihhcmdzLCAnbGFiJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBjID0gc3FydCQxKGEgKiBhICsgYiAqIGIpO1xuICAgICAgICB2YXIgaCA9IChhdGFuMihiLCBhKSAqIFJBRDJERUcgKyAzNjApICUgMzYwO1xuICAgICAgICBpZiAocm91bmQkNChjKjEwMDAwKSA9PT0gMCkgeyBoID0gTnVtYmVyLk5hTjsgfVxuICAgICAgICByZXR1cm4gW2wsIGMsIGhdO1xuICAgIH07XG5cbiAgICB2YXIgbGFiMmxjaF8xID0gbGFiMmxjaDtcblxuICAgIHZhciB1bnBhY2skbyA9IHV0aWxzLnVucGFjaztcblxuXG5cbiAgICB2YXIgcmdiMmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJG8oYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSByZ2IybGFiXzEocixnLGIpO1xuICAgICAgICB2YXIgbCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYl8gPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIGxhYjJsY2hfMShsLGEsYl8pO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmxjaF8xID0gcmdiMmxjaDtcblxuICAgIHZhciB1bnBhY2skcCA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgREVHMlJBRCA9IHV0aWxzLkRFRzJSQUQ7XG4gICAgdmFyIHNpbiA9IE1hdGguc2luO1xuICAgIHZhciBjb3MkMSA9IE1hdGguY29zO1xuXG4gICAgdmFyIGxjaDJsYWIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgQ29udmVydCBmcm9tIGEgcXVhbGl0YXRpdmUgcGFyYW1ldGVyIGggYW5kIGEgcXVhbnRpdGF0aXZlIHBhcmFtZXRlciBsIHRvIGEgMjQtYml0IHBpeGVsLlxuICAgICAgICBUaGVzZSBmb3JtdWxhcyB3ZXJlIGludmVudGVkIGJ5IERhdmlkIERhbHJ5bXBsZSB0byBvYnRhaW4gbWF4aW11bSBjb250cmFzdCB3aXRob3V0IGdvaW5nXG4gICAgICAgIG91dCBvZiBnYW11dCBpZiB0aGUgcGFyYW1ldGVycyBhcmUgaW4gdGhlIHJhbmdlIDAtMS5cblxuICAgICAgICBBIHNhdHVyYXRpb24gbXVsdGlwbGllciB3YXMgYWRkZWQgYnkgR3JlZ29yIEFpc2NoXG4gICAgICAgICovXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skcChhcmdzLCAnbGNoJyk7XG4gICAgICAgIHZhciBsID0gcmVmWzBdO1xuICAgICAgICB2YXIgYyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGggPSByZWZbMl07XG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBoID0gaCAqIERFRzJSQUQ7XG4gICAgICAgIHJldHVybiBbbCwgY29zJDEoaCkgKiBjLCBzaW4oaCkgKiBjXVxuICAgIH07XG5cbiAgICB2YXIgbGNoMmxhYl8xID0gbGNoMmxhYjtcblxuICAgIHZhciB1bnBhY2skcSA9IHV0aWxzLnVucGFjaztcblxuXG5cbiAgICB2YXIgbGNoMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJHEoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBjID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcmVmID0gbGNoMmxhYl8xIChsLGMsaCk7XG4gICAgICAgIHZhciBMID0gcmVmWzBdO1xuICAgICAgICB2YXIgYSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBsYWIycmdiXzEgKEwsYSxiXyk7XG4gICAgICAgIHZhciByID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBnID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBbciwgZywgYiwgYXJncy5sZW5ndGggPiAzID8gYXJnc1szXSA6IDFdO1xuICAgIH07XG5cbiAgICB2YXIgbGNoMnJnYl8xID0gbGNoMnJnYjtcblxuICAgIHZhciB1bnBhY2skciA9IHV0aWxzLnVucGFjaztcblxuXG4gICAgdmFyIGhjbDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIGhjbCA9IHVucGFjayRyKGFyZ3MsICdoY2wnKS5yZXZlcnNlKCk7XG4gICAgICAgIHJldHVybiBsY2gycmdiXzEuYXBwbHkodm9pZCAwLCBoY2wpO1xuICAgIH07XG5cbiAgICB2YXIgaGNsMnJnYl8xID0gaGNsMnJnYjtcblxuICAgIHZhciB1bnBhY2skcyA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRhID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5sY2ggPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2hfMSh0aGlzLl9yZ2IpOyB9O1xuICAgIENvbG9yXzEucHJvdG90eXBlLmhjbCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gcmdiMmxjaF8xKHRoaXMuX3JnYikucmV2ZXJzZSgpOyB9O1xuXG4gICAgY2hyb21hXzEubGNoID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGNoJ10pICkpO1xuICAgIH07XG4gICAgY2hyb21hXzEuaGNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQubGNoID0gbGNoMnJnYl8xO1xuICAgIGlucHV0LmZvcm1hdC5oY2wgPSBoY2wycmdiXzE7XG5cbiAgICBbJ2xjaCcsJ2hjbCddLmZvckVhY2goZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJHMoYXJncywgbSk7XG4gICAgICAgICAgICBpZiAodHlwZSRhKGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTsgfSk7XG5cbiAgICB2YXIgdHlwZSRiID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaGV4ID0gcmdiMmhleF8xKHRoaXMuX3JnYiwgJ3JnYicpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IE9iamVjdC5rZXlzKHczY3gxMV8xKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgaWYgKHczY3gxMV8xW25dID09PSBoZXgpIHsgcmV0dXJuIG4udG9Mb3dlckNhc2UoKTsgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoZXg7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5uYW1lZCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh3M2N4MTFfMVtuYW1lXSkgeyByZXR1cm4gaGV4MnJnYl8xKHczY3gxMV8xW25hbWVdKTsgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gY29sb3IgbmFtZTogJytuYW1lKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMSBdO1xuXG4gICAgICAgICAgICBpZiAoIXJlc3QubGVuZ3RoICYmIHR5cGUkYihoKSA9PT0gJ3N0cmluZycgJiYgdzNjeDExXzFbaC50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnbmFtZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHQgPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgcmdiMm51bSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHQoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICByZXR1cm4gKHIgPDwgMTYpICsgKGcgPDwgOCkgKyBiO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMm51bV8xID0gcmdiMm51bTtcblxuICAgIHZhciB0eXBlJGMgPSB1dGlscy50eXBlO1xuXG4gICAgdmFyIG51bTJyZ2IgPSBmdW5jdGlvbiAobnVtKSB7XG4gICAgICAgIGlmICh0eXBlJGMobnVtKSA9PSBcIm51bWJlclwiICYmIG51bSA+PSAwICYmIG51bSA8PSAweEZGRkZGRikge1xuICAgICAgICAgICAgdmFyIHIgPSBudW0gPj4gMTY7XG4gICAgICAgICAgICB2YXIgZyA9IChudW0gPj4gOCkgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGIgPSBudW0gJiAweEZGO1xuICAgICAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bmtub3duIG51bSBjb2xvcjogXCIrbnVtKTtcbiAgICB9O1xuXG4gICAgdmFyIG51bTJyZ2JfMSA9IG51bTJyZ2I7XG5cbiAgICB2YXIgdHlwZSRkID0gdXRpbHMudHlwZTtcblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5udW0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJudW1fMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5udW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydudW0nXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5udW0gPSBudW0ycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSAxICYmIHR5cGUkZChhcmdzWzBdKSA9PT0gJ251bWJlcicgJiYgYXJnc1swXSA+PSAwICYmIGFyZ3NbMF0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ251bSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB1bnBhY2skdSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSRlID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcm91bmQkNSA9IE1hdGgucm91bmQ7XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5yZ2IgPSBmdW5jdGlvbihybmQpIHtcbiAgICAgICAgaWYgKCBybmQgPT09IHZvaWQgMCApIHJuZD10cnVlO1xuXG4gICAgICAgIGlmIChybmQgPT09IGZhbHNlKSB7IHJldHVybiB0aGlzLl9yZ2Iuc2xpY2UoMCwzKTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMykubWFwKHJvdW5kJDUpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5yZ2JhID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsNCkubWFwKGZ1bmN0aW9uICh2LGkpIHtcbiAgICAgICAgICAgIHJldHVybiBpPDMgPyAocm5kID09PSBmYWxzZSA/IHYgOiByb3VuZCQ1KHYpKSA6IHY7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydyZ2InXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5yZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skdShhcmdzLCAncmdiYScpO1xuICAgICAgICBpZiAocmdiYVszXSA9PT0gdW5kZWZpbmVkKSB7IHJnYmFbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiByZ2JhO1xuICAgIH07XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAzLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayR1KGFyZ3MsICdyZ2JhJyk7XG4gICAgICAgICAgICBpZiAodHlwZSRlKGFyZ3MpID09PSAnYXJyYXknICYmIChhcmdzLmxlbmd0aCA9PT0gMyB8fFxuICAgICAgICAgICAgICAgIGFyZ3MubGVuZ3RoID09PSA0ICYmIHR5cGUkZShhcmdzWzNdKSA9PSAnbnVtYmVyJyAmJiBhcmdzWzNdID49IDAgJiYgYXJnc1szXSA8PSAxKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAncmdiJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLypcbiAgICAgKiBCYXNlZCBvbiBpbXBsZW1lbnRhdGlvbiBieSBOZWlsIEJhcnRsZXR0XG4gICAgICogaHR0cHM6Ly9naXRodWIuY29tL25laWxiYXJ0bGV0dC9jb2xvci10ZW1wZXJhdHVyZVxuICAgICAqL1xuXG4gICAgdmFyIGxvZyA9IE1hdGgubG9nO1xuXG4gICAgdmFyIHRlbXBlcmF0dXJlMnJnYiA9IGZ1bmN0aW9uIChrZWx2aW4pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBrZWx2aW4gLyAxMDA7XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHRlbXAgPCA2Nikge1xuICAgICAgICAgICAgciA9IDI1NTtcbiAgICAgICAgICAgIGcgPSAtMTU1LjI1NDg1NTYyNzA5MTc5IC0gMC40NDU5Njk1MDQ2OTU3OTEzMyAqIChnID0gdGVtcC0yKSArIDEwNC40OTIxNjE5OTM5Mzg4OCAqIGxvZyhnKTtcbiAgICAgICAgICAgIGIgPSB0ZW1wIDwgMjAgPyAwIDogLTI1NC43NjkzNTE4NDEyMDkwMiArIDAuODI3NDA5NjA2NDAwNzM5NSAqIChiID0gdGVtcC0xMCkgKyAxMTUuNjc5OTQ0MDEwNjYxNDcgKiBsb2coYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByID0gMzUxLjk3NjkwNTY2ODA1NjkzICsgMC4xMTQyMDY0NTM3ODQxNjUgKiAociA9IHRlbXAtNTUpIC0gNDAuMjUzNjYzMDkzMzIxMjcgKiBsb2cocik7XG4gICAgICAgICAgICBnID0gMzI1LjQ0OTQxMjU3MTE5NzQgKyAwLjA3OTQzNDU2NTM2NjYyMzQyICogKGcgPSB0ZW1wLTUwKSAtIDI4LjA4NTI5NjM1MDc5NTcgKiBsb2coZyk7XG4gICAgICAgICAgICBiID0gMjU1O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgfTtcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2JfMSA9IHRlbXBlcmF0dXJlMnJnYjtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKiovXG5cblxuICAgIHZhciB1bnBhY2skdiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgcm91bmQkNiA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skdihhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmdiWzBdLCBiID0gcmdiWzJdO1xuICAgICAgICB2YXIgbWluVGVtcCA9IDEwMDA7XG4gICAgICAgIHZhciBtYXhUZW1wID0gNDAwMDA7XG4gICAgICAgIHZhciBlcHMgPSAwLjQ7XG4gICAgICAgIHZhciB0ZW1wO1xuICAgICAgICB3aGlsZSAobWF4VGVtcCAtIG1pblRlbXAgPiBlcHMpIHtcbiAgICAgICAgICAgIHRlbXAgPSAobWF4VGVtcCArIG1pblRlbXApICogMC41O1xuICAgICAgICAgICAgdmFyIHJnYiQxID0gdGVtcGVyYXR1cmUycmdiXzEodGVtcCk7XG4gICAgICAgICAgICBpZiAoKHJnYiQxWzJdIC8gcmdiJDFbMF0pID49IChiIC8gcikpIHtcbiAgICAgICAgICAgICAgICBtYXhUZW1wID0gdGVtcDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWluVGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvdW5kJDYodGVtcCk7XG4gICAgfTtcblxuICAgIHZhciByZ2IydGVtcGVyYXR1cmVfMSA9IHJnYjJ0ZW1wZXJhdHVyZTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLnRlbXAgPVxuICAgIENvbG9yXzEucHJvdG90eXBlLmtlbHZpbiA9XG4gICAgQ29sb3JfMS5wcm90b3R5cGUudGVtcGVyYXR1cmUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJ0ZW1wZXJhdHVyZV8xKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLnRlbXAgPVxuICAgIGNocm9tYV8xLmtlbHZpbiA9XG4gICAgY2hyb21hXzEudGVtcGVyYXR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWyd0ZW1wJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQudGVtcCA9XG4gICAgaW5wdXQuZm9ybWF0LmtlbHZpbiA9XG4gICAgaW5wdXQuZm9ybWF0LnRlbXBlcmF0dXJlID0gdGVtcGVyYXR1cmUycmdiXzE7XG5cbiAgICB2YXIgdHlwZSRmID0gdXRpbHMudHlwZTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmFscGhhID0gZnVuY3Rpb24oYSwgbXV0YXRlKSB7XG4gICAgICAgIGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICAgICAgaWYgKGEgIT09IHVuZGVmaW5lZCAmJiB0eXBlJGYoYSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcmdiWzNdID0gYTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShbdGhpcy5fcmdiWzBdLCB0aGlzLl9yZ2JbMV0sIHRoaXMuX3JnYlsyXSwgYV0sICdyZ2InKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcmdiWzNdO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5jbGlwcGVkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZ2IuX2NsaXBwZWQgfHwgZmFsc2U7XG4gICAgfTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmRhcmtlbiA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxhYiA9IG1lLmxhYigpO1xuICAgIFx0bGFiWzBdIC09IGxhYkNvbnN0YW50cy5LbiAqIGFtb3VudDtcbiAgICBcdHJldHVybiBuZXcgQ29sb3JfMShsYWIsICdsYWInKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuYnJpZ2h0ZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuZGFya2VuKC1hbW91bnQpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5kYXJrZXIgPSBDb2xvcl8xLnByb3RvdHlwZS5kYXJrZW47XG4gICAgQ29sb3JfMS5wcm90b3R5cGUuYnJpZ2h0ZXIgPSBDb2xvcl8xLnByb3RvdHlwZS5icmlnaHRlbjtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG1jKSB7XG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHsgcmV0dXJuIHNyY1tpXTsgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgdHlwZSRnID0gdXRpbHMudHlwZTtcbiAgICB2YXIgcG93JDIgPSBNYXRoLnBvdztcblxuICAgIHZhciBFUFMgPSAxZS03O1xuICAgIHZhciBNQVhfSVRFUiA9IDIwO1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubHVtaW5hbmNlID0gZnVuY3Rpb24obHVtKSB7XG4gICAgICAgIGlmIChsdW0gIT09IHVuZGVmaW5lZCAmJiB0eXBlJGcobHVtKSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGlmIChsdW0gPT09IDApIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSBibGFja1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShbMCwwLDAsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGx1bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIHJldHVybiBwdXJlIHdoaXRlXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKFsyNTUsMjU1LDI1NSx0aGlzLl9yZ2JbM11dLCAncmdiJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb21wdXRlIG5ldyBjb2xvciB1c2luZy4uLlxuICAgICAgICAgICAgdmFyIGN1cl9sdW0gPSB0aGlzLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgdmFyIG1vZGUgPSAncmdiJztcbiAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IE1BWF9JVEVSO1xuXG4gICAgICAgICAgICB2YXIgdGVzdCA9IGZ1bmN0aW9uIChsb3csIGhpZ2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWlkID0gbG93LmludGVycG9sYXRlKGhpZ2gsIDAuNSwgbW9kZSk7XG4gICAgICAgICAgICAgICAgdmFyIGxtID0gbWlkLmx1bWluYW5jZSgpO1xuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhsdW0gLSBsbSkgPCBFUFMgfHwgIW1heF9pdGVyLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xvc2UgZW5vdWdoXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBsbSA+IGx1bSA/IHRlc3QobG93LCBtaWQpIDogdGVzdChtaWQsIGhpZ2gpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHJnYiA9IChjdXJfbHVtID4gbHVtID8gdGVzdChuZXcgQ29sb3JfMShbMCwwLDBdKSwgdGhpcykgOiB0ZXN0KHRoaXMsIG5ldyBDb2xvcl8xKFsyNTUsMjU1LDI1NV0pKSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEocmdiLmNvbmNhdCggW3RoaXMuX3JnYlszXV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiMmx1bWluYW5jZS5hcHBseSh2b2lkIDAsICh0aGlzLl9yZ2IpLnNsaWNlKDAsMykpO1xuICAgIH07XG5cblxuICAgIHZhciByZ2IybHVtaW5hbmNlID0gZnVuY3Rpb24gKHIsZyxiKSB7XG4gICAgICAgIC8vIHJlbGF0aXZlIGx1bWluYW5jZVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy53My5vcmcvVFIvMjAwOC9SRUMtV0NBRzIwLTIwMDgxMjExLyNyZWxhdGl2ZWx1bWluYW5jZWRlZlxuICAgICAgICByID0gbHVtaW5hbmNlX3gocik7XG4gICAgICAgIGcgPSBsdW1pbmFuY2VfeChnKTtcbiAgICAgICAgYiA9IGx1bWluYW5jZV94KGIpO1xuICAgICAgICByZXR1cm4gMC4yMTI2ICogciArIDAuNzE1MiAqIGcgKyAwLjA3MjIgKiBiO1xuICAgIH07XG5cbiAgICB2YXIgbHVtaW5hbmNlX3ggPSBmdW5jdGlvbiAoeCkge1xuICAgICAgICB4IC89IDI1NTtcbiAgICAgICAgcmV0dXJuIHggPD0gMC4wMzkyOCA/IHgvMTIuOTIgOiBwb3ckMigoeCswLjA1NSkvMS4wNTUsIDIuNCk7XG4gICAgfTtcblxuICAgIHZhciBpbnRlcnBvbGF0b3IgPSB7fTtcblxuICAgIHZhciB0eXBlJGggPSB1dGlscy50eXBlO1xuXG5cbiAgICB2YXIgbWl4ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgaWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDM7XG4gICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDMgXTtcblxuICAgICAgICB2YXIgbW9kZSA9IHJlc3RbMF0gfHwgJ2xyZ2InO1xuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSAmJiAhcmVzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayB0byB0aGUgZmlyc3Qgc3VwcG9ydGVkIG1vZGVcbiAgICAgICAgICAgIG1vZGUgPSBPYmplY3Qua2V5cyhpbnRlcnBvbGF0b3IpWzBdO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaW50ZXJwb2xhdG9yW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwiaW50ZXJwb2xhdGlvbiBtb2RlIFwiICsgbW9kZSArIFwiIGlzIG5vdCBkZWZpbmVkXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSRoKGNvbDEpICE9PSAnb2JqZWN0JykgeyBjb2wxID0gbmV3IENvbG9yXzEoY29sMSk7IH1cbiAgICAgICAgaWYgKHR5cGUkaChjb2wyKSAhPT0gJ29iamVjdCcpIHsgY29sMiA9IG5ldyBDb2xvcl8xKGNvbDIpOyB9XG4gICAgICAgIHJldHVybiBpbnRlcnBvbGF0b3JbbW9kZV0oY29sMSwgY29sMiwgZilcbiAgICAgICAgICAgIC5hbHBoYShjb2wxLmFscGhhKCkgKyBmICogKGNvbDIuYWxwaGEoKSAtIGNvbDEuYWxwaGEoKSkpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5taXggPVxuICAgIENvbG9yXzEucHJvdG90eXBlLmludGVycG9sYXRlID0gZnVuY3Rpb24oY29sMiwgZikge1xuICAgIFx0aWYgKCBmID09PSB2b2lkIDAgKSBmPTAuNTtcbiAgICBcdHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAyO1xuICAgIFx0d2hpbGUgKCBsZW4tLSA+IDAgKSByZXN0WyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuICsgMiBdO1xuXG4gICAgXHRyZXR1cm4gbWl4LmFwcGx5KHZvaWQgMCwgWyB0aGlzLCBjb2wyLCBmIF0uY29uY2F0KCByZXN0ICkpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5wcmVtdWx0aXBseSA9IGZ1bmN0aW9uKG11dGF0ZSkge1xuICAgIFx0aWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgIFx0dmFyIHJnYiA9IHRoaXMuX3JnYjtcbiAgICBcdHZhciBhID0gcmdiWzNdO1xuICAgIFx0aWYgKG11dGF0ZSkge1xuICAgIFx0XHR0aGlzLl9yZ2IgPSBbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV07XG4gICAgXHRcdHJldHVybiB0aGlzO1xuICAgIFx0fSBlbHNlIHtcbiAgICBcdFx0cmV0dXJuIG5ldyBDb2xvcl8xKFtyZ2JbMF0qYSwgcmdiWzFdKmEsIHJnYlsyXSphLCBhXSwgJ3JnYicpO1xuICAgIFx0fVxuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5zYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHR2YXIgbWUgPSB0aGlzO1xuICAgIFx0dmFyIGxjaCA9IG1lLmxjaCgpO1xuICAgIFx0bGNoWzFdICs9IGxhYkNvbnN0YW50cy5LbiAqIGFtb3VudDtcbiAgICBcdGlmIChsY2hbMV0gPCAwKSB7IGxjaFsxXSA9IDA7IH1cbiAgICBcdHJldHVybiBuZXcgQ29sb3JfMShsY2gsICdsY2gnKS5hbHBoYShtZS5hbHBoYSgpLCB0cnVlKTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuZGVzYXR1cmF0ZSA9IGZ1bmN0aW9uKGFtb3VudCkge1xuICAgIFx0aWYgKCBhbW91bnQgPT09IHZvaWQgMCApIGFtb3VudD0xO1xuXG4gICAgXHRyZXR1cm4gdGhpcy5zYXR1cmF0ZSgtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkaSA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihtYywgdmFsdWUsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgICAgIHZhciByZWYgPSBtYy5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbW9kZSA9IHJlZlswXTtcbiAgICAgICAgdmFyIGNoYW5uZWwgPSByZWZbMV07XG4gICAgICAgIHZhciBzcmMgPSB0aGlzW21vZGVdKCk7XG4gICAgICAgIGlmIChjaGFubmVsKSB7XG4gICAgICAgICAgICB2YXIgaSA9IG1vZGUuaW5kZXhPZihjaGFubmVsKTtcbiAgICAgICAgICAgIGlmIChpID4gLTEpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRpKHZhbHVlKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBzd2l0Y2godmFsdWUuY2hhckF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcrJzogc3JjW2ldICs9ICt2YWx1ZTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICctJzogc3JjW2ldICs9ICt2YWx1ZTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcqJzogc3JjW2ldICo9ICsodmFsdWUuc3Vic3RyKDEpKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcvJzogc3JjW2ldIC89ICsodmFsdWUuc3Vic3RyKDEpKTsgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OiBzcmNbaV0gPSArdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUkaSh2YWx1ZSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHNyY1tpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInVuc3VwcG9ydGVkIHZhbHVlIGZvciBDb2xvci5zZXRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvdXQgPSBuZXcgQ29sb3JfMShzcmMsIG1vZGUpO1xuICAgICAgICAgICAgICAgIGlmIChtdXRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmdiID0gb3V0Ll9yZ2I7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcInVua25vd24gY2hhbm5lbCBcIiArIGNoYW5uZWwgKyBcIiBpbiBtb2RlIFwiICsgbW9kZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHNyYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgcmdiJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLl9yZ2I7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShcbiAgICAgICAgICAgIHh5ejBbMF0gKyBmICogKHh5ejFbMF0teHl6MFswXSksXG4gICAgICAgICAgICB4eXowWzFdICsgZiAqICh4eXoxWzFdLXh5ejBbMV0pLFxuICAgICAgICAgICAgeHl6MFsyXSArIGYgKiAoeHl6MVsyXS14eXowWzJdKSxcbiAgICAgICAgICAgICdyZ2InXG4gICAgICAgIClcbiAgICB9O1xuXG4gICAgLy8gcmVnaXN0ZXIgaW50ZXJwb2xhdG9yXG4gICAgaW50ZXJwb2xhdG9yLnJnYiA9IHJnYiQxO1xuXG4gICAgdmFyIHNxcnQkMiA9IE1hdGguc3FydDtcbiAgICB2YXIgcG93JDMgPSBNYXRoLnBvdztcblxuICAgIHZhciBscmdiID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHJlZiA9IGNvbDEuX3JnYjtcbiAgICAgICAgdmFyIHgxID0gcmVmWzBdO1xuICAgICAgICB2YXIgeTEgPSByZWZbMV07XG4gICAgICAgIHZhciB6MSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gY29sMi5fcmdiO1xuICAgICAgICB2YXIgeDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIHkyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciB6MiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoXG4gICAgICAgICAgICBzcXJ0JDIocG93JDMoeDEsMikgKiAoMS1mKSArIHBvdyQzKHgyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDMoeTEsMikgKiAoMS1mKSArIHBvdyQzKHkyLDIpICogZiksXG4gICAgICAgICAgICBzcXJ0JDIocG93JDMoejEsMikgKiAoMS1mKSArIHBvdyQzKHoyLDIpICogZiksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5scmdiID0gbHJnYjtcblxuICAgIHZhciBsYWIkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciB4eXowID0gY29sMS5sYWIoKTtcbiAgICAgICAgdmFyIHh5ejEgPSBjb2wyLmxhYigpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAnbGFiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5sYWIgPSBsYWIkMTtcblxuICAgIHZhciBfaHN4ID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYsIG0pIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDE7XG5cbiAgICAgICAgdmFyIHh5ejAsIHh5ejE7XG4gICAgICAgIGlmIChtID09PSAnaHNsJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2woKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHN2Jykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHN2KCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc3YoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaGNnJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNnKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2coKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnaHNpJykge1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaHNpKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oc2koKTtcbiAgICAgICAgfSBlbHNlIGlmIChtID09PSAnbGNoJyB8fCBtID09PSAnaGNsJykge1xuICAgICAgICAgICAgbSA9ICdoY2wnO1xuICAgICAgICAgICAgeHl6MCA9IGNvbDEuaGNsKCk7XG4gICAgICAgICAgICB4eXoxID0gY29sMi5oY2woKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBodWUwLCBodWUxLCBzYXQwLCBzYXQxLCBsYnYwLCBsYnYxO1xuICAgICAgICBpZiAobS5zdWJzdHIoMCwgMSkgPT09ICdoJykge1xuICAgICAgICAgICAgKGFzc2lnbiA9IHh5ejAsIGh1ZTAgPSBhc3NpZ25bMF0sIHNhdDAgPSBhc3NpZ25bMV0sIGxidjAgPSBhc3NpZ25bMl0pO1xuICAgICAgICAgICAgKGFzc2lnbiQxID0geHl6MSwgaHVlMSA9IGFzc2lnbiQxWzBdLCBzYXQxID0gYXNzaWduJDFbMV0sIGxidjEgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2F0LCBodWUsIGxidiwgZGg7XG5cbiAgICAgICAgaWYgKCFpc05hTihodWUwKSAmJiAhaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIC8vIGJvdGggY29sb3JzIGhhdmUgaHVlXG4gICAgICAgICAgICBpZiAoaHVlMSA+IGh1ZTAgJiYgaHVlMSAtIGh1ZTAgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTEtKGh1ZTArMzYwKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaHVlMSA8IGh1ZTAgJiYgaHVlMCAtIGh1ZTEgPiAxODApIHtcbiAgICAgICAgICAgICAgICBkaCA9IGh1ZTErMzYwLWh1ZTA7XG4gICAgICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxIC0gaHVlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGh1ZSA9IGh1ZTAgKyBmICogZGg7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTApKSB7XG4gICAgICAgICAgICBodWUgPSBodWUwO1xuICAgICAgICAgICAgaWYgKChsYnYxID09IDEgfHwgbGJ2MSA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDA7IH1cbiAgICAgICAgfSBlbHNlIGlmICghaXNOYU4oaHVlMSkpIHtcbiAgICAgICAgICAgIGh1ZSA9IGh1ZTE7XG4gICAgICAgICAgICBpZiAoKGxidjAgPT0gMSB8fCBsYnYwID09IDApICYmIG0gIT0gJ2hzdicpIHsgc2F0ID0gc2F0MTsgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaHVlID0gTnVtYmVyLk5hTjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzYXQgPT09IHVuZGVmaW5lZCkgeyBzYXQgPSBzYXQwICsgZiAqIChzYXQxIC0gc2F0MCk7IH1cbiAgICAgICAgbGJ2ID0gbGJ2MCArIGYgKiAobGJ2MS1sYnYwKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKFtodWUsIHNhdCwgbGJ2XSwgbSk7XG4gICAgfTtcblxuICAgIHZhciBsY2gkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnbGNoJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5sY2ggPSBsY2gkMTtcbiAgICBpbnRlcnBvbGF0b3IuaGNsID0gbGNoJDE7XG5cbiAgICB2YXIgbnVtJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgYzEgPSBjb2wxLm51bSgpO1xuICAgICAgICB2YXIgYzIgPSBjb2wyLm51bSgpO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoYzEgKyBmICogKGMyLWMxKSwgJ251bScpXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5udW0gPSBudW0kMTtcblxuICAgIHZhciBoY2ckMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaGNnJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oY2cgPSBoY2ckMTtcblxuICAgIHZhciBoc2kkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaHNpJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oc2kgPSBoc2kkMTtcblxuICAgIHZhciBoc2wkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaHNsJyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oc2wgPSBoc2wkMTtcblxuICAgIHZhciBoc3YkMSA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgXHRyZXR1cm4gX2hzeChjb2wxLCBjb2wyLCBmLCAnaHN2Jyk7XG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5oc3YgPSBoc3YkMTtcblxuICAgIHZhciBjbGlwX3JnYiQyID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIHBvdyQ0ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNxcnQkMyA9IE1hdGguc3FydDtcbiAgICB2YXIgUEkkMSA9IE1hdGguUEk7XG4gICAgdmFyIGNvcyQyID0gTWF0aC5jb3M7XG4gICAgdmFyIHNpbiQxID0gTWF0aC5zaW47XG4gICAgdmFyIGF0YW4yJDEgPSBNYXRoLmF0YW4yO1xuXG4gICAgdmFyIGF2ZXJhZ2UgPSBmdW5jdGlvbiAoY29sb3JzLCBtb2RlKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nbHJnYic7XG5cbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICAvLyBjb252ZXJ0IGNvbG9ycyB0byBDb2xvciBvYmplY3RzXG4gICAgICAgIGNvbG9ycyA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIG5ldyBDb2xvcl8xKGMpOyB9KTtcbiAgICAgICAgaWYgKG1vZGUgPT09ICdscmdiJykge1xuICAgICAgICAgICAgcmV0dXJuIF9hdmVyYWdlX2xyZ2IoY29sb3JzKVxuICAgICAgICB9XG4gICAgICAgIHZhciBmaXJzdCA9IGNvbG9ycy5zaGlmdCgpO1xuICAgICAgICB2YXIgeHl6ID0gZmlyc3QuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgY250ID0gW107XG4gICAgICAgIHZhciBkeCA9IDA7XG4gICAgICAgIHZhciBkeSA9IDA7XG4gICAgICAgIC8vIGluaXRpYWwgY29sb3JcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPHh5ei5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHl6W2ldID0geHl6W2ldIHx8IDA7XG4gICAgICAgICAgICBjbnQucHVzaChpc05hTih4eXpbaV0pID8gMCA6IDEpO1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcgJiYgIWlzTmFOKHh5eltpXSkpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSA9IHh5eltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgZHggKz0gY29zJDIoQSk7XG4gICAgICAgICAgICAgICAgZHkgKz0gc2luJDEoQSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYWxwaGEgPSBmaXJzdC5hbHBoYSgpO1xuICAgICAgICBjb2xvcnMuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgdmFyIHh5ejIgPSBjLmdldChtb2RlKTtcbiAgICAgICAgICAgIGFscGhhICs9IGMuYWxwaGEoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHh5ejJbaV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNudFtpXSsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAobW9kZS5jaGFyQXQoaSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIEEgPSB4eXoyW2ldIC8gMTgwICogUEkkMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZHkgKz0gc2luJDEoQSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB4eXpbaV0gKz0geHl6MltpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSQxPTA7IGkkMTx4eXoubGVuZ3RoOyBpJDErKykge1xuICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkkMSkgPT09ICdoJykge1xuICAgICAgICAgICAgICAgIHZhciBBJDEgPSBhdGFuMiQxKGR5IC8gY250W2kkMV0sIGR4IC8gY250W2kkMV0pIC8gUEkkMSAqIDE4MDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoQSQxIDwgMCkgeyBBJDEgKz0gMzYwOyB9XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA+PSAzNjApIHsgQSQxIC09IDM2MDsgfVxuICAgICAgICAgICAgICAgIHh5eltpJDFdID0gQSQxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IHh5eltpJDFdL2NudFtpJDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFscGhhIC89IGw7XG4gICAgICAgIHJldHVybiAobmV3IENvbG9yXzEoeHl6LCBtb2RlKSkuYWxwaGEoYWxwaGEgPiAwLjk5OTk5ID8gMSA6IGFscGhhLCB0cnVlKTtcbiAgICB9O1xuXG5cbiAgICB2YXIgX2F2ZXJhZ2VfbHJnYiA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAgICAgdmFyIGwgPSBjb2xvcnMubGVuZ3RoO1xuICAgICAgICB2YXIgZiA9IDEvbDtcbiAgICAgICAgdmFyIHh5eiA9IFswLDAsMCwwXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBjb2xvcnM7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgY29sID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgdmFyIHJnYiA9IGNvbC5fcmdiO1xuICAgICAgICAgICAgeHl6WzBdICs9IHBvdyQ0KHJnYlswXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMV0gKz0gcG93JDQocmdiWzFdLDIpICogZjtcbiAgICAgICAgICAgIHh5elsyXSArPSBwb3ckNChyZ2JbMl0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzNdICs9IHJnYlszXSAqIGY7XG4gICAgICAgIH1cbiAgICAgICAgeHl6WzBdID0gc3FydCQzKHh5elswXSk7XG4gICAgICAgIHh5elsxXSA9IHNxcnQkMyh4eXpbMV0pO1xuICAgICAgICB4eXpbMl0gPSBzcXJ0JDMoeHl6WzJdKTtcbiAgICAgICAgaWYgKHh5elszXSA+IDAuOTk5OTk5OSkgeyB4eXpbM10gPSAxOyB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShjbGlwX3JnYiQyKHh5eikpO1xuICAgIH07XG5cbiAgICAvLyBtaW5pbWFsIG11bHRpLXB1cnBvc2UgaW50ZXJmYWNlXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgY29sb3IgYW5hbHl6ZVxuXG5cbiAgICB2YXIgdHlwZSRqID0gdXRpbHMudHlwZTtcblxuICAgIHZhciBwb3ckNSA9IE1hdGgucG93O1xuXG4gICAgdmFyIHNjYWxlID0gZnVuY3Rpb24oY29sb3JzKSB7XG5cbiAgICAgICAgLy8gY29uc3RydWN0b3JcbiAgICAgICAgdmFyIF9tb2RlID0gJ3JnYic7XG4gICAgICAgIHZhciBfbmFjb2wgPSBjaHJvbWFfMSgnI2NjYycpO1xuICAgICAgICB2YXIgX3NwcmVhZCA9IDA7XG4gICAgICAgIC8vIGNvbnN0IF9maXhlZCA9IGZhbHNlO1xuICAgICAgICB2YXIgX2RvbWFpbiA9IFswLCAxXTtcbiAgICAgICAgdmFyIF9wb3MgPSBbXTtcbiAgICAgICAgdmFyIF9wYWRkaW5nID0gWzAsMF07XG4gICAgICAgIHZhciBfY2xhc3NlcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9ycyA9IFtdO1xuICAgICAgICB2YXIgX291dCA9IGZhbHNlO1xuICAgICAgICB2YXIgX21pbiA9IDA7XG4gICAgICAgIHZhciBfbWF4ID0gMTtcbiAgICAgICAgdmFyIF9jb3JyZWN0TGlnaHRuZXNzID0gZmFsc2U7XG4gICAgICAgIHZhciBfY29sb3JDYWNoZSA9IHt9O1xuICAgICAgICB2YXIgX3VzZUNhY2hlID0gdHJ1ZTtcbiAgICAgICAgdmFyIF9nYW1tYSA9IDE7XG5cbiAgICAgICAgLy8gcHJpdmF0ZSBtZXRob2RzXG5cbiAgICAgICAgdmFyIHNldENvbG9ycyA9IGZ1bmN0aW9uKGNvbG9ycykge1xuICAgICAgICAgICAgY29sb3JzID0gY29sb3JzIHx8IFsnI2ZmZicsICcjMDAwJ107XG4gICAgICAgICAgICBpZiAoY29sb3JzICYmIHR5cGUkaihjb2xvcnMpID09PSAnc3RyaW5nJyAmJiBjaHJvbWFfMS5icmV3ZXIgJiZcbiAgICAgICAgICAgICAgICBjaHJvbWFfMS5icmV3ZXJbY29sb3JzLnRvTG93ZXJDYXNlKCldKSB7XG4gICAgICAgICAgICAgICAgY29sb3JzID0gY2hyb21hXzEuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlJGooY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBzaW5nbGUgY29sb3JcbiAgICAgICAgICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnMgPSBbY29sb3JzWzBdLCBjb2xvcnNbMF1dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBtYWtlIGEgY29weSBvZiB0aGUgY29sb3JzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gY29sb3JzLnNsaWNlKDApO1xuICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdG8gY2hyb21hIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8Y29sb3JzLmxlbmd0aDsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yc1tjXSA9IGNocm9tYV8xKGNvbG9yc1tjXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGF1dG8tZmlsbCBjb2xvciBwb3NpdGlvblxuICAgICAgICAgICAgICAgIF9wb3MubGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjJDE9MDsgYyQxPGNvbG9ycy5sZW5ndGg7IGMkMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjJDEvKGNvbG9ycy5sZW5ndGgtMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc2V0Q2FjaGUoKTtcbiAgICAgICAgICAgIHJldHVybiBfY29sb3JzID0gY29sb3JzO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBnZXRDbGFzcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoX2NsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHZhciBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgbiAmJiB2YWx1ZSA+PSBfY2xhc3Nlc1tpXSkge1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBpLTE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgdG1hcCA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuXG4gICAgICAgIC8vIGNvbnN0IGNsYXNzaWZ5VmFsdWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAvLyAgICAgbGV0IHZhbCA9IHZhbHVlO1xuICAgICAgICAvLyAgICAgaWYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBuID0gX2NsYXNzZXMubGVuZ3RoLTE7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgaSA9IGdldENsYXNzKHZhbHVlKTtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBtaW5jID0gX2NsYXNzZXNbMF0gKyAoKF9jbGFzc2VzWzFdLV9jbGFzc2VzWzBdKSAqICgwICsgKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgMXN0IGNsYXNzXG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWF4YyA9IF9jbGFzc2VzW24tMV0gKyAoKF9jbGFzc2VzW25dLV9jbGFzc2VzW24tMV0pICogKDEgLSAoX3NwcmVhZCAqIDAuNSkpKTsgIC8vIGNlbnRlciBvZiBsYXN0IGNsYXNzXG4gICAgICAgIC8vICAgICAgICAgdmFsID0gX21pbiArICgoKChfY2xhc3Nlc1tpXSArICgoX2NsYXNzZXNbaSsxXSAtIF9jbGFzc2VzW2ldKSAqIDAuNSkpIC0gbWluYykgLyAobWF4Yy1taW5jKSkgKiAoX21heCAtIF9taW4pKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIHJldHVybiB2YWw7XG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgdmFyIGdldENvbG9yID0gZnVuY3Rpb24odmFsLCBieXBhc3NNYXApIHtcbiAgICAgICAgICAgIHZhciBjb2wsIHQ7XG4gICAgICAgICAgICBpZiAoYnlwYXNzTWFwID09IG51bGwpIHsgYnlwYXNzTWFwID0gZmFsc2U7IH1cbiAgICAgICAgICAgIGlmIChpc05hTih2YWwpIHx8ICh2YWwgPT09IG51bGwpKSB7IHJldHVybiBfbmFjb2w7IH1cbiAgICAgICAgICAgIGlmICghYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9jbGFzc2VzICYmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIHRoZSBjbGFzc1xuICAgICAgICAgICAgICAgICAgICB2YXIgYyA9IGdldENsYXNzKHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHQgPSBjIC8gKF9jbGFzc2VzLmxlbmd0aC0yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKF9tYXggIT09IF9taW4pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8ganVzdCBpbnRlcnBvbGF0ZSBiZXR3ZWVuIG1pbi9tYXhcbiAgICAgICAgICAgICAgICAgICAgdCA9ICh2YWwgLSBfbWluKSAvIChfbWF4IC0gX21pbik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIHQgPSB0bWFwKHQpOyAgLy8gbGlnaHRuZXNzIGNvcnJlY3Rpb25cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKF9nYW1tYSAhPT0gMSkgeyB0ID0gcG93JDUodCwgX2dhbW1hKTsgfVxuXG4gICAgICAgICAgICB0ID0gX3BhZGRpbmdbMF0gKyAodCAqICgxIC0gX3BhZGRpbmdbMF0gLSBfcGFkZGluZ1sxXSkpO1xuXG4gICAgICAgICAgICB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdCkpO1xuXG4gICAgICAgICAgICB2YXIgayA9IE1hdGguZmxvb3IodCAqIDEwMDAwKTtcblxuICAgICAgICAgICAgaWYgKF91c2VDYWNoZSAmJiBfY29sb3JDYWNoZVtrXSkge1xuICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvckNhY2hlW2tdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRqKF9jb2xvcnMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vZm9yIGkgaW4gWzAuLl9wb3MubGVuZ3RoLTFdXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTxfcG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCA9IF9wb3NbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA8PSBwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9yc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgodCA+PSBwKSAmJiAoaSA9PT0gKF9wb3MubGVuZ3RoLTEpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodCA+IHAgJiYgdCA8IF9wb3NbaSsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgPSAodC1wKS8oX3Bvc1tpKzFdLXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IGNocm9tYV8xLmludGVycG9sYXRlKF9jb2xvcnNbaV0sIF9jb2xvcnNbaSsxXSwgdCwgX21vZGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJGooX2NvbG9ycykgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sID0gX2NvbG9ycyh0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF91c2VDYWNoZSkgeyBfY29sb3JDYWNoZVtrXSA9IGNvbDsgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbDtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmVzZXRDYWNoZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9jb2xvckNhY2hlID0ge307IH07XG5cbiAgICAgICAgc2V0Q29sb3JzKGNvbG9ycyk7XG5cbiAgICAgICAgLy8gcHVibGljIGludGVyZmFjZVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgdmFyIGMgPSBjaHJvbWFfMShnZXRDb2xvcih2KSk7XG4gICAgICAgICAgICBpZiAoX291dCAmJiBjW19vdXRdKSB7IHJldHVybiBjW19vdXRdKCk7IH0gZWxzZSB7IHJldHVybiBjOyB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jbGFzc2VzID0gZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgICAgICAgICAgaWYgKGNsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJGooY2xhc3NlcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjbGFzc2VzO1xuICAgICAgICAgICAgICAgICAgICBfZG9tYWluID0gW2NsYXNzZXNbMF0sIGNsYXNzZXNbY2xhc3Nlcy5sZW5ndGgtMV1dO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gY2hyb21hXzEuYW5hbHl6ZShfZG9tYWluKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNsYXNzZXMgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gW2QubWluLCBkLm1heF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IGNocm9tYV8xLmxpbWl0cyhkLCAnZScsIGNsYXNzZXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF9jbGFzc2VzO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgZi5kb21haW4gPSBmdW5jdGlvbihkb21haW4pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfZG9tYWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX21pbiA9IGRvbWFpblswXTtcbiAgICAgICAgICAgIF9tYXggPSBkb21haW5bZG9tYWluLmxlbmd0aC0xXTtcbiAgICAgICAgICAgIF9wb3MgPSBbXTtcbiAgICAgICAgICAgIHZhciBrID0gX2NvbG9ycy5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoKGRvbWFpbi5sZW5ndGggPT09IGspICYmIChfbWluICE9PSBfbWF4KSkge1xuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBwb3NpdGlvbnNcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IEFycmF5LmZyb20oZG9tYWluKTsgaSA8IGxpc3QubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGQgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgICBfcG9zLnB1c2goKGQtX21pbikgLyAoX21heC1fbWluKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBjPTA7IGM8azsgYysrKSB7XG4gICAgICAgICAgICAgICAgICAgIF9wb3MucHVzaChjLyhrLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfZG9tYWluID0gW19taW4sIF9tYXhdO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5tb2RlID0gZnVuY3Rpb24oX20pIHtcbiAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfbW9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9tb2RlID0gX207XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnJhbmdlID0gZnVuY3Rpb24oY29sb3JzLCBfcG9zKSB7XG4gICAgICAgICAgICBzZXRDb2xvcnMoY29sb3JzLCBfcG9zKTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYub3V0ID0gZnVuY3Rpb24oX28pIHtcbiAgICAgICAgICAgIF9vdXQgPSBfbztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuc3ByZWFkID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3NwcmVhZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9zcHJlYWQgPSB2YWw7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNvcnJlY3RMaWdodG5lc3MgPSBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICBpZiAodiA9PSBudWxsKSB7IHYgPSB0cnVlOyB9XG4gICAgICAgICAgICBfY29ycmVjdExpZ2h0bmVzcyA9IHY7XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICBpZiAoX2NvcnJlY3RMaWdodG5lc3MpIHtcbiAgICAgICAgICAgICAgICB0bWFwID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgTDAgPSBnZXRDb2xvcigwLCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwxID0gZ2V0Q29sb3IoMSwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb2wgPSBMMCA+IEwxO1xuICAgICAgICAgICAgICAgICAgICB2YXIgTF9hY3R1YWwgPSBnZXRDb2xvcih0LCB0cnVlKS5sYWIoKVswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfaWRlYWwgPSBMMCArICgoTDEgLSBMMCkgKiB0KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQwID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHQxID0gMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heF9pdGVyID0gMjA7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgoTWF0aC5hYnMoTF9kaWZmKSA+IDFlLTIpICYmIChtYXhfaXRlci0tID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9sKSB7IExfZGlmZiAqPSAtMTsgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChMX2RpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQwID0gdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdCArPSAodDEgLSB0KSAqIDAuNTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MSA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQwIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIExfZGlmZiA9IExfYWN0dWFsIC0gTF9pZGVhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdG1hcCA9IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0OyB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5wYWRkaW5nID0gZnVuY3Rpb24ocCkge1xuICAgICAgICAgICAgaWYgKHAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlJGoocCkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgICAgIHAgPSBbcCxwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3BhZGRpbmcgPSBwO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3BhZGRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb2xvcnMgPSBmdW5jdGlvbihudW1Db2xvcnMsIG91dCkge1xuICAgICAgICAgICAgLy8gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgcmV0dXJuIHRoZSBvcmlnaW5hbCBjb2xvcnMgdGhhdCB3ZXJlIHByb3ZpZGVkXG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8IDIpIHsgb3V0ID0gJ2hleCc7IH1cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfY29sb3JzLnNsaWNlKDApO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IFtmKDAuNSldO1xuXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG51bUNvbG9ycyA+IDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgZG0gPSBfZG9tYWluWzBdO1xuICAgICAgICAgICAgICAgIHZhciBkZCA9IF9kb21haW5bMV0gLSBkbTtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBfX3JhbmdlX18oMCwgbnVtQ29sb3JzLCBmYWxzZSkubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBmKCBkbSArICgoaS8obnVtQ29sb3JzLTEpKSAqIGRkKSApOyB9KTtcblxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gcmV0dXJucyBhbGwgY29sb3JzIGJhc2VkIG9uIHRoZSBkZWZpbmVkIGNsYXNzZXNcbiAgICAgICAgICAgICAgICBjb2xvcnMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgc2FtcGxlcyA9IFtdO1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDEsIGVuZCA9IF9jbGFzc2VzLmxlbmd0aCwgYXNjID0gMSA8PSBlbmQ7IGFzYyA/IGkgPCBlbmQgOiBpID4gZW5kOyBhc2MgPyBpKysgOiBpLS0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhbXBsZXMucHVzaCgoX2NsYXNzZXNbaS0xXStfY2xhc3Nlc1tpXSkqMC41KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZXMgPSBfZG9tYWluO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBzYW1wbGVzLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZih2KTsgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaHJvbWFfMVtvdXRdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0Lm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gY1tvdXRdKCk7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmNhY2hlID0gZnVuY3Rpb24oYykge1xuICAgICAgICAgICAgaWYgKGMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF91c2VDYWNoZSA9IGM7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdXNlQ2FjaGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5nYW1tYSA9IGZ1bmN0aW9uKGcpIHtcbiAgICAgICAgICAgIGlmIChnICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfZ2FtbWEgPSBnO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2dhbW1hO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYubm9kYXRhID0gZnVuY3Rpb24oZCkge1xuICAgICAgICAgICAgaWYgKGQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIF9uYWNvbCA9IGNocm9tYV8xKGQpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX25hY29sO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBfX3JhbmdlX18obGVmdCwgcmlnaHQsIGluY2x1c2l2ZSkge1xuICAgICAgdmFyIHJhbmdlID0gW107XG4gICAgICB2YXIgYXNjZW5kaW5nID0gbGVmdCA8IHJpZ2h0O1xuICAgICAgdmFyIGVuZCA9ICFpbmNsdXNpdmUgPyByaWdodCA6IGFzY2VuZGluZyA/IHJpZ2h0ICsgMSA6IHJpZ2h0IC0gMTtcbiAgICAgIGZvciAodmFyIGkgPSBsZWZ0OyBhc2NlbmRpbmcgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjZW5kaW5nID8gaSsrIDogaS0tKSB7XG4gICAgICAgIHJhbmdlLnB1c2goaSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmFuZ2U7XG4gICAgfVxuXG4gICAgLy9cbiAgICAvLyBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgLy9cblxuICAgIC8vIEByZXF1aXJlcyB1dGlscyBsYWJcblxuXG5cblxuICAgIHZhciBiZXppZXIgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyO1xuXG4gICAgICAgIHZhciBJLCBsYWIwLCBsYWIxLCBsYWIyO1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3JfMShjKTsgfSk7XG4gICAgICAgIGlmIChjb2xvcnMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAvLyBsaW5lYXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduWzBdLCBsYWIxID0gYXNzaWduWzFdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiBsYWIwW2ldICsgKHQgKiAobGFiMVtpXSAtIGxhYjBbaV0pKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgLy8gcXVhZHJhdGljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICAoYXNzaWduJDEgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQxWzBdLCBsYWIxID0gYXNzaWduJDFbMV0sIGxhYjIgPSBhc3NpZ24kMVsyXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gKCgxLXQpKigxLXQpICogbGFiMFtpXSkgKyAoMiAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKHQgKiB0ICogbGFiMltpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIC8vIGN1YmljIGJlemllciBpbnRlcnBvbGF0aW9uXG4gICAgICAgICAgICB2YXIgbGFiMztcbiAgICAgICAgICAgIChhc3NpZ24kMiA9IGNvbG9ycy5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGMubGFiKCk7IH0pLCBsYWIwID0gYXNzaWduJDJbMF0sIGxhYjEgPSBhc3NpZ24kMlsxXSwgbGFiMiA9IGFzc2lnbiQyWzJdLCBsYWIzID0gYXNzaWduJDJbM10pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDMgKiAoMS10KSAqICgxLXQpICogdCAqIGxhYjFbaV0pICsgKDMgKiAoMS10KSAqIHQgKiB0ICogbGFiMltpXSkgKyAodCp0KnQgKiBsYWIzW2ldKTsgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShsYWIsICdsYWInKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSBpZiAoY29sb3JzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgICAgICAgdmFyIEkwID0gYmV6aWVyKGNvbG9ycy5zbGljZSgwLCAzKSk7XG4gICAgICAgICAgICB2YXIgSTEgPSBiZXppZXIoY29sb3JzLnNsaWNlKDIsIDUpKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHQgPCAwLjUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEkwKHQqMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEkxKCh0LTAuNSkqMik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gSTtcbiAgICB9O1xuXG4gICAgdmFyIGJlemllcl8xID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICAgICAgICB2YXIgZiA9IGJlemllcihjb2xvcnMpO1xuICAgICAgICBmLnNjYWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gc2NhbGUoZik7IH07XG4gICAgICAgIHJldHVybiBmO1xuICAgIH07XG5cbiAgICAvKlxuICAgICAqIGludGVycG9sYXRlcyBiZXR3ZWVuIGEgc2V0IG9mIGNvbG9ycyB1emluZyBhIGJlemllciBzcGxpbmVcbiAgICAgKiBibGVuZCBtb2RlIGZvcm11bGFzIHRha2VuIGZyb20gaHR0cDovL3d3dy52ZW50dXJlLXdhcmUuY29tL2tldmluL2NvZGluZy9sZXRzLWxlYXJuLW1hdGgtcGhvdG9zaG9wLWJsZW5kLW1vZGVzL1xuICAgICAqL1xuXG5cblxuXG4gICAgdmFyIGJsZW5kID0gZnVuY3Rpb24gKGJvdHRvbSwgdG9wLCBtb2RlKSB7XG4gICAgICAgIGlmICghYmxlbmRbbW9kZV0pIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndW5rbm93biBibGVuZCBtb2RlICcgKyBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmxlbmRbbW9kZV0oYm90dG9tLCB0b3ApO1xuICAgIH07XG5cbiAgICB2YXIgYmxlbmRfZiA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYm90dG9tLHRvcCkge1xuICAgICAgICAgICAgdmFyIGMwID0gY2hyb21hXzEodG9wKS5yZ2IoKTtcbiAgICAgICAgICAgIHZhciBjMSA9IGNocm9tYV8xKGJvdHRvbSkucmdiKCk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hXzEucmdiKGYoYzAsIGMxKSk7XG4gICAgICAgIH07IH07XG5cbiAgICB2YXIgZWFjaCA9IGZ1bmN0aW9uIChmKSB7IHJldHVybiBmdW5jdGlvbiAoYzAsIGMxKSB7XG4gICAgICAgICAgICB2YXIgb3V0ID0gW107XG4gICAgICAgICAgICBvdXRbMF0gPSBmKGMwWzBdLCBjMVswXSk7XG4gICAgICAgICAgICBvdXRbMV0gPSBmKGMwWzFdLCBjMVsxXSk7XG4gICAgICAgICAgICBvdXRbMl0gPSBmKGMwWzJdLCBjMVsyXSk7XG4gICAgICAgICAgICByZXR1cm4gb3V0O1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIG5vcm1hbCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBhOyB9O1xuICAgIHZhciBtdWx0aXBseSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgKiBiIC8gMjU1OyB9O1xuICAgIHZhciBkYXJrZW4kMSA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEgPiBiID8gYiA6IGE7IH07XG4gICAgdmFyIGxpZ2h0ZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGEgOiBiOyB9O1xuICAgIHZhciBzY3JlZW4gPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiAyNTUgKiAoMSAtICgxLWEvMjU1KSAqICgxLWIvMjU1KSk7IH07XG4gICAgdmFyIG92ZXJsYXkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBiIDwgMTI4ID8gMiAqIGEgKiBiIC8gMjU1IDogMjU1ICogKDEgLSAyICogKDEgLSBhIC8gMjU1ICkgKiAoIDEgLSBiIC8gMjU1ICkpOyB9O1xuICAgIHZhciBidXJuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMSAtIGIgLyAyNTUpIC8gKGEvMjU1KSk7IH07XG4gICAgdmFyIGRvZGdlID0gZnVuY3Rpb24gKGEsYikge1xuICAgICAgICBpZiAoYSA9PT0gMjU1KSB7IHJldHVybiAyNTU7IH1cbiAgICAgICAgYSA9IDI1NSAqIChiIC8gMjU1KSAvICgxIC0gYSAvIDI1NSk7XG4gICAgICAgIHJldHVybiBhID4gMjU1ID8gMjU1IDogYVxuICAgIH07XG5cbiAgICAvLyAjIGFkZCA9IChhLGIpIC0+XG4gICAgLy8gIyAgICAgaWYgKGEgKyBiID4gMjU1KSB0aGVuIDI1NSBlbHNlIGEgKyBiXG5cbiAgICBibGVuZC5ub3JtYWwgPSBibGVuZF9mKGVhY2gobm9ybWFsKSk7XG4gICAgYmxlbmQubXVsdGlwbHkgPSBibGVuZF9mKGVhY2gobXVsdGlwbHkpKTtcbiAgICBibGVuZC5zY3JlZW4gPSBibGVuZF9mKGVhY2goc2NyZWVuKSk7XG4gICAgYmxlbmQub3ZlcmxheSA9IGJsZW5kX2YoZWFjaChvdmVybGF5KSk7XG4gICAgYmxlbmQuZGFya2VuID0gYmxlbmRfZihlYWNoKGRhcmtlbiQxKSk7XG4gICAgYmxlbmQubGlnaHRlbiA9IGJsZW5kX2YoZWFjaChsaWdodGVuKSk7XG4gICAgYmxlbmQuZG9kZ2UgPSBibGVuZF9mKGVhY2goZG9kZ2UpKTtcbiAgICBibGVuZC5idXJuID0gYmxlbmRfZihlYWNoKGJ1cm4pKTtcbiAgICAvLyBibGVuZC5hZGQgPSBibGVuZF9mKGVhY2goYWRkKSk7XG5cbiAgICB2YXIgYmxlbmRfMSA9IGJsZW5kO1xuXG4gICAgLy8gY3ViZWhlbGl4IGludGVycG9sYXRpb25cbiAgICAvLyBiYXNlZCBvbiBELkEuIEdyZWVuIFwiQSBjb2xvdXIgc2NoZW1lIGZvciB0aGUgZGlzcGxheSBvZiBhc3Ryb25vbWljYWwgaW50ZW5zaXR5IGltYWdlc1wiXG4gICAgLy8gaHR0cDovL2FzdHJvbi1zb2MuaW4vYnVsbGV0aW4vMTFKdW5lLzI4OTM5MjAxMS5wZGZcblxuICAgIHZhciB0eXBlJGsgPSB1dGlscy50eXBlO1xuICAgIHZhciBjbGlwX3JnYiQzID0gdXRpbHMuY2xpcF9yZ2I7XG4gICAgdmFyIFRXT1BJJDIgPSB1dGlscy5UV09QSTtcbiAgICB2YXIgcG93JDYgPSBNYXRoLnBvdztcbiAgICB2YXIgc2luJDIgPSBNYXRoLnNpbjtcbiAgICB2YXIgY29zJDMgPSBNYXRoLmNvcztcblxuXG4gICAgdmFyIGN1YmVoZWxpeCA9IGZ1bmN0aW9uKHN0YXJ0LCByb3RhdGlvbnMsIGh1ZSwgZ2FtbWEsIGxpZ2h0bmVzcykge1xuICAgICAgICBpZiAoIHN0YXJ0ID09PSB2b2lkIDAgKSBzdGFydD0zMDA7XG4gICAgICAgIGlmICggcm90YXRpb25zID09PSB2b2lkIDAgKSByb3RhdGlvbnM9LTEuNTtcbiAgICAgICAgaWYgKCBodWUgPT09IHZvaWQgMCApIGh1ZT0xO1xuICAgICAgICBpZiAoIGdhbW1hID09PSB2b2lkIDAgKSBnYW1tYT0xO1xuICAgICAgICBpZiAoIGxpZ2h0bmVzcyA9PT0gdm9pZCAwICkgbGlnaHRuZXNzPVswLDFdO1xuXG4gICAgICAgIHZhciBkaCA9IDAsIGRsO1xuICAgICAgICBpZiAodHlwZSRrKGxpZ2h0bmVzcykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRsID0gbGlnaHRuZXNzWzFdIC0gbGlnaHRuZXNzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgbGlnaHRuZXNzID0gW2xpZ2h0bmVzcywgbGlnaHRuZXNzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBmID0gZnVuY3Rpb24oZnJhY3QpIHtcbiAgICAgICAgICAgIHZhciBhID0gVFdPUEkkMiAqICgoKHN0YXJ0KzEyMCkvMzYwKSArIChyb3RhdGlvbnMgKiBmcmFjdCkpO1xuICAgICAgICAgICAgdmFyIGwgPSBwb3ckNihsaWdodG5lc3NbMF0gKyAoZGwgKiBmcmFjdCksIGdhbW1hKTtcbiAgICAgICAgICAgIHZhciBoID0gZGggIT09IDAgPyBodWVbMF0gKyAoZnJhY3QgKiBkaCkgOiBodWU7XG4gICAgICAgICAgICB2YXIgYW1wID0gKGggKiBsICogKDEtbCkpIC8gMjtcbiAgICAgICAgICAgIHZhciBjb3NfYSA9IGNvcyQzKGEpO1xuICAgICAgICAgICAgdmFyIHNpbl9hID0gc2luJDIoYSk7XG4gICAgICAgICAgICB2YXIgciA9IGwgKyAoYW1wICogKCgtMC4xNDg2MSAqIGNvc19hKSArICgxLjc4Mjc3KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBnID0gbCArIChhbXAgKiAoKC0wLjI5MjI3ICogY29zX2EpIC0gKDAuOTA2NDkqIHNpbl9hKSkpO1xuICAgICAgICAgICAgdmFyIGIgPSBsICsgKGFtcCAqICgrMS45NzI5NCAqIGNvc19hKSk7XG4gICAgICAgICAgICByZXR1cm4gY2hyb21hXzEoY2xpcF9yZ2IkMyhbcioyNTUsZyoyNTUsYioyNTUsMV0pKTtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnN0YXJ0ID0gZnVuY3Rpb24ocykge1xuICAgICAgICAgICAgaWYgKChzID09IG51bGwpKSB7IHJldHVybiBzdGFydDsgfVxuICAgICAgICAgICAgc3RhcnQgPSBzO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yb3RhdGlvbnMgPSBmdW5jdGlvbihyKSB7XG4gICAgICAgICAgICBpZiAoKHIgPT0gbnVsbCkpIHsgcmV0dXJuIHJvdGF0aW9uczsgfVxuICAgICAgICAgICAgcm90YXRpb25zID0gcjtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoKGcgPT0gbnVsbCkpIHsgcmV0dXJuIGdhbW1hOyB9XG4gICAgICAgICAgICBnYW1tYSA9IGc7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmh1ZSA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgIGlmICgoaCA9PSBudWxsKSkgeyByZXR1cm4gaHVlOyB9XG4gICAgICAgICAgICBodWUgPSBoO1xuICAgICAgICAgICAgaWYgKHR5cGUkayhodWUpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWVbMV0gLSBodWVbMF07XG4gICAgICAgICAgICAgICAgaWYgKGRoID09PSAwKSB7IGh1ZSA9IGh1ZVsxXTsgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmxpZ2h0bmVzcyA9IGZ1bmN0aW9uKGgpIHtcbiAgICAgICAgICAgIGlmICgoaCA9PSBudWxsKSkgeyByZXR1cm4gbGlnaHRuZXNzOyB9XG4gICAgICAgICAgICBpZiAodHlwZSRrKGgpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gaDtcbiAgICAgICAgICAgICAgICBkbCA9IGhbMV0gLSBoWzBdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsaWdodG5lc3MgPSBbaCxoXTtcbiAgICAgICAgICAgICAgICBkbCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNjYWxlID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gY2hyb21hXzEuc2NhbGUoZik7IH07XG5cbiAgICAgICAgZi5odWUoaHVlKTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgdmFyIGRpZ2l0cyA9ICcwMTIzNDU2Nzg5YWJjZGVmJztcblxuICAgIHZhciBmbG9vciQyID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgcmFuZG9tID0gTWF0aC5yYW5kb207XG5cbiAgICB2YXIgcmFuZG9tXzEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjb2RlID0gJyMnO1xuICAgICAgICBmb3IgKHZhciBpPTA7IGk8NjsgaSsrKSB7XG4gICAgICAgICAgICBjb2RlICs9IGRpZ2l0cy5jaGFyQXQoZmxvb3IkMihyYW5kb20oKSAqIDE2KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKGNvZGUsICdoZXgnKTtcbiAgICB9O1xuXG4gICAgdmFyIGxvZyQxID0gTWF0aC5sb2c7XG4gICAgdmFyIHBvdyQ3ID0gTWF0aC5wb3c7XG4gICAgdmFyIGZsb29yJDMgPSBNYXRoLmZsb29yO1xuICAgIHZhciBhYnMgPSBNYXRoLmFicztcblxuXG4gICAgdmFyIGFuYWx5emUgPSBmdW5jdGlvbiAoZGF0YSwga2V5KSB7XG4gICAgICAgIGlmICgga2V5ID09PSB2b2lkIDAgKSBrZXk9bnVsbDtcblxuICAgICAgICB2YXIgciA9IHtcbiAgICAgICAgICAgIG1pbjogTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG1heDogTnVtYmVyLk1BWF9WQUxVRSotMSxcbiAgICAgICAgICAgIHN1bTogMCxcbiAgICAgICAgICAgIHZhbHVlczogW10sXG4gICAgICAgICAgICBjb3VudDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZShkYXRhKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIGRhdGEgPSBPYmplY3QudmFsdWVzKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICYmIHR5cGUodmFsKSA9PT0gJ29iamVjdCcpIHsgdmFsID0gdmFsW2tleV07IH1cbiAgICAgICAgICAgIGlmICh2YWwgIT09IHVuZGVmaW5lZCAmJiB2YWwgIT09IG51bGwgJiYgIWlzTmFOKHZhbCkpIHtcbiAgICAgICAgICAgICAgICByLnZhbHVlcy5wdXNoKHZhbCk7XG4gICAgICAgICAgICAgICAgci5zdW0gKz0gdmFsO1xuICAgICAgICAgICAgICAgIGlmICh2YWwgPCByLm1pbikgeyByLm1pbiA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIGlmICh2YWwgPiByLm1heCkgeyByLm1heCA9IHZhbDsgfVxuICAgICAgICAgICAgICAgIHIuY291bnQgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgci5kb21haW4gPSBbci5taW4sIHIubWF4XTtcblxuICAgICAgICByLmxpbWl0cyA9IGZ1bmN0aW9uIChtb2RlLCBudW0pIHsgcmV0dXJuIGxpbWl0cyhyLCBtb2RlLCBudW0pOyB9O1xuXG4gICAgICAgIHJldHVybiByO1xuICAgIH07XG5cblxuICAgIHZhciBsaW1pdHMgPSBmdW5jdGlvbiAoZGF0YSwgbW9kZSwgbnVtKSB7XG4gICAgICAgIGlmICggbW9kZSA9PT0gdm9pZCAwICkgbW9kZT0nZXF1YWwnO1xuICAgICAgICBpZiAoIG51bSA9PT0gdm9pZCAwICkgbnVtPTc7XG5cbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgZGF0YSA9IGFuYWx5emUoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1pbiA9IGRhdGEubWluO1xuICAgICAgICB2YXIgbWF4ID0gZGF0YS5tYXg7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBkYXRhLnZhbHVlcy5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGEtYjsgfSk7XG5cbiAgICAgICAgaWYgKG51bSA9PT0gMSkgeyByZXR1cm4gW21pbixtYXhdOyB9XG5cbiAgICAgICAgdmFyIGxpbWl0cyA9IFtdO1xuXG4gICAgICAgIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnYycpIHsgLy8gY29udGludW91c1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2UnKSB7IC8vIGVxdWFsIGludGVydmFsXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0xOyBpPG51bTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKygoaS9udW0pKihtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdsJykgeyAvLyBsb2cgc2NhbGVcbiAgICAgICAgICAgIGlmIChtaW4gPD0gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTG9nYXJpdGhtaWMgc2NhbGVzIGFyZSBvbmx5IHBvc3NpYmxlIGZvciB2YWx1ZXMgPiAwJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWluX2xvZyA9IE1hdGguTE9HMTBFICogbG9nJDEobWluKTtcbiAgICAgICAgICAgIHZhciBtYXhfbG9nID0gTWF0aC5MT0cxMEUgKiBsb2ckMShtYXgpO1xuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0xOyBpJDE8bnVtOyBpJDErKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHBvdyQ3KDEwLCBtaW5fbG9nICsgKChpJDEvbnVtKSAqIChtYXhfbG9nIC0gbWluX2xvZykpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZWxzZSBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ3EnKSB7IC8vIHF1YW50aWxlIHNjYWxlXG4gICAgICAgICAgICBsaW1pdHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTE7IGkkMjxudW07IGkkMisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSAoKHZhbHVlcy5sZW5ndGgtMSkgKiBpJDIpL251bTtcbiAgICAgICAgICAgICAgICB2YXIgcGIgPSBmbG9vciQzKHApO1xuICAgICAgICAgICAgICAgIGlmIChwYiA9PT0gcCkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2YWx1ZXNbcGJdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAvLyBwID4gcGJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByID0gcCAtIHBiO1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCgodmFsdWVzW3BiXSooMS1wcikpICsgKHZhbHVlc1twYisxXSpwcikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdrJykgeyAvLyBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBpbXBsZW1lbnRhdGlvbiBiYXNlZCBvblxuICAgICAgICAgICAgaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2ZpZ3VlL3NvdXJjZS9icm93c2UvdHJ1bmsvZmlndWUuanMjMzM2XG4gICAgICAgICAgICBzaW1wbGlmaWVkIGZvciAxLWQgaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXI7XG4gICAgICAgICAgICB2YXIgbiA9IHZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICB2YXIgYXNzaWdubWVudHMgPSBuZXcgQXJyYXkobik7XG4gICAgICAgICAgICB2YXIgY2x1c3RlclNpemVzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBuYl9pdGVycyA9IDA7XG4gICAgICAgICAgICB2YXIgY2VudHJvaWRzID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gZ2V0IHNlZWQgdmFsdWVzXG4gICAgICAgICAgICBjZW50cm9pZHMgPSBbXTtcbiAgICAgICAgICAgIGNlbnRyb2lkcy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MTsgaSQzPG51bTsgaSQzKyspIHtcbiAgICAgICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4gKyAoKGkkMy9udW0pICogKG1heC1taW4pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtYXgpO1xuXG4gICAgICAgICAgICB3aGlsZSAocmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgLy8gYXNzaWdubWVudCBzdGVwXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaj0wOyBqPG51bTsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tqXSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkkND0wOyBpJDQ8bjsgaSQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gdmFsdWVzW2kkNF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBtaW5kaXN0ID0gTnVtYmVyLk1BWF9WQUxVRTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJlc3QgPSAodm9pZCAwKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiQxPTA7IGokMTxudW07IGokMSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGlzdCA9IGFicyhjZW50cm9pZHNbaiQxXS12YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzdCA8IG1pbmRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5kaXN0ID0gZGlzdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZXN0ID0gaiQxO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2x1c3RlclNpemVzW2Jlc3RdKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NpZ25tZW50c1tpJDRdID0gYmVzdDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSBjZW50cm9pZHMgc3RlcFxuICAgICAgICAgICAgICAgIHZhciBuZXdDZW50cm9pZHMgPSBuZXcgQXJyYXkobnVtKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDI9MDsgaiQyPG51bTsgaiQyKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2okMl0gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDU9MDsgaSQ1PG47IGkkNSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpJDVdO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2NsdXN0ZXJdID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gPSB2YWx1ZXNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tjbHVzdGVyXSArPSB2YWx1ZXNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDM9MDsgaiQzPG51bTsgaiQzKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2okM10gKj0gMS9jbHVzdGVyU2l6ZXNbaiQzXTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBjb252ZXJnZW5jZVxuICAgICAgICAgICAgICAgIHJlcGVhdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGokND0wOyBqJDQ8bnVtOyBqJDQrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3Q2VudHJvaWRzW2okNF0gIT09IGNlbnRyb2lkc1tqJDRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjZW50cm9pZHMgPSBuZXdDZW50cm9pZHM7XG4gICAgICAgICAgICAgICAgbmJfaXRlcnMrKztcblxuICAgICAgICAgICAgICAgIGlmIChuYl9pdGVycyA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbmlzaGVkIGstbWVhbnMgY2x1c3RlcmluZ1xuICAgICAgICAgICAgLy8gdGhlIG5leHQgcGFydCBpcyBib3Jyb3dlZCBmcm9tIGdhYnJpZWxmbG9yLml0XG4gICAgICAgICAgICB2YXIga0NsdXN0ZXJzID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBqJDU9MDsgaiQ1PG51bTsgaiQ1KyspIHtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbaiQ1XSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaSQ2PTA7IGkkNjxuOyBpJDYrKykge1xuICAgICAgICAgICAgICAgIGNsdXN0ZXIgPSBhc3NpZ25tZW50c1tpJDZdO1xuICAgICAgICAgICAgICAgIGtDbHVzdGVyc1tjbHVzdGVyXS5wdXNoKHZhbHVlc1tpJDZdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB0bXBLTWVhbnNCcmVha3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGokNj0wOyBqJDY8bnVtOyBqJDYrKykge1xuICAgICAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcy5wdXNoKGtDbHVzdGVyc1tqJDZdWzBdKTtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVtrQ2x1c3RlcnNbaiQ2XS5sZW5ndGgtMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzID0gdG1wS01lYW5zQnJlYWtzLnNvcnQoZnVuY3Rpb24gKGEsYil7IHJldHVybiBhLWI7IH0pO1xuICAgICAgICAgICAgbGltaXRzLnB1c2godG1wS01lYW5zQnJlYWtzWzBdKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkNz0xOyBpJDcgPCB0bXBLTWVhbnNCcmVha3MubGVuZ3RoOyBpJDcrPSAyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHYgPSB0bXBLTWVhbnNCcmVha3NbaSQ3XTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHYpICYmIChsaW1pdHMuaW5kZXhPZih2KSA9PT0gLTEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKHYpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGltaXRzO1xuICAgIH07XG5cbiAgICB2YXIgYW5hbHl6ZV8xID0ge2FuYWx5emU6IGFuYWx5emUsIGxpbWl0czogbGltaXRzfTtcblxuICAgIHZhciBjb250cmFzdCA9IGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIC8vIFdDQUcgY29udHJhc3QgcmF0aW9cbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jY29udHJhc3QtcmF0aW9kZWZcbiAgICAgICAgYSA9IG5ldyBDb2xvcl8xKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yXzEoYik7XG4gICAgICAgIHZhciBsMSA9IGEubHVtaW5hbmNlKCk7XG4gICAgICAgIHZhciBsMiA9IGIubHVtaW5hbmNlKCk7XG4gICAgICAgIHJldHVybiBsMSA+IGwyID8gKGwxICsgMC4wNSkgLyAobDIgKyAwLjA1KSA6IChsMiArIDAuMDUpIC8gKGwxICsgMC4wNSk7XG4gICAgfTtcblxuICAgIHZhciBzcXJ0JDQgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGF0YW4yJDIgPSBNYXRoLmF0YW4yO1xuICAgIHZhciBhYnMkMSA9IE1hdGguYWJzO1xuICAgIHZhciBjb3MkNCA9IE1hdGguY29zO1xuICAgIHZhciBQSSQyID0gTWF0aC5QSTtcblxuICAgIHZhciBkZWx0YUUgPSBmdW5jdGlvbihhLCBiLCBMLCBDKSB7XG4gICAgICAgIGlmICggTCA9PT0gdm9pZCAwICkgTD0xO1xuICAgICAgICBpZiAoIEMgPT09IHZvaWQgMCApIEM9MTtcblxuICAgICAgICAvLyBEZWx0YSBFIChDTUMpXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0Vxbl9EZWx0YUVfQ01DLmh0bWxcbiAgICAgICAgYSA9IG5ldyBDb2xvcl8xKGEpO1xuICAgICAgICBiID0gbmV3IENvbG9yXzEoYik7XG4gICAgICAgIHZhciByZWYgPSBBcnJheS5mcm9tKGEubGFiKCkpO1xuICAgICAgICB2YXIgTDEgPSByZWZbMF07XG4gICAgICAgIHZhciBhMSA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIxID0gcmVmWzJdO1xuICAgICAgICB2YXIgcmVmJDEgPSBBcnJheS5mcm9tKGIubGFiKCkpO1xuICAgICAgICB2YXIgTDIgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEyID0gcmVmJDFbMV07XG4gICAgICAgIHZhciBiMiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgYzEgPSBzcXJ0JDQoKGExICogYTEpICsgKGIxICogYjEpKTtcbiAgICAgICAgdmFyIGMyID0gc3FydCQ0KChhMiAqIGEyKSArIChiMiAqIGIyKSk7XG4gICAgICAgIHZhciBzbCA9IEwxIDwgMTYuMCA/IDAuNTExIDogKDAuMDQwOTc1ICogTDEpIC8gKDEuMCArICgwLjAxNzY1ICogTDEpKTtcbiAgICAgICAgdmFyIHNjID0gKCgwLjA2MzggKiBjMSkgLyAoMS4wICsgKDAuMDEzMSAqIGMxKSkpICsgMC42Mzg7XG4gICAgICAgIHZhciBoMSA9IGMxIDwgMC4wMDAwMDEgPyAwLjAgOiAoYXRhbjIkMihiMSwgYTEpICogMTgwLjApIC8gUEkkMjtcbiAgICAgICAgd2hpbGUgKGgxIDwgMCkgeyBoMSArPSAzNjA7IH1cbiAgICAgICAgd2hpbGUgKGgxID49IDM2MCkgeyBoMSAtPSAzNjA7IH1cbiAgICAgICAgdmFyIHQgPSAoaDEgPj0gMTY0LjApICYmIChoMSA8PSAzNDUuMCkgPyAoMC41NiArIGFicyQxKDAuMiAqIGNvcyQ0KChQSSQyICogKGgxICsgMTY4LjApKSAvIDE4MC4wKSkpIDogKDAuMzYgKyBhYnMkMSgwLjQgKiBjb3MkNCgoUEkkMiAqIChoMSArIDM1LjApKSAvIDE4MC4wKSkpO1xuICAgICAgICB2YXIgYzQgPSBjMSAqIGMxICogYzEgKiBjMTtcbiAgICAgICAgdmFyIGYgPSBzcXJ0JDQoYzQgLyAoYzQgKyAxOTAwLjApKTtcbiAgICAgICAgdmFyIHNoID0gc2MgKiAoKChmICogdCkgKyAxLjApIC0gZik7XG4gICAgICAgIHZhciBkZWxMID0gTDEgLSBMMjtcbiAgICAgICAgdmFyIGRlbEMgPSBjMSAtIGMyO1xuICAgICAgICB2YXIgZGVsQSA9IGExIC0gYTI7XG4gICAgICAgIHZhciBkZWxCID0gYjEgLSBiMjtcbiAgICAgICAgdmFyIGRIMiA9ICgoZGVsQSAqIGRlbEEpICsgKGRlbEIgKiBkZWxCKSkgLSAoZGVsQyAqIGRlbEMpO1xuICAgICAgICB2YXIgdjEgPSBkZWxMIC8gKEwgKiBzbCk7XG4gICAgICAgIHZhciB2MiA9IGRlbEMgLyAoQyAqIHNjKTtcbiAgICAgICAgdmFyIHYzID0gc2g7XG4gICAgICAgIHJldHVybiBzcXJ0JDQoKHYxICogdjEpICsgKHYyICogdjIpICsgKGRIMiAvICh2MyAqIHYzKSkpO1xuICAgIH07XG5cbiAgICAvLyBzaW1wbGUgRXVjbGlkZWFuIGRpc3RhbmNlXG4gICAgdmFyIGRpc3RhbmNlID0gZnVuY3Rpb24oYSwgYiwgbW9kZSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2xhYic7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ0lFIDE5NzYpXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LmJydWNlbGluZGJsb29tLmNvbS9pbmRleC5odG1sP0VxdWF0aW9ucy5odG1sXG4gICAgICAgIGEgPSBuZXcgQ29sb3JfMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvcl8xKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmdldChtb2RlKTtcbiAgICAgICAgdmFyIGwyID0gYi5nZXQobW9kZSk7XG4gICAgICAgIHZhciBzdW1fc3EgPSAwO1xuICAgICAgICBmb3IgKHZhciBpIGluIGwxKSB7XG4gICAgICAgICAgICB2YXIgZCA9IChsMVtpXSB8fCAwKSAtIChsMltpXSB8fCAwKTtcbiAgICAgICAgICAgIHN1bV9zcSArPSBkKmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChzdW1fc3EpO1xuICAgIH07XG5cbiAgICB2YXIgdmFsaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncykgKSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8vIHNvbWUgcHJlLWRlZmluZWQgY29sb3Igc2NhbGVzOlxuXG5cblxuXG4gICAgdmFyIHNjYWxlcyA9IHtcbiAgICBcdGNvb2w6IGZ1bmN0aW9uIGNvb2woKSB7IHJldHVybiBzY2FsZShbY2hyb21hXzEuaHNsKDE4MCwxLC45KSwgY2hyb21hXzEuaHNsKDI1MCwuNywuNCldKSB9LFxuICAgIFx0aG90OiBmdW5jdGlvbiBob3QoKSB7IHJldHVybiBzY2FsZShbJyMwMDAnLCcjZjAwJywnI2ZmMCcsJyNmZmYnXSwgWzAsLjI1LC43NSwxXSkubW9kZSgncmdiJykgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgICAgQ29sb3JCcmV3ZXIgY29sb3JzIGZvciBjaHJvbWEuanNcblxuICAgICAgICBDb3B5cmlnaHQgKGMpIDIwMDIgQ3ludGhpYSBCcmV3ZXIsIE1hcmsgSGFycm93ZXIsIGFuZCBUaGVcbiAgICAgICAgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG5cbiAgICAgICAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgICAgICAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgICAgICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG5cbiAgICAgICAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZFxuICAgICAgICB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUlxuICAgICAgICBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuICAgICAgICBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgICovXG5cbiAgICB2YXIgY29sb3JicmV3ZXIgPSB7XG4gICAgICAgIC8vIHNlcXVlbnRpYWxcbiAgICAgICAgT3JSZDogWycjZmZmN2VjJywgJyNmZWU4YzgnLCAnI2ZkZDQ5ZScsICcjZmRiYjg0JywgJyNmYzhkNTknLCAnI2VmNjU0OCcsICcjZDczMDFmJywgJyNiMzAwMDAnLCAnIzdmMDAwMCddLFxuICAgICAgICBQdUJ1OiBbJyNmZmY3ZmInLCAnI2VjZTdmMicsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzc0YTljZicsICcjMzY5MGMwJywgJyMwNTcwYjAnLCAnIzA0NWE4ZCcsICcjMDIzODU4J10sXG4gICAgICAgIEJ1UHU6IFsnI2Y3ZmNmZCcsICcjZTBlY2Y0JywgJyNiZmQzZTYnLCAnIzllYmNkYScsICcjOGM5NmM2JywgJyM4YzZiYjEnLCAnIzg4NDE5ZCcsICcjODEwZjdjJywgJyM0ZDAwNGInXSxcbiAgICAgICAgT3JhbmdlczogWycjZmZmNWViJywgJyNmZWU2Y2UnLCAnI2ZkZDBhMicsICcjZmRhZTZiJywgJyNmZDhkM2MnLCAnI2YxNjkxMycsICcjZDk0ODAxJywgJyNhNjM2MDMnLCAnIzdmMjcwNCddLFxuICAgICAgICBCdUduOiBbJyNmN2ZjZmQnLCAnI2U1ZjVmOScsICcjY2NlY2U2JywgJyM5OWQ4YzknLCAnIzY2YzJhNCcsICcjNDFhZTc2JywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsT3JCcjogWycjZmZmZmU1JywgJyNmZmY3YmMnLCAnI2ZlZTM5MScsICcjZmVjNDRmJywgJyNmZTk5MjknLCAnI2VjNzAxNCcsICcjY2M0YzAyJywgJyM5OTM0MDQnLCAnIzY2MjUwNiddLFxuICAgICAgICBZbEduOiBbJyNmZmZmZTUnLCAnI2Y3ZmNiOScsICcjZDlmMGEzJywgJyNhZGRkOGUnLCAnIzc4YzY3OScsICcjNDFhYjVkJywgJyMyMzg0NDMnLCAnIzAwNjgzNycsICcjMDA0NTI5J10sXG4gICAgICAgIFJlZHM6IFsnI2ZmZjVmMCcsICcjZmVlMGQyJywgJyNmY2JiYTEnLCAnI2ZjOTI3MicsICcjZmI2YTRhJywgJyNlZjNiMmMnLCAnI2NiMTgxZCcsICcjYTUwZjE1JywgJyM2NzAwMGQnXSxcbiAgICAgICAgUmRQdTogWycjZmZmN2YzJywgJyNmZGUwZGQnLCAnI2ZjYzVjMCcsICcjZmE5ZmI1JywgJyNmNzY4YTEnLCAnI2RkMzQ5NycsICcjYWUwMTdlJywgJyM3YTAxNzcnLCAnIzQ5MDA2YSddLFxuICAgICAgICBHcmVlbnM6IFsnI2Y3ZmNmNScsICcjZTVmNWUwJywgJyNjN2U5YzAnLCAnI2ExZDk5YicsICcjNzRjNDc2JywgJyM0MWFiNWQnLCAnIzIzOGI0NScsICcjMDA2ZDJjJywgJyMwMDQ0MWInXSxcbiAgICAgICAgWWxHbkJ1OiBbJyNmZmZmZDknLCAnI2VkZjhiMScsICcjYzdlOWI0JywgJyM3ZmNkYmInLCAnIzQxYjZjNCcsICcjMWQ5MWMwJywgJyMyMjVlYTgnLCAnIzI1MzQ5NCcsICcjMDgxZDU4J10sXG4gICAgICAgIFB1cnBsZXM6IFsnI2ZjZmJmZCcsICcjZWZlZGY1JywgJyNkYWRhZWInLCAnI2JjYmRkYycsICcjOWU5YWM4JywgJyM4MDdkYmEnLCAnIzZhNTFhMycsICcjNTQyNzhmJywgJyMzZjAwN2QnXSxcbiAgICAgICAgR25CdTogWycjZjdmY2YwJywgJyNlMGYzZGInLCAnI2NjZWJjNScsICcjYThkZGI1JywgJyM3YmNjYzQnLCAnIzRlYjNkMycsICcjMmI4Y2JlJywgJyMwODY4YWMnLCAnIzA4NDA4MSddLFxuICAgICAgICBHcmV5czogWycjZmZmZmZmJywgJyNmMGYwZjAnLCAnI2Q5ZDlkOScsICcjYmRiZGJkJywgJyM5Njk2OTYnLCAnIzczNzM3MycsICcjNTI1MjUyJywgJyMyNTI1MjUnLCAnIzAwMDAwMCddLFxuICAgICAgICBZbE9yUmQ6IFsnI2ZmZmZjYycsICcjZmZlZGEwJywgJyNmZWQ5NzYnLCAnI2ZlYjI0YycsICcjZmQ4ZDNjJywgJyNmYzRlMmEnLCAnI2UzMWExYycsICcjYmQwMDI2JywgJyM4MDAwMjYnXSxcbiAgICAgICAgUHVSZDogWycjZjdmNGY5JywgJyNlN2UxZWYnLCAnI2Q0YjlkYScsICcjYzk5NGM3JywgJyNkZjY1YjAnLCAnI2U3Mjk4YScsICcjY2UxMjU2JywgJyM5ODAwNDMnLCAnIzY3MDAxZiddLFxuICAgICAgICBCbHVlczogWycjZjdmYmZmJywgJyNkZWViZjcnLCAnI2M2ZGJlZicsICcjOWVjYWUxJywgJyM2YmFlZDYnLCAnIzQyOTJjNicsICcjMjE3MWI1JywgJyMwODUxOWMnLCAnIzA4MzA2YiddLFxuICAgICAgICBQdUJ1R246IFsnI2ZmZjdmYicsICcjZWNlMmYwJywgJyNkMGQxZTYnLCAnI2E2YmRkYicsICcjNjdhOWNmJywgJyMzNjkwYzAnLCAnIzAyODE4YScsICcjMDE2YzU5JywgJyMwMTQ2MzYnXSxcbiAgICAgICAgVmlyaWRpczogWycjNDQwMTU0JywgJyM0ODI3NzcnLCAnIzNmNGE4YScsICcjMzE2NzhlJywgJyMyNjgzOGYnLCAnIzFmOWQ4YScsICcjNmNjZTVhJywgJyNiNmRlMmInLCAnI2ZlZTgyNSddLFxuXG4gICAgICAgIC8vIGRpdmVyZ2luZ1xuXG4gICAgICAgIFNwZWN0cmFsOiBbJyM5ZTAxNDInLCAnI2Q1M2U0ZicsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNlNmY1OTgnLCAnI2FiZGRhNCcsICcjNjZjMmE1JywgJyMzMjg4YmQnLCAnIzVlNGZhMiddLFxuICAgICAgICBSZFlsR246IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDhiJywgJyNmZmZmYmYnLCAnI2Q5ZWY4YicsICcjYTZkOTZhJywgJyM2NmJkNjMnLCAnIzFhOTg1MCcsICcjMDA2ODM3J10sXG4gICAgICAgIFJkQnU6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmN2Y3ZjcnLCAnI2QxZTVmMCcsICcjOTJjNWRlJywgJyM0MzkzYzMnLCAnIzIxNjZhYycsICcjMDUzMDYxJ10sXG4gICAgICAgIFBpWUc6IFsnIzhlMDE1MicsICcjYzUxYjdkJywgJyNkZTc3YWUnLCAnI2YxYjZkYScsICcjZmRlMGVmJywgJyNmN2Y3ZjcnLCAnI2U2ZjVkMCcsICcjYjhlMTg2JywgJyM3ZmJjNDEnLCAnIzRkOTIyMScsICcjMjc2NDE5J10sXG4gICAgICAgIFBSR246IFsnIzQwMDA0YicsICcjNzYyYTgzJywgJyM5OTcwYWInLCAnI2MyYTVjZicsICcjZTdkNGU4JywgJyNmN2Y3ZjcnLCAnI2Q5ZjBkMycsICcjYTZkYmEwJywgJyM1YWFlNjEnLCAnIzFiNzgzNycsICcjMDA0NDFiJ10sXG4gICAgICAgIFJkWWxCdTogWycjYTUwMDI2JywgJyNkNzMwMjcnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOTAnLCAnI2ZmZmZiZicsICcjZTBmM2Y4JywgJyNhYmQ5ZTknLCAnIzc0YWRkMScsICcjNDU3NWI0JywgJyMzMTM2OTUnXSxcbiAgICAgICAgQnJCRzogWycjNTQzMDA1JywgJyM4YzUxMGEnLCAnI2JmODEyZCcsICcjZGZjMjdkJywgJyNmNmU4YzMnLCAnI2Y1ZjVmNScsICcjYzdlYWU1JywgJyM4MGNkYzEnLCAnIzM1OTc4ZicsICcjMDE2NjVlJywgJyMwMDNjMzAnXSxcbiAgICAgICAgUmRHeTogWycjNjcwMDFmJywgJyNiMjE4MmInLCAnI2Q2NjA0ZCcsICcjZjRhNTgyJywgJyNmZGRiYzcnLCAnI2ZmZmZmZicsICcjZTBlMGUwJywgJyNiYWJhYmEnLCAnIzg3ODc4NycsICcjNGQ0ZDRkJywgJyMxYTFhMWEnXSxcbiAgICAgICAgUHVPcjogWycjN2YzYjA4JywgJyNiMzU4MDYnLCAnI2UwODIxNCcsICcjZmRiODYzJywgJyNmZWUwYjYnLCAnI2Y3ZjdmNycsICcjZDhkYWViJywgJyNiMmFiZDInLCAnIzgwNzNhYycsICcjNTQyNzg4JywgJyMyZDAwNGInXSxcblxuICAgICAgICAvLyBxdWFsaXRhdGl2ZVxuXG4gICAgICAgIFNldDI6IFsnIzY2YzJhNScsICcjZmM4ZDYyJywgJyM4ZGEwY2InLCAnI2U3OGFjMycsICcjYTZkODU0JywgJyNmZmQ5MmYnLCAnI2U1YzQ5NCcsICcjYjNiM2IzJ10sXG4gICAgICAgIEFjY2VudDogWycjN2ZjOTdmJywgJyNiZWFlZDQnLCAnI2ZkYzA4NicsICcjZmZmZjk5JywgJyMzODZjYjAnLCAnI2YwMDI3ZicsICcjYmY1YjE3JywgJyM2NjY2NjYnXSxcbiAgICAgICAgU2V0MTogWycjZTQxYTFjJywgJyMzNzdlYjgnLCAnIzRkYWY0YScsICcjOTg0ZWEzJywgJyNmZjdmMDAnLCAnI2ZmZmYzMycsICcjYTY1NjI4JywgJyNmNzgxYmYnLCAnIzk5OTk5OSddLFxuICAgICAgICBTZXQzOiBbJyM4ZGQzYzcnLCAnI2ZmZmZiMycsICcjYmViYWRhJywgJyNmYjgwNzInLCAnIzgwYjFkMycsICcjZmRiNDYyJywgJyNiM2RlNjknLCAnI2ZjY2RlNScsICcjZDlkOWQ5JywgJyNiYzgwYmQnLCAnI2NjZWJjNScsICcjZmZlZDZmJ10sXG4gICAgICAgIERhcmsyOiBbJyMxYjllNzcnLCAnI2Q5NWYwMicsICcjNzU3MGIzJywgJyNlNzI5OGEnLCAnIzY2YTYxZScsICcjZTZhYjAyJywgJyNhNjc2MWQnLCAnIzY2NjY2NiddLFxuICAgICAgICBQYWlyZWQ6IFsnI2E2Y2VlMycsICcjMWY3OGI0JywgJyNiMmRmOGEnLCAnIzMzYTAyYycsICcjZmI5YTk5JywgJyNlMzFhMWMnLCAnI2ZkYmY2ZicsICcjZmY3ZjAwJywgJyNjYWIyZDYnLCAnIzZhM2Q5YScsICcjZmZmZjk5JywgJyNiMTU5MjgnXSxcbiAgICAgICAgUGFzdGVsMjogWycjYjNlMmNkJywgJyNmZGNkYWMnLCAnI2NiZDVlOCcsICcjZjRjYWU0JywgJyNlNmY1YzknLCAnI2ZmZjJhZScsICcjZjFlMmNjJywgJyNjY2NjY2MnXSxcbiAgICAgICAgUGFzdGVsMTogWycjZmJiNGFlJywgJyNiM2NkZTMnLCAnI2NjZWJjNScsICcjZGVjYmU0JywgJyNmZWQ5YTYnLCAnI2ZmZmZjYycsICcjZTVkOGJkJywgJyNmZGRhZWMnLCAnI2YyZjJmMiddLFxuICAgIH07XG5cbiAgICAvLyBhZGQgbG93ZXJjYXNlIGFsaWFzZXMgZm9yIGNhc2UtaW5zZW5zaXRpdmUgbWF0Y2hlc1xuICAgIGZvciAodmFyIGkkMSA9IDAsIGxpc3QkMSA9IE9iamVjdC5rZXlzKGNvbG9yYnJld2VyKTsgaSQxIDwgbGlzdCQxLmxlbmd0aDsgaSQxICs9IDEpIHtcbiAgICAgICAgdmFyIGtleSA9IGxpc3QkMVtpJDFdO1xuXG4gICAgICAgIGNvbG9yYnJld2VyW2tleS50b0xvd2VyQ2FzZSgpXSA9IGNvbG9yYnJld2VyW2tleV07XG4gICAgfVxuXG4gICAgdmFyIGNvbG9yYnJld2VyXzEgPSBjb2xvcmJyZXdlcjtcblxuICAgIC8vIGZlZWwgZnJlZSB0byBjb21tZW50IG91dCBhbnl0aGluZyB0byByb2xsdXBcbiAgICAvLyBhIHNtYWxsZXIgY2hyb21hLmpzIGJ1aWx0XG5cbiAgICAvLyBpbyAtLT4gY29udmVydCBjb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBvcGVyYXRvcnMgLS0+IG1vZGlmeSBleGlzdGluZyBDb2xvcnNcblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGludGVycG9sYXRvcnNcblxuXG5cblxuXG5cblxuXG5cblxuICAgIC8vIGdlbmVyYXRvcnMgLS0gPiBjcmVhdGUgbmV3IGNvbG9yc1xuICAgIGNocm9tYV8xLmF2ZXJhZ2UgPSBhdmVyYWdlO1xuICAgIGNocm9tYV8xLmJlemllciA9IGJlemllcl8xO1xuICAgIGNocm9tYV8xLmJsZW5kID0gYmxlbmRfMTtcbiAgICBjaHJvbWFfMS5jdWJlaGVsaXggPSBjdWJlaGVsaXg7XG4gICAgY2hyb21hXzEubWl4ID0gY2hyb21hXzEuaW50ZXJwb2xhdGUgPSBtaXg7XG4gICAgY2hyb21hXzEucmFuZG9tID0gcmFuZG9tXzE7XG4gICAgY2hyb21hXzEuc2NhbGUgPSBzY2FsZTtcblxuICAgIC8vIG90aGVyIHV0aWxpdHkgbWV0aG9kc1xuICAgIGNocm9tYV8xLmFuYWx5emUgPSBhbmFseXplXzEuYW5hbHl6ZTtcbiAgICBjaHJvbWFfMS5jb250cmFzdCA9IGNvbnRyYXN0O1xuICAgIGNocm9tYV8xLmRlbHRhRSA9IGRlbHRhRTtcbiAgICBjaHJvbWFfMS5kaXN0YW5jZSA9IGRpc3RhbmNlO1xuICAgIGNocm9tYV8xLmxpbWl0cyA9IGFuYWx5emVfMS5saW1pdHM7XG4gICAgY2hyb21hXzEudmFsaWQgPSB2YWxpZDtcblxuICAgIC8vIHNjYWxlXG4gICAgY2hyb21hXzEuc2NhbGVzID0gc2NhbGVzO1xuXG4gICAgLy8gY29sb3JzXG4gICAgY2hyb21hXzEuY29sb3JzID0gdzNjeDExXzE7XG4gICAgY2hyb21hXzEuYnJld2VyID0gY29sb3JicmV3ZXJfMTtcblxuICAgIHZhciBjaHJvbWFfanMgPSBjaHJvbWFfMTtcblxuICAgIHJldHVybiBjaHJvbWFfanM7XG5cbn0pKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9