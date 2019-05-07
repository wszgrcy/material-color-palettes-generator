/******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
        console.log(moduleId)
/******/
/******/ 		// Check if module is in cache
/******/ 		if (installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
            /******/
        }
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
            /******/
        };
        /******/
        /******/ 		// Execute the module function
        console.log(modules)
        // console.log(modules[moduleId])
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
        /******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
        /******/
    }
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function (exports, name, getter) {
/******/ 		if (!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
            /******/
        }
        /******/
    };
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function (exports) {
/******/ 		if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
            /******/
        }
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
        /******/
    };
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function (value, mode) {
/******/ 		if (mode & 1) value = __webpack_require__(value);
/******/ 		if (mode & 8) return value;
/******/ 		if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
        /******/
    };
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function (module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
        /******/
    };
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function (object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.ts");
    /******/
})
/************************************************************************/
/******/({

/***/ "./class.ts":
/*!******************!*\
  !*** ./class.ts ***!
  \******************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

            "use strict";
            console.log('类被调用', this)
            Object.defineProperty(exports, "__esModule", { value: true });
            console.log('执行')
            var const_1 = __webpack_require__(/*! ./const */ "./const.ts");
            console.log('调用?')
            var V = /** @class */ (function () {
                function V() {
                }
                return V;
            }());
            exports.V = V;
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
                    this.ka = function (a) {
                        return 1E-4 > Math.abs(this.b - a.b) && 1E-4 > Math.abs(this.i - a.i) && 1E-4 > Math.abs(this.j - a.j) && Math.abs(this.alpha - a.alpha) < Math.pow(2, -16);
                    };
                    compareValue(l, 100, "lightness");
                    compareValue(alpha, 1, "alpha");
                    //doc暂时兼容
                    this.b = l;
                    this.i = a;
                    this.j = b;
                }
                return Lab;
            }());
            exports.Lab = Lab;
            console.log('导出', exports)
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
            function rgb2lab(a) {
                var b = R(a.red), c = R(a.green), d = R(a.blue), e = .2126729 * b + .7151522 * c + .072175 * d;
                return new Lab(116 * W(e) - 16, 500 * (W((.4124564 * b + .3575761 * c + .1804375 * d) / .95047) - W(e)), 200 * (W(e) - W((.0193339 * b + .119192 * c + .9503041 * d) / 1.08883)), a.alpha);
            }
            function R(a) {
                return .04045 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4);
            }
            function W(a) {
                var b = 6 / 29, c = 1 / (3 * Math.pow(b, 2));
                return a > Math.pow(b, 3) ? Math.pow(a, 1 / 3) : c * a + 4 / 29;
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
                    c = new wb(A(d, 0, 100), Math.max(0, k ? b.v - m : b.v - m * Math.min(const_1.Db[c] / n, 1.25)), (b.hue - q + 360) % 360);
                    r = Math.max(c.b - 1.7, 0);
                    b = c.hue * Math.PI / 180;
                    c = new Lab(c.b, c.v * Math.cos(b), c.v * Math.sin(b), c.alpha);
                    var g = (c.b + 16) / 116;
                    b = .95047 * zb(g + c.i / 500);
                    d = 1 * zb(g);
                    g = 1.08883 * zb(g - c.j / 200);
                    return new rgb(A(yb(3.2404542 * b + -1.5371385 * d + -.4985314 * g), 0, 1), A(yb(-.969266 * b + 1.8760108 * d + .041556 * g), 0, 1), A(yb(.0556434 * b + -.2040259 * d + 1.0572252 * g), 0, 1), c.alpha);
                });
            }
            function xb(a) {
                return new wb(a.b, Math.sqrt(Math.pow(a.i, 2) + Math.pow(a.j, 2)), (180 * Math.atan2(a.j, a.i) / Math.PI + 360) % 360, a.alpha);
            }
            ;
            function wb(a, b, c, d) {
                if (d === void 0) { d = 1; }
                d = void 0 === d ? 1 : d;
                this.b = a;
                this.v = b;
                this.hue = c;
                this.alpha = d;
                compareValue(a, Number.MAX_VALUE, "lightness");
                compareValue(b, Number.MAX_VALUE, "chroma");
                compareValue(c, 360, "hue");
                compareValue(d, 1, "alpha");
            }
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
            function rgb(a, b, c, d) {
                d = void 0 === d ? 1 : d;
                this.red = a;
                this.green = b;
                this.blue = c;
                this.alpha = d;
                compareValue(a, 1, "red");
                compareValue(b, 1, "green");
                compareValue(c, 1, "blue");
                compareValue(d, 1, "alpha");
            }
            ;
            /**主入口 */
            function main(/**rgb颜色 */ b) {
                var c = [];
                c.push([X(b)]);
                var d = lb(rb(b).rotate(180));
                c.push([X(d)]);
                d = rb(b);
                d = [d.rotate(-30), d.rotate(30)];
                d = bd(d);
                c.push(d.yb);
                b = rb(b);
                b = [b.rotate(60), b.rotate(120)];
                b = bd(b);
                c.push(b.yb);
                return c;
            }
            exports.main = main;
            function lb(a) {
                var b = (1 - Math.abs(2 * a.b - 1)) * a.saturation;
                return kb(a.hue, a.alpha, b, Math.max(0, a.b - b / 2));
            }
            function kb(a, b, c, d) {
                var e = d, g = d;
                a = a % 360 / 60;
                var h = c * (1 - Math.abs(a % 2 - 1));
                switch (Math.floor(a)) {
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
                return new rgb(e, g, d, b);
            }
            function rb(a) {
                var b = Math.max(a.red, a.green, a.blue), c = Math.min(a.red, a.green, a.blue), d = 0, e = 0, g = A(.5 * (b + c), 0, 1);
                b - c > const_1.O && (b === a.red ? d = 60 * (a.green - a.blue) / (b - c) : b === a.green ? d = 60 * (a.blue - a.red) / (b - c) + 120 : b === a.blue && (d = 60 * (a.red - a.green) / (b - c) + 240),
                    e = 0 < g && .5 >= g ? A((b - c) / (2 * g), 0, 1) : A((b - c) / (2 - 2 * g), 0, 1));
                d = Math.round(d + 360) % 360;
                return new hsl(d, e, g, a.alpha);
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
            function hsl(a, b, c, d) {
                d = void 0 === d ? 1 : d;
                this.hue = a;
                this.saturation = b;
                this.b = c;
                this.alpha = d;
                compareValue(a, 360, "hue");
                compareValue(b, 1, "saturation");
                compareValue(c, 1, "lightness");
                compareValue(d, 1, "alpha");
            }
            ;


            /***/
        }),

/***/ "./const.ts":
/*!******************!*\
  !*** ./const.ts ***!
  \******************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {
            "use strict";
            console.log('导入常量', this)

            Object.defineProperty(exports, "__esModule", { value: true });
            console.log('ces ',__webpack_require__)
            var class_1 = __webpack_require__(/*! ./class */ "./class.ts");
            console.log('类',class_1)
            exports.BUILTIN_LABCOLOR_LIST = [[new class_1.Lab(94.67497003305085, 7.266715066863771, 1.000743882272359), new class_1.Lab(86.7897416761699, 18.370736761658012, 4.23637133971424), new class_1.Lab(72.0939162832561, 31.7948058298117, 13.2972443996896), new class_1.Lab(61.79353370051851, 44.129498163764545, 20.721477326799608), new class_1.Lab(57.194195398949574, 59.6450006197361, 34.999830012940194), new class_1.Lab(55.603951071861374, 66.01287384845483, 47.67169313982772), new class_1.Lab(51.66348502954747, 64.7487785020625, 43.244876694855286), new class_1.Lab(47.09455666350969, 62.29836039074277, 40.67775424698388), new class_1.Lab(43.77122063388739, 60.28633509183384, 40.31444686692952), new class_1.Lab(39.555187078007386, 58.703681355389975, 41.66495027798629)], [new class_1.Lab(92.68053776327665, 9.515385232804263, -.8994072969754852), new class_1.Lab(81.86756643628922, 25.05688089723257, -1.9475235115390621), new class_1.Lab(70.90987389545768, 42.21705257720526, -1.095154624057959), new class_1.Lab(61.08140805216186, 58.871233307587204, 2.1008764804626434), new class_1.Lab(54.97970219986448, 68.56530938366889, 7.327430728560569), new class_1.Lab(50.872250340749176, 74.60459195925529, 15.353576256896073), new class_1.Lab(47.27738650144558, 70.77855776427805, 11.70434273264508), new class_1.Lab(42.58424189486517, 65.5411953138309, 7.595596439803797), new class_1.Lab(37.977492407254836, 60.74362621842075, 2.9847124951453474), new class_1.Lab(29.699290034849604, 51.90485023721311, -4.830186634107636)], [new class_1.Lab(92.4362655169016, 7.542927467702299, -6.039842848605881), new class_1.Lab(81.07399776904751, 19.563870217805036, -15.719625491986044), new class_1.Lab(68.71394717711831, 33.79992812490556, -26.49539972339321), new class_1.Lab(56.596161226236305, 47.5856631835152, -36.480816605410915), new class_1.Lab(48.002791217624434, 57.30866443934879, -43.2561127152548), new class_1.Lab(40.66211534692161, 64.01910773818436, -48.05930162591041), new class_1.Lab(37.690702208992185, 61.13762767732481, -49.384803274243026), new class_1.Lab(33.56291870731981, 57.637381239254104, -51.39557249855828), new class_1.Lab(29.865391314234515, 54.29737439901333, -52.6601973712463), new class_1.Lab(23.16724235420436, 48.51764437280498, -55.16267949015293)], [new class_1.Lab(92.49103426017201, 4.712320025752947, -6.532868071709763), new class_1.Lab(81.24668319505597, 11.50642734909485, -16.666600637245367), new class_1.Lab(68.61488216554629, 20.395329051982824, -28.522018851715416), new class_1.Lab(55.60369793053023, 30.933537768905005, -41.16439122358484), new class_1.Lab(45.834566190969426, 39.28806272235674, -50.523322052772635), new class_1.Lab(36.608620229358664, 47.29686002828143, -59.111766586186846), new class_1.Lab(34.189791237562616, 46.60426065139123, -59.53961627676729), new class_1.Lab(30.52713367338361, 46.01498224754519, -60.19975052509064), new class_1.Lab(27.44585524877222, 44.96180431854785, -60.46395810756433), new class_1.Lab(21.98627670328218, 44.29296076245473, -60.93653655172098)], [new class_1.Lab(92.86314411983918, 1.5318147061061937, -6.025243528950552), new class_1.Lab(81.8348073705298, 4.460934955458907, -15.873561009736136), new class_1.Lab(69.7796913795672, 7.9043652558912765, -26.3170846346932), new class_1.Lab(57.48786519938736, 12.681019504822533, -37.23202012914528), new class_1.Lab(47.74592578811101, 18.520799302452374, -46.47540679000397), new class_1.Lab(38.334403614455404, 25.57700668170812, -55.28224153299287), new class_1.Lab(35.15116453901552, 26.231812080381168, -54.53700978785404), new class_1.Lab(31.080429988007957, 27.07394930110124, -53.97505274579958), new class_1.Lab(27.026672080454922, 28.165266427558983, -53.28987325482218), new class_1.Lab(19.751201587921678, 30.60784576895101, -52.13866519297474)], [new class_1.Lab(94.70682457348717, -2.835484735987326, -6.978044694792707), new class_1.Lab(86.8839842970016, -5.16908728759552, -17.88561192754956), new class_1.Lab(79.0451532401558, -6.817753527015746, -28.968537490432176), new class_1.Lab(71.15083697242613, -5.994763756850707, -39.72549451158927), new class_1.Lab(65.48106058907833, -2.735745792537936, -48.15471238926561), new class_1.Lab(60.43009440850862, 2.079928897321559, -55.10935847069616), new class_1.Lab(55.62267676922188, 4.998684384486918, -55.02164729429915), new class_1.Lab(49.27006645904875, 8.470398370314381, -54.494796838457546), new class_1.Lab(43.16828856394358, 11.968483076143844, -53.972567377977974), new class_1.Lab(32.17757793894193, 18.96054990229354, -53.45146365049088)], [new class_1.Lab(95.35713467762652, -4.797149155388203, -6.550002550504308), new class_1.Lab(88.27942649540043, -10.836006614583892, -16.359361821940375), new class_1.Lab(81.10009044900976, -15.323054522981716, -26.419121191320947), new class_1.Lab(74.44713958259777, -16.664432625362547, -35.19702686900037), new class_1.Lab(69.87836465637318, -14.291515332054693, -41.827430329755174), new class_1.Lab(65.68851259178913, -9.612635721963692, -47.34091616039191), new class_1.Lab(60.88357994308973, -7.252819027184943, -46.67753731595634), new class_1.Lab(54.26166495426166, -3.8141836897908066, -45.97939475762498), new class_1.Lab(48.10661895072673, -1.378998784464347, -44.34466750206778), new class_1.Lab(36.34401147057282, 5.067812404713545, -43.11786257561915)], [new class_1.Lab(95.69295154599753, -6.898716127301141, -3.994284229654421), new class_1.Lab(89.52842524059004, -16.412398289601725, -9.260466069266693), new class_1.Lab(83.32031214655748, -24.83036840728098, -14.568673583304603), new class_1.Lab(77.35338313752958, -30.201708572215104, -18.92358284721101), new class_1.Lab(73.45322093857781, -31.88590390189383, -21.130459992513686), new class_1.Lab(69.97638465064783, -30.679850324547953, -23.186685661136707), new class_1.Lab(64.44491716553777, -29.08337434584457, -21.154935769156214), new class_1.Lab(56.99816432961103, -27.31081477279451, -17.86988815767443), new class_1.Lab(49.75464182255671, -25.335383503694242, -15.024722591662787), new class_1.Lab(36.52725894264432, -22.129641744194515, -9.176159146894303)], [new class_1.Lab(94.18453941589918, -6.08351703428972, -1.5488916051161983), new class_1.Lab(85.68177077414457, -15.333179440298606, -2.8519825761476048), new class_1.Lab(76.85067847190405, -24.844059173189713, -3.8750785132192656), new class_1.Lab(68.02762242570138, -32.566861154120716, -4.015231084407134), new class_1.Lab(61.667257304525464, -36.06752603289354, -3.4734046401753815), new class_1.Lab(55.67310397390196, -36.66069960626328, -2.125617915169653), new class_1.Lab(51.059149495197715, -34.65019160301408, -1.3910484300432513), new class_1.Lab(45.269081019218405, -32.13244775422941, -.4526371852697775), new class_1.Lab(39.36899076059384, -29.25264468583161, -.03562564673170732), new class_1.Lab(28.58363043701477, -24.585465516136413, 1.8037402162492389)], [new class_1.Lab(95.30530183565223, -6.430415645739263, 4.292950594459599), new class_1.Lab(88.49014579152143, -15.23147744952702, 10.848261177683138), new class_1.Lab(81.22616870575376, -24.993886168551583, 18.144696803330884), new class_1.Lab(74.30361721558802, -35.56088696067356, 26.781515251907727), new class_1.Lab(69.0430995277442, -42.61556126595995, 33.17109563126665), new class_1.Lab(63.977421814072926, -48.54292673319982, 39.73241526342939), new class_1.Lab(58.777960853461366, -46.1153692478013, 37.838910745225576), new class_1.Lab(52.41108688974904, -43.21761792485762, 35.62250659009424), new class_1.Lab(46.2813873076426, -40.25816227675361, 33.32343229338761), new class_1.Lab(34.685655305814514, -34.75343878510312, 28.866739034359767)], [new class_1.Lab(96.70518169355954, -4.929987845095463, 6.397084523168894), new class_1.Lab(91.66416061199438, -12.057032041945693, 16.054604579275143), new class_1.Lab(86.2244395865449, -19.613646834080622, 26.384906423454236), new class_1.Lab(80.83404879636919, -27.080171840756893, 37.378493742021334), new class_1.Lab(76.79543725108964, -32.76659719736752, 45.912190572444445), new class_1.Lab(72.90025297028019, -37.549139223927384, 53.51959496103027), new class_1.Lab(67.21532310272079, -36.56304870773486, 50.49629051268894), new class_1.Lab(59.91051142210195, -35.77011466063357, 46.56465847976187), new class_1.Lab(52.51015841084511, -34.47903440699235, 42.20723868724268), new class_1.Lab(39.41191983353878, -32.80460974352642, 35.255490585630014)], [new class_1.Lab(97.99506057883428, -4.059632482741494, 9.355797602381521), new class_1.Lab(94.80926235976536, -9.237091467352855, 23.230650064824985), new class_1.Lab(91.85205843526167, -15.053917327011114, 38.86115182206598), new class_1.Lab(88.75812142080242, -19.542900400164097, 53.71785675783709), new class_1.Lab(86.27404180729515, -22.173992891121596, 63.978639065232514), new class_1.Lab(84.20566835376492, -24.270643520989342, 72.79624067033038), new class_1.Lab(78.27915100603997, -21.181850056402496, 68.82763412297965), new class_1.Lab(70.82385811892824, -17.788148932525672, 64.00327817988128), new class_1.Lab(62.936867012868035, -13.697412111684903, 58.513000509287835), new class_1.Lab(49.498610881452535, -6.485230564384715, 49.67432722833751)], [new class_1.Lab(98.93885129752759, -3.0098470288543178, 10.765736833790008), new class_1.Lab(97.22689784824074, -6.174599368734491, 26.22932417355146), new class_1.Lab(95.58092947828766, -8.907132848473886, 43.56297291446567), new class_1.Lab(94.09009515702486, -10.509628942710735, 60.20019514231188), new class_1.Lab(93.06546746683087, -11.008558476013008, 71.76500826005477), new class_1.Lab(92.12975017760128, -10.830023094868302, 80.9090559640089), new class_1.Lab(87.12188349168609, -2.3764300099239355, 78.14868195373407), new class_1.Lab(80.96200442419905, 8.849333792729064, 75.05050700092679), new class_1.Lab(75.00342770718086, 20.340173566879283, 72.24841925958934), new class_1.Lab(65.48207757431567, 39.647064970476094, 68.34872841768654)], [new class_1.Lab(97.5642392074337, -1.445525639405032, 11.881254316297674), new class_1.Lab(93.67057953749456, -1.8693096862072434, 30.02888670415651), new class_1.Lab(89.94571492804107, -1.0224503814769692, 49.649542361642276), new class_1.Lab(86.71009164153801, 1.0496066396428194, 68.77377342409739), new class_1.Lab(83.78773993319211, 5.248231820098425, 78.92920457852716), new class_1.Lab(81.52191382080228, 9.403655370707199, 82.69257112982746), new class_1.Lab(78.17240973804697, 16.628512886531887, 81.09358318806208), new class_1.Lab(73.80899654381052, 26.53614315250874, 78.21754052181723), new class_1.Lab(70.1134511665764, 35.3007623359744, 75.87510992138593), new class_1.Lab(63.86460405565717, 50.94648214505959, 72.17815682124423)], [new class_1.Lab(96.30459517801387, .923151172282477, 10.598439446083074), new class_1.Lab(90.68320082865087, 4.103774964681062, 26.485793721916128), new class_1.Lab(85.00055287186233, 9.047181758866651, 44.51407622580792), new class_1.Lab(79.42428495742953, 16.452610724439875, 62.08721739074201), new class_1.Lab(75.47792699289774, 23.395742928451867, 72.64347611236501), new class_1.Lab(72.04246561548388, 30.681921012382098, 77.08579298904603), new class_1.Lab(68.94724338946975, 35.22014778433863, 74.88425044595111), new class_1.Lab(64.83017495535229, 40.91200730099703, 71.9596053545428), new class_1.Lab(60.8534207471871, 46.41483590510681, 69.18061963415211), new class_1.Lab(54.77571742962287, 55.282751019360035, 65.10193403547922)], [new class_1.Lab(93.69219844671957, 5.763979334358293, 3.1700162796469034), new class_1.Lab(86.04629434276428, 15.750843803958192, 14.828476927090994), new class_1.Lab(77.54010042938336, 27.90113842540043, 25.99645229289065), new class_1.Lab(69.74095456707857, 41.14487377552256, 39.443320178900024), new class_1.Lab(64.37085344539341, 51.890379620443575, 50.81312471046415), new class_1.Lab(60.06780837277435, 61.65258736118817, 61.54771829165221), new class_1.Lab(57.28707915232363, 60.3250664308812, 60.07341536376447), new class_1.Lab(53.810052616293845, 58.36760943780162, 58.19586806694884), new class_1.Lab(50.301352405105874, 56.40104898089937, 55.924141992404344), new class_1.Lab(43.86477994548343, 52.970887703910726, 52.30067989225532)], [new class_1.Lab(93.29864888069987, .9915456090475727, 1.442353076378411), new class_1.Lab(82.80884359004081, 3.116221903342209, 3.3523059451463055), new class_1.Lab(70.95493047668185, 5.469742193344784, 5.449009494553492), new class_1.Lab(58.712934619103066, 7.990991075363385, 8.352488495367627), new class_1.Lab(49.150208552875895, 10.570984981000397, 10.831440151197924), new class_1.Lab(39.63200151837749, 13.138881961627241, 13.531574711511885), new class_1.Lab(35.600996682015754, 12.40352847757295, 12.10432183902449), new class_1.Lab(30.084271265759952, 11.317148149878081, 10.547484304296217), new class_1.Lab(24.555014696416578, 10.816613316782464, 8.506555306791984), new class_1.Lab(18.35055226514404, 10.225725550338765, 7.058582769882571)], [new class_1.Lab(98.27202740980219, -1.6418393644634932E-5, 6.567357457853973E-6), new class_1.Lab(96.53749336548567, -1.616917905122861E-5, 6.467671598286984E-6), new class_1.Lab(94.0978378987781, -1.581865383126768E-5, 6.327461532507073E-6), new class_1.Lab(89.17728373493613, -1.511167768697419E-5, 6.044671074789676E-6), new class_1.Lab(76.61119902231323, -1.330620591488696E-5, 5.322482343750323E-6), new class_1.Lab(65.11424774127516, -1.1654345155598378E-5, 4.661738062239351E-6), new class_1.Lab(49.238989620828065, -9.373417431124409E-6, 3.7493669724497636E-6), new class_1.Lab(41.14266843804848, -8.210152946386273E-6, 3.2840611896567395E-6), new class_1.Lab(27.974857206003705, -6.318226192236764E-6, 2.5272904768947058E-6), new class_1.Lab(12.740011331302725, -4.129311698131133E-6, 1.6517246792524531E-6)], [new class_1.Lab(94.27665212516236, -.637571046109342, -1.313515378996688), new class_1.Lab(85.77788001492097, -2.2777811084512822, -3.0177758416151557), new class_1.Lab(76.12296325015231, -3.401502988883809, -5.16867892977908), new class_1.Lab(66.16340108908365, -4.819627183079045, -7.520697631614404), new class_1.Lab(58.35752478513645, -5.7195089100892105, -9.165988916613488), new class_1.Lab(50.70748082202715, -6.837992965799455, -10.956055112409357), new class_1.Lab(44.85917867647632, -6.411990559239578, -9.74511982878765), new class_1.Lab(36.92458930566504, -5.319878610845596, -8.341943474561553), new class_1.Lab(29.115334784637618, -4.168907828645069, -6.8629962199973304), new class_1.Lab(19.958338450799914, -3.3116721453186617, -5.4486142104736786)]];
            exports.Cb = [2.048875457, 5.124792061, 8.751659557, 12.07628774, 13.91449542, 15.92738893, 15.46585818, 15.09779227, 15.13738673, 15.09818372];
            exports.Db = [1.762442714, 4.213532634, 7.395827458, 11.07174158, 13.89634504, 16.37591477, 16.27071136, 16.54160806, 17.35916727, 19.88410864];
            exports.O = Math.pow(2, -16);


            /***/
        }),

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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


            /***/
        }),

/***/ "./node_modules/chroma-js/chroma.js":
/*!******************************************!*\
  !*** ./node_modules/chroma-js/chroma.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function (module, exports, __webpack_require__) {

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
            }(this, (function () {
                'use strict';

                var limit = function (x, min, max) {
                    if (min === void 0) min = 0;
                    if (max === void 0) max = 1;

                    return x < min ? min : x > max ? max : x;
                };

                var clip_rgb = function (rgb) {
                    rgb._clipped = false;
                    rgb._unclipped = rgb.slice(0);
                    for (var i = 0; i <= 3; i++) {
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
                var type = function (obj) {
                    return classToType[Object.prototype.toString.call(obj)] || "object";
                };

                var unpack = function (args, keyOrder) {
                    if (keyOrder === void 0) keyOrder = null;

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
                    var l = args.length - 1;
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
                    TWOPI: PI * 2,
                    PITHIRD: PI / 3,
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
                    while (len--) args[len] = arguments[len];

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
                            input.autodetect = input.autodetect.sort(function (a, b) { return b.p - a.p; });
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
                        var rgb = input.format[mode].apply(null, autodetect ? args : args.slice(0, -1));
                        me._rgb = clip_rgb$1(rgb);
                    } else {
                        throw new Error('unknown format: ' + args);
                    }

                    // add alpha channel
                    if (me._rgb.length === 3) { me._rgb.push(1); }
                };

                Color.prototype.toString = function toString() {
                    if (type$1(this.hex) == 'function') { return this.hex(); }
                    return ("[" + (this._rgb.join(',')) + "]");
                };

                var Color_1 = Color;

                var chroma = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(chroma.Color, [null].concat(args)));
                };

                chroma.Color = Color_1;
                chroma.version = '2.0.3';

                var chroma_1 = chroma;

                var unpack$1 = utils.unpack;
                var max = Math.max;

                var rgb2cmyk = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    var ref = unpack$1(args, 'rgb');
                    var r = ref[0];
                    var g = ref[1];
                    var b = ref[2];
                    r = r / 255;
                    g = g / 255;
                    b = b / 255;
                    var k = 1 - max(r, max(g, b));
                    var f = k < 1 ? 1 / (1 - k) : 0;
                    var c = (1 - r - k) * f;
                    var m = (1 - g - k) * f;
                    var y = (1 - b - k) * f;
                    return [c, m, y, k];
                };

                var rgb2cmyk_1 = rgb2cmyk;

                var unpack$2 = utils.unpack;

                var cmyk2rgb = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    args = unpack$2(args, 'cmyk');
                    var c = args[0];
                    var m = args[1];
                    var y = args[2];
                    var k = args[3];
                    var alpha = args.length > 4 ? args[4] : 1;
                    if (k === 1) { return [0, 0, 0, alpha]; }
                    return [
                        c >= 1 ? 0 : 255 * (1 - c) * (1 - k), // r
                        m >= 1 ? 0 : 255 * (1 - m) * (1 - k), // g
                        y >= 1 ? 0 : 255 * (1 - y) * (1 - k), // b
                        alpha
                    ];
                };

                var cmyk2rgb_1 = cmyk2rgb;

                var unpack$3 = utils.unpack;
                var type$2 = utils.type;



                Color_1.prototype.cmyk = function () {
                    return rgb2cmyk_1(this._rgb);
                };

                chroma_1.cmyk = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['cmyk'])));
                };

                input.format.cmyk = cmyk2rgb_1;

                input.autodetect.push({
                    p: 2,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

                        args = unpack$3(args, 'cmyk');
                        if (type$2(args) === 'array' && args.length === 4) {
                            return 'cmyk';
                        }
                    }
                });

                var unpack$4 = utils.unpack;
                var last$2 = utils.last;
                var rnd = function (a) { return Math.round(a * 100) / 100; };

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
                    while (len--) args[len] = arguments[len];

                    var hsla = unpack$4(args, 'hsla');
                    var mode = last$2(args) || 'lsa';
                    hsla[0] = rnd(hsla[0] || 0);
                    hsla[1] = rnd(hsla[1] * 100) + '%';
                    hsla[2] = rnd(hsla[2] * 100) + '%';
                    if (mode === 'hsla' || (hsla.length > 3 && hsla[3] < 1)) {
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
                    while (len--) args[len] = arguments[len];

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

                    if (max === min) {
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
                    if (args.length > 3 && args[3] !== undefined) { return [h, s, l, args[3]]; }
                    return [h, s, l];
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
                    while (len--) args[len] = arguments[len];

                    var rgba = unpack$6(args, 'rgba');
                    var mode = last$3(args) || 'rgb';
                    if (mode.substr(0, 3) == 'hsl') {
                        return hsl2css_1(rgb2hsl_1(rgba), mode);
                    }
                    rgba[0] = round(rgba[0]);
                    rgba[1] = round(rgba[1]);
                    rgba[2] = round(rgba[2]);
                    if (mode === 'rgba' || (rgba.length > 3 && rgba[3] < 1)) {
                        rgba[3] = rgba.length > 3 ? rgba[3] : 1;
                        mode = 'rgba';
                    }
                    return (mode + "(" + (rgba.slice(0, mode === 'rgb' ? 3 : 4).join(',')) + ")");
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
                            hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
                        }
                        var u = parseInt(hex, 16);
                        var r = u >> 16;
                        var g = u >> 8 & 0xFF;
                        var b = u & 0xFF;
                        return [r, g, b, 1];
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
                        return [r$1, g$1, b$1, a];
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
                    while (len--) args[len] = arguments[len];
                    args = unpack$7(args, 'hsl');
                    var h = args[0];
                    var s = args[1];
                    var l = args[2];
                    var r, g, b;
                    if (s === 0) {
                        r = g = b = l * 255;
                    } else {
                        var t3 = [0, 0, 0];
                        var c = [0, 0, 0];
                        var t2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
                        var t1 = 2 * l - t2;
                        var h_ = h / 360;
                        t3[0] = h_ + 1 / 3;
                        t3[1] = h_;
                        t3[2] = h_ - 1 / 3;
                        for (var i = 0; i < 3; i++) {
                            if (t3[i] < 0) { t3[i] += 1; }
                            if (t3[i] > 1) { t3[i] -= 1; }
                            if (6 * t3[i] < 1) { c[i] = t1 + (t2 - t1) * 6 * t3[i]; }
                            else if (2 * t3[i] < 1) { c[i] = t2; }
                            else if (3 * t3[i] < 2) { c[i] = t1 + (t2 - t1) * ((2 / 3) - t3[i]) * 6; }
                            else { c[i] = t1; }
                        }
                        (assign = [round$1(c[0] * 255), round$1(c[1] * 255), round$1(c[2] * 255)], r = assign[0], g = assign[1], b = assign[2]);
                    }
                    if (args.length > 3) {
                        // keep alpha channel
                        return [r, g, b, args[3]];
                    }
                    return [r, g, b, 1];
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
                        var rgb = m.slice(1, 4);
                        for (var i = 0; i < 3; i++) {
                            rgb[i] = +rgb[i];
                        }
                        rgb[3] = 1;  // default alpha
                        return rgb;
                    }

                    // rgba(250,20,0,0.4)
                    if ((m = css.match(RE_RGBA))) {
                        var rgb$1 = m.slice(1, 5);
                        for (var i$1 = 0; i$1 < 4; i$1++) {
                            rgb$1[i$1] = +rgb$1[i$1];
                        }
                        return rgb$1;
                    }

                    // rgb(100%,0%,0%)
                    if ((m = css.match(RE_RGB_PCT))) {
                        var rgb$2 = m.slice(1, 4);
                        for (var i$2 = 0; i$2 < 3; i$2++) {
                            rgb$2[i$2] = round$2(rgb$2[i$2] * 2.55);
                        }
                        rgb$2[3] = 1;  // default alpha
                        return rgb$2;
                    }

                    // rgba(100%,0%,0%,0.4)
                    if ((m = css.match(RE_RGBA_PCT))) {
                        var rgb$3 = m.slice(1, 5);
                        for (var i$3 = 0; i$3 < 3; i$3++) {
                            rgb$3[i$3] = round$2(rgb$3[i$3] * 2.55);
                        }
                        rgb$3[3] = +rgb$3[3];
                        return rgb$3;
                    }

                    // hsl(0,100%,50%)
                    if ((m = css.match(RE_HSL))) {
                        var hsl = m.slice(1, 4);
                        hsl[1] *= 0.01;
                        hsl[2] *= 0.01;
                        var rgb$4 = hsl2rgb_1(hsl);
                        rgb$4[3] = 1;
                        return rgb$4;
                    }

                    // hsla(0,100%,50%,0.5)
                    if ((m = css.match(RE_HSLA))) {
                        var hsl$1 = m.slice(1, 4);
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




                Color_1.prototype.css = function (mode) {
                    return rgb2css_1(this._rgb, mode);
                };

                chroma_1.css = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['css'])));
                };

                input.format.css = css2rgb_1;

                input.autodetect.push({
                    p: 5,
                    test: function (h) {
                        var rest = [], len = arguments.length - 1;
                        while (len-- > 0) rest[len] = arguments[len + 1];

                        if (!rest.length && type$3(h) === 'string' && css2rgb_1.test(h)) {
                            return 'css';
                        }
                    }
                });

                var unpack$8 = utils.unpack;

                input.format.gl = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    var rgb = unpack$8(args, 'rgba');
                    rgb[0] *= 255;
                    rgb[1] *= 255;
                    rgb[2] *= 255;
                    return rgb;
                };

                chroma_1.gl = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['gl'])));
                };

                Color_1.prototype.gl = function () {
                    var rgb = this._rgb;
                    return [rgb[0] / 255, rgb[1] / 255, rgb[2] / 255, rgb[3]];
                };

                var unpack$9 = utils.unpack;

                var rgb2hcg = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

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
                        if (g === max) { h = 2 + (b - r) / delta; }
                        if (b === max) { h = 4 + (r - g) / delta; }
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
                    while (len--) args[len] = arguments[len];
                    args = unpack$a(args, 'hcg');
                    var h = args[0];
                    var c = args[1];
                    var _g = args[2];
                    var r, g, b;
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






                Color_1.prototype.hcg = function () {
                    return rgb2hcg_1(this._rgb);
                };

                chroma_1.hcg = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hcg'])));
                };

                input.format.hcg = hcg2rgb_1;

                input.autodetect.push({
                    p: 1,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

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
                    while (len--) args[len] = arguments[len];

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




                Color_1.prototype.hex = function (mode) {
                    return rgb2hex_1(this._rgb, mode);
                };

                chroma_1.hex = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hex'])));
                };

                input.format.hex = hex2rgb_1;
                input.autodetect.push({
                    p: 4,
                    test: function (h) {
                        var rest = [], len = arguments.length - 1;
                        while (len-- > 0) rest[len] = arguments[len + 1];

                        if (!rest.length && type$5(h) === 'string' && [3, 4, 6, 7, 8, 9].includes(h.length)) {
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
                    while (len--) args[len] = arguments[len];

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
                    var min_ = min(r, g, b);
                    var i = (r + g + b) / 3;
                    var s = i > 0 ? 1 - min_ / i : 0;
                    if (s === 0) {
                        h = NaN;
                    } else {
                        h = ((r - g) + (r - b)) / 2;
                        h /= sqrt((r - g) * (r - g) + (r - b) * (g - b));
                        h = acos(h);
                        if (b > g) {
                            h = TWOPI - h;
                        }
                        h /= TWOPI;
                    }
                    return [h * 360, s, i];
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
                    while (len--) args[len] = arguments[len];

                    /*
                    borrowed from here:
                    http://hummer.stanford.edu/museinfo/doc/examples/humdrum/keyscape2/hsi2rgb.cpp
                    */
                    args = unpack$e(args, 'hsi');
                    var h = args[0];
                    var s = args[1];
                    var i = args[2];
                    var r, g, b;

                    if (isNaN(h)) { h = 0; }
                    if (isNaN(s)) { s = 0; }
                    // normalize hue
                    if (h > 360) { h -= 360; }
                    if (h < 0) { h += 360; }
                    h /= 360;
                    if (h < 1 / 3) {
                        b = (1 - s) / 3;
                        r = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
                        g = 1 - (b + r);
                    } else if (h < 2 / 3) {
                        h -= 1 / 3;
                        r = (1 - s) / 3;
                        g = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
                        b = 1 - (r + g);
                    } else {
                        h -= 2 / 3;
                        g = (1 - s) / 3;
                        b = (1 + s * cos(TWOPI$1 * h) / cos(PITHIRD - TWOPI$1 * h)) / 3;
                        r = 1 - (g + b);
                    }
                    r = limit$1(i * r * 3);
                    g = limit$1(i * g * 3);
                    b = limit$1(i * b * 3);
                    return [r * 255, g * 255, b * 255, args.length > 3 ? args[3] : 1];
                };

                var hsi2rgb_1 = hsi2rgb;

                var unpack$f = utils.unpack;
                var type$6 = utils.type;






                Color_1.prototype.hsi = function () {
                    return rgb2hsi_1(this._rgb);
                };

                chroma_1.hsi = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hsi'])));
                };

                input.format.hsi = hsi2rgb_1;

                input.autodetect.push({
                    p: 2,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

                        args = unpack$f(args, 'hsi');
                        if (type$6(args) === 'array' && args.length === 3) {
                            return 'hsi';
                        }
                    }
                });

                var unpack$g = utils.unpack;
                var type$7 = utils.type;






                Color_1.prototype.hsl = function () {
                    return rgb2hsl_1(this._rgb);
                };

                chroma_1.hsl = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hsl'])));
                };

                input.format.hsl = hsl2rgb_1;

                input.autodetect.push({
                    p: 2,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

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
                    while (len--) args[len] = arguments[len];

                    args = unpack$h(args, 'rgb');
                    var r = args[0];
                    var g = args[1];
                    var b = args[2];
                    var min_ = min$1(r, g, b);
                    var max_ = max$1(r, g, b);
                    var delta = max_ - min_;
                    var h, s, v;
                    v = max_ / 255.0;
                    if (max_ === 0) {
                        h = Number.NaN;
                        s = 0;
                    } else {
                        s = delta / max_;
                        if (r === max_) { h = (g - b) / delta; }
                        if (g === max_) { h = 2 + (b - r) / delta; }
                        if (b === max_) { h = 4 + (r - g) / delta; }
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
                    while (len--) args[len] = arguments[len];
                    args = unpack$i(args, 'hsv');
                    var h = args[0];
                    var s = args[1];
                    var v = args[2];
                    var r, g, b;
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
                    return [r, g, b, args.length > 3 ? args[3] : 1];
                };

                var hsv2rgb_1 = hsv2rgb;

                var unpack$j = utils.unpack;
                var type$8 = utils.type;






                Color_1.prototype.hsv = function () {
                    return rgb2hsv(this._rgb);
                };

                chroma_1.hsv = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hsv'])));
                };

                input.format.hsv = hsv2rgb_1;

                input.autodetect.push({
                    p: 2,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

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
                    while (len--) args[len] = arguments[len];

                    var ref = unpack$k(args, 'rgb');
                    var r = ref[0];
                    var g = ref[1];
                    var b = ref[2];
                    var ref$1 = rgb2xyz(r, g, b);
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

                var rgb2xyz = function (r, g, b) {
                    r = rgb_xyz(r);
                    g = rgb_xyz(g);
                    b = rgb_xyz(b);
                    var x = xyz_lab((0.4124564 * r + 0.3575761 * g + 0.1804375 * b) / labConstants.Xn);
                    var y = xyz_lab((0.2126729 * r + 0.7151522 * g + 0.0721750 * b) / labConstants.Yn);
                    var z = xyz_lab((0.0193339 * r + 0.1191920 * g + 0.9503041 * b) / labConstants.Zn);
                    return [x, y, z];
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
                    while (len--) args[len] = arguments[len];

                    args = unpack$l(args, 'lab');
                    var l = args[0];
                    var a = args[1];
                    var b = args[2];
                    var x, y, z, r, g, b_;

                    y = (l + 16) / 116;
                    x = isNaN(a) ? y : y + a / 500;
                    z = isNaN(b) ? y : y - b / 200;

                    y = labConstants.Yn * lab_xyz(y);
                    x = labConstants.Xn * lab_xyz(x);
                    z = labConstants.Zn * lab_xyz(z);

                    r = xyz_rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z);  // D65 -> sRGB
                    g = xyz_rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z);
                    b_ = xyz_rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z);

                    return [r, g, b_, args.length > 3 ? args[3] : 1];
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






                Color_1.prototype.lab = function () {
                    return rgb2lab_1(this._rgb);
                };

                chroma_1.lab = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['lab'])));
                };

                input.format.lab = lab2rgb_1;

                input.autodetect.push({
                    p: 2,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

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
                    while (len--) args[len] = arguments[len];

                    var ref = unpack$n(args, 'lab');
                    var l = ref[0];
                    var a = ref[1];
                    var b = ref[2];
                    var c = sqrt$1(a * a + b * b);
                    var h = (atan2(b, a) * RAD2DEG + 360) % 360;
                    if (round$4(c * 10000) === 0) { h = Number.NaN; }
                    return [l, c, h];
                };

                var lab2lch_1 = lab2lch;

                var unpack$o = utils.unpack;



                var rgb2lch = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    var ref = unpack$o(args, 'rgb');
                    var r = ref[0];
                    var g = ref[1];
                    var b = ref[2];
                    var ref$1 = rgb2lab_1(r, g, b);
                    var l = ref$1[0];
                    var a = ref$1[1];
                    var b_ = ref$1[2];
                    return lab2lch_1(l, a, b_);
                };

                var rgb2lch_1 = rgb2lch;

                var unpack$p = utils.unpack;
                var DEG2RAD = utils.DEG2RAD;
                var sin = Math.sin;
                var cos$1 = Math.cos;

                var lch2lab = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

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
                    while (len--) args[len] = arguments[len];

                    args = unpack$q(args, 'lch');
                    var l = args[0];
                    var c = args[1];
                    var h = args[2];
                    var ref = lch2lab_1(l, c, h);
                    var L = ref[0];
                    var a = ref[1];
                    var b_ = ref[2];
                    var ref$1 = lab2rgb_1(L, a, b_);
                    var r = ref$1[0];
                    var g = ref$1[1];
                    var b = ref$1[2];
                    return [r, g, b, args.length > 3 ? args[3] : 1];
                };

                var lch2rgb_1 = lch2rgb;

                var unpack$r = utils.unpack;


                var hcl2rgb = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    var hcl = unpack$r(args, 'hcl').reverse();
                    return lch2rgb_1.apply(void 0, hcl);
                };

                var hcl2rgb_1 = hcl2rgb;

                var unpack$s = utils.unpack;
                var type$a = utils.type;






                Color_1.prototype.lch = function () { return rgb2lch_1(this._rgb); };
                Color_1.prototype.hcl = function () { return rgb2lch_1(this._rgb).reverse(); };

                chroma_1.lch = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['lch'])));
                };
                chroma_1.hcl = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['hcl'])));
                };

                input.format.lch = lch2rgb_1;
                input.format.hcl = hcl2rgb_1;

                ['lch', 'hcl'].forEach(function (m) {
                    return input.autodetect.push({
                        p: 2,
                        test: function () {
                            var args = [], len = arguments.length;
                            while (len--) args[len] = arguments[len];

                            args = unpack$s(args, m);
                            if (type$a(args) === 'array' && args.length === 3) {
                                return m;
                            }
                        }
                    });
                });

                var type$b = utils.type;





                Color_1.prototype.name = function () {
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
                    throw new Error('unknown color name: ' + name);
                };

                input.autodetect.push({
                    p: 5,
                    test: function (h) {
                        var rest = [], len = arguments.length - 1;
                        while (len-- > 0) rest[len] = arguments[len + 1];

                        if (!rest.length && type$b(h) === 'string' && w3cx11_1[h.toLowerCase()]) {
                            return 'named';
                        }
                    }
                });

                var unpack$t = utils.unpack;

                var rgb2num = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

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
                        return [r, g, b, 1];
                    }
                    throw new Error("unknown num color: " + num);
                };

                var num2rgb_1 = num2rgb;

                var type$d = utils.type;



                Color_1.prototype.num = function () {
                    return rgb2num_1(this._rgb);
                };

                chroma_1.num = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['num'])));
                };

                input.format.num = num2rgb_1;

                input.autodetect.push({
                    p: 5,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

                        if (args.length === 1 && type$d(args[0]) === 'number' && args[0] >= 0 && args[0] <= 0xFFFFFF) {
                            return 'num';
                        }
                    }
                });

                var unpack$u = utils.unpack;
                var type$e = utils.type;
                var round$5 = Math.round;

                Color_1.prototype.rgb = function (rnd) {
                    if (rnd === void 0) rnd = true;

                    if (rnd === false) { return this._rgb.slice(0, 3); }
                    return this._rgb.slice(0, 3).map(round$5);
                };

                Color_1.prototype.rgba = function (rnd) {
                    if (rnd === void 0) rnd = true;

                    return this._rgb.slice(0, 4).map(function (v, i) {
                        return i < 3 ? (rnd === false ? v : round$5(v)) : v;
                    });
                };

                chroma_1.rgb = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['rgb'])));
                };

                input.format.rgb = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    var rgba = unpack$u(args, 'rgba');
                    if (rgba[3] === undefined) { rgba[3] = 1; }
                    return rgba;
                };

                input.autodetect.push({
                    p: 3,
                    test: function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

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
                    var r, g, b;
                    if (temp < 66) {
                        r = 255;
                        g = -155.25485562709179 - 0.44596950469579133 * (g = temp - 2) + 104.49216199393888 * log(g);
                        b = temp < 20 ? 0 : -254.76935184120902 + 0.8274096064007395 * (b = temp - 10) + 115.67994401066147 * log(b);
                    } else {
                        r = 351.97690566805693 + 0.114206453784165 * (r = temp - 55) - 40.25366309332127 * log(r);
                        g = 325.4494125711974 + 0.07943456536662342 * (g = temp - 50) - 28.0852963507957 * log(g);
                        b = 255;
                    }
                    return [r, g, b, 1];
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
                    while (len--) args[len] = arguments[len];

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
                    Color_1.prototype.temperature = function () {
                        return rgb2temperature_1(this._rgb);
                    };

                chroma_1.temp =
                    chroma_1.kelvin =
                    chroma_1.temperature = function () {
                        var args = [], len = arguments.length;
                        while (len--) args[len] = arguments[len];

                        return new (Function.prototype.bind.apply(Color_1, [null].concat(args, ['temp'])));
                    };

                input.format.temp =
                    input.format.kelvin =
                    input.format.temperature = temperature2rgb_1;

                var type$f = utils.type;

                Color_1.prototype.alpha = function (a, mutate) {
                    if (mutate === void 0) mutate = false;

                    if (a !== undefined && type$f(a) === 'number') {
                        if (mutate) {
                            this._rgb[3] = a;
                            return this;
                        }
                        return new Color_1([this._rgb[0], this._rgb[1], this._rgb[2], a], 'rgb');
                    }
                    return this._rgb[3];
                };

                Color_1.prototype.clipped = function () {
                    return this._rgb._clipped || false;
                };

                Color_1.prototype.darken = function (amount) {
                    if (amount === void 0) amount = 1;

                    var me = this;
                    var lab = me.lab();
                    lab[0] -= labConstants.Kn * amount;
                    return new Color_1(lab, 'lab').alpha(me.alpha(), true);
                };

                Color_1.prototype.brighten = function (amount) {
                    if (amount === void 0) amount = 1;

                    return this.darken(-amount);
                };

                Color_1.prototype.darker = Color_1.prototype.darken;
                Color_1.prototype.brighter = Color_1.prototype.brighten;

                Color_1.prototype.get = function (mc) {
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

                Color_1.prototype.luminance = function (lum) {
                    if (lum !== undefined && type$g(lum) === 'number') {
                        if (lum === 0) {
                            // return pure black
                            return new Color_1([0, 0, 0, this._rgb[3]], 'rgb');
                        }
                        if (lum === 1) {
                            // return pure white
                            return new Color_1([255, 255, 255, this._rgb[3]], 'rgb');
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

                        var rgb = (cur_lum > lum ? test(new Color_1([0, 0, 0]), this) : test(this, new Color_1([255, 255, 255]))).rgb();
                        return new Color_1(rgb.concat([this._rgb[3]]));
                    }
                    return rgb2luminance.apply(void 0, (this._rgb).slice(0, 3));
                };


                var rgb2luminance = function (r, g, b) {
                    // relative luminance
                    // see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
                    r = luminance_x(r);
                    g = luminance_x(g);
                    b = luminance_x(b);
                    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
                };

                var luminance_x = function (x) {
                    x /= 255;
                    return x <= 0.03928 ? x / 12.92 : pow$2((x + 0.055) / 1.055, 2.4);
                };

                var interpolator = {};

                var type$h = utils.type;


                var mix = function (col1, col2, f) {
                    if (f === void 0) f = 0.5;
                    var rest = [], len = arguments.length - 3;
                    while (len-- > 0) rest[len] = arguments[len + 3];

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
                    Color_1.prototype.interpolate = function (col2, f) {
                        if (f === void 0) f = 0.5;
                        var rest = [], len = arguments.length - 2;
                        while (len-- > 0) rest[len] = arguments[len + 2];

                        return mix.apply(void 0, [this, col2, f].concat(rest));
                    };

                Color_1.prototype.premultiply = function (mutate) {
                    if (mutate === void 0) mutate = false;

                    var rgb = this._rgb;
                    var a = rgb[3];
                    if (mutate) {
                        this._rgb = [rgb[0] * a, rgb[1] * a, rgb[2] * a, a];
                        return this;
                    } else {
                        return new Color_1([rgb[0] * a, rgb[1] * a, rgb[2] * a, a], 'rgb');
                    }
                };

                Color_1.prototype.saturate = function (amount) {
                    if (amount === void 0) amount = 1;

                    var me = this;
                    var lch = me.lch();
                    lch[1] += labConstants.Kn * amount;
                    if (lch[1] < 0) { lch[1] = 0; }
                    return new Color_1(lch, 'lch').alpha(me.alpha(), true);
                };

                Color_1.prototype.desaturate = function (amount) {
                    if (amount === void 0) amount = 1;

                    return this.saturate(-amount);
                };

                var type$i = utils.type;

                Color_1.prototype.set = function (mc, value, mutate) {
                    if (mutate === void 0) mutate = false;

                    var ref = mc.split('.');
                    var mode = ref[0];
                    var channel = ref[1];
                    var src = this[mode]();
                    if (channel) {
                        var i = mode.indexOf(channel);
                        if (i > -1) {
                            if (type$i(value) == 'string') {
                                switch (value.charAt(0)) {
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
                        xyz0[0] + f * (xyz1[0] - xyz0[0]),
                        xyz0[1] + f * (xyz1[1] - xyz0[1]),
                        xyz0[2] + f * (xyz1[2] - xyz0[2]),
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
                        sqrt$2(pow$3(x1, 2) * (1 - f) + pow$3(x2, 2) * f),
                        sqrt$2(pow$3(y1, 2) * (1 - f) + pow$3(y2, 2) * f),
                        sqrt$2(pow$3(z1, 2) * (1 - f) + pow$3(z2, 2) * f),
                        'rgb'
                    )
                };

                // register interpolator
                interpolator.lrgb = lrgb;

                var lab$1 = function (col1, col2, f) {
                    var xyz0 = col1.lab();
                    var xyz1 = col2.lab();
                    return new Color_1(
                        xyz0[0] + f * (xyz1[0] - xyz0[0]),
                        xyz0[1] + f * (xyz1[1] - xyz0[1]),
                        xyz0[2] + f * (xyz1[2] - xyz0[2]),
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
                            dh = hue1 - (hue0 + 360);
                        } else if (hue1 < hue0 && hue0 - hue1 > 180) {
                            dh = hue1 + 360 - hue0;
                        } else {
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
                    lbv = lbv0 + f * (lbv1 - lbv0);
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
                    return new Color_1(c1 + f * (c2 - c1), 'num')
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
                    if (mode === void 0) mode = 'lrgb';

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
                    for (var i = 0; i < xyz.length; i++) {
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
                        for (var i = 0; i < xyz.length; i++) {
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

                    for (var i$1 = 0; i$1 < xyz.length; i$1++) {
                        if (mode.charAt(i$1) === 'h') {
                            var A$1 = atan2$1(dy / cnt[i$1], dx / cnt[i$1]) / PI$1 * 180;
                            while (A$1 < 0) { A$1 += 360; }
                            while (A$1 >= 360) { A$1 -= 360; }
                            xyz[i$1] = A$1;
                        } else {
                            xyz[i$1] = xyz[i$1] / cnt[i$1];
                        }
                    }
                    alpha /= l;
                    return (new Color_1(xyz, mode)).alpha(alpha > 0.99999 ? 1 : alpha, true);
                };


                var _average_lrgb = function (colors) {
                    var l = colors.length;
                    var f = 1 / l;
                    var xyz = [0, 0, 0, 0];
                    for (var i = 0, list = colors; i < list.length; i += 1) {
                        var col = list[i];

                        var rgb = col._rgb;
                        xyz[0] += pow$4(rgb[0], 2) * f;
                        xyz[1] += pow$4(rgb[1], 2) * f;
                        xyz[2] += pow$4(rgb[2], 2) * f;
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

                var scale = function (colors) {

                    // constructor
                    var _mode = 'rgb';
                    var _nacol = chroma_1('#ccc');
                    var _spread = 0;
                    // const _fixed = false;
                    var _domain = [0, 1];
                    var _pos = [];
                    var _padding = [0, 0];
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

                    var setColors = function (colors) {
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
                            for (var c = 0; c < colors.length; c++) {
                                colors[c] = chroma_1(colors[c]);
                            }
                            // auto-fill color position
                            _pos.length = 0;
                            for (var c$1 = 0; c$1 < colors.length; c$1++) {
                                _pos.push(c$1 / (colors.length - 1));
                            }
                        }
                        resetCache();
                        return _colors = colors;
                    };

                    var getClass = function (value) {
                        if (_classes != null) {
                            var n = _classes.length - 1;
                            var i = 0;
                            while (i < n && value >= _classes[i]) {
                                i++;
                            }
                            return i - 1;
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

                    var getColor = function (val, bypassMap) {
                        var col, t;
                        if (bypassMap == null) { bypassMap = false; }
                        if (isNaN(val) || (val === null)) { return _nacol; }
                        if (!bypassMap) {
                            if (_classes && (_classes.length > 2)) {
                                // find the class
                                var c = getClass(val);
                                t = c / (_classes.length - 2);
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
                                for (var i = 0; i < _pos.length; i++) {
                                    var p = _pos[i];
                                    if (t <= p) {
                                        col = _colors[i];
                                        break;
                                    }
                                    if ((t >= p) && (i === (_pos.length - 1))) {
                                        col = _colors[i];
                                        break;
                                    }
                                    if (t > p && t < _pos[i + 1]) {
                                        t = (t - p) / (_pos[i + 1] - p);
                                        col = chroma_1.interpolate(_colors[i], _colors[i + 1], t, _mode);
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

                    var f = function (v) {
                        var c = chroma_1(getColor(v));
                        if (_out && c[_out]) { return c[_out](); } else { return c; }
                    };

                    f.classes = function (classes) {
                        if (classes != null) {
                            if (type$j(classes) === 'array') {
                                _classes = classes;
                                _domain = [classes[0], classes[classes.length - 1]];
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


                    f.domain = function (domain) {
                        if (!arguments.length) {
                            return _domain;
                        }
                        _min = domain[0];
                        _max = domain[domain.length - 1];
                        _pos = [];
                        var k = _colors.length;
                        if ((domain.length === k) && (_min !== _max)) {
                            // update positions
                            for (var i = 0, list = Array.from(domain); i < list.length; i += 1) {
                                var d = list[i];

                                _pos.push((d - _min) / (_max - _min));
                            }
                        } else {
                            for (var c = 0; c < k; c++) {
                                _pos.push(c / (k - 1));
                            }
                        }
                        _domain = [_min, _max];
                        return f;
                    };

                    f.mode = function (_m) {
                        if (!arguments.length) {
                            return _mode;
                        }
                        _mode = _m;
                        resetCache();
                        return f;
                    };

                    f.range = function (colors, _pos) {
                        setColors(colors, _pos);
                        return f;
                    };

                    f.out = function (_o) {
                        _out = _o;
                        return f;
                    };

                    f.spread = function (val) {
                        if (!arguments.length) {
                            return _spread;
                        }
                        _spread = val;
                        return f;
                    };

                    f.correctLightness = function (v) {
                        if (v == null) { v = true; }
                        _correctLightness = v;
                        resetCache();
                        if (_correctLightness) {
                            tmap = function (t) {
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
                                    (function () {
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

                    f.padding = function (p) {
                        if (p != null) {
                            if (type$j(p) === 'number') {
                                p = [p, p];
                            }
                            _padding = p;
                            return f;
                        } else {
                            return _padding;
                        }
                    };

                    f.colors = function (numColors, out) {
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
                            result = __range__(0, numColors, false).map(function (i) { return f(dm + ((i / (numColors - 1)) * dd)); });

                        } else { // returns all colors based on the defined classes
                            colors = [];
                            var samples = [];
                            if (_classes && (_classes.length > 2)) {
                                for (var i = 1, end = _classes.length, asc = 1 <= end; asc ? i < end : i > end; asc ? i++ : i--) {
                                    samples.push((_classes[i - 1] + _classes[i]) * 0.5);
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

                    f.cache = function (c) {
                        if (c != null) {
                            _useCache = c;
                            return f;
                        } else {
                            return _useCache;
                        }
                    };

                    f.gamma = function (g) {
                        if (g != null) {
                            _gamma = g;
                            return f;
                        } else {
                            return _gamma;
                        }
                    };

                    f.nodata = function (d) {
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




                var bezier = function (colors) {
                    var assign, assign$1, assign$2;

                    var I, lab0, lab1, lab2;
                    colors = colors.map(function (c) { return new Color_1(c); });
                    if (colors.length === 2) {
                        // linear interpolation
                        (assign = colors.map(function (c) { return c.lab(); }), lab0 = assign[0], lab1 = assign[1]);
                        I = function (t) {
                            var lab = ([0, 1, 2].map(function (i) { return lab0[i] + (t * (lab1[i] - lab0[i])); }));
                            return new Color_1(lab, 'lab');
                        };
                    } else if (colors.length === 3) {
                        // quadratic bezier interpolation
                        (assign$1 = colors.map(function (c) { return c.lab(); }), lab0 = assign$1[0], lab1 = assign$1[1], lab2 = assign$1[2]);
                        I = function (t) {
                            var lab = ([0, 1, 2].map(function (i) { return ((1 - t) * (1 - t) * lab0[i]) + (2 * (1 - t) * t * lab1[i]) + (t * t * lab2[i]); }));
                            return new Color_1(lab, 'lab');
                        };
                    } else if (colors.length === 4) {
                        // cubic bezier interpolation
                        var lab3;
                        (assign$2 = colors.map(function (c) { return c.lab(); }), lab0 = assign$2[0], lab1 = assign$2[1], lab2 = assign$2[2], lab3 = assign$2[3]);
                        I = function (t) {
                            var lab = ([0, 1, 2].map(function (i) { return ((1 - t) * (1 - t) * (1 - t) * lab0[i]) + (3 * (1 - t) * (1 - t) * t * lab1[i]) + (3 * (1 - t) * t * t * lab2[i]) + (t * t * t * lab3[i]); }));
                            return new Color_1(lab, 'lab');
                        };
                    } else if (colors.length === 5) {
                        var I0 = bezier(colors.slice(0, 3));
                        var I1 = bezier(colors.slice(2, 5));
                        I = function (t) {
                            if (t < 0.5) {
                                return I0(t * 2);
                            } else {
                                return I1((t - 0.5) * 2);
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

                var blend_f = function (f) {
                    return function (bottom, top) {
                        var c0 = chroma_1(top).rgb();
                        var c1 = chroma_1(bottom).rgb();
                        return chroma_1.rgb(f(c0, c1));
                    };
                };

                var each = function (f) {
                    return function (c0, c1) {
                        var out = [];
                        out[0] = f(c0[0], c1[0]);
                        out[1] = f(c0[1], c1[1]);
                        out[2] = f(c0[2], c1[2]);
                        return out;
                    };
                };

                var normal = function (a) { return a; };
                var multiply = function (a, b) { return a * b / 255; };
                var darken$1 = function (a, b) { return a > b ? b : a; };
                var lighten = function (a, b) { return a > b ? a : b; };
                var screen = function (a, b) { return 255 * (1 - (1 - a / 255) * (1 - b / 255)); };
                var overlay = function (a, b) { return b < 128 ? 2 * a * b / 255 : 255 * (1 - 2 * (1 - a / 255) * (1 - b / 255)); };
                var burn = function (a, b) { return 255 * (1 - (1 - b / 255) / (a / 255)); };
                var dodge = function (a, b) {
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


                var cubehelix = function (start, rotations, hue, gamma, lightness) {
                    if (start === void 0) start = 300;
                    if (rotations === void 0) rotations = -1.5;
                    if (hue === void 0) hue = 1;
                    if (gamma === void 0) gamma = 1;
                    if (lightness === void 0) lightness = [0, 1];

                    var dh = 0, dl;
                    if (type$k(lightness) === 'array') {
                        dl = lightness[1] - lightness[0];
                    } else {
                        dl = 0;
                        lightness = [lightness, lightness];
                    }

                    var f = function (fract) {
                        var a = TWOPI$2 * (((start + 120) / 360) + (rotations * fract));
                        var l = pow$6(lightness[0] + (dl * fract), gamma);
                        var h = dh !== 0 ? hue[0] + (fract * dh) : hue;
                        var amp = (h * l * (1 - l)) / 2;
                        var cos_a = cos$3(a);
                        var sin_a = sin$2(a);
                        var r = l + (amp * ((-0.14861 * cos_a) + (1.78277 * sin_a)));
                        var g = l + (amp * ((-0.29227 * cos_a) - (0.90649 * sin_a)));
                        var b = l + (amp * (+1.97294 * cos_a));
                        return chroma_1(clip_rgb$3([r * 255, g * 255, b * 255, 1]));
                    };

                    f.start = function (s) {
                        if ((s == null)) { return start; }
                        start = s;
                        return f;
                    };

                    f.rotations = function (r) {
                        if ((r == null)) { return rotations; }
                        rotations = r;
                        return f;
                    };

                    f.gamma = function (g) {
                        if ((g == null)) { return gamma; }
                        gamma = g;
                        return f;
                    };

                    f.hue = function (h) {
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

                    f.lightness = function (h) {
                        if ((h == null)) { return lightness; }
                        if (type$k(h) === 'array') {
                            lightness = h;
                            dl = h[1] - h[0];
                        } else {
                            lightness = [h, h];
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
                    for (var i = 0; i < 6; i++) {
                        code += digits.charAt(floor$2(random() * 16));
                    }
                    return new Color_1(code, 'hex');
                };

                var log$1 = Math.log;
                var pow$7 = Math.pow;
                var floor$3 = Math.floor;
                var abs = Math.abs;


                var analyze = function (data, key) {
                    if (key === void 0) key = null;

                    var r = {
                        min: Number.MAX_VALUE,
                        max: Number.MAX_VALUE * -1,
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
                    if (mode === void 0) mode = 'equal';
                    if (num === void 0) num = 7;

                    if (type(data) == 'array') {
                        data = analyze(data);
                    }
                    var min = data.min;
                    var max = data.max;
                    var values = data.values.sort(function (a, b) { return a - b; });

                    if (num === 1) { return [min, max]; }

                    var limits = [];

                    if (mode.substr(0, 1) === 'c') { // continuous
                        limits.push(min);
                        limits.push(max);
                    }

                    if (mode.substr(0, 1) === 'e') { // equal interval
                        limits.push(min);
                        for (var i = 1; i < num; i++) {
                            limits.push(min + ((i / num) * (max - min)));
                        }
                        limits.push(max);
                    }

                    else if (mode.substr(0, 1) === 'l') { // log scale
                        if (min <= 0) {
                            throw new Error('Logarithmic scales are only possible for values > 0');
                        }
                        var min_log = Math.LOG10E * log$1(min);
                        var max_log = Math.LOG10E * log$1(max);
                        limits.push(min);
                        for (var i$1 = 1; i$1 < num; i$1++) {
                            limits.push(pow$7(10, min_log + ((i$1 / num) * (max_log - min_log))));
                        }
                        limits.push(max);
                    }

                    else if (mode.substr(0, 1) === 'q') { // quantile scale
                        limits.push(min);
                        for (var i$2 = 1; i$2 < num; i$2++) {
                            var p = ((values.length - 1) * i$2) / num;
                            var pb = floor$3(p);
                            if (pb === p) {
                                limits.push(values[pb]);
                            } else { // p > pb
                                var pr = p - pb;
                                limits.push((values[pb] * (1 - pr)) + (values[pb + 1] * pr));
                            }
                        }
                        limits.push(max);

                    }

                    else if (mode.substr(0, 1) === 'k') { // k-means clustering
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
                        for (var i$3 = 1; i$3 < num; i$3++) {
                            centroids.push(min + ((i$3 / num) * (max - min)));
                        }
                        centroids.push(max);

                        while (repeat) {
                            // assignment step
                            for (var j = 0; j < num; j++) {
                                clusterSizes[j] = 0;
                            }
                            for (var i$4 = 0; i$4 < n; i$4++) {
                                var value = values[i$4];
                                var mindist = Number.MAX_VALUE;
                                var best = (void 0);
                                for (var j$1 = 0; j$1 < num; j$1++) {
                                    var dist = abs(centroids[j$1] - value);
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
                            for (var j$2 = 0; j$2 < num; j$2++) {
                                newCentroids[j$2] = null;
                            }
                            for (var i$5 = 0; i$5 < n; i$5++) {
                                cluster = assignments[i$5];
                                if (newCentroids[cluster] === null) {
                                    newCentroids[cluster] = values[i$5];
                                } else {
                                    newCentroids[cluster] += values[i$5];
                                }
                            }
                            for (var j$3 = 0; j$3 < num; j$3++) {
                                newCentroids[j$3] *= 1 / clusterSizes[j$3];
                            }

                            // check convergence
                            repeat = false;
                            for (var j$4 = 0; j$4 < num; j$4++) {
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
                        for (var j$5 = 0; j$5 < num; j$5++) {
                            kClusters[j$5] = [];
                        }
                        for (var i$6 = 0; i$6 < n; i$6++) {
                            cluster = assignments[i$6];
                            kClusters[cluster].push(values[i$6]);
                        }
                        var tmpKMeansBreaks = [];
                        for (var j$6 = 0; j$6 < num; j$6++) {
                            tmpKMeansBreaks.push(kClusters[j$6][0]);
                            tmpKMeansBreaks.push(kClusters[j$6][kClusters[j$6].length - 1]);
                        }
                        tmpKMeansBreaks = tmpKMeansBreaks.sort(function (a, b) { return a - b; });
                        limits.push(tmpKMeansBreaks[0]);
                        for (var i$7 = 1; i$7 < tmpKMeansBreaks.length; i$7 += 2) {
                            var v = tmpKMeansBreaks[i$7];
                            if (!isNaN(v) && (limits.indexOf(v) === -1)) {
                                limits.push(v);
                            }
                        }
                    }
                    return limits;
                };

                var analyze_1 = { analyze: analyze, limits: limits };

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

                var deltaE = function (a, b, L, C) {
                    if (L === void 0) L = 1;
                    if (C === void 0) C = 1;

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
                var distance = function (a, b, mode) {
                    if (mode === void 0) mode = 'lab';

                    // Delta E (CIE 1976)
                    // see http://www.brucelindbloom.com/index.html?Equations.html
                    a = new Color_1(a);
                    b = new Color_1(b);
                    var l1 = a.get(mode);
                    var l2 = b.get(mode);
                    var sum_sq = 0;
                    for (var i in l1) {
                        var d = (l1[i] || 0) - (l2[i] || 0);
                        sum_sq += d * d;
                    }
                    return Math.sqrt(sum_sq);
                };

                var valid = function () {
                    var args = [], len = arguments.length;
                    while (len--) args[len] = arguments[len];

                    try {
                        new (Function.prototype.bind.apply(Color_1, [null].concat(args)));
                        return true;
                    } catch (e) {
                        return false;
                    }
                };

                // some pre-defined color scales:




                var scales = {
                    cool: function cool() { return scale([chroma_1.hsl(180, 1, .9), chroma_1.hsl(250, .7, .4)]) },
                    hot: function hot() { return scale(['#000', '#f00', '#ff0', '#fff'], [0, .25, .75, 1]).mode('rgb') }
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


            /***/
        })

    /******/
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY2xhc3MudHMiLCJ3ZWJwYWNrOi8vLy4vY29uc3QudHMiLCJ3ZWJwYWNrOi8vLy4vbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY2hyb21hLWpzL2Nocm9tYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsRkEsK0RBQTJEO0FBRTNEO0lBQUE7SUFBaUIsQ0FBQztJQUFELFFBQUM7QUFBRCxDQUFDO0FBQUwsY0FBQztBQUVkO0lBSUk7Ozs7Ozs7T0FPRztJQUNILGFBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQVUsS0FBUztRQUFULGlDQUFTO1FBQVQsVUFBSyxHQUFMLEtBQUssQ0FBSTtRQVN0QyxPQUFFLEdBQUcsVUFBVSxDQUFDO1lBQ1osT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQy9KLENBQUM7UUFWRyxZQUFZLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsQyxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUM7UUFDL0IsU0FBUztRQUNULElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUNWLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUNkLENBQUM7SUFLTCxVQUFDO0FBQUQsQ0FBQztBQXhCWSxrQkFBRztBQTBCaEI7Ozs7Ozs7O0dBUUc7QUFDSCxTQUFTLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDekIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUMxQixNQUFNLElBQUksVUFBVSxDQUFDLENBQUMsR0FBRyxPQUFPLEdBQUcsQ0FBQyxHQUFHLHdCQUF3QixHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzdFLENBQUM7QUFHRCxTQUFTLEVBQUUsQ0FBQyxRQUFhLEVBQUUsWUFBeUM7SUFBekMsOENBQW9CLDZCQUFxQjtJQUNoRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQy9DLE1BQU0sS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDM0MsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7UUFDbkYsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3BCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDMUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNsRCxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2hFLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDZixDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFDeEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ2hELENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlELENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JCLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNmLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDO1lBQzlLLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDOUksQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3ZNLElBQUksS0FBSyxHQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM1VixLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUs7Z0JBQ25CLENBQUMsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ2I7SUFDTCxPQUFPO1FBQ0gsRUFBRSxFQUFFLENBQUM7UUFDTCxFQUFFLEVBQUUsQ0FBQztLQUNSO0FBQ0wsQ0FBQztBQUNELElBQUksRUFBRSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUM7SUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDeEMsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0FBQy9CLENBQUMsQ0FBQztBQUNGLG1CQUFtQjtBQUNuQixTQUFTLE9BQU8sQ0FBQyxDQUFDO0lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFDVixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFDZCxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDYixDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUM7SUFDcEQsT0FBTyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLFFBQVEsR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLEdBQUcsUUFBUSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUM5TCxDQUFDO0FBQ0QsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNSLE9BQU8sTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxLQUFLLEVBQUUsR0FBRyxDQUFDO0FBQ3RFLENBQUM7QUFDRCxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ1IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFDUixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtBQUNuRSxDQUFDO0FBR0QsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNSLElBQUksQ0FBQyxHQUFHLDZCQUFxQjtJQUM3QixJQUFJLENBQUMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQ1osQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDbkIsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNqQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFDZCxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUNULENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQ1QsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN2QixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUNiLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFDakIsQ0FBQyxHQUFHLFVBQUUsQ0FBQyxLQUFLLENBQUMsRUFDYixDQUFDLEdBQUcsVUFBRSxDQUFDLEtBQUssQ0FBQyxFQUNiLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDZCxPQUFPLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ1AsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUM7Z0JBQzdCLENBQUMsQ0FBQztRQUNWLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNuQixDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNsSCxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQztRQUMxQixDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDO1FBQ3pCLENBQUMsR0FBRyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQy9CLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQyxHQUFHLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDaEMsT0FBTyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxHQUFHLE9BQU8sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLENBQUMsR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDNU0sQ0FBQyxDQUFDO0FBQ04sQ0FBQztBQUNELFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDVCxPQUFPLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVB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SUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQztJQUNuRCxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFDRCxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsRUFDSCxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxRQUFRLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDbkIsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNQLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxNQUFNO1FBQ1YsS0FBSyxDQUFDO1lBQ0YsQ0FBQyxJQUFJLENBQUM7Z0JBQ0YsQ0FBQyxJQUFJLENBQUM7S0FDakI7SUFDRCxPQUFPLElBQUksR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNULElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDbEMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFDcEMsQ0FBQyxHQUFHLENBQUMsRUFDTCxDQUFDLEdBQUcsQ0FBQyxFQUNMLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFNBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDeEwsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RixDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzlCLE9BQU8sSUFBSSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQztBQUNwQyxDQUFDO0FBRUQsU0FBUyxFQUFFLENBQUMsQ0FBQztJQUNULElBQUksQ0FBQyxHQUFHLEVBQUUsRUFDSixDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNULEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRTtRQUN4QyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDWCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNULENBQUMsQ0FB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V0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxnQkFBZ0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxrQkFBa0IsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsZ0JBQWdCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGlCQUFpQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxrQkFBa0IsRUFBRSxrQkFBa0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGtCQUFrQixFQUFFLGtCQUFrQixFQUFFLGlCQUFpQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsaUJBQWlCLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxvQkFBb0IsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLHFCQUFxQixFQUFFLG9CQUFvQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQyxFQUFFLElBQUksV0FBRyxDQUFDLGlCQUFpQixFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLG9CQUFvQixFQUFFLHFCQUFxQixDQUFDLEVBQUUsSUFBSSxXQUFHLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGdCQUFnQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsa0JBQWtCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGtCQUFrQixFQUFFLENBQUMsaUJBQWlCLENBQUMsRUFBRSxJQUFJLFdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsa0JBQWtCLENBQUMs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QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxhQUFhO0FBQ2pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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QTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7Ozs7O0FBS0E7QUFDQSw0QkFBNEIsa0VBQWtFO0FBQzlGLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdEQUF3RCxxQkFBcUI7QUFDN0U7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7OztBQVdBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9tYWluLnRzXCIpO1xuIiwiaW1wb3J0IHsgQlVJTFRJTl9MQUJDT0xPUl9MSVNULCBDYiwgRGIsIE8gfSBmcm9tICcuL2NvbnN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBWIHsgfVxyXG5cclxuZXhwb3J0IGNsYXNzIExhYiB7XHJcbiAgICBiXHJcbiAgICBpXHJcbiAgICBqXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAYXV0aG9yIGN5aWFcclxuICAgICAqIEBkYXRlIDIwMTktMDUtMDZcclxuICAgICAqIEBwYXJhbSBsIOS6ruW6plxyXG4gICAgICogQHBhcmFtIGEg5LuO57u/6Imy5Yiw57qi6Imy55qE5YiG6YePIFxyXG4gICAgICogQHBhcmFtIGIg5LuO6JOd6Imy5Yiw6buE6Imy55qE5YiG6YePXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGwsIGEsIGIsIHByaXZhdGUgYWxwaGEgPSAxKSB7XHJcbiAgICAgICAgY29tcGFyZVZhbHVlKGwsIDEwMCwgXCJsaWdodG5lc3NcIik7XHJcbiAgICAgICAgY29tcGFyZVZhbHVlKGFscGhhLCAxLCBcImFscGhhXCIpXHJcbiAgICAgICAgLy9kb2PmmoLml7blhbzlrrlcclxuICAgICAgICB0aGlzLmIgPSBsXHJcbiAgICAgICAgdGhpcy5pID0gYVxyXG4gICAgICAgIHRoaXMuaiA9IGJcclxuICAgIH1cclxuXHJcbiAgICBrYSA9IGZ1bmN0aW9uIChhKSB7XHJcbiAgICAgICAgcmV0dXJuIDFFLTQgPiBNYXRoLmFicyh0aGlzLmIgLSBhLmIpICYmIDFFLTQgPiBNYXRoLmFicyh0aGlzLmkgLSBhLmkpICYmIDFFLTQgPiBNYXRoLmFicyh0aGlzLmogLSBhLmopICYmIE1hdGguYWJzKHRoaXMuYWxwaGEgLSBhLmFscGhhKSA8IE1hdGgucG93KDIsIC0xNilcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIOeUqOadpemqjOivgeaYr+WQpui2hei/h+iMg+WbtFxyXG4gKlxyXG4gKiBAYXV0aG9yIGN5aWFcclxuICogQGRhdGUgMjAxOS0wNS0wNlxyXG4gKiBAcGFyYW0gYSBcclxuICogQHBhcmFtIGIg5pyA5aSn5YC8XHJcbiAqIEBwYXJhbSBjXHJcbiAqL1xyXG5mdW5jdGlvbiBjb21wYXJlVmFsdWUoYSwgYiwgYykge1xyXG4gICAgaWYgKGlzTmFOKGEpIHx8IDAgPiBhIHx8IGEgPiBiKVxyXG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGEgKyBcIiBmb3IgXCIgKyBjICsgXCIgaXMgbm90IGJldHdlZW4gMCBhbmQgXCIgKyBiKTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFFiKGxhYkNvbG9yOiBMYWIsIGxhYkNvbG9yTGlzdDogYW55ID0gQlVJTFRJTl9MQUJDT0xPUl9MSVNUKSB7XHJcbiAgICBpZiAoIWxhYkNvbG9yTGlzdC5sZW5ndGggfHwgIWxhYkNvbG9yTGlzdFswXS5sZW5ndGgpXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGdvbGRlbiBwYWxldHRlc1wiKTtcclxuICAgIGZvciAodmFyIGMgPSBJbmZpbml0eSwgZCA9IGxhYkNvbG9yTGlzdFswXSwgZSA9IC0xLCBnID0gMDsgZyA8IGxhYkNvbG9yTGlzdC5sZW5ndGg7IGcrKylcclxuICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGxhYkNvbG9yTGlzdFtnXS5sZW5ndGggJiYgMCA8IGM7IGgrKykge1xyXG4gICAgICAgICAgICB2YXIgayA9IGxhYkNvbG9yTGlzdFtnXVtoXVxyXG4gICAgICAgICAgICAgICAgLCBsID0gKGsuYiArIGxhYkNvbG9yLmIpIC8gMlxyXG4gICAgICAgICAgICAgICAgLCBtID0gTWF0aC5zcXJ0KE1hdGgucG93KGsuaSwgMikgKyBNYXRoLnBvdyhrLmosIDIpKVxyXG4gICAgICAgICAgICAgICAgLCBxID0gTWF0aC5zcXJ0KE1hdGgucG93KGxhYkNvbG9yLmksIDIpICsgTWF0aC5wb3cobGFiQ29sb3IuaiwgMikpXHJcbiAgICAgICAgICAgICAgICAsIHQgPSAobSArIHEpIC8gMjtcclxuICAgICAgICAgICAgdCA9IC41ICogKDEgLSBNYXRoLnNxcnQoTWF0aC5wb3codCwgNykgLyAoTWF0aC5wb3codCwgNykgKyBNYXRoLnBvdygyNSwgNykpKSk7XHJcbiAgICAgICAgICAgIHZhciBuID0gay5pICogKDEgKyB0KVxyXG4gICAgICAgICAgICAgICAgLCByID0gbGFiQ29sb3IuaSAqICgxICsgdClcclxuICAgICAgICAgICAgICAgICwgTiA9IE1hdGguc3FydChNYXRoLnBvdyhuLCAyKSArIE1hdGgucG93KGsuaiwgMikpXHJcbiAgICAgICAgICAgICAgICAsIEggPSBNYXRoLnNxcnQoTWF0aC5wb3cociwgMikgKyBNYXRoLnBvdyhsYWJDb2xvci5qLCAyKSk7XHJcbiAgICAgICAgICAgIHQgPSBIIC0gTjtcclxuICAgICAgICAgICAgdmFyIGphID0gKE4gKyBIKSAvIDI7XHJcbiAgICAgICAgICAgIG4gPSBBYihrLmosIG4pO1xyXG4gICAgICAgICAgICByID0gQWIobGFiQ29sb3Iuaiwgcik7XHJcbiAgICAgICAgICAgIE4gPSAyICogTWF0aC5zcXJ0KE4gKiBIKSAqIE1hdGguc2luKCgxRS00ID4gTWF0aC5hYnMobSkgfHwgMUUtNCA+IE1hdGguYWJzKHEpID8gMCA6IDE4MCA+PSBNYXRoLmFicyhyIC0gbikgPyByIC0gbiA6IHIgPD0gbiA/IHIgLSBuICsgMzYwIDogciAtIG4gLSAzNjApIC8gMiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgICBtID0gMUUtNCA+IE1hdGguYWJzKG0pIHx8IDFFLTQgPiBNYXRoLmFicyhxKSA/IDAgOiAxODAgPj0gTWF0aC5hYnMociAtIG4pID8gKG4gKyByKSAvIDIgOiAzNjAgPiBuICsgciA/IChuICsgciArIDM2MCkgLyAyIDogKG4gKyByIC0gMzYwKSAvIDI7XHJcbiAgICAgICAgICAgIHEgPSAxICsgLjA0NSAqIGphO1xyXG4gICAgICAgICAgICBIID0gMSArIC4wMTUgKiBqYSAqICgxIC0gLjE3ICogTWF0aC5jb3MoKG0gLSAzMCkgKiBNYXRoLlBJIC8gMTgwKSArIC4yNCAqIE1hdGguY29zKDIgKiBtICogTWF0aC5QSSAvIDE4MCkgKyAuMzIgKiBNYXRoLmNvcygoMyAqIG0gKyA2KSAqIE1hdGguUEkgLyAxODApIC0gLjIgKiBNYXRoLmNvcygoNCAqIG0gLSA2MykgKiBNYXRoLlBJIC8gMTgwKSk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wMSA9XHJcbiAgICAgICAgICAgICAgICBNYXRoLnNxcnQoTWF0aC5wb3coKGxhYkNvbG9yLmIgLSBrLmIpIC8gKDEgKyAuMDE1ICogTWF0aC5wb3cobCAtIDUwLCAyKSAvIE1hdGguc3FydCgyMCArIE1hdGgucG93KGwgLSA1MCwgMikpKSwgMikgKyBNYXRoLnBvdyh0IC8gKDEgKiBxKSwgMikgKyBNYXRoLnBvdyhOIC8gKDEgKiBIKSwgMikgKyB0IC8gKDEgKiBxKSAqIE1hdGguc3FydChNYXRoLnBvdyhqYSwgNykgLyAoTWF0aC5wb3coamEsIDcpICsgTWF0aC5wb3coMjUsIDcpKSkgKiBNYXRoLnNpbig2MCAqIE1hdGguZXhwKC1NYXRoLnBvdygobSAtIDI3NSkgLyAyNSwgMikpICogTWF0aC5QSSAvIDE4MCkgKiAtMiAqIChOIC8gKDEgKiBIKSkpO1xyXG4gICAgICAgICAgICB0ZW1wMSA8IGMgJiYgKGMgPSB0ZW1wMSxcclxuICAgICAgICAgICAgICAgIGQgPSBsYWJDb2xvckxpc3RbZ10sXHJcbiAgICAgICAgICAgICAgICBlID0gaClcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZjOiBkLFxyXG4gICAgICAgIGVjOiBlXHJcbiAgICB9XHJcbn1cclxudmFyIEFiID0gZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgIGlmICgxRS00ID4gTWF0aC5hYnMoYSkgJiYgMUUtNCA+IE1hdGguYWJzKGIpKVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgYSA9IDE4MCAqIE1hdGguYXRhbjIoYSwgYikgLyBNYXRoLlBJO1xyXG4gICAgcmV0dXJuIDAgPD0gYSA/IGEgOiBhICsgMzYwXHJcbn07XHJcbi8qKnJnYuminOiJsui9rOaNouS4umxhYuminOiJsiAqL1xyXG5mdW5jdGlvbiByZ2IybGFiKGEpIHtcclxuICAgIHZhciBiID0gUihhLnJlZClcclxuICAgICAgICAsIGMgPSBSKGEuZ3JlZW4pXHJcbiAgICAgICAgLCBkID0gUihhLmJsdWUpXHJcbiAgICAgICAgLCBlID0gLjIxMjY3MjkgKiBiICsgLjcxNTE1MjIgKiBjICsgLjA3MjE3NSAqIGQ7XHJcbiAgICByZXR1cm4gbmV3IExhYigxMTYgKiBXKGUpIC0gMTYsIDUwMCAqIChXKCguNDEyNDU2NCAqIGIgKyAuMzU3NTc2MSAqIGMgKyAuMTgwNDM3NSAqIGQpIC8gLjk1MDQ3KSAtIFcoZSkpLCAyMDAgKiAoVyhlKSAtIFcoKC4wMTkzMzM5ICogYiArIC4xMTkxOTIgKiBjICsgLjk1MDMwNDEgKiBkKSAvIDEuMDg4ODMpKSwgYS5hbHBoYSlcclxufVxyXG5mdW5jdGlvbiBSKGEpIHtcclxuICAgIHJldHVybiAuMDQwNDUgPj0gYSA/IGEgLyAxMi45MiA6IE1hdGgucG93KChhICsgLjA1NSkgLyAxLjA1NSwgMi40KVxyXG59XHJcbmZ1bmN0aW9uIFcoYSkge1xyXG4gICAgdmFyIGIgPSA2IC8gMjlcclxuICAgICAgICAsIGMgPSAxIC8gKDMgKiBNYXRoLnBvdyhiLCAyKSk7XHJcbiAgICByZXR1cm4gYSA+IE1hdGgucG93KGIsIDMpID8gTWF0aC5wb3coYSwgMSAvIDMpIDogYyAqIGEgKyA0IC8gMjlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIFgoYSkge1xyXG4gICAgdmFyIGIgPSBCVUlMVElOX0xBQkNPTE9SX0xJU1RcclxuICAgIHZhciBjID0gcmdiMmxhYihhKVxyXG4gICAgICAgICwgZCA9IFFiKGMsIGIpO1xyXG4gICAgbGV0IHRlbXAxID0gZC5mYztcclxuICAgIGxldCB0ZW1wMiA9IGQuZWM7XHJcbiAgICB2YXIgZSA9IHRlbXAxW3RlbXAyXVxyXG4gICAgICAgICwgZyA9IHhiKGUpXHJcbiAgICAgICAgLCBoID0geGIoYylcclxuICAgICAgICAsIGsgPSAzMCA+IHhiKHRlbXAxWzVdKS52XHJcbiAgICAgICAgLCBsID0gZy5iIC0gaC5iXHJcbiAgICAgICAgLCBtID0gZy52IC0gaC52XHJcbiAgICAgICAgLCBxID0gZy5odWUgLSBoLmh1ZVxyXG4gICAgICAgICwgdCA9IENiW3RlbXAyXVxyXG4gICAgICAgICwgbiA9IERiW3RlbXAyXVxyXG4gICAgICAgICwgciA9IDEwMDtcclxuICAgIHJldHVybiB0ZW1wMS5tYXAoZnVuY3Rpb24gKGIsIGMpIHtcclxuICAgICAgICBpZiAoYiA9PT0gZSlcclxuICAgICAgICAgICAgcmV0dXJuIHIgPSBNYXRoLm1heChoLmIgLSAxLjcsIDApLFxyXG4gICAgICAgICAgICAgICAgYTtcclxuICAgICAgICBiID0geGIoYik7XHJcbiAgICAgICAgdmFyIGQgPSBiLmIgLSBDYltjXSAvIHQgKiBsO1xyXG4gICAgICAgIGQgPSBNYXRoLm1pbihkLCByKTtcclxuICAgICAgICBjID0gbmV3IHdiKEEoZCwgMCwgMTAwKSwgTWF0aC5tYXgoMCwgayA/IGIudiAtIG0gOiBiLnYgLSBtICogTWF0aC5taW4oRGJbY10gLyBuLCAxLjI1KSksIChiLmh1ZSAtIHEgKyAzNjApICUgMzYwKTtcclxuICAgICAgICByID0gTWF0aC5tYXgoYy5iIC0gMS43LCAwKTtcclxuICAgICAgICBiID0gYy5odWUgKiBNYXRoLlBJIC8gMTgwO1xyXG4gICAgICAgIGMgPSBuZXcgTGFiKGMuYiwgYy52ICogTWF0aC5jb3MoYiksIGMudiAqIE1hdGguc2luKGIpLCBjLmFscGhhKTtcclxuICAgICAgICB2YXIgZyA9IChjLmIgKyAxNikgLyAxMTY7XHJcbiAgICAgICAgYiA9IC45NTA0NyAqIHpiKGcgKyBjLmkgLyA1MDApO1xyXG4gICAgICAgIGQgPSAxICogemIoZyk7XHJcbiAgICAgICAgZyA9IDEuMDg4ODMgKiB6YihnIC0gYy5qIC8gMjAwKTtcclxuICAgICAgICByZXR1cm4gbmV3IHJnYihBKHliKDMuMjQwNDU0MiAqIGIgKyAtMS41MzcxMzg1ICogZCArIC0uNDk4NTMxNCAqIGcpLCAwLCAxKSwgQSh5YigtLjk2OTI2NiAqIGIgKyAxLjg3NjAxMDggKiBkICsgLjA0MTU1NiAqIGcpLCAwLCAxKSwgQSh5YiguMDU1NjQzNCAqIGIgKyAtLjIwNDAyNTkgKiBkICsgMS4wNTcyMjUyICogZyksIDAsIDEpLCBjLmFscGhhKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiB4YihhKSB7XHJcbiAgICByZXR1cm4gbmV3IHdiKGEuYiwgTWF0aC5zcXJ0KE1hdGgucG93KGEuaSwgMikgKyBNYXRoLnBvdyhhLmosIDIpKSwgKDE4MCAqIE1hdGguYXRhbjIoYS5qLCBhLmkpIC8gTWF0aC5QSSArIDM2MCkgJSAzNjAsIGEuYWxwaGEpXHJcbn07XHJcblxyXG5mdW5jdGlvbiB3YihhLCBiLCBjLCBkID0gMSkge1xyXG4gICAgZCA9IHZvaWQgMCA9PT0gZCA/IDEgOiBkO1xyXG4gICAgdGhpcy5iID0gYTtcclxuICAgIHRoaXMudiA9IGI7XHJcbiAgICB0aGlzLmh1ZSA9IGM7XHJcbiAgICB0aGlzLmFscGhhID0gZDtcclxuICAgIGNvbXBhcmVWYWx1ZShhLCBOdW1iZXIuTUFYX1ZBTFVFLCBcImxpZ2h0bmVzc1wiKTtcclxuICAgIGNvbXBhcmVWYWx1ZShiLCBOdW1iZXIuTUFYX1ZBTFVFLCBcImNocm9tYVwiKTtcclxuICAgIGNvbXBhcmVWYWx1ZShjLCAzNjAsIFwiaHVlXCIpO1xyXG4gICAgY29tcGFyZVZhbHVlKGQsIDEsIFwiYWxwaGFcIilcclxufTtcclxuXHJcbi8qKlxyXG4gKiBhLGLkuK3nmoTmnIDlpKflgLzlkoxj55u45q+U55qE5pyA5bCP5YC8XHJcbiAqXHJcbiAqIEBhdXRob3IgY3lpYVxyXG4gKiBAZGF0ZSAyMDE5LTA1LTA2XHJcbiAqIEBwYXJhbSBhXHJcbiAqIEBwYXJhbSBiXHJcbiAqIEBwYXJhbSBjXHJcbiAqIEByZXR1cm5zXHJcbiAqL1xyXG5mdW5jdGlvbiBBKGEsIGIsIGMpIHtcclxuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChhLCBiKSwgYylcclxufTtcclxuZnVuY3Rpb24gemIoYSkge1xyXG4gICAgdmFyIGIgPSA2IC8gMjlcclxuICAgICAgICAsIGMgPSAzICogTWF0aC5wb3coYiwgMik7XHJcbiAgICByZXR1cm4gYSA+IGIgPyBNYXRoLnBvdyhhLCAzKSA6IGMgKiAoYSAtIDQgLyAyOSlcclxufVxyXG5mdW5jdGlvbiB5YihhKSB7XHJcbiAgICByZXR1cm4gLjAwMzEzMDggPj0gYSA/IDEyLjkyICogYSA6IDEuMDU1ICogTWF0aC5wb3coYSwgMSAvIDIuNCkgLSAuMDU1XHJcbn1cclxuZnVuY3Rpb24gcmdiKGEsIGIsIGMsIGQpIHtcclxuICAgIGQgPSB2b2lkIDAgPT09IGQgPyAxIDogZDtcclxuICAgIHRoaXMucmVkID0gYTtcclxuICAgIHRoaXMuZ3JlZW4gPSBiO1xyXG4gICAgdGhpcy5ibHVlID0gYztcclxuICAgIHRoaXMuYWxwaGEgPSBkO1xyXG4gICAgY29tcGFyZVZhbHVlKGEsIDEsIFwicmVkXCIpO1xyXG4gICAgY29tcGFyZVZhbHVlKGIsIDEsIFwiZ3JlZW5cIik7XHJcbiAgICBjb21wYXJlVmFsdWUoYywgMSwgXCJibHVlXCIpO1xyXG4gICAgY29tcGFyZVZhbHVlKGQsIDEsIFwiYWxwaGFcIilcclxufTtcclxuLyoq5Li75YWl5Y+jICovXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWluKCAvKipyZ2LpopzoibIgKi9iKSB7XHJcbiAgICB2YXIgYyA9IFtdO1xyXG4gICAgYy5wdXNoKFtYKGIpXSk7XHJcbiAgICB2YXIgZCA9IGxiKHJiKGIpLnJvdGF0ZSgxODApKTtcclxuICAgIGMucHVzaChbWChkKV0pO1xyXG4gICAgZCA9IHJiKGIpO1xyXG4gICAgZCA9IFtkLnJvdGF0ZSgtMzApLCBkLnJvdGF0ZSgzMCldO1xyXG4gICAgZCA9IGJkKGQpO1xyXG4gICAgYy5wdXNoKGQueWIpO1xyXG4gICAgYiA9IHJiKGIpO1xyXG4gICAgYiA9IFtiLnJvdGF0ZSg2MCksIGIucm90YXRlKDEyMCldO1xyXG4gICAgYiA9IGJkKGIpO1xyXG4gICAgYy5wdXNoKGIueWIpO1xyXG4gICAgcmV0dXJuIGNcclxufVxyXG5mdW5jdGlvbiBsYihhKSB7XHJcbiAgICB2YXIgYiA9ICgxIC0gTWF0aC5hYnMoMiAqIGEuYiAtIDEpKSAqIGEuc2F0dXJhdGlvbjtcclxuICAgIHJldHVybiBrYihhLmh1ZSwgYS5hbHBoYSwgYiwgTWF0aC5tYXgoMCwgYS5iIC0gYiAvIDIpKVxyXG59XHJcbmZ1bmN0aW9uIGtiKGEsIGIsIGMsIGQpIHtcclxuICAgIHZhciBlID0gZFxyXG4gICAgICAgICwgZyA9IGQ7XHJcbiAgICBhID0gYSAlIDM2MCAvIDYwO1xyXG4gICAgdmFyIGggPSBjICogKDEgLSBNYXRoLmFicyhhICUgMiAtIDEpKTtcclxuICAgIHN3aXRjaCAoTWF0aC5mbG9vcihhKSkge1xyXG4gICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgZSArPSBjO1xyXG4gICAgICAgICAgICBnICs9IGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgZSArPSBoO1xyXG4gICAgICAgICAgICBnICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgZyArPSBjO1xyXG4gICAgICAgICAgICBkICs9IGg7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgZyArPSBoO1xyXG4gICAgICAgICAgICBkICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgICAgZSArPSBoO1xyXG4gICAgICAgICAgICBkICs9IGM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgICAgZSArPSBjLFxyXG4gICAgICAgICAgICAgICAgZCArPSBoXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IHJnYihlLCBnLCBkLCBiKVxyXG59XHJcblxyXG5mdW5jdGlvbiByYihhKSB7XHJcbiAgICB2YXIgYiA9IE1hdGgubWF4KGEucmVkLCBhLmdyZWVuLCBhLmJsdWUpXHJcbiAgICAgICAgLCBjID0gTWF0aC5taW4oYS5yZWQsIGEuZ3JlZW4sIGEuYmx1ZSlcclxuICAgICAgICAsIGQgPSAwXHJcbiAgICAgICAgLCBlID0gMFxyXG4gICAgICAgICwgZyA9IEEoLjUgKiAoYiArIGMpLCAwLCAxKTtcclxuICAgIGIgLSBjID4gTyAmJiAoYiA9PT0gYS5yZWQgPyBkID0gNjAgKiAoYS5ncmVlbiAtIGEuYmx1ZSkgLyAoYiAtIGMpIDogYiA9PT0gYS5ncmVlbiA/IGQgPSA2MCAqIChhLmJsdWUgLSBhLnJlZCkgLyAoYiAtIGMpICsgMTIwIDogYiA9PT0gYS5ibHVlICYmIChkID0gNjAgKiAoYS5yZWQgLSBhLmdyZWVuKSAvIChiIC0gYykgKyAyNDApLFxyXG4gICAgICAgIGUgPSAwIDwgZyAmJiAuNSA+PSBnID8gQSgoYiAtIGMpIC8gKDIgKiBnKSwgMCwgMSkgOiBBKChiIC0gYykgLyAoMiAtIDIgKiBnKSwgMCwgMSkpO1xyXG4gICAgZCA9IE1hdGgucm91bmQoZCArIDM2MCkgJSAzNjA7XHJcbiAgICByZXR1cm4gbmV3IGhzbChkLCBlLCBnLCBhLmFscGhhKVxyXG59XHJcblxyXG5mdW5jdGlvbiBiZChhKSB7XHJcbiAgICB2YXIgYiA9IFtdXHJcbiAgICAgICAgLCBjID0gW107XHJcbiAgICBhID0gdyhhKTtcclxuICAgIGZvciAodmFyIGQgPSBhLm5leHQoKTsgIWQuZG9uZTsgZCA9IGEubmV4dCgpKVxyXG4gICAgICAgIGQgPSBsYihkLnZhbHVlKSxcclxuICAgICAgICAgICAgYi5wdXNoKGQpLFxyXG4gICAgICAgICAgICBjLnB1c2goWChkKSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIEViOiBiLFxyXG4gICAgICAgIHliOiBjXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdyhhKSB7XHJcbiAgICB2YXIgYiA9IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wuaXRlcmF0b3IgJiYgYVtTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgcmV0dXJuIGIgPyBiLmNhbGwoYSkgOiB7XHJcbiAgICAgICAgbmV4dDogYWEoYSlcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhYShhKSB7XHJcbiAgICB2YXIgYiA9IDA7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiBiIDwgYS5sZW5ndGggPyB7XHJcbiAgICAgICAgICAgIGRvbmU6ICExLFxyXG4gICAgICAgICAgICB2YWx1ZTogYVtiKytdXHJcbiAgICAgICAgfSA6IHtcclxuICAgICAgICAgICAgICAgIGRvbmU6ICEwXHJcbiAgICAgICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaHNsKGEsIGIsIGMsIGQpIHtcclxuICAgIGQgPSB2b2lkIDAgPT09IGQgPyAxIDogZDtcclxuICAgIHRoaXMuaHVlID0gYTtcclxuICAgIHRoaXMuc2F0dXJhdGlvbiA9IGI7XHJcbiAgICB0aGlzLmIgPSBjO1xyXG4gICAgdGhpcy5hbHBoYSA9IGQ7XHJcbiAgICBjb21wYXJlVmFsdWUoYSwgMzYwLCBcImh1ZVwiKTtcclxuICAgIGNvbXBhcmVWYWx1ZShiLCAxLCBcInNhdHVyYXRpb25cIik7XHJcbiAgICBjb21wYXJlVmFsdWUoYywgMSwgXCJsaWdodG5lc3NcIik7XHJcbiAgICBjb21wYXJlVmFsdWUoZCwgMSwgXCJhbHBoYVwiKVxyXG59OyIsImltcG9ydCB7IExhYiB9IGZyb20gJy4vY2xhc3MnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBCVUlMVElOX0xBQkNPTE9SX0xJU1QgPSBbW25ldyBMYWIoOTQuNjc0OTcwMDMzMDUwODUsIDcuMjY2NzE1MDY2ODYzNzcxLCAxLjAwMDc0Mzg4MjI3MjM1OSksIG5ldyBMYWIoODYuNzg5NzQxNjc2MTY5OSwgMTguMzcwNzM2NzYxNjU4MDEyLCA0LjIzNjM3MTMzOTcxNDI0KSwgbmV3IExhYig3Mi4wOTM5MTYyODMyNTYxLCAzMS43OTQ4MDU4Mjk4MTE3LCAxMy4yOTcyNDQzOTk2ODk2KSwgbmV3IExhYig2MS43OTM1MzM3MDA1MTg1MSwgNDQuMTI5NDk4MTYzNzY0NTQ1LCAyMC43MjE0NzczMjY3OTk2MDgpLCBuZXcgTGFiKDU3LjE5NDE5NTM5ODk0OTU3NCwgNTkuNjQ1MDAwNjE5NzM2MSwgMzQuOTk5ODMwMDEyOTQwMTk0KSwgbmV3IExhYig1NS42MDM5NTEwNzE4NjEzNzQsIDY2LjAxMjg3Mzg0ODQ1NDgzLCA0Ny42NzE2OTMxMzk4Mjc3MiksIG5ldyBMYWIoNTEuNjYzNDg1MDI5NTQ3NDcsIDY0Ljc0ODc3ODUwMjA2MjUsIDQzLjI0NDg3NjY5NDg1NTI4NiksIG5ldyBMYWIoNDcuMDk0NTU2NjYzNTA5NjksIDYyLjI5ODM2MDM5MDc0Mjc3LCA0MC42Nzc3NTQyNDY5ODM4OCksIG5ldyBMYWIoNDMuNzcxMjIwNjMzODg3MzksIDYwLjI4NjMzNTA5MTgzMzg0LCA0MC4zMTQ0NDY4NjY5Mjk1MiksIG5ldyBMYWIoMzkuNTU1MTg3MDc4MDA3Mzg2LCA1OC43MDM2ODEzNTUzODk5NzUsIDQxLjY2NDk1MDI3Nzk4NjI5KV0sIFtuZXcgTGFiKDkyLjY4MDUzNzc2MzI3NjY1LCA5LjUxNTM4NTIzMjgwNDI2MywgLS44OTk0MDcyOTY5NzU0ODUyKSwgbmV3IExhYig4MS44Njc1NjY0MzYyODkyMiwgMjUuMDU2ODgwODk3MjMyNTcsIC0xLjk0NzUyMzUxMTUzOTA2MjEpLCBuZXcgTGFiKDcwLjkwOTg3Mzg5NTQ1NzY4LCA0Mi4yMTcwNTI1NzcyMDUyNiwgLTEuMDk1MTU0NjI0MDU3OTU5KSwgbmV3IExhYig2MS4wODE0MDgwNTIxNjE4NiwgNTguODcxMjMzMzA3NTg3MjA0LCAyLjEwMDg3NjQ4MDQ2MjY0MzQpLCBuZXcgTGFiKDU0Ljk3OTcwMjE5OTg2NDQ4LCA2OC41NjUzMDkzODM2Njg4OSwgNy4zMjc0MzA3Mjg1NjA1NjkpLCBuZXcgTGFiKDUwLjg3MjI1MDM0MDc0OTE3NiwgNzQuNjA0NTkxOTU5MjU1MjksIDE1LjM1MzU3NjI1Njg5NjA3MyksIG5ldyBMYWIoNDcuMjc3Mzg2NTAxNDQ1NTgsIDcwLjc3ODU1Nzc2NDI3ODA1LCAxMS43MDQzNDI3MzI2NDUwOCksIG5ldyBMYWIoNDIuNTg0MjQxODk0ODY1MTcsIDY1LjU0MTE5NTMxMzgzMDksIDcuNTk1NTk2NDM5ODAzNzk3KSwgbmV3IExhYigzNy45Nzc0OTI0MDcyNTQ4MzYsIDYwLjc0MzYyNjIxODQyMDc1LCAyLjk4NDcxMjQ5NTE0NTM0NzQpLCBuZXcgTGFiKDI5LjY5OTI5MDAzNDg0OTYwNCwgNTEuOTA0ODUwMjM3MjEzMTEsIC00LjgzMDE4NjYzNDEwNzYzNildLCBbbmV3IExhYig5Mi40MzYyNjU1MTY5MDE2LCA3LjU0MjkyNzQ2NzcwMjI5OSwgLTYuMDM5ODQyODQ4NjA1ODgxKSwgbmV3IExhYig4MS4wNzM5OTc3NjkwNDc1MSwgMTkuNTYzODcwMjE3ODA1MDM2LCAtMTUuNzE5NjI1NDkxOTg2MDQ0KSwgbmV3IExhYig2OC43MTM5NDcxNzcxMTgzMSwgMzMuNzk5OTI4MTI0OTA1NTYsIC0yNi40OTUzOTk3MjMzOTMyMSksIG5ldyBMYWIoNTYuNTk2MTYxMjI2MjM2MzA1LCA0Ny41ODU2NjMxODM1MTUyLCAtMzYuNDgwODE2NjA1NDEwOTE1KSwgbmV3IExhYig0OC4wMDI3OTEyMTc2MjQ0MzQsIDU3LjMwODY2NDQzOTM0ODc5LCAtNDMuMjU2MTEyNzE1MjU0OCksIG5ldyBMYWIoNDAuNjYyMTE1MzQ2OTIxNjEsIDY0LjAxOTEwNzczODE4NDM2LCAtNDguMDU5MzAxNjI1OTEwNDEpLCBuZXcgTGFiKDM3LjY5MDcwMjIwODk5MjE4NSwgNjEuMTM3NjI3Njc3MzI0ODEsIC00OS4zODQ4MDMyNzQyNDMwMjYpLCBuZXcgTGFiKDMzLjU2MjkxODcwNzMxOTgxLCA1Ny42MzczODEyMzkyNTQxMDQsIC01MS4zOTU1NzI0OTg1NTgyOCksIG5ldyBMYWIoMjkuODY1MzkxMzE0MjM0NTE1LCA1NC4yOTczNzQzOTkwMTMzMywgLTUyLjY2MDE5NzM3MTI0NjMpLCBuZXcgTGFiKDIzLjE2NzI0MjM1NDIwNDM2LCA0OC41MTc2NDQzNzI4MDQ5OCwgLTU1LjE2MjY3OTQ5MDE1MjkzKV0sIFtuZXcgTGFiKDkyLjQ5MTAzNDI2MDE3MjAxLCA0LjcxMjMyMDAyNTc1Mjk0NywgLTYuNTMyODY4MDcxNzA5NzYzKSwgbmV3IExhYig4MS4yNDY2ODMxOTUwNTU5NywgMTEuNTA2NDI3MzQ5MDk0ODUsIC0xNi42NjY2MDA2MzcyNDUzNjcpLCBuZXcgTGFiKDY4LjYxNDg4MjE2NTU0NjI5LCAyMC4zOTUzMjkwNTE5ODI4MjQsIC0yOC41MjIwMTg4NTE3MTU0MTYpLCBuZXcgTGFiKDU1LjYwMzY5NzkzMDUzMDIzLCAzMC45MzM1Mzc3Njg5MDUwMDUsIC00MS4xNjQzOTEyMjM1ODQ4NCksIG5ldyBMYWIoNDUuODM0NTY2MTkwOTY5NDI2LCAzOS4yODgwNjI3MjIzNTY3NCwgLTUwLjUyMzMyMjA1Mjc3MjYzNSksIG5ldyBMYWIoMzYuNjA4NjIwMjI5MzU4NjY0LCA0Ny4yOTY4NjAwMjgyODE0MywgLTU5LjExMTc2NjU4NjE4Njg0NiksIG5ldyBMYWIoMzQuMTg5NzkxMjM3NTYyNjE2LCA0Ni42MDQyNjA2NTEzOTEyMywgLTU5LjUzOTYxNjI3Njc2NzI5KSwgbmV3IExhYigzMC41MjcxMzM2NzMzODM2MSwgNDYuMDE0OTgyMjQ3NTQ1MTksIC02MC4xOTk3NTA1MjUwOTA2NCksIG5ldyBMYWIoMjcuNDQ1ODU1MjQ4NzcyMjIsIDQ0Ljk2MTgwNDMxODU0Nzg1LCAtNjAuNDYzOTU4MTA3NTY0MzMpLCBuZXcgTGFiKDIxLjk4NjI3NjcwMzI4MjE4LCA0NC4yOTI5NjA3NjI0NTQ3MywgLTYwLjkzNjUzNjU1MTcyMDk4KV0sIFtuZXcgTGFiKDkyLjg2MzE0NDExOTgzOTE4LCAxLjUzMTgxNDcwNjEwNjE5MzcsIC02LjAyNTI0MzUyODk1MDU1MiksIG5ldyBMYWIoODEuODM0ODA3MzcwNTI5OCwgNC40NjA5MzQ5NTU0NTg5MDcsIC0xNS44NzM1NjEwMDk3MzYxMzYpLCBuZXcgTGFiKDY5Ljc3OTY5MTM3OTU2NzIsIDcuOTA0MzY1MjU1ODkxMjc2NSwgLTI2LjMxNzA4NDYzNDY5MzIpLCBuZXcgTGFiKDU3LjQ4Nzg2NTE5OTM4NzM2LCAxMi42ODEwMTk1MDQ4MjI1MzMsIC0zNy4yMzIwMjAxMjkxNDUyOCksIG5ldyBMYWIoNDcuNzQ1OTI1Nzg4MTExMDEsIDE4LjUyMDc5OTMwMjQ1MjM3NCwgLTQ2LjQ3NTQwNjc5MDAwMzk3KSwgbmV3IExhYigzOC4zMzQ0MDM2MTQ0NTU0MDQsIDI1LjU3NzAwNjY4MTcwODEyLCAtNTUuMjgyMjQxNTMyOTkyODcpLCBuZXcgTGFiKDM1LjE1MTE2NDUzOTAxNTUyLCAyNi4yMzE4MTIwODAzODExNjgsIC01NC41MzcwMDk3ODc4NTQwNCksIG5ldyBMYWIoMzEuMDgwNDI5OTg4MDA3OTU3LCAyNy4wNzM5NDkzMDExMDEyNCwgLTUzLjk3NTA1Mjc0NTc5OTU4KSwgbmV3IExhYigyNy4wMjY2NzIwODA0NTQ5MjIsIDI4LjE2NTI2NjQyNzU1ODk4MywgLTUzLjI4OTg3MzI1NDgyMjE4KSwgbmV3IExhYigxOS43NTEyMDE1ODc5MjE2NzgsIDMwLjYwNzg0NTc2ODk1MTAxLCAtNTIuMTM4NjY1MTkyOTc0NzQpXSwgW25ldyBMYWIoOTQuNzA2ODI0NTczNDg3MTcsIC0yLjgzNTQ4NDczNTk4NzMyNiwgLTYuOTc4MDQ0Njk0NzkyNzA3KSwgbmV3IExhYig4Ni44ODM5ODQyOTcwMDE2LCAtNS4xNjkwODcyODc1OTU1MiwgLTE3Ljg4NTYxMTkyNzU0OTU2KSwgbmV3IExhYig3OS4wNDUxNTMyNDAxNTU4LCAtNi44MTc3NTM1MjcwMTU3NDYsIC0yOC45Njg1Mzc0OTA0MzIxNzYpLCBuZXcgTGFiKDcxLjE1MDgzNjk3MjQyNjEzLCAtNS45OTQ3NjM3NTY4NTA3MDcsIC0zOS43MjU0OTQ1MTE1ODkyNyksIG5ldyBMYWIoNjUuNDgxMDYwNTg5MDc4MzMsIC0yLjczNTc0NTc5MjUzNzkzNiwgLTQ4LjE1NDcxMjM4OTI2NTYxKSwgbmV3IExhYig2MC40MzAwOTQ0MDg1MDg2MiwgMi4wNzk5Mjg4OTczMjE1NTksIC01NS4xMDkzNTg0NzA2OTYxNiksIG5ldyBMYWIoNTUuNjIyNjc2NzY5MjIxODgsIDQuOTk4Njg0Mzg0NDg2OTE4LCAtNTUuMDIxNjQ3Mjk0Mjk5MTUpLCBuZXcgTGFiKDQ5LjI3MDA2NjQ1OTA0ODc1LCA4LjQ3MDM5ODM3MDMxNDM4MSwgLTU0LjQ5NDc5NjgzODQ1NzU0NiksIG5ldyBMYWIoNDMuMTY4Mjg4NTYzOTQzNTgsIDExLjk2ODQ4MzA3NjE0Mzg0NCwgLTUzLjk3MjU2NzM3Nzk3Nzk3NCksIG5ldyBMYWIoMzIuMTc3NTc3OTM4OTQxOTMsIDE4Ljk2MDU0OTkwMjI5MzU0LCAtNTMuNDUxNDYzNjUwNDkwODgpXSwgW25ldyBMYWIoOTUuMzU3MTM0Njc3NjI2NTIsIC00Ljc5NzE0OTE1NTM4ODIwMywgLTYuNTUwMDAyNTUwNTA0MzA4KSwgbmV3IExhYig4OC4yNzk0MjY0OTU0MDA0MywgLTEwLjgzNjAwNjYxNDU4Mzg5MiwgLTE2LjM1OTM2MTgyMTk0MDM3NSksIG5ldyBMYWIoODEuMTAwMDkwNDQ5MDA5NzYsIC0xNS4zMjMwNTQ1MjI5ODE3MTYsIC0yNi40MTkxMjExOTEzMjA5NDcpLCBuZXcgTGFiKDc0LjQ0NzEzOTU4MjU5Nzc3LCAtMTYuNjY0NDMyNjI1MzYyNTQ3LCAtMzUuMTk3MDI2ODY5MDAwMzcpLCBuZXcgTGFiKDY5Ljg3ODM2NDY1NjM3MzE4LCAtMTQuMjkxNTE1MzMyMDU0NjkzLCAtNDEuODI3NDMwMzI5NzU1MTc0KSwgbmV3IExhYig2NS42ODg1MTI1OTE3ODkxMywgLTkuNjEyNjM1NzIxOTYzNjkyLCAtNDcuMzQwOTE2MTYwMzkxOTEpLCBuZXcgTGFiKDYwLjg4MzU3OTk0MzA4OTczLCAtNy4yNTI4MTkwMjcxODQ5NDMsIC00Ni42Nzc1MzczMTU5NTYzNCksIG5ldyBMYWIoNTQuMjYxNjY0OTU0MjYxNjYsIC0zLjgxNDE4MzY4OTc5MDgwNjYsIC00NS45NzkzOTQ3NTc2MjQ5OCksIG5ldyBMYWIoNDguMTA2NjE4OTUwNzI2NzMsIC0xLjM3ODk5ODc4NDQ2NDM0NywgLTQ0LjM0NDY2NzUwMjA2Nzc4KSwgbmV3IExhYigzNi4zNDQwMTE0NzA1NzI4MiwgNS4wNjc4MTI0MDQ3MTM1NDUsIC00My4xMTc4NjI1NzU2MTkxNSldLCBbbmV3IExhYig5NS42OTI5NTE1NDU5OTc1MywgLTYuODk4NzE2MTI3MzAxMTQxLCAtMy45OTQyODQyMjk2NTQ0MjEpLCBuZXcgTGFiKDg5LjUyODQyNTI0MDU5MDA0LCAtMTYuNDEyMzk4Mjg5NjAxNzI1LCAtOS4yNjA0NjYwNjkyNjY2OTMpLCBuZXcgTGFiKDgzLjMyMDMxMjE0NjU1NzQ4LCAtMjQuODMwMzY4NDA3MjgwOTgsIC0xNC41Njg2NzM1ODMzMDQ2MDMpLCBuZXcgTGFiKDc3LjM1MzM4MzEzNzUyOTU4LCAtMzAuMjAxNzA4NTcyMjE1MTA0LCAtMTguOTIzNTgyODQ3MjExMDEpLCBuZXcgTGFiKDczLjQ1MzIyMDkzODU3NzgxLCAtMzEuODg1OTAzOTAxODkzODMsIC0yMS4xMzA0NTk5OTI1MTM2ODYpLCBuZXcgTGFiKDY5Ljk3NjM4NDY1MDY0NzgzLCAtMzAuNjc5ODUwMzI0NTQ3OTUzLCAtMjMuMTg2Njg1NjYxMTM2NzA3KSwgbmV3IExhYig2NC40NDQ5MTcxNjU1Mzc3NywgLTI5LjA4MzM3NDM0NTg0NDU3LCAtMjEuMTU0OTM1NzY5MTU2MjE0KSwgbmV3IExhYig1Ni45OTgxNjQzMjk2MTEwMywgLTI3LjMxMDgxNDc3Mjc5NDUxLCAtMTcuODY5ODg4MTU3Njc0NDMpLCBuZXcgTGFiKDQ5Ljc1NDY0MTgyMjU1NjcxLCAtMjUuMzM1MzgzNTAzNjk0MjQyLCAtMTUuMDI0NzIyNTkxNjYyNzg3KSwgbmV3IExhYigzNi41MjcyNTg5NDI2NDQzMiwgLTIyLjEyOTY0MTc0NDE5NDUxNSwgLTkuMTc2MTU5MTQ2ODk0MzAzKV0sIFtuZXcgTGFiKDk0LjE4NDUzOTQxNTg5OTE4LCAtNi4wODM1MTcwMzQyODk3MiwgLTEuNTQ4ODkxNjA1MTE2MTk4MyksIG5ldyBMYWIoODUuNjgxNzcwNzc0MTQ0NTcsIC0xNS4zMzMxNzk0NDAyOTg2MDYsIC0yLjg1MTk4MjU3NjE0NzYwNDgpLCBuZXcgTGFiKDc2Ljg1MDY3ODQ3MTkwNDA1LCAtMjQuODQ0MDU5MTczMTg5NzEzLCAtMy44NzUwNzg1MTMyMTkyNjU2KSwgbmV3IExhYig2OC4wMjc2MjI0MjU3MDEzOCwgLTMyLjU2Njg2MTE1NDEyMDcxNiwgLTQuMDE1MjMxMDg0NDA3MTM0KSwgbmV3IExhYig2MS42NjcyNTczMDQ1MjU0NjQsIC0zNi4wNjc1MjYwMzI4OTM1NCwgLTMuNDczNDA0NjQwMTc1MzgxNSksIG5ldyBMYWIoNTUuNjczMTAzOTczOTAxOTYsIC0zNi42NjA2OTk2MDYyNjMyOCwgLTIuMTI1NjE3OTE1MTY5NjUzKSwgbmV3IExhYig1MS4wNTkxNDk0OTUxOTc3MTUsIC0zNC42NTAxOTE2MDMwMTQwOCwgLTEuMzkxMDQ4NDMwMDQzMjUxMyksIG5ldyBMYWIoNDUuMjY5MDgxMDE5MjE4NDA1LCAtMzIuMTMyNDQ3NzU0MjI5NDEsIC0uNDUyNjM3MTg1MjY5Nzc3NSksIG5ldyBMYWIoMzkuMzY4OTkwNzYwNTkzODQsIC0yOS4yNTI2NDQ2ODU4MzE2MSwgLS4wMzU2MjU2NDY3MzE3MDczMiksIG5ldyBMYWIoMjguNTgzNjMwNDM3MDE0NzcsIC0yNC41ODU0NjU1MTYxMzY0MTMsIDEuODAzNzQwMjE2MjQ5MjM4OSldLCBbbmV3IExhYig5NS4zMDUzMDE4MzU2NTIyMywgLTYuNDMwNDE1NjQ1NzM5MjYzLCA0LjI5Mjk1MDU5NDQ1OTU5OSksIG5ldyBMYWIoODguNDkwMTQ1NzkxNTIxNDMsIC0xNS4yMzE0Nzc0NDk1MjcwMiwgMTAuODQ4MjYxMTc3NjgzMTM4KSwgbmV3IExhYig4MS4yMjYxNjg3MDU3NTM3NiwgLTI0Ljk5Mzg4NjE2ODU1MTU4MywgMTguMTQ0Njk2ODAzMzMwODg0KSwgbmV3IExhYig3NC4zMDM2MTcyMTU1ODgwMiwgLTM1LjU2MDg4Njk2MDY3MzU2LCAyNi43ODE1MTUyNTE5MDc3MjcpLCBuZXcgTGFiKDY5LjA0MzA5OTUyNzc0NDIsIC00Mi42MTU1NjEyNjU5NTk5NSwgMzMuMTcxMDk1NjMxMjY2NjUpLCBuZXcgTGFiKDYzLjk3NzQyMTgxNDA3MjkyNiwgLTQ4LjU0MjkyNjczMzE5OTgyLCAzOS43MzI0MTUyNjM0MjkzOSksIG5ldyBMYWIoNTguNzc3OTYwODUzNDYxMzY2LCAtNDYuMTE1MzY5MjQ3ODAxMywgMzcuODM4OTEwNzQ1MjI1NTc2KSwgbmV3IExhYig1Mi40MTEwODY4ODk3NDkwNCwgLTQzLjIxNzYxNzkyNDg1NzYyLCAzNS42MjI1MDY1OTAwOTQyNCksIG5ldyBMYWIoNDYuMjgxMzg3MzA3NjQyNiwgLTQwLjI1ODE2MjI3Njc1MzYxLCAzMy4zMjM0MzIyOTMzODc2MSksIG5ldyBMYWIoMzQuNjg1NjU1MzA1ODE0NTE0LCAtMzQuNzUzNDM4Nzg1MTAzMTIsIDI4Ljg2NjczOTAzNDM1OTc2NyldLCBbbmV3IExhYig5Ni43MDUxODE2OTM1NTk1NCwgLTQuOTI5OTg3ODQ1MDk1NDYzLCA2LjM5NzA4NDUyMzE2ODg5NCksIG5ldyBMYWIoOTEuNjY0MTYwNjExOTk0MzgsIC0xMi4wNTcwMzIwNDE5NDU2OTMsIDE2LjA1NDYwNDU3OTI3NTE0MyksIG5ldyBMYWIoODYuMjI0NDM5NTg2NTQ0OSwgLTE5LjYxMzY0NjgzNDA4MDYyMiwgMjYuMzg0OTA2NDIzNDU0MjM2KSwgbmV3IExhYig4MC44MzQwNDg3OTYzNjkxOSwgLTI3LjA4MDE3MTg0MDc1Njg5MywgMzcuMzc4NDkzNzQyMDIxMzM0KSwgbmV3IExhYig3Ni43OTU0MzcyNTEwODk2NCwgLTMyLjc2NjU5NzE5NzM2NzUyLCA0NS45MTIxOTA1NzI0NDQ0NDUpLCBuZXcgTGFiKDcyLjkwMDI1Mjk3MDI4MDE5LCAtMzcuNTQ5MTM5MjIzOTI3Mzg0LCA1My41MTk1OTQ5NjEwMzAyNyksIG5ldyBMYWIoNjcuMjE1MzIzMTAyNzIwNzksIC0zNi41NjMwNDg3MDc3MzQ4NiwgNTAuNDk2MjkwNTEyNjg4OTQpLCBuZXcgTGFiKDU5LjkxMDUxMTQyMjEwMTk1LCAtMzUuNzcwMTE0NjYwNjMzNTcsIDQ2LjU2NDY1ODQ3OTc2MTg3KSwgbmV3IExhYig1Mi41MTAxNTg0MTA4NDUxMSwgLTM0LjQ3OTAzNDQwNjk5MjM1LCA0Mi4yMDcyMzg2ODcyNDI2OCksIG5ldyBMYWIoMzkuNDExOTE5ODMzNTM4NzgsIC0zMi44MDQ2MDk3NDM1MjY0MiwgMzUuMjU1NDkwNTg1NjMwMDE0KV0sIFtuZXcgTGFiKDk3Ljk5NTA2MDU3ODgzNDI4LCAtNC4wNTk2MzI0ODI3NDE0OTQsIDkuMzU1Nzk3NjAyMzgxNTIxKSwgbmV3IExhYig5NC44MDkyNjIzNTk3NjUzNiwgLTkuMjM3MDkxNDY3MzUyODU1LCAyMy4yMzA2NTAwNjQ4MjQ5ODUpLCBuZXcgTGFiKDkxLjg1MjA1ODQzNTI2MTY3LCAtMTUuMDUzOTE3MzI3MDExMTE0LCAzOC44NjExNTE4MjIwNjU5OCksIG5ldyBMYWIoODguNzU4MTIxNDIwODAyNDIsIC0xOS41NDI5MDA0MDAxNjQwOTcsIDUzLjcxNzg1Njc1NzgzNzA5KSwgbmV3IExhYig4Ni4yNzQwNDE4MDcyOTUxNSwgLTIyLjE3Mzk5Mjg5MTEyMTU5NiwgNjMuOTc4NjM5MDY1MjMyNTE0KSwgbmV3IExhYig4NC4yMDU2NjgzNTM3NjQ5MiwgLTI0LjI3MDY0MzUyMDk4OTM0MiwgNzIuNzk2MjQwNjcwMzMwMzgpLCBuZXcgTGFiKDc4LjI3OTE1MTAwNjAzOTk3LCAtMjEuMTgxODUwMDU2NDAyNDk2LCA2OC44Mjc2MzQxMjI5Nzk2NSksIG5ldyBMYWIoNzAuODIzODU4MTE4OTI4MjQsIC0xNy43ODgxNDg5MzI1MjU2NzIsIDY0LjAwMzI3ODE3OTg4MTI4KSwgbmV3IExhYig2Mi45MzY4NjcwMTI4NjgwMzUsIC0xMy42OTc0MTIxMTE2ODQ5MDMsIDU4LjUxMzAwMDUwOTI4NzgzNSksIG5ldyBMYWIoNDkuNDk4NjEwODgxNDUyNTM1LCAtNi40ODUyMzA1NjQzODQ3MTUsIDQ5LjY3NDMyNzIyODMzNzUxKV0sIFtuZXcgTGFiKDk4LjkzODg1MTI5NzUyNzU5LCAtMy4wMDk4NDcwMjg4NTQzMTc4LCAxMC43NjU3MzY4MzM3OTAwMDgpLCBuZXcgTGFiKDk3LjIyNjg5Nzg0ODI0MDc0LCAtNi4xNzQ1OTkzNjg3MzQ0OTEsIDI2LjIyOTMyNDE3MzU1MTQ2KSwgbmV3IExhYig5NS41ODA5Mjk0NzgyODc2NiwgLTguOTA3MTMyODQ4NDczODg2LCA0My41NjI5NzI5MTQ0NjU2NyksIG5ldyBMYWIoOTQuMDkwMDk1MTU3MDI0ODYsIC0xMC41MDk2Mjg5NDI3MTA3MzUsIDYwLjIwMDE5NTE0MjMxMTg4KSwgbmV3IExhYig5My4wNjU0Njc0NjY4MzA4NywgLTExLjAwODU1ODQ3NjAxMzAwOCwgNzEuNzY1MDA4MjYwMDU0NzcpLCBuZXcgTGFiKDkyLjEyOTc1MDE3NzYwMTI4LCAtMTAuODMwMDIzMDk0ODY4MzAyLCA4MC45MDkwNTU5NjQwMDg5KSwgbmV3IExhYig4Ny4xMjE4ODM0OTE2ODYwOSwgLTIuMzc2NDMwMDA5OTIzOTM1NSwgNzguMTQ4NjgxOTUzNzM0MDcpLCBuZXcgTGFiKDgwLjk2MjAwNDQyNDE5OTA1LCA4Ljg0OTMzMzc5MjcyOTA2NCwgNzUuMDUwNTA3MDAwOTI2NzkpLCBuZXcgTGFiKDc1LjAwMzQyNzcwNzE4MDg2LCAyMC4zNDAxNzM1NjY4NzkyODMsIDcyLjI0ODQxOTI1OTU4OTM0KSwgbmV3IExhYig2NS40ODIwNzc1NzQzMTU2NywgMzkuNjQ3MDY0OTcwNDc2MDk0LCA2OC4zNDg3Mjg0MTc2ODY1NCldLCBbbmV3IExhYig5Ny41NjQyMzkyMDc0MzM3LCAtMS40NDU1MjU2Mzk0MDUwMzIsIDExLjg4MTI1NDMxNjI5NzY3NCksIG5ldyBMYWIoOTMuNjcwNTc5NTM3NDk0NTYsIC0xLjg2OTMwOTY4NjIwNzI0MzQsIDMwLjAyODg4NjcwNDE1NjUxKSwgbmV3IExhYig4OS45NDU3MTQ5MjgwNDEwNywgLTEuMDIyNDUwMzgxNDc2OTY5MiwgNDkuNjQ5NTQyMzYxNjQyMjc2KSwgbmV3IExhYig4Ni43MTAwOTE2NDE1MzgwMSwgMS4wNDk2MDY2Mzk2NDI4MTk0LCA2OC43NzM3NzM0MjQwOTczOSksIG5ldyBMYWIoODMuNzg3NzM5OTMzMTkyMTEsIDUuMjQ4MjMxODIwMDk4NDI1LCA3OC45MjkyMDQ1Nzg1MjcxNiksIG5ldyBMYWIoODEuNTIxOTEzODIwODAyMjgsIDkuNDAzNjU1MzcwNzA3MTk5LCA4Mi42OTI1NzExMjk4Mjc0NiksIG5ldyBMYWIoNzguMTcyNDA5NzM4MDQ2OTcsIDE2LjYyODUxMjg4NjUzMTg4NywgODEuMDkzNTgzMTg4MDYyMDgpLCBuZXcgTGFiKDczLjgwODk5NjU0MzgxMDUyLCAyNi41MzYxNDMxNTI1MDg3NCwgNzguMjE3NTQwNTIxODE3MjMpLCBuZXcgTGFiKDcwLjExMzQ1MTE2NjU3NjQsIDM1LjMwMDc2MjMzNTk3NDQsIDc1Ljg3NTEwOTkyMTM4NTkzKSwgbmV3IExhYig2My44NjQ2MDQwNTU2NTcxNywgNTAuOTQ2NDgyMTQ1MDU5NTksIDcyLjE3ODE1NjgyMTI0NDIzKV0sIFtuZXcgTGFiKDk2LjMwNDU5NTE3ODAxMzg3LCAuOTIzMTUxMTcyMjgyNDc3LCAxMC41OTg0Mzk0NDYwODMwNzQpLCBuZXcgTGFiKDkwLjY4MzIwMDgyODY1MDg3LCA0LjEwMzc3NDk2NDY4MTA2MiwgMjYuNDg1NzkzNzIxOTE2MTI4KSwgbmV3IExhYig4NS4wMDA1NTI4NzE4NjIzMywgOS4wNDcxODE3NTg4NjY2NTEsIDQ0LjUxNDA3NjIyNTgwNzkyKSwgbmV3IExhYig3OS40MjQyODQ5NTc0Mjk1MywgMTYuNDUyNjEwNzI0NDM5ODc1LCA2Mi4wODcyMTczOTA3NDIwMSksIG5ldyBMYWIoNzUuNDc3OTI2OTkyODk3NzQsIDIzLjM5NTc0MjkyODQ1MTg2NywgNzIuNjQzNDc2MTEyMzY1MDEpLCBuZXcgTGFiKDcyLjA0MjQ2NTYxNTQ4Mzg4LCAzMC42ODE5MjEwMTIzODIwOTgsIDc3LjA4NTc5Mjk4OTA0NjAzKSwgbmV3IExhYig2OC45NDcyNDMzODk0Njk3NSwgMzUuMjIwMTQ3Nzg0MzM4NjMsIDc0Ljg4NDI1MDQ0NTk1MTExKSwgbmV3IExhYig2NC44MzAxNzQ5NTUzNTIyOSwgNDAuOTEyMDA3MzAwOTk3MDMsIDcxLjk1OTYwNTM1NDU0MjgpLCBuZXcgTGFiKDYwLjg1MzQyMDc0NzE4NzEsIDQ2LjQxNDgzNTkwNTEwNjgxLCA2OS4xODA2MTk2MzQxNTIxMSksIG5ldyBMYWIoNTQuNzc1NzE3NDI5NjIyODcsIDU1LjI4Mjc1MTAxOTM2MDAzNSwgNjUuMTAxOTM0MDM1NDc5MjIpXSwgW25ldyBMYWIoOTMuNjkyMTk4NDQ2NzE5NTcsIDUuNzYzOTc5MzM0MzU4MjkzLCAzLjE3MDAxNjI3OTY0NjkwMzQpLCBuZXcgTGFiKDg2LjA0NjI5NDM0Mjc2NDI4LCAxNS43NTA4NDM4MDM5NTgxOTIsIDE0LjgyODQ3NjkyNzA5MDk5NCksIG5ldyBMYWIoNzcuNTQwMTAwNDI5MzgzMzYsIDI3LjkwMTEzODQyNTQwMDQzLCAyNS45OTY0NTIyOTI4OTA2NSksIG5ldyBMYWIoNjkuNzQwOTU0NTY3MDc4NTcsIDQxLjE0NDg3Mzc3NTUyMjU2LCAzOS40NDMzMjAxNzg5MDAwMjQpLCBuZXcgTGFiKDY0LjM3MDg1MzQ0NTM5MzQxLCA1MS44OTAzNzk2MjA0NDM1NzUsIDUwLjgxMzEyNDcxMDQ2NDE1KSwgbmV3IExhYig2MC4wNjc4MDgzNzI3NzQzNSwgNjEuNjUyNTg3MzYxMTg4MTcsIDYxLjU0NzcxODI5MTY1MjIxKSwgbmV3IExhYig1Ny4yODcwNzkxNTIzMjM2MywgNjAuMzI1MDY2NDMwODgxMiwgNjAuMDczNDE1MzYzNzY0NDcpLCBuZXcgTGFiKDUzLjgxMDA1MjYxNjI5Mzg0NSwgNTguMzY3NjA5NDM3ODAxNjIsIDU4LjE5NTg2ODA2Njk0ODg0KSwgbmV3IExhYig1MC4zMDEzNTI0MDUxMDU4NzQsIDU2LjQwMTA0ODk4MDg5OTM3LCA1NS45MjQxNDE5OTI0MDQzNDQpLCBuZXcgTGFiKDQzLjg2NDc3OTk0NTQ4MzQzLCA1Mi45NzA4ODc3MDM5MTA3MjYsIDUyLjMwMDY3OTg5MjI1NTMyKV0sIFtuZXcgTGFiKDkzLjI5ODY0ODg4MDY5OTg3LCAuOTkxNTQ1NjA5MDQ3NTcyNywgMS40NDIzNTMwNzYzNzg0MTEpLCBuZXcgTGFiKDgyLjgwODg0MzU5MDA0MDgxLCAzLjExNjIyMTkwMzM0MjIwOSwgMy4zNTIzMDU5NDUxNDYzMDU1KSwgbmV3IExhYig3MC45NTQ5MzA0NzY2ODE4NSwgNS40Njk3NDIxOTMzNDQ3ODQsIDUuNDQ5MDA5NDk0NTUzNDkyKSwgbmV3IExhYig1OC43MTI5MzQ2MTkxMDMwNjYsIDcuOTkwOTkxMDc1MzYzMzg1LCA4LjM1MjQ4ODQ5NTM2NzYyNyksIG5ldyBMYWIoNDkuMTUwMjA4NTUyODc1ODk1LCAxMC41NzA5ODQ5ODEwMDAzOTcsIDEwLjgzMTQ0MDE1MTE5NzkyNCksIG5ldyBMYWIoMzkuNjMyMDAxNTE4Mzc3NDksIDEzLjEzODg4MTk2MTYyNzI0MSwgMTMuNTMxNTc0NzExNTExODg1KSwgbmV3IExhYigzNS42MDA5OTY2ODIwMTU3NTQsIDEyLjQwMzUyODQ3NzU3Mjk1LCAxMi4xMDQzMjE4MzkwMjQ0OSksIG5ldyBMYWIoMzAuMDg0MjcxMjY1NzU5OTUyLCAxMS4zMTcxNDgxNDk4NzgwODEsIDEwLjU0NzQ4NDMwNDI5NjIxNyksIG5ldyBMYWIoMjQuNTU1MDE0Njk2NDE2NTc4LCAxMC44MTY2MTMzMTY3ODI0NjQsIDguNTA2NTU1MzA2NzkxOTg0KSwgbmV3IExhYigxOC4zNTA1NTIyNjUxNDQwNCwgMTAuMjI1NzI1NTUwMzM4NzY1LCA3LjA1ODU4Mjc2OTg4MjU3MSldLCBbbmV3IExhYig5OC4yNzIwMjc0MDk4MDIxOSwgLTEuNjQxODM5MzY0NDYzNDkzMkUtNSwgNi41NjczNTc0NTc4NTM5NzNFLTYpLCBuZXcgTGFiKDk2LjUzNzQ5MzM2NTQ4NTY3LCAtMS42MTY5MTc5MDUxMjI4NjFFLTUsIDYuNDY3NjcxNTk4Mjg2OTg0RS02KSwgbmV3IExhYig5NC4wOTc4Mzc4OTg3NzgxLCAtMS41ODE4NjUzODMxMjY3NjhFLTUsIDYuMzI3NDYxNTMyNTA3MDczRS02KSwgbmV3IExhYig4OS4xNzcyODM3MzQ5MzYxMywgLTEuNTExMTY3NzY4Njk3NDE5RS01LCA2LjA0NDY3MTA3NDc4OTY3NkUtNiksIG5ldyBMYWIoNzYuNjExMTk5MDIyMzEzMjMsIC0xLjMzMDYyMDU5MTQ4ODY5NkUtNSwgNS4zMjI0ODIzNDM3NTAzMjNFLTYpLCBuZXcgTGFiKDY1LjExNDI0Nzc0MTI3NTE2LCAtMS4xNjU0MzQ1MTU1NTk4Mzc4RS01LCA0LjY2MTczODA2MjIzOTM1MUUtNiksIG5ldyBMYWIoNDkuMjM4OTg5NjIwODI4MDY1LCAtOS4zNzM0MTc0MzExMjQ0MDlFLTYsIDMuNzQ5MzY2OTcyNDQ5NzYzNkUtNiksIG5ldyBMYWIoNDEuMTQyNjY4NDM4MDQ4NDgsIC04LjIxMDE1Mjk0NjM4NjI3M0UtNiwgMy4yODQwNjExODk2NTY3Mzk1RS02KSwgbmV3IExhYigyNy45NzQ4NTcyMDYwMDM3MDUsIC02LjMxODIyNjE5MjIzNjc2NEUtNiwgMi41MjcyOTA0NzY4OTQ3MDU4RS02KSwgbmV3IExhYigxMi43NDAwMTEzMzEzMDI3MjUsIC00LjEyOTMxMTY5ODEzMTEzM0UtNiwgMS42NTE3MjQ2NzkyNTI0NTMxRS02KV0sIFtuZXcgTGFiKDk0LjI3NjY1MjEyNTE2MjM2LCAtLjYzNzU3MTA0NjEwOTM0MiwgLTEuMzEzNTE1Mzc4OTk2Njg4KSwgbmV3IExhYig4NS43Nzc4ODAwMTQ5MjA5NywgLTIuMjc3NzgxMTA4NDUxMjgyMiwgLTMuMDE3Nzc1ODQxNjE1MTU1NyksIG5ldyBMYWIoNzYuMTIyOTYzMjUwMTUyMzEsIC0zLjQwMTUwMjk4ODg4MzgwOSwgLTUuMTY4Njc4OTI5Nzc5MDgpLCBuZXcgTGFiKDY2LjE2MzQwMTA4OTA4MzY1LCAtNC44MTk2MjcxODMwNzkwNDUsIC03LjUyMDY5NzYzMTYxNDQwNCksIG5ldyBMYWIoNTguMzU3NTI0Nzg1MTM2NDUsIC01LjcxOTUwODkxMDA4OTIxMDUsIC05LjE2NTk4ODkxNjYxMzQ4OCksIG5ldyBMYWIoNTAuNzA3NDgwODIyMDI3MTUsIC02LjgzNzk5Mjk2NTc5OTQ1NSwgLTEwLjk1NjA1NTExMjQwOTM1NyksIG5ldyBMYWIoNDQuODU5MTc4Njc2NDc2MzIsIC02LjQxMTk5MDU1OTIzOTU3OCwgLTkuNzQ1MTE5ODI4Nzg3NjUpLCBuZXcgTGFiKDM2LjkyNDU4OTMwNTY2NTA0LCAtNS4zMTk4Nzg2MTA4NDU1OTYsIC04LjM0MTk0MzQ3NDU2MTU1MyksIG5ldyBMYWIoMjkuMTE1MzM0Nzg0NjM3NjE4LCAtNC4xNjg5MDc4Mjg2NDUwNjksIC02Ljg2Mjk5NjIxOTk5NzMzMDQpLCBuZXcgTGFiKDE5Ljk1ODMzODQ1MDc5OTkxNCwgLTMuMzExNjcyMTQ1MzE4NjYxNywgLTUuNDQ4NjE0MjEwNDczNjc4NildXVxyXG5leHBvcnQgY29uc3QgQ2IgPSBbMi4wNDg4NzU0NTcsIDUuMTI0NzkyMDYxLCA4Ljc1MTY1OTU1NywgMTIuMDc2Mjg3NzQsIDEzLjkxNDQ5NTQyLCAxNS45MjczODg5MywgMTUuNDY1ODU4MTgsIDE1LjA5Nzc5MjI3LCAxNS4xMzczODY3MywgMTUuMDk4MTgzNzJdXHJcbmV4cG9ydCBjb25zdCBEYiA9IFsxLjc2MjQ0MjcxNCwgNC4yMTM1MzI2MzQsIDcuMzk1ODI3NDU4LCAxMS4wNzE3NDE1OCwgMTMuODk2MzQ1MDQsIDE2LjM3NTkxNDc3LCAxNi4yNzA3MTEzNiwgMTYuNTQxNjA4MDYsIDE3LjM1OTE2NzI3LCAxOS44ODQxMDg2NF07XHJcblxyXG5leHBvcnQgY29uc3QgTyA9IE1hdGgucG93KDIsIC0xNikiLCJpbXBvcnQgY2hyb21hIGZyb20gXCJjaHJvbWEtanNcIjtcclxuaW1wb3J0IHsgbWFpbiB9IGZyb20gJy4vY2xhc3MnO1xyXG5cclxubGV0IGNvbG9yID0gY2hyb21hKCcjRjQ0MzM2JykuZ2woKVxyXG5sZXQgZ2xDb2xvciA9IHsgcmVkOiBjb2xvclswXSwgZ3JlZW46IGNvbG9yWzFdLCBibHVlOiBjb2xvclsyXSwgYWxwaGE6IGNvbG9yWzNdIHx8IDEgfVxyXG5sZXQgbGlzdCA9IG1haW4oZ2xDb2xvcilcclxuY29uc29sZS5sb2cobGlzdCkiLCIvKipcbiAqIGNocm9tYS5qcyAtIEphdmFTY3JpcHQgbGlicmFyeSBmb3IgY29sb3IgY29udmVyc2lvbnNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxOCwgR3JlZ29yIEFpc2NoXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuICogbW9kaWZpY2F0aW9uLCBhcmUgcGVybWl0dGVkIHByb3ZpZGVkIHRoYXQgdGhlIGZvbGxvd2luZyBjb25kaXRpb25zIGFyZSBtZXQ6XG4gKlxuICogMS4gUmVkaXN0cmlidXRpb25zIG9mIHNvdXJjZSBjb2RlIG11c3QgcmV0YWluIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzXG4gKiBsaXN0IG9mIGNvbmRpdGlvbnMgYW5kIHRoZSBmb2xsb3dpbmcgZGlzY2xhaW1lci5cbiAqXG4gKiAyLiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsXG4gKiB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uXG4gKiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbiAqXG4gKiAzLiBUaGUgbmFtZSBHcmVnb3IgQWlzY2ggbWF5IG5vdCBiZSB1c2VkIHRvIGVuZG9yc2Ugb3IgcHJvbW90ZSBwcm9kdWN0c1xuICogZGVyaXZlZCBmcm9tIHRoaXMgc29mdHdhcmUgd2l0aG91dCBzcGVjaWZpYyBwcmlvciB3cml0dGVuIHBlcm1pc3Npb24uXG4gKlxuICogVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBUSEUgQ09QWVJJR0hUIEhPTERFUlMgQU5EIENPTlRSSUJVVE9SUyBcIkFTIElTXCJcbiAqIEFORCBBTlkgRVhQUkVTUyBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEVcbiAqIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRVxuICogRElTQ0xBSU1FRC4gSU4gTk8gRVZFTlQgU0hBTEwgR1JFR09SIEFJU0NIIE9SIENPTlRSSUJVVE9SUyBCRSBMSUFCTEUgRk9SIEFOWSBESVJFQ1QsXG4gKiBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORyxcbiAqIEJVVCBOT1QgTElNSVRFRCBUTywgUFJPQ1VSRU1FTlQgT0YgU1VCU1RJVFVURSBHT09EUyBPUiBTRVJWSUNFUzsgTE9TUyBPRiBVU0UsXG4gKiBEQVRBLCBPUiBQUk9GSVRTOyBPUiBCVVNJTkVTUyBJTlRFUlJVUFRJT04pIEhPV0VWRVIgQ0FVU0VEIEFORCBPTiBBTlkgVEhFT1JZXG4gKiBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElOR1xuICogTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuICogRVZFTiBJRiBBRFZJU0VEIE9GIFRIRSBQT1NTSUJJTElUWSBPRiBTVUNIIERBTUFHRS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKlxuICogY2hyb21hLmpzIGluY2x1ZGVzIGNvbG9ycyBmcm9tIGNvbG9yYnJld2VyMi5vcmcsIHdoaWNoIGFyZSByZWxlYXNlZCB1bmRlclxuICogdGhlIGZvbGxvd2luZyBsaWNlbnNlOlxuICpcbiAqIENvcHlyaWdodCAoYykgMjAwMiBDeW50aGlhIEJyZXdlciwgTWFyayBIYXJyb3dlcixcbiAqIGFuZCBUaGUgUGVubnN5bHZhbmlhIFN0YXRlIFVuaXZlcnNpdHkuXG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLFxuICogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiAqIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsXG4gKiBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpY1xuICogbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAqXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqXG4gKiBOYW1lZCBjb2xvcnMgYXJlIHRha2VuIGZyb20gWDExIENvbG9yIE5hbWVzLlxuICogaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1jb2xvci8jc3ZnLWNvbG9yXG4gKlxuICogQHByZXNlcnZlXG4gKi9cblxuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgICB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG4gICAgdHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcbiAgICAoZ2xvYmFsLmNocm9tYSA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICAgIHZhciBsaW1pdCA9IGZ1bmN0aW9uICh4LCBtaW4sIG1heCkge1xuICAgICAgICBpZiAoIG1pbiA9PT0gdm9pZCAwICkgbWluPTA7XG4gICAgICAgIGlmICggbWF4ID09PSB2b2lkIDAgKSBtYXg9MTtcblxuICAgICAgICByZXR1cm4geCA8IG1pbiA/IG1pbiA6IHggPiBtYXggPyBtYXggOiB4O1xuICAgIH07XG5cbiAgICB2YXIgY2xpcF9yZ2IgPSBmdW5jdGlvbiAocmdiKSB7XG4gICAgICAgIHJnYi5fY2xpcHBlZCA9IGZhbHNlO1xuICAgICAgICByZ2IuX3VuY2xpcHBlZCA9IHJnYi5zbGljZSgwKTtcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPD0zOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpIDwgMykge1xuICAgICAgICAgICAgICAgIGlmIChyZ2JbaV0gPCAwIHx8IHJnYltpXSA+IDI1NSkgeyByZ2IuX2NsaXBwZWQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQocmdiW2ldLCAwLCAyNTUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gbGltaXQocmdiW2ldLCAwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICAvLyBwb3J0ZWQgZnJvbSBqUXVlcnkncyAkLnR5cGVcbiAgICB2YXIgY2xhc3NUb1R5cGUgPSB7fTtcbiAgICBmb3IgKHZhciBpID0gMCwgbGlzdCA9IFsnQm9vbGVhbicsICdOdW1iZXInLCAnU3RyaW5nJywgJ0Z1bmN0aW9uJywgJ0FycmF5JywgJ0RhdGUnLCAnUmVnRXhwJywgJ1VuZGVmaW5lZCcsICdOdWxsJ107IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBuYW1lID0gbGlzdFtpXTtcblxuICAgICAgICBjbGFzc1RvVHlwZVsoXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiKV0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICAgIHZhciB0eXBlID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBjbGFzc1RvVHlwZVtPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKV0gfHwgXCJvYmplY3RcIjtcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayA9IGZ1bmN0aW9uIChhcmdzLCBrZXlPcmRlcikge1xuICAgICAgICBpZiAoIGtleU9yZGVyID09PSB2b2lkIDAgKSBrZXlPcmRlcj1udWxsO1xuXG4gICAgXHQvLyBpZiBjYWxsZWQgd2l0aCBtb3JlIHRoYW4gMyBhcmd1bWVudHMsIHdlIHJldHVybiB0aGUgYXJndW1lbnRzXG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+PSAzKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmdzKTsgfVxuICAgICAgICAvLyB3aXRoIGxlc3MgdGhhbiAzIGFyZ3Mgd2UgY2hlY2sgaWYgZmlyc3QgYXJnIGlzIG9iamVjdFxuICAgICAgICAvLyBhbmQgdXNlIHRoZSBrZXlPcmRlciBzdHJpbmcgdG8gZXh0cmFjdCBhbmQgc29ydCBwcm9wZXJ0aWVzXG4gICAgXHRpZiAodHlwZShhcmdzWzBdKSA9PSAnb2JqZWN0JyAmJiBrZXlPcmRlcikge1xuICAgIFx0XHRyZXR1cm4ga2V5T3JkZXIuc3BsaXQoJycpXG4gICAgXHRcdFx0LmZpbHRlcihmdW5jdGlvbiAoaykgeyByZXR1cm4gYXJnc1swXVtrXSAhPT0gdW5kZWZpbmVkOyB9KVxuICAgIFx0XHRcdC5tYXAoZnVuY3Rpb24gKGspIHsgcmV0dXJuIGFyZ3NbMF1ba107IH0pO1xuICAgIFx0fVxuICAgIFx0Ly8gb3RoZXJ3aXNlIHdlIGp1c3QgcmV0dXJuIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIFx0Ly8gKHdoaWNoIHdlIHN1cHBvc2UgaXMgYW4gYXJyYXkgb2YgYXJncylcbiAgICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcblxuICAgIHZhciBsYXN0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoIDwgMikgeyByZXR1cm4gbnVsbDsgfVxuICAgICAgICB2YXIgbCA9IGFyZ3MubGVuZ3RoLTE7XG4gICAgICAgIGlmICh0eXBlKGFyZ3NbbF0pID09ICdzdHJpbmcnKSB7IHJldHVybiBhcmdzW2xdLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZhciBQSSA9IE1hdGguUEk7XG5cbiAgICB2YXIgdXRpbHMgPSB7XG4gICAgXHRjbGlwX3JnYjogY2xpcF9yZ2IsXG4gICAgXHRsaW1pdDogbGltaXQsXG4gICAgXHR0eXBlOiB0eXBlLFxuICAgIFx0dW5wYWNrOiB1bnBhY2ssXG4gICAgXHRsYXN0OiBsYXN0LFxuICAgIFx0UEk6IFBJLFxuICAgIFx0VFdPUEk6IFBJKjIsXG4gICAgXHRQSVRISVJEOiBQSS8zLFxuICAgIFx0REVHMlJBRDogUEkgLyAxODAsXG4gICAgXHRSQUQyREVHOiAxODAgLyBQSVxuICAgIH07XG5cbiAgICB2YXIgaW5wdXQgPSB7XG4gICAgXHRmb3JtYXQ6IHt9LFxuICAgIFx0YXV0b2RldGVjdDogW11cbiAgICB9O1xuXG4gICAgdmFyIGxhc3QkMSA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIGNsaXBfcmdiJDEgPSB1dGlscy5jbGlwX3JnYjtcbiAgICB2YXIgdHlwZSQxID0gdXRpbHMudHlwZTtcblxuXG4gICAgdmFyIENvbG9yID0gZnVuY3Rpb24gQ29sb3IoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgaWYgKHR5cGUkMShhcmdzWzBdKSA9PT0gJ29iamVjdCcgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgJiZcbiAgICAgICAgICAgIGFyZ3NbMF0uY29uc3RydWN0b3IgPT09IHRoaXMuY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIC8vIHRoZSBhcmd1bWVudCBpcyBhbHJlYWR5IGEgQ29sb3IgaW5zdGFuY2VcbiAgICAgICAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGFzdCBhcmd1bWVudCBjb3VsZCBiZSB0aGUgbW9kZVxuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMShhcmdzKTtcbiAgICAgICAgdmFyIGF1dG9kZXRlY3QgPSBmYWxzZTtcblxuICAgICAgICBpZiAoIW1vZGUpIHtcbiAgICAgICAgICAgIGF1dG9kZXRlY3QgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFpbnB1dC5zb3J0ZWQpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC5hdXRvZGV0ZWN0ID0gaW5wdXQuYXV0b2RldGVjdC5zb3J0KGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIGIucCAtIGEucDsgfSk7XG4gICAgICAgICAgICAgICAgaW5wdXQuc29ydGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGF1dG8tZGV0ZWN0IGZvcm1hdFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBpbnB1dC5hdXRvZGV0ZWN0OyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciBjaGsgPSBsaXN0W2ldO1xuXG4gICAgICAgICAgICAgICAgbW9kZSA9IGNoay50ZXN0LmFwcGx5KGNoaywgYXJncyk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZGUpIHsgYnJlYWs7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbnB1dC5mb3JtYXRbbW9kZV0pIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBpbnB1dC5mb3JtYXRbbW9kZV0uYXBwbHkobnVsbCwgYXV0b2RldGVjdCA/IGFyZ3MgOiBhcmdzLnNsaWNlKDAsLTEpKTtcbiAgICAgICAgICAgIG1lLl9yZ2IgPSBjbGlwX3JnYiQxKHJnYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gZm9ybWF0OiAnK2FyZ3MpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYWRkIGFscGhhIGNoYW5uZWxcbiAgICAgICAgaWYgKG1lLl9yZ2IubGVuZ3RoID09PSAzKSB7IG1lLl9yZ2IucHVzaCgxKTsgfVxuICAgIH07XG5cbiAgICBDb2xvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZyAoKSB7XG4gICAgICAgIGlmICh0eXBlJDEodGhpcy5oZXgpID09ICdmdW5jdGlvbicpIHsgcmV0dXJuIHRoaXMuaGV4KCk7IH1cbiAgICAgICAgcmV0dXJuIChcIltcIiArICh0aGlzLl9yZ2Iuam9pbignLCcpKSArIFwiXVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIENvbG9yXzEgPSBDb2xvcjtcblxuICAgIHZhciBjaHJvbWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgXHR2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIFx0d2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgIFx0cmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIGNocm9tYS5Db2xvciwgWyBudWxsIF0uY29uY2F0KCBhcmdzKSApKTtcbiAgICB9O1xuXG4gICAgY2hyb21hLkNvbG9yID0gQ29sb3JfMTtcbiAgICBjaHJvbWEudmVyc2lvbiA9ICcyLjAuMyc7XG5cbiAgICB2YXIgY2hyb21hXzEgPSBjaHJvbWE7XG5cbiAgICB2YXIgdW5wYWNrJDEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1heCA9IE1hdGgubWF4O1xuXG4gICAgdmFyIHJnYjJjbXlrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skMShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHIgPSByIC8gMjU1O1xuICAgICAgICBnID0gZyAvIDI1NTtcbiAgICAgICAgYiA9IGIgLyAyNTU7XG4gICAgICAgIHZhciBrID0gMSAtIG1heChyLG1heChnLGIpKTtcbiAgICAgICAgdmFyIGYgPSBrIDwgMSA/IDEgLyAoMS1rKSA6IDA7XG4gICAgICAgIHZhciBjID0gKDEtci1rKSAqIGY7XG4gICAgICAgIHZhciBtID0gKDEtZy1rKSAqIGY7XG4gICAgICAgIHZhciB5ID0gKDEtYi1rKSAqIGY7XG4gICAgICAgIHJldHVybiBbYyxtLHksa107XG4gICAgfTtcblxuICAgIHZhciByZ2IyY215a18xID0gcmdiMmNteWs7XG5cbiAgICB2YXIgdW5wYWNrJDIgPSB1dGlscy51bnBhY2s7XG5cbiAgICB2YXIgY215azJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayQyKGFyZ3MsICdjbXlrJyk7XG4gICAgICAgIHZhciBjID0gYXJnc1swXTtcbiAgICAgICAgdmFyIG0gPSBhcmdzWzFdO1xuICAgICAgICB2YXIgeSA9IGFyZ3NbMl07XG4gICAgICAgIHZhciBrID0gYXJnc1szXTtcbiAgICAgICAgdmFyIGFscGhhID0gYXJncy5sZW5ndGggPiA0ID8gYXJnc1s0XSA6IDE7XG4gICAgICAgIGlmIChrID09PSAxKSB7IHJldHVybiBbMCwwLDAsYWxwaGFdOyB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBjID49IDEgPyAwIDogMjU1ICogKDEtYykgKiAoMS1rKSwgLy8gclxuICAgICAgICAgICAgbSA+PSAxID8gMCA6IDI1NSAqICgxLW0pICogKDEtayksIC8vIGdcbiAgICAgICAgICAgIHkgPj0gMSA/IDAgOiAyNTUgKiAoMS15KSAqICgxLWspLCAvLyBiXG4gICAgICAgICAgICBhbHBoYVxuICAgICAgICBdO1xuICAgIH07XG5cbiAgICB2YXIgY215azJyZ2JfMSA9IGNteWsycmdiO1xuXG4gICAgdmFyIHVucGFjayQzID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDIgPSB1dGlscy50eXBlO1xuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmNteWsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjbXlrXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuY215ayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2NteWsnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5jbXlrID0gY215azJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDIsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJDMoYXJncywgJ2NteWsnKTtcbiAgICAgICAgICAgIGlmICh0eXBlJDIoYXJncykgPT09ICdhcnJheScgJiYgYXJncy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NteWsnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJDQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGxhc3QkMiA9IHV0aWxzLmxhc3Q7XG4gICAgdmFyIHJuZCA9IGZ1bmN0aW9uIChhKSB7IHJldHVybiBNYXRoLnJvdW5kKGEqMTAwKS8xMDA7IH07XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSBoc2wyY3NzKGgscyxsKVxuICAgICAqIC0gaHNsMmNzcyhoLHMsbCxhKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGxdLCBtb2RlKVxuICAgICAqIC0gaHNsMmNzcyhbaCxzLGwsYV0sIG1vZGUpXG4gICAgICogLSBoc2wyY3NzKHtoLHMsbCxhfSwgbW9kZSlcbiAgICAgKi9cbiAgICB2YXIgaHNsMmNzcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgaHNsYSA9IHVucGFjayQ0KGFyZ3MsICdoc2xhJyk7XG4gICAgICAgIHZhciBtb2RlID0gbGFzdCQyKGFyZ3MpIHx8ICdsc2EnO1xuICAgICAgICBoc2xhWzBdID0gcm5kKGhzbGFbMF0gfHwgMCk7XG4gICAgICAgIGhzbGFbMV0gPSBybmQoaHNsYVsxXSoxMDApICsgJyUnO1xuICAgICAgICBoc2xhWzJdID0gcm5kKGhzbGFbMl0qMTAwKSArICclJztcbiAgICAgICAgaWYgKG1vZGUgPT09ICdoc2xhJyB8fCAoaHNsYS5sZW5ndGggPiAzICYmIGhzbGFbM108MSkpIHtcbiAgICAgICAgICAgIGhzbGFbM10gPSBoc2xhLmxlbmd0aCA+IDMgPyBoc2xhWzNdIDogMTtcbiAgICAgICAgICAgIG1vZGUgPSAnaHNsYSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoc2xhLmxlbmd0aCA9IDM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChtb2RlICsgXCIoXCIgKyAoaHNsYS5qb2luKCcsJykpICsgXCIpXCIpO1xuICAgIH07XG5cbiAgICB2YXIgaHNsMmNzc18xID0gaHNsMmNzcztcblxuICAgIHZhciB1bnBhY2skNSA9IHV0aWxzLnVucGFjaztcblxuICAgIC8qXG4gICAgICogc3VwcG9ydGVkIGFyZ3VtZW50czpcbiAgICAgKiAtIHJnYjJoc2wocixnLGIpXG4gICAgICogLSByZ2IyaHNsKHIsZyxiLGEpXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYl0pXG4gICAgICogLSByZ2IyaHNsKFtyLGcsYixhXSlcbiAgICAgKiAtIHJnYjJoc2woe3IsZyxiLGF9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIGFyZ3MgPSB1bnBhY2skNShhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBnID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuXG4gICAgICAgIHIgLz0gMjU1O1xuICAgICAgICBnIC89IDI1NTtcbiAgICAgICAgYiAvPSAyNTU7XG5cbiAgICAgICAgdmFyIG1pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgICAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG5cbiAgICAgICAgdmFyIGwgPSAobWF4ICsgbWluKSAvIDI7XG4gICAgICAgIHZhciBzLCBoO1xuXG4gICAgICAgIGlmIChtYXggPT09IG1pbil7XG4gICAgICAgICAgICBzID0gMDtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcyA9IGwgPCAwLjUgPyAobWF4IC0gbWluKSAvIChtYXggKyBtaW4pIDogKG1heCAtIG1pbikgLyAoMiAtIG1heCAtIG1pbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAociA9PSBtYXgpIHsgaCA9IChnIC0gYikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChnID09IG1heCkgeyBoID0gMiArIChiIC0gcikgLyAobWF4IC0gbWluKTsgfVxuICAgICAgICBlbHNlIGlmIChiID09IG1heCkgeyBoID0gNCArIChyIC0gZykgLyAobWF4IC0gbWluKTsgfVxuXG4gICAgICAgIGggKj0gNjA7XG4gICAgICAgIGlmIChoIDwgMCkgeyBoICs9IDM2MDsgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGg+MyAmJiBhcmdzWzNdIT09dW5kZWZpbmVkKSB7IHJldHVybiBbaCxzLGwsYXJnc1szXV07IH1cbiAgICAgICAgcmV0dXJuIFtoLHMsbF07XG4gICAgfTtcblxuICAgIHZhciByZ2IyaHNsXzEgPSByZ2IyaHNsO1xuXG4gICAgdmFyIHVucGFjayQ2ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDMgPSB1dGlscy5sYXN0O1xuXG5cbiAgICB2YXIgcm91bmQgPSBNYXRoLnJvdW5kO1xuXG4gICAgLypcbiAgICAgKiBzdXBwb3J0ZWQgYXJndW1lbnRzOlxuICAgICAqIC0gcmdiMmNzcyhyLGcsYilcbiAgICAgKiAtIHJnYjJjc3MocixnLGIsYSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiXSwgbW9kZSlcbiAgICAgKiAtIHJnYjJjc3MoW3IsZyxiLGFdLCBtb2RlKVxuICAgICAqIC0gcmdiMmNzcyh7cixnLGIsYX0sIG1vZGUpXG4gICAgICovXG4gICAgdmFyIHJnYjJjc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJnYmEgPSB1bnBhY2skNihhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgbW9kZSA9IGxhc3QkMyhhcmdzKSB8fCAncmdiJztcbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMykgPT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBoc2wyY3NzXzEocmdiMmhzbF8xKHJnYmEpLCBtb2RlKTtcbiAgICAgICAgfVxuICAgICAgICByZ2JhWzBdID0gcm91bmQocmdiYVswXSk7XG4gICAgICAgIHJnYmFbMV0gPSByb3VuZChyZ2JhWzFdKTtcbiAgICAgICAgcmdiYVsyXSA9IHJvdW5kKHJnYmFbMl0pO1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3JnYmEnIHx8IChyZ2JhLmxlbmd0aCA+IDMgJiYgcmdiYVszXTwxKSkge1xuICAgICAgICAgICAgcmdiYVszXSA9IHJnYmEubGVuZ3RoID4gMyA/IHJnYmFbM10gOiAxO1xuICAgICAgICAgICAgbW9kZSA9ICdyZ2JhJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gKG1vZGUgKyBcIihcIiArIChyZ2JhLnNsaWNlKDAsbW9kZT09PSdyZ2InPzM6NCkuam9pbignLCcpKSArIFwiKVwiKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJjc3NfMSA9IHJnYjJjc3M7XG5cbiAgICB2YXIgUkVfSEVYID0gL14jPyhbQS1GYS1mMC05XXs2fXxbQS1GYS1mMC05XXszfSkkLztcbiAgICB2YXIgUkVfSEVYQSA9IC9eIz8oW0EtRmEtZjAtOV17OH0pJC87XG5cbiAgICB2YXIgaGV4MnJnYiA9IGZ1bmN0aW9uIChoZXgpIHtcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVgpKSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gNCB8fCBoZXgubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGV4cGFuZCBzaG9ydC1ub3RhdGlvbiB0byBmdWxsIHNpeC1kaWdpdFxuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICBoZXggPSBoZXguc3BsaXQoJycpO1xuICAgICAgICAgICAgICAgIGhleCA9IGhleFswXStoZXhbMF0raGV4WzFdK2hleFsxXStoZXhbMl0raGV4WzJdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHUgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByID0gdSA+PiAxNjtcbiAgICAgICAgICAgIHZhciBnID0gdSA+PiA4ICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gdSAmIDB4RkY7XG4gICAgICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggcmdiYSBoZXggZm9ybWF0LCBlZyAjRkYwMDAwNzdcbiAgICAgICAgaWYgKGhleC5tYXRjaChSRV9IRVhBKSkge1xuICAgICAgICAgICAgaWYgKGhleC5sZW5ndGggPT09IDkpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgb3B0aW9uYWwgbGVhZGluZyAjXG4gICAgICAgICAgICAgICAgaGV4ID0gaGV4LnN1YnN0cigxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB1JDEgPSBwYXJzZUludChoZXgsIDE2KTtcbiAgICAgICAgICAgIHZhciByJDEgPSB1JDEgPj4gMjQgJiAweEZGO1xuICAgICAgICAgICAgdmFyIGckMSA9IHUkMSA+PiAxNiAmIDB4RkY7XG4gICAgICAgICAgICB2YXIgYiQxID0gdSQxID4+IDggJiAweEZGO1xuICAgICAgICAgICAgdmFyIGEgPSBNYXRoLnJvdW5kKCh1JDEgJiAweEZGKSAvIDB4RkYgKiAxMDApIC8gMTAwO1xuICAgICAgICAgICAgcmV0dXJuIFtyJDEsZyQxLGIkMSxhXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHdlIHVzZWQgdG8gY2hlY2sgZm9yIGNzcyBjb2xvcnMgaGVyZVxuICAgICAgICAvLyBpZiBfaW5wdXQuY3NzPyBhbmQgcmdiID0gX2lucHV0LmNzcyBoZXhcbiAgICAgICAgLy8gICAgIHJldHVybiByZ2JcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKFwidW5rbm93biBoZXggY29sb3I6IFwiICsgaGV4KSk7XG4gICAgfTtcblxuICAgIHZhciBoZXgycmdiXzEgPSBoZXgycmdiO1xuXG4gICAgdmFyIHVucGFjayQ3ID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciByb3VuZCQxID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBoc2wycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduO1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skNyhhcmdzLCAnaHNsJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIHMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMl07XG4gICAgICAgIHZhciByLGcsYjtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IGwqMjU1O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHQzID0gWzAsMCwwXTtcbiAgICAgICAgICAgIHZhciBjID0gWzAsMCwwXTtcbiAgICAgICAgICAgIHZhciB0MiA9IGwgPCAwLjUgPyBsICogKDErcykgOiBsK3MtbCpzO1xuICAgICAgICAgICAgdmFyIHQxID0gMiAqIGwgLSB0MjtcbiAgICAgICAgICAgIHZhciBoXyA9IGggLyAzNjA7XG4gICAgICAgICAgICB0M1swXSA9IGhfICsgMS8zO1xuICAgICAgICAgICAgdDNbMV0gPSBoXztcbiAgICAgICAgICAgIHQzWzJdID0gaF8gLSAxLzM7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQzW2ldIDwgMCkgeyB0M1tpXSArPSAxOyB9XG4gICAgICAgICAgICAgICAgaWYgKHQzW2ldID4gMSkgeyB0M1tpXSAtPSAxOyB9XG4gICAgICAgICAgICAgICAgaWYgKDYgKiB0M1tpXSA8IDEpXG4gICAgICAgICAgICAgICAgICAgIHsgY1tpXSA9IHQxICsgKHQyIC0gdDEpICogNiAqIHQzW2ldOyB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoMiAqIHQzW2ldIDwgMSlcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDI7IH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICgzICogdDNbaV0gPCAyKVxuICAgICAgICAgICAgICAgICAgICB7IGNbaV0gPSB0MSArICh0MiAtIHQxKSAqICgoMiAvIDMpIC0gdDNbaV0pICogNjsgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgeyBjW2ldID0gdDE7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChhc3NpZ24gPSBbcm91bmQkMShjWzBdKjI1NSkscm91bmQkMShjWzFdKjI1NSkscm91bmQkMShjWzJdKjI1NSldLCByID0gYXNzaWduWzBdLCBnID0gYXNzaWduWzFdLCBiID0gYXNzaWduWzJdKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYXJncy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAvLyBrZWVwIGFscGhhIGNoYW5uZWxcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsYXJnc1szXV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLGcsYiwxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzbDJyZ2JfMSA9IGhzbDJyZ2I7XG5cbiAgICAvKipcbiAgICBcdFgxMSBjb2xvciBuYW1lc1xuXG4gICAgXHRodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLWNvbG9yLyNzdmctY29sb3JcbiAgICAqL1xuXG4gICAgdmFyIHczY3gxMSA9IHtcbiAgICAgICAgYWxpY2VibHVlOiAnI2YwZjhmZicsXG4gICAgICAgIGFudGlxdWV3aGl0ZTogJyNmYWViZDcnLFxuICAgICAgICBhcXVhOiAnIzAwZmZmZicsXG4gICAgICAgIGFxdWFtYXJpbmU6ICcjN2ZmZmQ0JyxcbiAgICAgICAgYXp1cmU6ICcjZjBmZmZmJyxcbiAgICAgICAgYmVpZ2U6ICcjZjVmNWRjJyxcbiAgICAgICAgYmlzcXVlOiAnI2ZmZTRjNCcsXG4gICAgICAgIGJsYWNrOiAnIzAwMDAwMCcsXG4gICAgICAgIGJsYW5jaGVkYWxtb25kOiAnI2ZmZWJjZCcsXG4gICAgICAgIGJsdWU6ICcjMDAwMGZmJyxcbiAgICAgICAgYmx1ZXZpb2xldDogJyM4YTJiZTInLFxuICAgICAgICBicm93bjogJyNhNTJhMmEnLFxuICAgICAgICBidXJseXdvb2Q6ICcjZGViODg3JyxcbiAgICAgICAgY2FkZXRibHVlOiAnIzVmOWVhMCcsXG4gICAgICAgIGNoYXJ0cmV1c2U6ICcjN2ZmZjAwJyxcbiAgICAgICAgY2hvY29sYXRlOiAnI2QyNjkxZScsXG4gICAgICAgIGNvcmFsOiAnI2ZmN2Y1MCcsXG4gICAgICAgIGNvcm5mbG93ZXI6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybmZsb3dlcmJsdWU6ICcjNjQ5NWVkJyxcbiAgICAgICAgY29ybnNpbGs6ICcjZmZmOGRjJyxcbiAgICAgICAgY3JpbXNvbjogJyNkYzE0M2MnLFxuICAgICAgICBjeWFuOiAnIzAwZmZmZicsXG4gICAgICAgIGRhcmtibHVlOiAnIzAwMDA4YicsXG4gICAgICAgIGRhcmtjeWFuOiAnIzAwOGI4YicsXG4gICAgICAgIGRhcmtnb2xkZW5yb2Q6ICcjYjg4NjBiJyxcbiAgICAgICAgZGFya2dyYXk6ICcjYTlhOWE5JyxcbiAgICAgICAgZGFya2dyZWVuOiAnIzAwNjQwMCcsXG4gICAgICAgIGRhcmtncmV5OiAnI2E5YTlhOScsXG4gICAgICAgIGRhcmtraGFraTogJyNiZGI3NmInLFxuICAgICAgICBkYXJrbWFnZW50YTogJyM4YjAwOGInLFxuICAgICAgICBkYXJrb2xpdmVncmVlbjogJyM1NTZiMmYnLFxuICAgICAgICBkYXJrb3JhbmdlOiAnI2ZmOGMwMCcsXG4gICAgICAgIGRhcmtvcmNoaWQ6ICcjOTkzMmNjJyxcbiAgICAgICAgZGFya3JlZDogJyM4YjAwMDAnLFxuICAgICAgICBkYXJrc2FsbW9uOiAnI2U5OTY3YScsXG4gICAgICAgIGRhcmtzZWFncmVlbjogJyM4ZmJjOGYnLFxuICAgICAgICBkYXJrc2xhdGVibHVlOiAnIzQ4M2Q4YicsXG4gICAgICAgIGRhcmtzbGF0ZWdyYXk6ICcjMmY0ZjRmJyxcbiAgICAgICAgZGFya3NsYXRlZ3JleTogJyMyZjRmNGYnLFxuICAgICAgICBkYXJrdHVycXVvaXNlOiAnIzAwY2VkMScsXG4gICAgICAgIGRhcmt2aW9sZXQ6ICcjOTQwMGQzJyxcbiAgICAgICAgZGVlcHBpbms6ICcjZmYxNDkzJyxcbiAgICAgICAgZGVlcHNreWJsdWU6ICcjMDBiZmZmJyxcbiAgICAgICAgZGltZ3JheTogJyM2OTY5NjknLFxuICAgICAgICBkaW1ncmV5OiAnIzY5Njk2OScsXG4gICAgICAgIGRvZGdlcmJsdWU6ICcjMWU5MGZmJyxcbiAgICAgICAgZmlyZWJyaWNrOiAnI2IyMjIyMicsXG4gICAgICAgIGZsb3JhbHdoaXRlOiAnI2ZmZmFmMCcsXG4gICAgICAgIGZvcmVzdGdyZWVuOiAnIzIyOGIyMicsXG4gICAgICAgIGZ1Y2hzaWE6ICcjZmYwMGZmJyxcbiAgICAgICAgZ2FpbnNib3JvOiAnI2RjZGNkYycsXG4gICAgICAgIGdob3N0d2hpdGU6ICcjZjhmOGZmJyxcbiAgICAgICAgZ29sZDogJyNmZmQ3MDAnLFxuICAgICAgICBnb2xkZW5yb2Q6ICcjZGFhNTIwJyxcbiAgICAgICAgZ3JheTogJyM4MDgwODAnLFxuICAgICAgICBncmVlbjogJyMwMDgwMDAnLFxuICAgICAgICBncmVlbnllbGxvdzogJyNhZGZmMmYnLFxuICAgICAgICBncmV5OiAnIzgwODA4MCcsXG4gICAgICAgIGhvbmV5ZGV3OiAnI2YwZmZmMCcsXG4gICAgICAgIGhvdHBpbms6ICcjZmY2OWI0JyxcbiAgICAgICAgaW5kaWFucmVkOiAnI2NkNWM1YycsXG4gICAgICAgIGluZGlnbzogJyM0YjAwODInLFxuICAgICAgICBpdm9yeTogJyNmZmZmZjAnLFxuICAgICAgICBraGFraTogJyNmMGU2OGMnLFxuICAgICAgICBsYXNlcmxlbW9uOiAnI2ZmZmY1NCcsXG4gICAgICAgIGxhdmVuZGVyOiAnI2U2ZTZmYScsXG4gICAgICAgIGxhdmVuZGVyYmx1c2g6ICcjZmZmMGY1JyxcbiAgICAgICAgbGF3bmdyZWVuOiAnIzdjZmMwMCcsXG4gICAgICAgIGxlbW9uY2hpZmZvbjogJyNmZmZhY2QnLFxuICAgICAgICBsaWdodGJsdWU6ICcjYWRkOGU2JyxcbiAgICAgICAgbGlnaHRjb3JhbDogJyNmMDgwODAnLFxuICAgICAgICBsaWdodGN5YW46ICcjZTBmZmZmJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2Q6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRnb2xkZW5yb2R5ZWxsb3c6ICcjZmFmYWQyJyxcbiAgICAgICAgbGlnaHRncmF5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0Z3JlZW46ICcjOTBlZTkwJyxcbiAgICAgICAgbGlnaHRncmV5OiAnI2QzZDNkMycsXG4gICAgICAgIGxpZ2h0cGluazogJyNmZmI2YzEnLFxuICAgICAgICBsaWdodHNhbG1vbjogJyNmZmEwN2EnLFxuICAgICAgICBsaWdodHNlYWdyZWVuOiAnIzIwYjJhYScsXG4gICAgICAgIGxpZ2h0c2t5Ymx1ZTogJyM4N2NlZmEnLFxuICAgICAgICBsaWdodHNsYXRlZ3JheTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHNsYXRlZ3JleTogJyM3Nzg4OTknLFxuICAgICAgICBsaWdodHN0ZWVsYmx1ZTogJyNiMGM0ZGUnLFxuICAgICAgICBsaWdodHllbGxvdzogJyNmZmZmZTAnLFxuICAgICAgICBsaW1lOiAnIzAwZmYwMCcsXG4gICAgICAgIGxpbWVncmVlbjogJyMzMmNkMzInLFxuICAgICAgICBsaW5lbjogJyNmYWYwZTYnLFxuICAgICAgICBtYWdlbnRhOiAnI2ZmMDBmZicsXG4gICAgICAgIG1hcm9vbjogJyM4MDAwMDAnLFxuICAgICAgICBtYXJvb24yOiAnIzdmMDAwMCcsXG4gICAgICAgIG1hcm9vbjM6ICcjYjAzMDYwJyxcbiAgICAgICAgbWVkaXVtYXF1YW1hcmluZTogJyM2NmNkYWEnLFxuICAgICAgICBtZWRpdW1ibHVlOiAnIzAwMDBjZCcsXG4gICAgICAgIG1lZGl1bW9yY2hpZDogJyNiYTU1ZDMnLFxuICAgICAgICBtZWRpdW1wdXJwbGU6ICcjOTM3MGRiJyxcbiAgICAgICAgbWVkaXVtc2VhZ3JlZW46ICcjM2NiMzcxJyxcbiAgICAgICAgbWVkaXVtc2xhdGVibHVlOiAnIzdiNjhlZScsXG4gICAgICAgIG1lZGl1bXNwcmluZ2dyZWVuOiAnIzAwZmE5YScsXG4gICAgICAgIG1lZGl1bXR1cnF1b2lzZTogJyM0OGQxY2MnLFxuICAgICAgICBtZWRpdW12aW9sZXRyZWQ6ICcjYzcxNTg1JyxcbiAgICAgICAgbWlkbmlnaHRibHVlOiAnIzE5MTk3MCcsXG4gICAgICAgIG1pbnRjcmVhbTogJyNmNWZmZmEnLFxuICAgICAgICBtaXN0eXJvc2U6ICcjZmZlNGUxJyxcbiAgICAgICAgbW9jY2FzaW46ICcjZmZlNGI1JyxcbiAgICAgICAgbmF2YWpvd2hpdGU6ICcjZmZkZWFkJyxcbiAgICAgICAgbmF2eTogJyMwMDAwODAnLFxuICAgICAgICBvbGRsYWNlOiAnI2ZkZjVlNicsXG4gICAgICAgIG9saXZlOiAnIzgwODAwMCcsXG4gICAgICAgIG9saXZlZHJhYjogJyM2YjhlMjMnLFxuICAgICAgICBvcmFuZ2U6ICcjZmZhNTAwJyxcbiAgICAgICAgb3JhbmdlcmVkOiAnI2ZmNDUwMCcsXG4gICAgICAgIG9yY2hpZDogJyNkYTcwZDYnLFxuICAgICAgICBwYWxlZ29sZGVucm9kOiAnI2VlZThhYScsXG4gICAgICAgIHBhbGVncmVlbjogJyM5OGZiOTgnLFxuICAgICAgICBwYWxldHVycXVvaXNlOiAnI2FmZWVlZScsXG4gICAgICAgIHBhbGV2aW9sZXRyZWQ6ICcjZGI3MDkzJyxcbiAgICAgICAgcGFwYXlhd2hpcDogJyNmZmVmZDUnLFxuICAgICAgICBwZWFjaHB1ZmY6ICcjZmZkYWI5JyxcbiAgICAgICAgcGVydTogJyNjZDg1M2YnLFxuICAgICAgICBwaW5rOiAnI2ZmYzBjYicsXG4gICAgICAgIHBsdW06ICcjZGRhMGRkJyxcbiAgICAgICAgcG93ZGVyYmx1ZTogJyNiMGUwZTYnLFxuICAgICAgICBwdXJwbGU6ICcjODAwMDgwJyxcbiAgICAgICAgcHVycGxlMjogJyM3ZjAwN2YnLFxuICAgICAgICBwdXJwbGUzOiAnI2EwMjBmMCcsXG4gICAgICAgIHJlYmVjY2FwdXJwbGU6ICcjNjYzMzk5JyxcbiAgICAgICAgcmVkOiAnI2ZmMDAwMCcsXG4gICAgICAgIHJvc3licm93bjogJyNiYzhmOGYnLFxuICAgICAgICByb3lhbGJsdWU6ICcjNDE2OWUxJyxcbiAgICAgICAgc2FkZGxlYnJvd246ICcjOGI0NTEzJyxcbiAgICAgICAgc2FsbW9uOiAnI2ZhODA3MicsXG4gICAgICAgIHNhbmR5YnJvd246ICcjZjRhNDYwJyxcbiAgICAgICAgc2VhZ3JlZW46ICcjMmU4YjU3JyxcbiAgICAgICAgc2Vhc2hlbGw6ICcjZmZmNWVlJyxcbiAgICAgICAgc2llbm5hOiAnI2EwNTIyZCcsXG4gICAgICAgIHNpbHZlcjogJyNjMGMwYzAnLFxuICAgICAgICBza3libHVlOiAnIzg3Y2VlYicsXG4gICAgICAgIHNsYXRlYmx1ZTogJyM2YTVhY2QnLFxuICAgICAgICBzbGF0ZWdyYXk6ICcjNzA4MDkwJyxcbiAgICAgICAgc2xhdGVncmV5OiAnIzcwODA5MCcsXG4gICAgICAgIHNub3c6ICcjZmZmYWZhJyxcbiAgICAgICAgc3ByaW5nZ3JlZW46ICcjMDBmZjdmJyxcbiAgICAgICAgc3RlZWxibHVlOiAnIzQ2ODJiNCcsXG4gICAgICAgIHRhbjogJyNkMmI0OGMnLFxuICAgICAgICB0ZWFsOiAnIzAwODA4MCcsXG4gICAgICAgIHRoaXN0bGU6ICcjZDhiZmQ4JyxcbiAgICAgICAgdG9tYXRvOiAnI2ZmNjM0NycsXG4gICAgICAgIHR1cnF1b2lzZTogJyM0MGUwZDAnLFxuICAgICAgICB2aW9sZXQ6ICcjZWU4MmVlJyxcbiAgICAgICAgd2hlYXQ6ICcjZjVkZWIzJyxcbiAgICAgICAgd2hpdGU6ICcjZmZmZmZmJyxcbiAgICAgICAgd2hpdGVzbW9rZTogJyNmNWY1ZjUnLFxuICAgICAgICB5ZWxsb3c6ICcjZmZmZjAwJyxcbiAgICAgICAgeWVsbG93Z3JlZW46ICcjOWFjZDMyJ1xuICAgIH07XG5cbiAgICB2YXIgdzNjeDExXzEgPSB3M2N4MTE7XG5cbiAgICB2YXIgUkVfUkdCID0gL15yZ2JcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqXFwpJC87XG4gICAgdmFyIFJFX1JHQkEgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyksXFxzKigtP1xcZCspXFxzKixcXHMqKC0/XFxkKylcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX1JHQl9QQ1QgPSAvXnJnYlxcKFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSUsXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccypcXCkkLztcbiAgICB2YXIgUkVfUkdCQV9QQ1QgPSAvXnJnYmFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyklLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooWzAxXXxbMDFdP1xcLlxcZCspXFwpJC87XG4gICAgdmFyIFJFX0hTTCA9IC9eaHNsXFwoXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqLFxccyooLT9cXGQrKD86XFwuXFxkKyk/KSVcXHMqXFwpJC87XG4gICAgdmFyIFJFX0hTTEEgPSAvXmhzbGFcXChcXHMqKC0/XFxkKyg/OlxcLlxcZCspPyksXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKigtP1xcZCsoPzpcXC5cXGQrKT8pJVxccyosXFxzKihbMDFdfFswMV0/XFwuXFxkKylcXCkkLztcblxuICAgIHZhciByb3VuZCQyID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciBjc3MycmdiID0gZnVuY3Rpb24gKGNzcykge1xuICAgICAgICBjc3MgPSBjc3MudG9Mb3dlckNhc2UoKS50cmltKCk7XG4gICAgICAgIC8vIG5hbWVkIFgxMSBjb2xvcnNcbiAgICAgICAgaWYgKHczY3gxMV8xW2Nzc10pIHtcbiAgICAgICAgICAgIHJldHVybiBoZXgycmdiXzEodzNjeDExXzFbY3NzXSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG07XG5cbiAgICAgICAgLy8gcmdiKDI1MCwyMCwwKVxuICAgICAgICBpZiAoKG0gPSBjc3MubWF0Y2goUkVfUkdCKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IgPSBtLnNsaWNlKDEsNCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8MzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcmdiW2ldID0gK3JnYltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYlszXSA9IDE7ICAvLyBkZWZhdWx0IGFscGhhXG4gICAgICAgICAgICByZXR1cm4gcmdiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmdiYSgyNTAsMjAsMCwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBKSkpIHtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IG0uc2xpY2UoMSw1KTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8NDsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICByZ2IkMVtpJDFdID0gK3JnYiQxW2kkMV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmdiJDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZ2IoMTAwJSwwJSwwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX1JHQl9QQ1QpKSkge1xuICAgICAgICAgICAgdmFyIHJnYiQyID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQyPTA7IGkkMjwzOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHJnYiQyW2kkMl0gPSByb3VuZCQyKHJnYiQyW2kkMl0gKiAyLjU1KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJnYiQyWzNdID0gMTsgIC8vIGRlZmF1bHQgYWxwaGFcbiAgICAgICAgICAgIHJldHVybiByZ2IkMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJnYmEoMTAwJSwwJSwwJSwwLjQpXG4gICAgICAgIGlmICgobSA9IGNzcy5tYXRjaChSRV9SR0JBX1BDVCkpKSB7XG4gICAgICAgICAgICB2YXIgcmdiJDMgPSBtLnNsaWNlKDEsNSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDM9MDsgaSQzPDM7IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgcmdiJDNbaSQzXSA9IHJvdW5kJDIocmdiJDNbaSQzXSAqIDIuNTUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmdiJDNbM10gPSArcmdiJDNbM107XG4gICAgICAgICAgICByZXR1cm4gcmdiJDM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBoc2woMCwxMDAlLDUwJSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTCkpKSB7XG4gICAgICAgICAgICB2YXIgaHNsID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsWzFdICo9IDAuMDE7XG4gICAgICAgICAgICBoc2xbMl0gKj0gMC4wMTtcbiAgICAgICAgICAgIHZhciByZ2IkNCA9IGhzbDJyZ2JfMShoc2wpO1xuICAgICAgICAgICAgcmdiJDRbM10gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIHJnYiQ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaHNsYSgwLDEwMCUsNTAlLDAuNSlcbiAgICAgICAgaWYgKChtID0gY3NzLm1hdGNoKFJFX0hTTEEpKSkge1xuICAgICAgICAgICAgdmFyIGhzbCQxID0gbS5zbGljZSgxLDQpO1xuICAgICAgICAgICAgaHNsJDFbMV0gKj0gMC4wMTtcbiAgICAgICAgICAgIGhzbCQxWzJdICo9IDAuMDE7XG4gICAgICAgICAgICB2YXIgcmdiJDUgPSBoc2wycmdiXzEoaHNsJDEpO1xuICAgICAgICAgICAgcmdiJDVbM10gPSArbVs0XTsgIC8vIGRlZmF1bHQgYWxwaGEgPSAxXG4gICAgICAgICAgICByZXR1cm4gcmdiJDU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY3NzMnJnYi50ZXN0ID0gZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIFJFX1JHQi50ZXN0KHMpIHx8XG4gICAgICAgICAgICBSRV9SR0JBLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX1JHQl9QQ1QudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfUkdCQV9QQ1QudGVzdChzKSB8fFxuICAgICAgICAgICAgUkVfSFNMLnRlc3QocykgfHxcbiAgICAgICAgICAgIFJFX0hTTEEudGVzdChzKTtcbiAgICB9O1xuXG4gICAgdmFyIGNzczJyZ2JfMSA9IGNzczJyZ2I7XG5cbiAgICB2YXIgdHlwZSQzID0gdXRpbHMudHlwZTtcblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmNzcyA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJjc3NfMSh0aGlzLl9yZ2IsIG1vZGUpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5jc3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgcmV0dXJuIG5ldyAoRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQuYXBwbHkoIENvbG9yXzEsIFsgbnVsbCBdLmNvbmNhdCggYXJncywgWydjc3MnXSkgKSk7XG4gICAgfTtcblxuICAgIGlucHV0LmZvcm1hdC5jc3MgPSBjc3MycmdiXzE7XG5cbiAgICBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiA1LFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoaCkge1xuICAgICAgICAgICAgdmFyIHJlc3QgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAxIF07XG5cbiAgICAgICAgICAgIGlmICghcmVzdC5sZW5ndGggJiYgdHlwZSQzKGgpID09PSAnc3RyaW5nJyAmJiBjc3MycmdiXzEudGVzdChoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY3NzJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayQ4ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgaW5wdXQuZm9ybWF0LmdsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2IgPSB1bnBhY2skOChhcmdzLCAncmdiYScpO1xuICAgICAgICByZ2JbMF0gKj0gMjU1O1xuICAgICAgICByZ2JbMV0gKj0gMjU1O1xuICAgICAgICByZ2JbMl0gKj0gMjU1O1xuICAgICAgICByZXR1cm4gcmdiO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS5nbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2dsJ10pICkpO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5nbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcmdiID0gdGhpcy5fcmdiO1xuICAgICAgICByZXR1cm4gW3JnYlswXS8yNTUsIHJnYlsxXS8yNTUsIHJnYlsyXS8yNTUsIHJnYlszXV07XG4gICAgfTtcblxuICAgIHZhciB1bnBhY2skOSA9IHV0aWxzLnVucGFjaztcblxuICAgIHZhciByZ2IyaGNnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skOShhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgICAgICB2YXIgZGVsdGEgPSBtYXggLSBtaW47XG4gICAgICAgIHZhciBjID0gZGVsdGEgKiAxMDAgLyAyNTU7XG4gICAgICAgIHZhciBfZyA9IG1pbiAvICgyNTUgLSBkZWx0YSkgKiAxMDA7XG4gICAgICAgIHZhciBoO1xuICAgICAgICBpZiAoZGVsdGEgPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heCkgeyBoID0gKGcgLSBiKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoZyA9PT0gbWF4KSB7IGggPSAyKyhiIC0gcikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGIgPT09IG1heCkgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIGMsIF9nXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJoY2dfMSA9IHJnYjJoY2c7XG5cbiAgICB2YXIgdW5wYWNrJGEgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIGZsb29yID0gTWF0aC5mbG9vcjtcblxuICAgIC8qXG4gICAgICogdGhpcyBpcyBiYXNpY2FsbHkganVzdCBIU1Ygd2l0aCBzb21lIG1pbm9yIHR3ZWFrc1xuICAgICAqXG4gICAgICogaHVlLi4gWzAuLjM2MF1cbiAgICAgKiBjaHJvbWEgLi4gWzAuLjFdXG4gICAgICogZ3JheW5lc3MgLi4gWzAuLjFdXG4gICAgICovXG5cbiAgICB2YXIgaGNnMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFzc2lnbiwgYXNzaWduJDEsIGFzc2lnbiQyLCBhc3NpZ24kMywgYXNzaWduJDQsIGFzc2lnbiQ1O1xuXG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG4gICAgICAgIGFyZ3MgPSB1bnBhY2skYShhcmdzLCAnaGNnJyk7XG4gICAgICAgIHZhciBoID0gYXJnc1swXTtcbiAgICAgICAgdmFyIGMgPSBhcmdzWzFdO1xuICAgICAgICB2YXIgX2cgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIF9nID0gX2cgKiAyNTU7XG4gICAgICAgIHZhciBfYyA9IGMgKiAyNTU7XG4gICAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgICAgICByID0gZyA9IGIgPSBfZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChoID09PSAzNjApIHsgaCA9IDA7IH1cbiAgICAgICAgICAgIGlmIChoID4gMzYwKSB7IGggLT0gMzYwOyB9XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgICAgIGggLz0gNjA7XG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yKGgpO1xuICAgICAgICAgICAgdmFyIGYgPSBoIC0gaTtcbiAgICAgICAgICAgIHZhciBwID0gX2cgKiAoMSAtIGMpO1xuICAgICAgICAgICAgdmFyIHEgPSBwICsgX2MgKiAoMSAtIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSBwICsgX2MgKiBmO1xuICAgICAgICAgICAgdmFyIHYgPSBwICsgX2M7XG4gICAgICAgICAgICBzd2l0Y2ggKGkpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IChhc3NpZ24gPSBbdiwgdCwgcF0sIHIgPSBhc3NpZ25bMF0sIGcgPSBhc3NpZ25bMV0sIGIgPSBhc3NpZ25bMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMTogKGFzc2lnbiQxID0gW3EsIHYsIHBdLCByID0gYXNzaWduJDFbMF0sIGcgPSBhc3NpZ24kMVsxXSwgYiA9IGFzc2lnbiQxWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDI6IChhc3NpZ24kMiA9IFtwLCB2LCB0XSwgciA9IGFzc2lnbiQyWzBdLCBnID0gYXNzaWduJDJbMV0sIGIgPSBhc3NpZ24kMlsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAzOiAoYXNzaWduJDMgPSBbcCwgcSwgdl0sIHIgPSBhc3NpZ24kM1swXSwgZyA9IGFzc2lnbiQzWzFdLCBiID0gYXNzaWduJDNbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNDogKGFzc2lnbiQ0ID0gW3QsIHAsIHZdLCByID0gYXNzaWduJDRbMF0sIGcgPSBhc3NpZ24kNFsxXSwgYiA9IGFzc2lnbiQ0WzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IChhc3NpZ24kNSA9IFt2LCBwLCBxXSwgciA9IGFzc2lnbiQ1WzBdLCBnID0gYXNzaWduJDVbMV0sIGIgPSBhc3NpZ24kNVsyXSk7IGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtyLCBnLCBiLCBhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciBoY2cycmdiXzEgPSBoY2cycmdiO1xuXG4gICAgdmFyIHVucGFjayRiID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciB0eXBlJDQgPSB1dGlscy50eXBlO1xuXG5cblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLmhjZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gcmdiMmhjZ18xKHRoaXMuX3JnYik7XG4gICAgfTtcblxuICAgIGNocm9tYV8xLmhjZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjZyddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0LmhjZyA9IGhjZzJyZ2JfMTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDEsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgICAgICBhcmdzID0gdW5wYWNrJGIoYXJncywgJ2hjZycpO1xuICAgICAgICAgICAgaWYgKHR5cGUkNChhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiAnaGNnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayRjID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBsYXN0JDQgPSB1dGlscy5sYXN0O1xuICAgIHZhciByb3VuZCQzID0gTWF0aC5yb3VuZDtcblxuICAgIHZhciByZ2IyaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skYyhhcmdzLCAncmdiYScpO1xuICAgICAgICB2YXIgciA9IHJlZlswXTtcbiAgICAgICAgdmFyIGcgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgYSA9IHJlZlszXTtcbiAgICAgICAgdmFyIG1vZGUgPSBsYXN0JDQoYXJncykgfHwgJ2F1dG8nO1xuICAgICAgICBpZiAoYSA9PT0gdW5kZWZpbmVkKSB7IGEgPSAxOyB9XG4gICAgICAgIGlmIChtb2RlID09PSAnYXV0bycpIHtcbiAgICAgICAgICAgIG1vZGUgPSBhIDwgMSA/ICdyZ2JhJyA6ICdyZ2InO1xuICAgICAgICB9XG4gICAgICAgIHIgPSByb3VuZCQzKHIpO1xuICAgICAgICBnID0gcm91bmQkMyhnKTtcbiAgICAgICAgYiA9IHJvdW5kJDMoYik7XG4gICAgICAgIHZhciB1ID0gciA8PCAxNiB8IGcgPDwgOCB8IGI7XG4gICAgICAgIHZhciBzdHIgPSBcIjAwMDAwMFwiICsgdS50b1N0cmluZygxNik7IC8vIy50b1VwcGVyQ2FzZSgpO1xuICAgICAgICBzdHIgPSBzdHIuc3Vic3RyKHN0ci5sZW5ndGggLSA2KTtcbiAgICAgICAgdmFyIGh4YSA9ICcwJyArIHJvdW5kJDMoYSAqIDI1NSkudG9TdHJpbmcoMTYpO1xuICAgICAgICBoeGEgPSBoeGEuc3Vic3RyKGh4YS5sZW5ndGggLSAyKTtcbiAgICAgICAgc3dpdGNoIChtb2RlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgIGNhc2UgJ3JnYmEnOiByZXR1cm4gKFwiI1wiICsgc3RyICsgaHhhKTtcbiAgICAgICAgICAgIGNhc2UgJ2FyZ2InOiByZXR1cm4gKFwiI1wiICsgaHhhICsgc3RyKTtcbiAgICAgICAgICAgIGRlZmF1bHQ6IHJldHVybiAoXCIjXCIgKyBzdHIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZhciByZ2IyaGV4XzEgPSByZ2IyaGV4O1xuXG4gICAgdmFyIHR5cGUkNSA9IHV0aWxzLnR5cGU7XG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oZXggPSBmdW5jdGlvbihtb2RlKSB7XG4gICAgICAgIHJldHVybiByZ2IyaGV4XzEodGhpcy5fcmdiLCBtb2RlKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuaGV4ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaGV4J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQuaGV4ID0gaGV4MnJnYl8xO1xuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDQsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJDUoaCkgPT09ICdzdHJpbmcnICYmIFszLDQsNiw3LDgsOV0uaW5jbHVkZXMoaC5sZW5ndGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoZXgnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGQgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFRXT1BJID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIG1pbiA9IE1hdGgubWluO1xuICAgIHZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhY29zID0gTWF0aC5hY29zO1xuXG4gICAgdmFyIHJnYjJoc2kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvcmdiMmhzaS5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRkKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgciAvPSAyNTU7XG4gICAgICAgIGcgLz0gMjU1O1xuICAgICAgICBiIC89IDI1NTtcbiAgICAgICAgdmFyIGg7XG4gICAgICAgIHZhciBtaW5fID0gbWluKHIsZyxiKTtcbiAgICAgICAgdmFyIGkgPSAocitnK2IpIC8gMztcbiAgICAgICAgdmFyIHMgPSBpID4gMCA/IDEgLSBtaW5fL2kgOiAwO1xuICAgICAgICBpZiAocyA9PT0gMCkge1xuICAgICAgICAgICAgaCA9IE5hTjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggPSAoKHItZykrKHItYikpIC8gMjtcbiAgICAgICAgICAgIGggLz0gc3FydCgoci1nKSooci1nKSArIChyLWIpKihnLWIpKTtcbiAgICAgICAgICAgIGggPSBhY29zKGgpO1xuICAgICAgICAgICAgaWYgKGIgPiBnKSB7XG4gICAgICAgICAgICAgICAgaCA9IFRXT1BJIC0gaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGggLz0gVFdPUEk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtoKjM2MCxzLGldO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMmhzaV8xID0gcmdiMmhzaTtcblxuICAgIHZhciB1bnBhY2skZSA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgbGltaXQkMSA9IHV0aWxzLmxpbWl0O1xuICAgIHZhciBUV09QSSQxID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIFBJVEhJUkQgPSB1dGlscy5QSVRISVJEO1xuICAgIHZhciBjb3MgPSBNYXRoLmNvcztcblxuICAgIC8qXG4gICAgICogaHVlIFswLi4zNjBdXG4gICAgICogc2F0dXJhdGlvbiBbMC4uMV1cbiAgICAgKiBpbnRlbnNpdHkgWzAuLjFdXG4gICAgICovXG4gICAgdmFyIGhzaTJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgLypcbiAgICAgICAgYm9ycm93ZWQgZnJvbSBoZXJlOlxuICAgICAgICBodHRwOi8vaHVtbWVyLnN0YW5mb3JkLmVkdS9tdXNlaW5mby9kb2MvZXhhbXBsZXMvaHVtZHJ1bS9rZXlzY2FwZTIvaHNpMnJnYi5jcHBcbiAgICAgICAgKi9cbiAgICAgICAgYXJncyA9IHVucGFjayRlKGFyZ3MsICdoc2knKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBpID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuXG4gICAgICAgIGlmIChpc05hTihoKSkgeyBoID0gMDsgfVxuICAgICAgICBpZiAoaXNOYU4ocykpIHsgcyA9IDA7IH1cbiAgICAgICAgLy8gbm9ybWFsaXplIGh1ZVxuICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgaCAvPSAzNjA7XG4gICAgICAgIGlmIChoIDwgMS8zKSB7XG4gICAgICAgICAgICBiID0gKDEtcykvMztcbiAgICAgICAgICAgIHIgPSAoMStzKmNvcyhUV09QSSQxKmgpL2NvcyhQSVRISVJELVRXT1BJJDEqaCkpLzM7XG4gICAgICAgICAgICBnID0gMSAtIChiK3IpO1xuICAgICAgICB9IGVsc2UgaWYgKGggPCAyLzMpIHtcbiAgICAgICAgICAgIGggLT0gMS8zO1xuICAgICAgICAgICAgciA9ICgxLXMpLzM7XG4gICAgICAgICAgICBnID0gKDErcypjb3MoVFdPUEkkMSpoKS9jb3MoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgYiA9IDEgLSAocitnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGggLT0gMi8zO1xuICAgICAgICAgICAgZyA9ICgxLXMpLzM7XG4gICAgICAgICAgICBiID0gKDErcypjb3MoVFdPUEkkMSpoKS9jb3MoUElUSElSRC1UV09QSSQxKmgpKS8zO1xuICAgICAgICAgICAgciA9IDEgLSAoZytiKTtcbiAgICAgICAgfVxuICAgICAgICByID0gbGltaXQkMShpKnIqMyk7XG4gICAgICAgIGcgPSBsaW1pdCQxKGkqZyozKTtcbiAgICAgICAgYiA9IGxpbWl0JDEoaSpiKjMpO1xuICAgICAgICByZXR1cm4gW3IqMjU1LCBnKjI1NSwgYioyNTUsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGhzaTJyZ2JfMSA9IGhzaTJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJGYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNiA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuaHNpID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNpXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuaHNpID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHNpJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQuaHNpID0gaHNpMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skZihhcmdzLCAnaHNpJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ2KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc2knO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGcgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkNyA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuaHNsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IyaHNsXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuaHNsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHNsJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQuaHNsID0gaHNsMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skZyhhcmdzLCAnaHNsJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ3KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc2wnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJGggPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIG1pbiQxID0gTWF0aC5taW47XG4gICAgdmFyIG1heCQxID0gTWF0aC5tYXg7XG5cbiAgICAvKlxuICAgICAqIHN1cHBvcnRlZCBhcmd1bWVudHM6XG4gICAgICogLSByZ2IyaHN2KHIsZyxiKVxuICAgICAqIC0gcmdiMmhzdihbcixnLGJdKVxuICAgICAqIC0gcmdiMmhzdih7cixnLGJ9KVxuICAgICAqL1xuICAgIHZhciByZ2IyaHNsJDEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRoKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgZyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBiID0gYXJnc1syXTtcbiAgICAgICAgdmFyIG1pbl8gPSBtaW4kMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIG1heF8gPSBtYXgkMShyLCBnLCBiKTtcbiAgICAgICAgdmFyIGRlbHRhID0gbWF4XyAtIG1pbl87XG4gICAgICAgIHZhciBoLHMsdjtcbiAgICAgICAgdiA9IG1heF8gLyAyNTUuMDtcbiAgICAgICAgaWYgKG1heF8gPT09IDApIHtcbiAgICAgICAgICAgIGggPSBOdW1iZXIuTmFOO1xuICAgICAgICAgICAgcyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzID0gZGVsdGEgLyBtYXhfO1xuICAgICAgICAgICAgaWYgKHIgPT09IG1heF8pIHsgaCA9IChnIC0gYikgLyBkZWx0YTsgfVxuICAgICAgICAgICAgaWYgKGcgPT09IG1heF8pIHsgaCA9IDIrKGIgLSByKSAvIGRlbHRhOyB9XG4gICAgICAgICAgICBpZiAoYiA9PT0gbWF4XykgeyBoID0gNCsociAtIGcpIC8gZGVsdGE7IH1cbiAgICAgICAgICAgIGggKj0gNjA7XG4gICAgICAgICAgICBpZiAoaCA8IDApIHsgaCArPSAzNjA7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2gsIHMsIHZdXG4gICAgfTtcblxuICAgIHZhciByZ2IyaHN2ID0gcmdiMmhzbCQxO1xuXG4gICAgdmFyIHVucGFjayRpID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBmbG9vciQxID0gTWF0aC5mbG9vcjtcblxuICAgIHZhciBoc3YycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzaWduLCBhc3NpZ24kMSwgYXNzaWduJDIsIGFzc2lnbiQzLCBhc3NpZ24kNCwgYXNzaWduJDU7XG5cbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcbiAgICAgICAgYXJncyA9IHVucGFjayRpKGFyZ3MsICdoc3YnKTtcbiAgICAgICAgdmFyIGggPSBhcmdzWzBdO1xuICAgICAgICB2YXIgcyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciB2ID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHIsZyxiO1xuICAgICAgICB2ICo9IDI1NTtcbiAgICAgICAgaWYgKHMgPT09IDApIHtcbiAgICAgICAgICAgIHIgPSBnID0gYiA9IHY7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaCA9PT0gMzYwKSB7IGggPSAwOyB9XG4gICAgICAgICAgICBpZiAoaCA+IDM2MCkgeyBoIC09IDM2MDsgfVxuICAgICAgICAgICAgaWYgKGggPCAwKSB7IGggKz0gMzYwOyB9XG4gICAgICAgICAgICBoIC89IDYwO1xuXG4gICAgICAgICAgICB2YXIgaSA9IGZsb29yJDEoaCk7XG4gICAgICAgICAgICB2YXIgZiA9IGggLSBpO1xuICAgICAgICAgICAgdmFyIHAgPSB2ICogKDEgLSBzKTtcbiAgICAgICAgICAgIHZhciBxID0gdiAqICgxIC0gcyAqIGYpO1xuICAgICAgICAgICAgdmFyIHQgPSB2ICogKDEgLSBzICogKDEgLSBmKSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogKGFzc2lnbiA9IFt2LCB0LCBwXSwgciA9IGFzc2lnblswXSwgZyA9IGFzc2lnblsxXSwgYiA9IGFzc2lnblsyXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSAxOiAoYXNzaWduJDEgPSBbcSwgdiwgcF0sIHIgPSBhc3NpZ24kMVswXSwgZyA9IGFzc2lnbiQxWzFdLCBiID0gYXNzaWduJDFbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgMjogKGFzc2lnbiQyID0gW3AsIHYsIHRdLCByID0gYXNzaWduJDJbMF0sIGcgPSBhc3NpZ24kMlsxXSwgYiA9IGFzc2lnbiQyWzJdKTsgYnJlYWtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IChhc3NpZ24kMyA9IFtwLCBxLCB2XSwgciA9IGFzc2lnbiQzWzBdLCBnID0gYXNzaWduJDNbMV0sIGIgPSBhc3NpZ24kM1syXSk7IGJyZWFrXG4gICAgICAgICAgICAgICAgY2FzZSA0OiAoYXNzaWduJDQgPSBbdCwgcCwgdl0sIHIgPSBhc3NpZ24kNFswXSwgZyA9IGFzc2lnbiQ0WzFdLCBiID0gYXNzaWduJDRbMl0pOyBicmVha1xuICAgICAgICAgICAgICAgIGNhc2UgNTogKGFzc2lnbiQ1ID0gW3YsIHAsIHFdLCByID0gYXNzaWduJDVbMF0sIGcgPSBhc3NpZ24kNVsxXSwgYiA9IGFzc2lnbiQ1WzJdKTsgYnJlYWtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLGFyZ3MubGVuZ3RoID4gMz9hcmdzWzNdOjFdO1xuICAgIH07XG5cbiAgICB2YXIgaHN2MnJnYl8xID0gaHN2MnJnYjtcblxuICAgIHZhciB1bnBhY2skaiA9IHV0aWxzLnVucGFjaztcbiAgICB2YXIgdHlwZSQ4ID0gdXRpbHMudHlwZTtcblxuXG5cblxuXG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oc3YgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHJnYjJoc3YodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEuaHN2ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnaHN2J10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQuaHN2ID0gaHN2MnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skaihhcmdzLCAnaHN2Jyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ4KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdoc3YnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgbGFiQ29uc3RhbnRzID0ge1xuICAgICAgICAvLyBDb3JyZXNwb25kcyByb3VnaGx5IHRvIFJHQiBicmlnaHRlci9kYXJrZXJcbiAgICAgICAgS246IDE4LFxuXG4gICAgICAgIC8vIEQ2NSBzdGFuZGFyZCByZWZlcmVudFxuICAgICAgICBYbjogMC45NTA0NzAsXG4gICAgICAgIFluOiAxLFxuICAgICAgICBabjogMS4wODg4MzAsXG5cbiAgICAgICAgdDA6IDAuMTM3OTMxMDM0LCAgLy8gNCAvIDI5XG4gICAgICAgIHQxOiAwLjIwNjg5NjU1MiwgIC8vIDYgLyAyOVxuICAgICAgICB0MjogMC4xMjg0MTg1NSwgICAvLyAzICogdDEgKiB0MVxuICAgICAgICB0MzogMC4wMDg4NTY0NTIsICAvLyB0MSAqIHQxICogdDFcbiAgICB9O1xuXG4gICAgdmFyIHVucGFjayRrID0gdXRpbHMudW5wYWNrO1xuICAgIHZhciBwb3cgPSBNYXRoLnBvdztcblxuICAgIHZhciByZ2IybGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZWYgPSB1bnBhY2skayhhcmdzLCAncmdiJyk7XG4gICAgICAgIHZhciByID0gcmVmWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZlsxXTtcbiAgICAgICAgdmFyIGIgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IHJnYjJ4eXoocixnLGIpO1xuICAgICAgICB2YXIgeCA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgeSA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgeiA9IHJlZiQxWzJdO1xuICAgICAgICB2YXIgbCA9IDExNiAqIHkgLSAxNjtcbiAgICAgICAgcmV0dXJuIFtsIDwgMCA/IDAgOiBsLCA1MDAgKiAoeCAtIHkpLCAyMDAgKiAoeSAtIHopXTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYl94eXogPSBmdW5jdGlvbiAocikge1xuICAgICAgICBpZiAoKHIgLz0gMjU1KSA8PSAwLjA0MDQ1KSB7IHJldHVybiByIC8gMTIuOTI7IH1cbiAgICAgICAgcmV0dXJuIHBvdygociArIDAuMDU1KSAvIDEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgeHl6X2xhYiA9IGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIGlmICh0ID4gbGFiQ29uc3RhbnRzLnQzKSB7IHJldHVybiBwb3codCwgMSAvIDMpOyB9XG4gICAgICAgIHJldHVybiB0IC8gbGFiQ29uc3RhbnRzLnQyICsgbGFiQ29uc3RhbnRzLnQwO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnh5eiA9IGZ1bmN0aW9uIChyLGcsYikge1xuICAgICAgICByID0gcmdiX3h5eihyKTtcbiAgICAgICAgZyA9IHJnYl94eXooZyk7XG4gICAgICAgIGIgPSByZ2JfeHl6KGIpO1xuICAgICAgICB2YXIgeCA9IHh5el9sYWIoKDAuNDEyNDU2NCAqIHIgKyAwLjM1NzU3NjEgKiBnICsgMC4xODA0Mzc1ICogYikgLyBsYWJDb25zdGFudHMuWG4pO1xuICAgICAgICB2YXIgeSA9IHh5el9sYWIoKDAuMjEyNjcyOSAqIHIgKyAwLjcxNTE1MjIgKiBnICsgMC4wNzIxNzUwICogYikgLyBsYWJDb25zdGFudHMuWW4pO1xuICAgICAgICB2YXIgeiA9IHh5el9sYWIoKDAuMDE5MzMzOSAqIHIgKyAwLjExOTE5MjAgKiBnICsgMC45NTAzMDQxICogYikgLyBsYWJDb25zdGFudHMuWm4pO1xuICAgICAgICByZXR1cm4gW3gseSx6XTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJsYWJfMSA9IHJnYjJsYWI7XG5cbiAgICB2YXIgdW5wYWNrJGwgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHBvdyQxID0gTWF0aC5wb3c7XG5cbiAgICAvKlxuICAgICAqIEwqIFswLi4xMDBdXG4gICAgICogYSBbLTEwMC4uMTAwXVxuICAgICAqIGIgWy0xMDAuLjEwMF1cbiAgICAgKi9cbiAgICB2YXIgbGFiMnJnYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICBhcmdzID0gdW5wYWNrJGwoYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgbCA9IGFyZ3NbMF07XG4gICAgICAgIHZhciBhID0gYXJnc1sxXTtcbiAgICAgICAgdmFyIGIgPSBhcmdzWzJdO1xuICAgICAgICB2YXIgeCx5LHosIHIsZyxiXztcblxuICAgICAgICB5ID0gKGwgKyAxNikgLyAxMTY7XG4gICAgICAgIHggPSBpc05hTihhKSA/IHkgOiB5ICsgYSAvIDUwMDtcbiAgICAgICAgeiA9IGlzTmFOKGIpID8geSA6IHkgLSBiIC8gMjAwO1xuXG4gICAgICAgIHkgPSBsYWJDb25zdGFudHMuWW4gKiBsYWJfeHl6KHkpO1xuICAgICAgICB4ID0gbGFiQ29uc3RhbnRzLlhuICogbGFiX3h5eih4KTtcbiAgICAgICAgeiA9IGxhYkNvbnN0YW50cy5abiAqIGxhYl94eXooeik7XG5cbiAgICAgICAgciA9IHh5el9yZ2IoMy4yNDA0NTQyICogeCAtIDEuNTM3MTM4NSAqIHkgLSAwLjQ5ODUzMTQgKiB6KTsgIC8vIEQ2NSAtPiBzUkdCXG4gICAgICAgIGcgPSB4eXpfcmdiKC0wLjk2OTI2NjAgKiB4ICsgMS44NzYwMTA4ICogeSArIDAuMDQxNTU2MCAqIHopO1xuICAgICAgICBiXyA9IHh5el9yZ2IoMC4wNTU2NDM0ICogeCAtIDAuMjA0MDI1OSAqIHkgKyAxLjA1NzIyNTIgKiB6KTtcblxuICAgICAgICByZXR1cm4gW3IsZyxiXyxhcmdzLmxlbmd0aCA+IDMgPyBhcmdzWzNdIDogMV07XG4gICAgfTtcblxuICAgIHZhciB4eXpfcmdiID0gZnVuY3Rpb24gKHIpIHtcbiAgICAgICAgcmV0dXJuIDI1NSAqIChyIDw9IDAuMDAzMDQgPyAxMi45MiAqIHIgOiAxLjA1NSAqIHBvdyQxKHIsIDEgLyAyLjQpIC0gMC4wNTUpXG4gICAgfTtcblxuICAgIHZhciBsYWJfeHl6ID0gZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIHQgPiBsYWJDb25zdGFudHMudDEgPyB0ICogdCAqIHQgOiBsYWJDb25zdGFudHMudDIgKiAodCAtIGxhYkNvbnN0YW50cy50MClcbiAgICB9O1xuXG4gICAgdmFyIGxhYjJyZ2JfMSA9IGxhYjJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJG0gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkOSA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubGFiID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybGFiXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEubGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbGFiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQubGFiID0gbGFiMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMixcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skbShhcmdzLCAnbGFiJyk7XG4gICAgICAgICAgICBpZiAodHlwZSQ5KGFyZ3MpID09PSAnYXJyYXknICYmIGFyZ3MubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdsYWInO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJG4gPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIFJBRDJERUcgPSB1dGlscy5SQUQyREVHO1xuICAgIHZhciBzcXJ0JDEgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIGF0YW4yID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgcm91bmQkNCA9IE1hdGgucm91bmQ7XG5cbiAgICB2YXIgbGFiMmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJG4oYXJncywgJ2xhYicpO1xuICAgICAgICB2YXIgbCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiID0gcmVmWzJdO1xuICAgICAgICB2YXIgYyA9IHNxcnQkMShhICogYSArIGIgKiBiKTtcbiAgICAgICAgdmFyIGggPSAoYXRhbjIoYiwgYSkgKiBSQUQyREVHICsgMzYwKSAlIDM2MDtcbiAgICAgICAgaWYgKHJvdW5kJDQoYyoxMDAwMCkgPT09IDApIHsgaCA9IE51bWJlci5OYU47IH1cbiAgICAgICAgcmV0dXJuIFtsLCBjLCBoXTtcbiAgICB9O1xuXG4gICAgdmFyIGxhYjJsY2hfMSA9IGxhYjJsY2g7XG5cbiAgICB2YXIgdW5wYWNrJG8gPSB1dGlscy51bnBhY2s7XG5cblxuXG4gICAgdmFyIHJnYjJsY2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayRvKGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gcmdiMmxhYl8xKHIsZyxiKTtcbiAgICAgICAgdmFyIGwgPSByZWYkMVswXTtcbiAgICAgICAgdmFyIGEgPSByZWYkMVsxXTtcbiAgICAgICAgdmFyIGJfID0gcmVmJDFbMl07XG4gICAgICAgIHJldHVybiBsYWIybGNoXzEobCxhLGJfKTtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJsY2hfMSA9IHJnYjJsY2g7XG5cbiAgICB2YXIgdW5wYWNrJHAgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIERFRzJSQUQgPSB1dGlscy5ERUcyUkFEO1xuICAgIHZhciBzaW4gPSBNYXRoLnNpbjtcbiAgICB2YXIgY29zJDEgPSBNYXRoLmNvcztcblxuICAgIHZhciBsY2gybGFiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIC8qXG4gICAgICAgIENvbnZlcnQgZnJvbSBhIHF1YWxpdGF0aXZlIHBhcmFtZXRlciBoIGFuZCBhIHF1YW50aXRhdGl2ZSBwYXJhbWV0ZXIgbCB0byBhIDI0LWJpdCBwaXhlbC5cbiAgICAgICAgVGhlc2UgZm9ybXVsYXMgd2VyZSBpbnZlbnRlZCBieSBEYXZpZCBEYWxyeW1wbGUgdG8gb2J0YWluIG1heGltdW0gY29udHJhc3Qgd2l0aG91dCBnb2luZ1xuICAgICAgICBvdXQgb2YgZ2FtdXQgaWYgdGhlIHBhcmFtZXRlcnMgYXJlIGluIHRoZSByYW5nZSAwLTEuXG5cbiAgICAgICAgQSBzYXR1cmF0aW9uIG11bHRpcGxpZXIgd2FzIGFkZGVkIGJ5IEdyZWdvciBBaXNjaFxuICAgICAgICAqL1xuICAgICAgICB2YXIgcmVmID0gdW5wYWNrJHAoYXJncywgJ2xjaCcpO1xuICAgICAgICB2YXIgbCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGMgPSByZWZbMV07XG4gICAgICAgIHZhciBoID0gcmVmWzJdO1xuICAgICAgICBpZiAoaXNOYU4oaCkpIHsgaCA9IDA7IH1cbiAgICAgICAgaCA9IGggKiBERUcyUkFEO1xuICAgICAgICByZXR1cm4gW2wsIGNvcyQxKGgpICogYywgc2luKGgpICogY11cbiAgICB9O1xuXG4gICAgdmFyIGxjaDJsYWJfMSA9IGxjaDJsYWI7XG5cbiAgICB2YXIgdW5wYWNrJHEgPSB1dGlscy51bnBhY2s7XG5cblxuXG4gICAgdmFyIGxjaDJyZ2IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgYXJncyA9IHVucGFjayRxKGFyZ3MsICdsY2gnKTtcbiAgICAgICAgdmFyIGwgPSBhcmdzWzBdO1xuICAgICAgICB2YXIgYyA9IGFyZ3NbMV07XG4gICAgICAgIHZhciBoID0gYXJnc1syXTtcbiAgICAgICAgdmFyIHJlZiA9IGxjaDJsYWJfMSAobCxjLGgpO1xuICAgICAgICB2YXIgTCA9IHJlZlswXTtcbiAgICAgICAgdmFyIGEgPSByZWZbMV07XG4gICAgICAgIHZhciBiXyA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gbGFiMnJnYl8xIChMLGEsYl8pO1xuICAgICAgICB2YXIgciA9IHJlZiQxWzBdO1xuICAgICAgICB2YXIgZyA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZiQxWzJdO1xuICAgICAgICByZXR1cm4gW3IsIGcsIGIsIGFyZ3MubGVuZ3RoID4gMyA/IGFyZ3NbM10gOiAxXTtcbiAgICB9O1xuXG4gICAgdmFyIGxjaDJyZ2JfMSA9IGxjaDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJHIgPSB1dGlscy51bnBhY2s7XG5cblxuICAgIHZhciBoY2wycmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciBoY2wgPSB1bnBhY2skcihhcmdzLCAnaGNsJykucmV2ZXJzZSgpO1xuICAgICAgICByZXR1cm4gbGNoMnJnYl8xLmFwcGx5KHZvaWQgMCwgaGNsKTtcbiAgICB9O1xuXG4gICAgdmFyIGhjbDJyZ2JfMSA9IGhjbDJyZ2I7XG5cbiAgICB2YXIgdW5wYWNrJHMgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkYSA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubGNoID0gZnVuY3Rpb24oKSB7IHJldHVybiByZ2IybGNoXzEodGhpcy5fcmdiKTsgfTtcbiAgICBDb2xvcl8xLnByb3RvdHlwZS5oY2wgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHJnYjJsY2hfMSh0aGlzLl9yZ2IpLnJldmVyc2UoKTsgfTtcblxuICAgIGNocm9tYV8xLmxjaCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2xjaCddKSApKTtcbiAgICB9O1xuICAgIGNocm9tYV8xLmhjbCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICByZXR1cm4gbmV3IChGdW5jdGlvbi5wcm90b3R5cGUuYmluZC5hcHBseSggQ29sb3JfMSwgWyBudWxsIF0uY29uY2F0KCBhcmdzLCBbJ2hjbCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0LmxjaCA9IGxjaDJyZ2JfMTtcbiAgICBpbnB1dC5mb3JtYXQuaGNsID0gaGNsMnJnYl8xO1xuXG4gICAgWydsY2gnLCdoY2wnXS5mb3JFYWNoKGZ1bmN0aW9uIChtKSB7IHJldHVybiBpbnB1dC5hdXRvZGV0ZWN0LnB1c2goe1xuICAgICAgICBwOiAyLFxuICAgICAgICB0ZXN0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICAgICAgYXJncyA9IHVucGFjayRzKGFyZ3MsIG0pO1xuICAgICAgICAgICAgaWYgKHR5cGUkYShhcmdzKSA9PT0gJ2FycmF5JyAmJiBhcmdzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7IH0pO1xuXG4gICAgdmFyIHR5cGUkYiA9IHV0aWxzLnR5cGU7XG5cblxuXG5cblxuICAgIENvbG9yXzEucHJvdG90eXBlLm5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhleCA9IHJnYjJoZXhfMSh0aGlzLl9yZ2IsICdyZ2InKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBPYmplY3Qua2V5cyh3M2N4MTFfMSk7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgbiA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgIGlmICh3M2N4MTFfMVtuXSA9PT0gaGV4KSB7IHJldHVybiBuLnRvTG93ZXJDYXNlKCk7IH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGV4O1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQubmFtZWQgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgICAgICBuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodzNjeDExXzFbbmFtZV0pIHsgcmV0dXJuIGhleDJyZ2JfMSh3M2N4MTFfMVtuYW1lXSk7IH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd1bmtub3duIGNvbG9yIG5hbWU6ICcrbmFtZSk7XG4gICAgfTtcblxuICAgIGlucHV0LmF1dG9kZXRlY3QucHVzaCh7XG4gICAgICAgIHA6IDUsXG4gICAgICAgIHRlc3Q6IGZ1bmN0aW9uIChoKSB7XG4gICAgICAgICAgICB2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDEgXTtcblxuICAgICAgICAgICAgaWYgKCFyZXN0Lmxlbmd0aCAmJiB0eXBlJGIoaCkgPT09ICdzdHJpbmcnICYmIHczY3gxMV8xW2gudG9Mb3dlckNhc2UoKV0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ25hbWVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHVucGFjayR0ID0gdXRpbHMudW5wYWNrO1xuXG4gICAgdmFyIHJnYjJudW0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgdmFyIHJlZiA9IHVucGFjayR0KGFyZ3MsICdyZ2InKTtcbiAgICAgICAgdmFyIHIgPSByZWZbMF07XG4gICAgICAgIHZhciBnID0gcmVmWzFdO1xuICAgICAgICB2YXIgYiA9IHJlZlsyXTtcbiAgICAgICAgcmV0dXJuIChyIDw8IDE2KSArIChnIDw8IDgpICsgYjtcbiAgICB9O1xuXG4gICAgdmFyIHJnYjJudW1fMSA9IHJnYjJudW07XG5cbiAgICB2YXIgdHlwZSRjID0gdXRpbHMudHlwZTtcblxuICAgIHZhciBudW0ycmdiID0gZnVuY3Rpb24gKG51bSkge1xuICAgICAgICBpZiAodHlwZSRjKG51bSkgPT0gXCJudW1iZXJcIiAmJiBudW0gPj0gMCAmJiBudW0gPD0gMHhGRkZGRkYpIHtcbiAgICAgICAgICAgIHZhciByID0gbnVtID4+IDE2O1xuICAgICAgICAgICAgdmFyIGcgPSAobnVtID4+IDgpICYgMHhGRjtcbiAgICAgICAgICAgIHZhciBiID0gbnVtICYgMHhGRjtcbiAgICAgICAgICAgIHJldHVybiBbcixnLGIsMV07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidW5rbm93biBudW0gY29sb3I6IFwiK251bSk7XG4gICAgfTtcblxuICAgIHZhciBudW0ycmdiXzEgPSBudW0ycmdiO1xuXG4gICAgdmFyIHR5cGUkZCA9IHV0aWxzLnR5cGU7XG5cblxuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubnVtID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IybnVtXzEodGhpcy5fcmdiKTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEubnVtID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsnbnVtJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQubnVtID0gbnVtMnJnYl8xO1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogNSxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSAmJiB0eXBlJGQoYXJnc1swXSkgPT09ICdudW1iZXInICYmIGFyZ3NbMF0gPj0gMCAmJiBhcmdzWzBdIDw9IDB4RkZGRkZGKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdudW0nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdW5wYWNrJHUgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHR5cGUkZSA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIHJvdW5kJDUgPSBNYXRoLnJvdW5kO1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUucmdiID0gZnVuY3Rpb24ocm5kKSB7XG4gICAgICAgIGlmICggcm5kID09PSB2b2lkIDAgKSBybmQ9dHJ1ZTtcblxuICAgICAgICBpZiAocm5kID09PSBmYWxzZSkgeyByZXR1cm4gdGhpcy5fcmdiLnNsaWNlKDAsMyk7IH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDMpLm1hcChyb3VuZCQ1KTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUucmdiYSA9IGZ1bmN0aW9uKHJuZCkge1xuICAgICAgICBpZiAoIHJuZCA9PT0gdm9pZCAwICkgcm5kPXRydWU7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYi5zbGljZSgwLDQpLm1hcChmdW5jdGlvbiAodixpKSB7XG4gICAgICAgICAgICByZXR1cm4gaTwzID8gKHJuZCA9PT0gZmFsc2UgPyB2IDogcm91bmQkNSh2KSkgOiB2O1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY2hyb21hXzEucmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsncmdiJ10pICkpO1xuICAgIH07XG5cbiAgICBpbnB1dC5mb3JtYXQucmdiID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHZhciByZ2JhID0gdW5wYWNrJHUoYXJncywgJ3JnYmEnKTtcbiAgICAgICAgaWYgKHJnYmFbM10gPT09IHVuZGVmaW5lZCkgeyByZ2JhWzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gcmdiYTtcbiAgICB9O1xuXG4gICAgaW5wdXQuYXV0b2RldGVjdC5wdXNoKHtcbiAgICAgICAgcDogMyxcbiAgICAgICAgdGVzdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgICAgICAgIGFyZ3MgPSB1bnBhY2skdShhcmdzLCAncmdiYScpO1xuICAgICAgICAgICAgaWYgKHR5cGUkZShhcmdzKSA9PT0gJ2FycmF5JyAmJiAoYXJncy5sZW5ndGggPT09IDMgfHxcbiAgICAgICAgICAgICAgICBhcmdzLmxlbmd0aCA9PT0gNCAmJiB0eXBlJGUoYXJnc1szXSkgPT0gJ251bWJlcicgJiYgYXJnc1szXSA+PSAwICYmIGFyZ3NbM10gPD0gMSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3JnYic7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8qXG4gICAgICogQmFzZWQgb24gaW1wbGVtZW50YXRpb24gYnkgTmVpbCBCYXJ0bGV0dFxuICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9uZWlsYmFydGxldHQvY29sb3ItdGVtcGVyYXR1cmVcbiAgICAgKi9cblxuICAgIHZhciBsb2cgPSBNYXRoLmxvZztcblxuICAgIHZhciB0ZW1wZXJhdHVyZTJyZ2IgPSBmdW5jdGlvbiAoa2VsdmluKSB7XG4gICAgICAgIHZhciB0ZW1wID0ga2VsdmluIC8gMTAwO1xuICAgICAgICB2YXIgcixnLGI7XG4gICAgICAgIGlmICh0ZW1wIDwgNjYpIHtcbiAgICAgICAgICAgIHIgPSAyNTU7XG4gICAgICAgICAgICBnID0gLTE1NS4yNTQ4NTU2MjcwOTE3OSAtIDAuNDQ1OTY5NTA0Njk1NzkxMzMgKiAoZyA9IHRlbXAtMikgKyAxMDQuNDkyMTYxOTkzOTM4ODggKiBsb2coZyk7XG4gICAgICAgICAgICBiID0gdGVtcCA8IDIwID8gMCA6IC0yNTQuNzY5MzUxODQxMjA5MDIgKyAwLjgyNzQwOTYwNjQwMDczOTUgKiAoYiA9IHRlbXAtMTApICsgMTE1LjY3OTk0NDAxMDY2MTQ3ICogbG9nKGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgciA9IDM1MS45NzY5MDU2NjgwNTY5MyArIDAuMTE0MjA2NDUzNzg0MTY1ICogKHIgPSB0ZW1wLTU1KSAtIDQwLjI1MzY2MzA5MzMyMTI3ICogbG9nKHIpO1xuICAgICAgICAgICAgZyA9IDMyNS40NDk0MTI1NzExOTc0ICsgMC4wNzk0MzQ1NjUzNjY2MjM0MiAqIChnID0gdGVtcC01MCkgLSAyOC4wODUyOTYzNTA3OTU3ICogbG9nKGcpO1xuICAgICAgICAgICAgYiA9IDI1NTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW3IsZyxiLDFdO1xuICAgIH07XG5cbiAgICB2YXIgdGVtcGVyYXR1cmUycmdiXzEgPSB0ZW1wZXJhdHVyZTJyZ2I7XG5cbiAgICAvKlxuICAgICAqIEJhc2VkIG9uIGltcGxlbWVudGF0aW9uIGJ5IE5laWwgQmFydGxldHRcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vbmVpbGJhcnRsZXR0L2NvbG9yLXRlbXBlcmF0dXJlXG4gICAgICoqL1xuXG5cbiAgICB2YXIgdW5wYWNrJHYgPSB1dGlscy51bnBhY2s7XG4gICAgdmFyIHJvdW5kJDYgPSBNYXRoLnJvdW5kO1xuXG4gICAgdmFyIHJnYjJ0ZW1wZXJhdHVyZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKCBsZW4tLSApIGFyZ3NbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gXTtcblxuICAgICAgICB2YXIgcmdiID0gdW5wYWNrJHYoYXJncywgJ3JnYicpO1xuICAgICAgICB2YXIgciA9IHJnYlswXSwgYiA9IHJnYlsyXTtcbiAgICAgICAgdmFyIG1pblRlbXAgPSAxMDAwO1xuICAgICAgICB2YXIgbWF4VGVtcCA9IDQwMDAwO1xuICAgICAgICB2YXIgZXBzID0gMC40O1xuICAgICAgICB2YXIgdGVtcDtcbiAgICAgICAgd2hpbGUgKG1heFRlbXAgLSBtaW5UZW1wID4gZXBzKSB7XG4gICAgICAgICAgICB0ZW1wID0gKG1heFRlbXAgKyBtaW5UZW1wKSAqIDAuNTtcbiAgICAgICAgICAgIHZhciByZ2IkMSA9IHRlbXBlcmF0dXJlMnJnYl8xKHRlbXApO1xuICAgICAgICAgICAgaWYgKChyZ2IkMVsyXSAvIHJnYiQxWzBdKSA+PSAoYiAvIHIpKSB7XG4gICAgICAgICAgICAgICAgbWF4VGVtcCA9IHRlbXA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1pblRlbXAgPSB0ZW1wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3VuZCQ2KHRlbXApO1xuICAgIH07XG5cbiAgICB2YXIgcmdiMnRlbXBlcmF0dXJlXzEgPSByZ2IydGVtcGVyYXR1cmU7XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS50ZW1wID1cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5rZWx2aW4gPVxuICAgIENvbG9yXzEucHJvdG90eXBlLnRlbXBlcmF0dXJlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByZ2IydGVtcGVyYXR1cmVfMSh0aGlzLl9yZ2IpO1xuICAgIH07XG5cbiAgICBjaHJvbWFfMS50ZW1wID1cbiAgICBjaHJvbWFfMS5rZWx2aW4gPVxuICAgIGNocm9tYV8xLnRlbXBlcmF0dXJlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHJldHVybiBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MsIFsndGVtcCddKSApKTtcbiAgICB9O1xuXG4gICAgaW5wdXQuZm9ybWF0LnRlbXAgPVxuICAgIGlucHV0LmZvcm1hdC5rZWx2aW4gPVxuICAgIGlucHV0LmZvcm1hdC50ZW1wZXJhdHVyZSA9IHRlbXBlcmF0dXJlMnJnYl8xO1xuXG4gICAgdmFyIHR5cGUkZiA9IHV0aWxzLnR5cGU7XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5hbHBoYSA9IGZ1bmN0aW9uKGEsIG11dGF0ZSkge1xuICAgICAgICBpZiAoIG11dGF0ZSA9PT0gdm9pZCAwICkgbXV0YXRlPWZhbHNlO1xuXG4gICAgICAgIGlmIChhICE9PSB1bmRlZmluZWQgJiYgdHlwZSRmKGEpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgaWYgKG11dGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JnYlszXSA9IGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoW3RoaXMuX3JnYlswXSwgdGhpcy5fcmdiWzFdLCB0aGlzLl9yZ2JbMl0sIGFdLCAncmdiJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX3JnYlszXTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuY2xpcHBlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmdiLl9jbGlwcGVkIHx8IGZhbHNlO1xuICAgIH07XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5kYXJrZW4gPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsYWIgPSBtZS5sYWIoKTtcbiAgICBcdGxhYlswXSAtPSBsYWJDb25zdGFudHMuS24gKiBhbW91bnQ7XG4gICAgXHRyZXR1cm4gbmV3IENvbG9yXzEobGFiLCAnbGFiJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmJyaWdodGVuID0gZnVuY3Rpb24oYW1vdW50KSB7XG4gICAgXHRpZiAoIGFtb3VudCA9PT0gdm9pZCAwICkgYW1vdW50PTE7XG5cbiAgICBcdHJldHVybiB0aGlzLmRhcmtlbigtYW1vdW50KTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuZGFya2VyID0gQ29sb3JfMS5wcm90b3R5cGUuZGFya2VuO1xuICAgIENvbG9yXzEucHJvdG90eXBlLmJyaWdodGVyID0gQ29sb3JfMS5wcm90b3R5cGUuYnJpZ2h0ZW47XG5cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihtYykge1xuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7IHJldHVybiBzcmNbaV07IH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHR5cGUkZyA9IHV0aWxzLnR5cGU7XG4gICAgdmFyIHBvdyQyID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgRVBTID0gMWUtNztcbiAgICB2YXIgTUFYX0lURVIgPSAyMDtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmx1bWluYW5jZSA9IGZ1bmN0aW9uKGx1bSkge1xuICAgICAgICBpZiAobHVtICE9PSB1bmRlZmluZWQgJiYgdHlwZSRnKGx1bSkgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBpZiAobHVtID09PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHB1cmUgYmxhY2tcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoWzAsMCwwLHRoaXMuX3JnYlszXV0sICdyZ2InKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsdW0gPT09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gcHVyZSB3aGl0ZVxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShbMjU1LDI1NSwyNTUsdGhpcy5fcmdiWzNdXSwgJ3JnYicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29tcHV0ZSBuZXcgY29sb3IgdXNpbmcuLi5cbiAgICAgICAgICAgIHZhciBjdXJfbHVtID0gdGhpcy5sdW1pbmFuY2UoKTtcbiAgICAgICAgICAgIHZhciBtb2RlID0gJ3JnYic7XG4gICAgICAgICAgICB2YXIgbWF4X2l0ZXIgPSBNQVhfSVRFUjtcblxuICAgICAgICAgICAgdmFyIHRlc3QgPSBmdW5jdGlvbiAobG93LCBoaWdoKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1pZCA9IGxvdy5pbnRlcnBvbGF0ZShoaWdoLCAwLjUsIG1vZGUpO1xuICAgICAgICAgICAgICAgIHZhciBsbSA9IG1pZC5sdW1pbmFuY2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMobHVtIC0gbG0pIDwgRVBTIHx8ICFtYXhfaXRlci0tKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNsb3NlIGVub3VnaFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbG0gPiBsdW0gPyB0ZXN0KGxvdywgbWlkKSA6IHRlc3QobWlkLCBoaWdoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciByZ2IgPSAoY3VyX2x1bSA+IGx1bSA/IHRlc3QobmV3IENvbG9yXzEoWzAsMCwwXSksIHRoaXMpIDogdGVzdCh0aGlzLCBuZXcgQ29sb3JfMShbMjU1LDI1NSwyNTVdKSkpLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKHJnYi5jb25jYXQoIFt0aGlzLl9yZ2JbM11dKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJnYjJsdW1pbmFuY2UuYXBwbHkodm9pZCAwLCAodGhpcy5fcmdiKS5zbGljZSgwLDMpKTtcbiAgICB9O1xuXG5cbiAgICB2YXIgcmdiMmx1bWluYW5jZSA9IGZ1bmN0aW9uIChyLGcsYikge1xuICAgICAgICAvLyByZWxhdGl2ZSBsdW1pbmFuY2VcbiAgICAgICAgLy8gc2VlIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDgvUkVDLVdDQUcyMC0yMDA4MTIxMS8jcmVsYXRpdmVsdW1pbmFuY2VkZWZcbiAgICAgICAgciA9IGx1bWluYW5jZV94KHIpO1xuICAgICAgICBnID0gbHVtaW5hbmNlX3goZyk7XG4gICAgICAgIGIgPSBsdW1pbmFuY2VfeChiKTtcbiAgICAgICAgcmV0dXJuIDAuMjEyNiAqIHIgKyAwLjcxNTIgKiBnICsgMC4wNzIyICogYjtcbiAgICB9O1xuXG4gICAgdmFyIGx1bWluYW5jZV94ID0gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgeCAvPSAyNTU7XG4gICAgICAgIHJldHVybiB4IDw9IDAuMDM5MjggPyB4LzEyLjkyIDogcG93JDIoKHgrMC4wNTUpLzEuMDU1LCAyLjQpO1xuICAgIH07XG5cbiAgICB2YXIgaW50ZXJwb2xhdG9yID0ge307XG5cbiAgICB2YXIgdHlwZSRoID0gdXRpbHMudHlwZTtcblxuXG4gICAgdmFyIG1peCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgICAgIHZhciByZXN0ID0gW10sIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGggLSAzO1xuICAgICAgICB3aGlsZSAoIGxlbi0tID4gMCApIHJlc3RbIGxlbiBdID0gYXJndW1lbnRzWyBsZW4gKyAzIF07XG5cbiAgICAgICAgdmFyIG1vZGUgPSByZXN0WzBdIHx8ICdscmdiJztcbiAgICAgICAgaWYgKCFpbnRlcnBvbGF0b3JbbW9kZV0gJiYgIXJlc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAvLyBmYWxsIGJhY2sgdG8gdGhlIGZpcnN0IHN1cHBvcnRlZCBtb2RlXG4gICAgICAgICAgICBtb2RlID0gT2JqZWN0LmtleXMoaW50ZXJwb2xhdG9yKVswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWludGVycG9sYXRvclttb2RlXSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKChcImludGVycG9sYXRpb24gbW9kZSBcIiArIG1vZGUgKyBcIiBpcyBub3QgZGVmaW5lZFwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGUkaChjb2wxKSAhPT0gJ29iamVjdCcpIHsgY29sMSA9IG5ldyBDb2xvcl8xKGNvbDEpOyB9XG4gICAgICAgIGlmICh0eXBlJGgoY29sMikgIT09ICdvYmplY3QnKSB7IGNvbDIgPSBuZXcgQ29sb3JfMShjb2wyKTsgfVxuICAgICAgICByZXR1cm4gaW50ZXJwb2xhdG9yW21vZGVdKGNvbDEsIGNvbDIsIGYpXG4gICAgICAgICAgICAuYWxwaGEoY29sMS5hbHBoYSgpICsgZiAqIChjb2wyLmFscGhhKCkgLSBjb2wxLmFscGhhKCkpKTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUubWl4ID1cbiAgICBDb2xvcl8xLnByb3RvdHlwZS5pbnRlcnBvbGF0ZSA9IGZ1bmN0aW9uKGNvbDIsIGYpIHtcbiAgICBcdGlmICggZiA9PT0gdm9pZCAwICkgZj0wLjU7XG4gICAgXHR2YXIgcmVzdCA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoIC0gMjtcbiAgICBcdHdoaWxlICggbGVuLS0gPiAwICkgcmVzdFsgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiArIDIgXTtcblxuICAgIFx0cmV0dXJuIG1peC5hcHBseSh2b2lkIDAsIFsgdGhpcywgY29sMiwgZiBdLmNvbmNhdCggcmVzdCApKTtcbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUucHJlbXVsdGlwbHkgPSBmdW5jdGlvbihtdXRhdGUpIHtcbiAgICBcdGlmICggbXV0YXRlID09PSB2b2lkIDAgKSBtdXRhdGU9ZmFsc2U7XG5cbiAgICBcdHZhciByZ2IgPSB0aGlzLl9yZ2I7XG4gICAgXHR2YXIgYSA9IHJnYlszXTtcbiAgICBcdGlmIChtdXRhdGUpIHtcbiAgICBcdFx0dGhpcy5fcmdiID0gW3JnYlswXSphLCByZ2JbMV0qYSwgcmdiWzJdKmEsIGFdO1xuICAgIFx0XHRyZXR1cm4gdGhpcztcbiAgICBcdH0gZWxzZSB7XG4gICAgXHRcdHJldHVybiBuZXcgQ29sb3JfMShbcmdiWzBdKmEsIHJnYlsxXSphLCByZ2JbMl0qYSwgYV0sICdyZ2InKTtcbiAgICBcdH1cbiAgICB9O1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0dmFyIG1lID0gdGhpcztcbiAgICBcdHZhciBsY2ggPSBtZS5sY2goKTtcbiAgICBcdGxjaFsxXSArPSBsYWJDb25zdGFudHMuS24gKiBhbW91bnQ7XG4gICAgXHRpZiAobGNoWzFdIDwgMCkgeyBsY2hbMV0gPSAwOyB9XG4gICAgXHRyZXR1cm4gbmV3IENvbG9yXzEobGNoLCAnbGNoJykuYWxwaGEobWUuYWxwaGEoKSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIENvbG9yXzEucHJvdG90eXBlLmRlc2F0dXJhdGUgPSBmdW5jdGlvbihhbW91bnQpIHtcbiAgICBcdGlmICggYW1vdW50ID09PSB2b2lkIDAgKSBhbW91bnQ9MTtcblxuICAgIFx0cmV0dXJuIHRoaXMuc2F0dXJhdGUoLWFtb3VudCk7XG4gICAgfTtcblxuICAgIHZhciB0eXBlJGkgPSB1dGlscy50eXBlO1xuXG4gICAgQ29sb3JfMS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obWMsIHZhbHVlLCBtdXRhdGUpIHtcbiAgICAgICAgaWYgKCBtdXRhdGUgPT09IHZvaWQgMCApIG11dGF0ZT1mYWxzZTtcblxuICAgICAgICB2YXIgcmVmID0gbWMuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG1vZGUgPSByZWZbMF07XG4gICAgICAgIHZhciBjaGFubmVsID0gcmVmWzFdO1xuICAgICAgICB2YXIgc3JjID0gdGhpc1ttb2RlXSgpO1xuICAgICAgICBpZiAoY2hhbm5lbCkge1xuICAgICAgICAgICAgdmFyIGkgPSBtb2RlLmluZGV4T2YoY2hhbm5lbCk7XG4gICAgICAgICAgICBpZiAoaSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkaSh2YWx1ZSkgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHZhbHVlLmNoYXJBdCgwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKyc6IHNyY1tpXSArPSArdmFsdWU7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLSc6IHNyY1tpXSArPSArdmFsdWU7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnKic6IHNyY1tpXSAqPSArKHZhbHVlLnN1YnN0cigxKSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6IHNyY1tpXSAvPSArKHZhbHVlLnN1YnN0cigxKSk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogc3JjW2ldID0gK3ZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlJGkodmFsdWUpID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBzcmNbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ1bnN1cHBvcnRlZCB2YWx1ZSBmb3IgQ29sb3Iuc2V0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgb3V0ID0gbmV3IENvbG9yXzEoc3JjLCBtb2RlKTtcbiAgICAgICAgICAgICAgICBpZiAobXV0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JnYiA9IG91dC5fcmdiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoXCJ1bmtub3duIGNoYW5uZWwgXCIgKyBjaGFubmVsICsgXCIgaW4gbW9kZSBcIiArIG1vZGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBzcmM7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHJnYiQxID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIHh5ejAgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5fcmdiO1xuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoXG4gICAgICAgICAgICB4eXowWzBdICsgZiAqICh4eXoxWzBdLXh5ejBbMF0pLFxuICAgICAgICAgICAgeHl6MFsxXSArIGYgKiAoeHl6MVsxXS14eXowWzFdKSxcbiAgICAgICAgICAgIHh5ejBbMl0gKyBmICogKHh5ejFbMl0teHl6MFsyXSksXG4gICAgICAgICAgICAncmdiJ1xuICAgICAgICApXG4gICAgfTtcblxuICAgIC8vIHJlZ2lzdGVyIGludGVycG9sYXRvclxuICAgIGludGVycG9sYXRvci5yZ2IgPSByZ2IkMTtcblxuICAgIHZhciBzcXJ0JDIgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIHBvdyQzID0gTWF0aC5wb3c7XG5cbiAgICB2YXIgbHJnYiA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmKSB7XG4gICAgICAgIHZhciByZWYgPSBjb2wxLl9yZ2I7XG4gICAgICAgIHZhciB4MSA9IHJlZlswXTtcbiAgICAgICAgdmFyIHkxID0gcmVmWzFdO1xuICAgICAgICB2YXIgejEgPSByZWZbMl07XG4gICAgICAgIHZhciByZWYkMSA9IGNvbDIuX3JnYjtcbiAgICAgICAgdmFyIHgyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciB5MiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgejIgPSByZWYkMVsyXTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKFxuICAgICAgICAgICAgc3FydCQyKHBvdyQzKHgxLDIpICogKDEtZikgKyBwb3ckMyh4MiwyKSAqIGYpLFxuICAgICAgICAgICAgc3FydCQyKHBvdyQzKHkxLDIpICogKDEtZikgKyBwb3ckMyh5MiwyKSAqIGYpLFxuICAgICAgICAgICAgc3FydCQyKHBvdyQzKHoxLDIpICogKDEtZikgKyBwb3ckMyh6MiwyKSAqIGYpLFxuICAgICAgICAgICAgJ3JnYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IubHJnYiA9IGxyZ2I7XG5cbiAgICB2YXIgbGFiJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgICAgICB2YXIgeHl6MCA9IGNvbDEubGFiKCk7XG4gICAgICAgIHZhciB4eXoxID0gY29sMi5sYWIoKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKFxuICAgICAgICAgICAgeHl6MFswXSArIGYgKiAoeHl6MVswXS14eXowWzBdKSxcbiAgICAgICAgICAgIHh5ejBbMV0gKyBmICogKHh5ejFbMV0teHl6MFsxXSksXG4gICAgICAgICAgICB4eXowWzJdICsgZiAqICh4eXoxWzJdLXh5ejBbMl0pLFxuICAgICAgICAgICAgJ2xhYidcbiAgICAgICAgKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IubGFiID0gbGFiJDE7XG5cbiAgICB2YXIgX2hzeCA9IGZ1bmN0aW9uIChjb2wxLCBjb2wyLCBmLCBtKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxO1xuXG4gICAgICAgIHZhciB4eXowLCB4eXoxO1xuICAgICAgICBpZiAobSA9PT0gJ2hzbCcpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzbCgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHNsKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzdicpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzdigpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHN2KCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hjZycpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhjZygpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaGNnKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2hzaScpIHtcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhzaSgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaHNpKCk7XG4gICAgICAgIH0gZWxzZSBpZiAobSA9PT0gJ2xjaCcgfHwgbSA9PT0gJ2hjbCcpIHtcbiAgICAgICAgICAgIG0gPSAnaGNsJztcbiAgICAgICAgICAgIHh5ejAgPSBjb2wxLmhjbCgpO1xuICAgICAgICAgICAgeHl6MSA9IGNvbDIuaGNsKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaHVlMCwgaHVlMSwgc2F0MCwgc2F0MSwgbGJ2MCwgbGJ2MTtcbiAgICAgICAgaWYgKG0uc3Vic3RyKDAsIDEpID09PSAnaCcpIHtcbiAgICAgICAgICAgIChhc3NpZ24gPSB4eXowLCBodWUwID0gYXNzaWduWzBdLCBzYXQwID0gYXNzaWduWzFdLCBsYnYwID0gYXNzaWduWzJdKTtcbiAgICAgICAgICAgIChhc3NpZ24kMSA9IHh5ejEsIGh1ZTEgPSBhc3NpZ24kMVswXSwgc2F0MSA9IGFzc2lnbiQxWzFdLCBsYnYxID0gYXNzaWduJDFbMl0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNhdCwgaHVlLCBsYnYsIGRoO1xuXG4gICAgICAgIGlmICghaXNOYU4oaHVlMCkgJiYgIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgICAgICAvLyBib3RoIGNvbG9ycyBoYXZlIGh1ZVxuICAgICAgICAgICAgaWYgKGh1ZTEgPiBodWUwICYmIGh1ZTEgLSBodWUwID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxLShodWUwKzM2MCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGh1ZTEgPCBodWUwICYmIGh1ZTAgLSBodWUxID4gMTgwKSB7XG4gICAgICAgICAgICAgICAgZGggPSBodWUxKzM2MC1odWUwO1xuICAgICAgICAgICAgfSBlbHNle1xuICAgICAgICAgICAgICAgIGRoID0gaHVlMSAtIGh1ZTA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodWUgPSBodWUwICsgZiAqIGRoO1xuICAgICAgICB9IGVsc2UgaWYgKCFpc05hTihodWUwKSkge1xuICAgICAgICAgICAgaHVlID0gaHVlMDtcbiAgICAgICAgICAgIGlmICgobGJ2MSA9PSAxIHx8IGxidjEgPT0gMCkgJiYgbSAhPSAnaHN2JykgeyBzYXQgPSBzYXQwOyB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzTmFOKGh1ZTEpKSB7XG4gICAgICAgICAgICBodWUgPSBodWUxO1xuICAgICAgICAgICAgaWYgKChsYnYwID09IDEgfHwgbGJ2MCA9PSAwKSAmJiBtICE9ICdoc3YnKSB7IHNhdCA9IHNhdDE7IH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGh1ZSA9IE51bWJlci5OYU47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2F0ID09PSB1bmRlZmluZWQpIHsgc2F0ID0gc2F0MCArIGYgKiAoc2F0MSAtIHNhdDApOyB9XG4gICAgICAgIGxidiA9IGxidjAgKyBmICogKGxidjEtbGJ2MCk7XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShbaHVlLCBzYXQsIGxidl0sIG0pO1xuICAgIH07XG5cbiAgICB2YXIgbGNoJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIF9oc3goY29sMSwgY29sMiwgZiwgJ2xjaCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IubGNoID0gbGNoJDE7XG4gICAgaW50ZXJwb2xhdG9yLmhjbCA9IGxjaCQxO1xuXG4gICAgdmFyIG51bSQxID0gZnVuY3Rpb24gKGNvbDEsIGNvbDIsIGYpIHtcbiAgICAgICAgdmFyIGMxID0gY29sMS5udW0oKTtcbiAgICAgICAgdmFyIGMyID0gY29sMi5udW0oKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKGMxICsgZiAqIChjMi1jMSksICdudW0nKVxuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IubnVtID0gbnVtJDE7XG5cbiAgICB2YXIgaGNnJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIF9oc3goY29sMSwgY29sMiwgZiwgJ2hjZycpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IuaGNnID0gaGNnJDE7XG5cbiAgICB2YXIgaHNpJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIF9oc3goY29sMSwgY29sMiwgZiwgJ2hzaScpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IuaHNpID0gaHNpJDE7XG5cbiAgICB2YXIgaHNsJDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIF9oc3goY29sMSwgY29sMiwgZiwgJ2hzbCcpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IuaHNsID0gaHNsJDE7XG5cbiAgICB2YXIgaHN2JDEgPSBmdW5jdGlvbiAoY29sMSwgY29sMiwgZikge1xuICAgIFx0cmV0dXJuIF9oc3goY29sMSwgY29sMiwgZiwgJ2hzdicpO1xuICAgIH07XG5cbiAgICAvLyByZWdpc3RlciBpbnRlcnBvbGF0b3JcbiAgICBpbnRlcnBvbGF0b3IuaHN2ID0gaHN2JDE7XG5cbiAgICB2YXIgY2xpcF9yZ2IkMiA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBwb3ckNCA9IE1hdGgucG93O1xuICAgIHZhciBzcXJ0JDMgPSBNYXRoLnNxcnQ7XG4gICAgdmFyIFBJJDEgPSBNYXRoLlBJO1xuICAgIHZhciBjb3MkMiA9IE1hdGguY29zO1xuICAgIHZhciBzaW4kMSA9IE1hdGguc2luO1xuICAgIHZhciBhdGFuMiQxID0gTWF0aC5hdGFuMjtcblxuICAgIHZhciBhdmVyYWdlID0gZnVuY3Rpb24gKGNvbG9ycywgbW9kZSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2xyZ2InO1xuXG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgLy8gY29udmVydCBjb2xvcnMgdG8gQ29sb3Igb2JqZWN0c1xuICAgICAgICBjb2xvcnMgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBuZXcgQ29sb3JfMShjKTsgfSk7XG4gICAgICAgIGlmIChtb2RlID09PSAnbHJnYicpIHtcbiAgICAgICAgICAgIHJldHVybiBfYXZlcmFnZV9scmdiKGNvbG9ycylcbiAgICAgICAgfVxuICAgICAgICB2YXIgZmlyc3QgPSBjb2xvcnMuc2hpZnQoKTtcbiAgICAgICAgdmFyIHh5eiA9IGZpcnN0LmdldChtb2RlKTtcbiAgICAgICAgdmFyIGNudCA9IFtdO1xuICAgICAgICB2YXIgZHggPSAwO1xuICAgICAgICB2YXIgZHkgPSAwO1xuICAgICAgICAvLyBpbml0aWFsIGNvbG9yXG4gICAgICAgIGZvciAodmFyIGk9MDsgaTx4eXoubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHh5eltpXSA9IHh5eltpXSB8fCAwO1xuICAgICAgICAgICAgY250LnB1c2goaXNOYU4oeHl6W2ldKSA/IDAgOiAxKTtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpKSA9PT0gJ2gnICYmICFpc05hTih4eXpbaV0pKSB7XG4gICAgICAgICAgICAgICAgdmFyIEEgPSB4eXpbaV0gLyAxODAgKiBQSSQxO1xuICAgICAgICAgICAgICAgIGR4ICs9IGNvcyQyKEEpO1xuICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQxKEEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFscGhhID0gZmlyc3QuYWxwaGEoKTtcbiAgICAgICAgY29sb3JzLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHZhciB4eXoyID0gYy5nZXQobW9kZSk7XG4gICAgICAgICAgICBhbHBoYSArPSBjLmFscGhhKCk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8eHl6Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih4eXoyW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICBjbnRbaV0rKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1vZGUuY2hhckF0KGkpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBBID0geHl6MltpXSAvIDE4MCAqIFBJJDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBkeCArPSBjb3MkMihBKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR5ICs9IHNpbiQxKEEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgeHl6W2ldICs9IHh5ejJbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkkMT0wOyBpJDE8eHl6Lmxlbmd0aDsgaSQxKyspIHtcbiAgICAgICAgICAgIGlmIChtb2RlLmNoYXJBdChpJDEpID09PSAnaCcpIHtcbiAgICAgICAgICAgICAgICB2YXIgQSQxID0gYXRhbjIkMShkeSAvIGNudFtpJDFdLCBkeCAvIGNudFtpJDFdKSAvIFBJJDEgKiAxODA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKEEkMSA8IDApIHsgQSQxICs9IDM2MDsgfVxuICAgICAgICAgICAgICAgIHdoaWxlIChBJDEgPj0gMzYwKSB7IEEkMSAtPSAzNjA7IH1cbiAgICAgICAgICAgICAgICB4eXpbaSQxXSA9IEEkMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgeHl6W2kkMV0gPSB4eXpbaSQxXS9jbnRbaSQxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhbHBoYSAvPSBsO1xuICAgICAgICByZXR1cm4gKG5ldyBDb2xvcl8xKHh5eiwgbW9kZSkpLmFscGhhKGFscGhhID4gMC45OTk5OSA/IDEgOiBhbHBoYSwgdHJ1ZSk7XG4gICAgfTtcblxuXG4gICAgdmFyIF9hdmVyYWdlX2xyZ2IgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gICAgICAgIHZhciBsID0gY29sb3JzLmxlbmd0aDtcbiAgICAgICAgdmFyIGYgPSAxL2w7XG4gICAgICAgIHZhciB4eXogPSBbMCwwLDAsMF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsaXN0ID0gY29sb3JzOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIGNvbCA9IGxpc3RbaV07XG5cbiAgICAgICAgICAgIHZhciByZ2IgPSBjb2wuX3JnYjtcbiAgICAgICAgICAgIHh5elswXSArPSBwb3ckNChyZ2JbMF0sMikgKiBmO1xuICAgICAgICAgICAgeHl6WzFdICs9IHBvdyQ0KHJnYlsxXSwyKSAqIGY7XG4gICAgICAgICAgICB4eXpbMl0gKz0gcG93JDQocmdiWzJdLDIpICogZjtcbiAgICAgICAgICAgIHh5elszXSArPSByZ2JbM10gKiBmO1xuICAgICAgICB9XG4gICAgICAgIHh5elswXSA9IHNxcnQkMyh4eXpbMF0pO1xuICAgICAgICB4eXpbMV0gPSBzcXJ0JDMoeHl6WzFdKTtcbiAgICAgICAgeHl6WzJdID0gc3FydCQzKHh5elsyXSk7XG4gICAgICAgIGlmICh4eXpbM10gPiAwLjk5OTk5OTkpIHsgeHl6WzNdID0gMTsgfVxuICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEoY2xpcF9yZ2IkMih4eXopKTtcbiAgICB9O1xuXG4gICAgLy8gbWluaW1hbCBtdWx0aS1wdXJwb3NlIGludGVyZmFjZVxuXG4gICAgLy8gQHJlcXVpcmVzIHV0aWxzIGNvbG9yIGFuYWx5emVcblxuXG4gICAgdmFyIHR5cGUkaiA9IHV0aWxzLnR5cGU7XG5cbiAgICB2YXIgcG93JDUgPSBNYXRoLnBvdztcblxuICAgIHZhciBzY2FsZSA9IGZ1bmN0aW9uKGNvbG9ycykge1xuXG4gICAgICAgIC8vIGNvbnN0cnVjdG9yXG4gICAgICAgIHZhciBfbW9kZSA9ICdyZ2InO1xuICAgICAgICB2YXIgX25hY29sID0gY2hyb21hXzEoJyNjY2MnKTtcbiAgICAgICAgdmFyIF9zcHJlYWQgPSAwO1xuICAgICAgICAvLyBjb25zdCBfZml4ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9kb21haW4gPSBbMCwgMV07XG4gICAgICAgIHZhciBfcG9zID0gW107XG4gICAgICAgIHZhciBfcGFkZGluZyA9IFswLDBdO1xuICAgICAgICB2YXIgX2NsYXNzZXMgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9jb2xvcnMgPSBbXTtcbiAgICAgICAgdmFyIF9vdXQgPSBmYWxzZTtcbiAgICAgICAgdmFyIF9taW4gPSAwO1xuICAgICAgICB2YXIgX21heCA9IDE7XG4gICAgICAgIHZhciBfY29ycmVjdExpZ2h0bmVzcyA9IGZhbHNlO1xuICAgICAgICB2YXIgX2NvbG9yQ2FjaGUgPSB7fTtcbiAgICAgICAgdmFyIF91c2VDYWNoZSA9IHRydWU7XG4gICAgICAgIHZhciBfZ2FtbWEgPSAxO1xuXG4gICAgICAgIC8vIHByaXZhdGUgbWV0aG9kc1xuXG4gICAgICAgIHZhciBzZXRDb2xvcnMgPSBmdW5jdGlvbihjb2xvcnMpIHtcbiAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycyB8fCBbJyNmZmYnLCAnIzAwMCddO1xuICAgICAgICAgICAgaWYgKGNvbG9ycyAmJiB0eXBlJGooY29sb3JzKSA9PT0gJ3N0cmluZycgJiYgY2hyb21hXzEuYnJld2VyICYmXG4gICAgICAgICAgICAgICAgY2hyb21hXzEuYnJld2VyW2NvbG9ycy50b0xvd2VyQ2FzZSgpXSkge1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNocm9tYV8xLmJyZXdlcltjb2xvcnMudG9Mb3dlckNhc2UoKV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZSRqKGNvbG9ycykgPT09ICdhcnJheScpIHtcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgc2luZ2xlIGNvbG9yXG4gICAgICAgICAgICAgICAgaWYgKGNvbG9ycy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JzID0gW2NvbG9yc1swXSwgY29sb3JzWzBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbWFrZSBhIGNvcHkgb2YgdGhlIGNvbG9yc1xuICAgICAgICAgICAgICAgIGNvbG9ycyA9IGNvbG9ycy5zbGljZSgwKTtcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRvIGNocm9tYSBjbGFzc2VzXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGNvbG9ycy5sZW5ndGg7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcnNbY10gPSBjaHJvbWFfMShjb2xvcnNbY10pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBhdXRvLWZpbGwgY29sb3IgcG9zaXRpb25cbiAgICAgICAgICAgICAgICBfcG9zLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYyQxPTA7IGMkMTxjb2xvcnMubGVuZ3RoOyBjJDErKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYyQxLyhjb2xvcnMubGVuZ3RoLTEpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNldENhY2hlKCk7XG4gICAgICAgICAgICByZXR1cm4gX2NvbG9ycyA9IGNvbG9ycztcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0Q2xhc3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKF9jbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAgICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IG4gJiYgdmFsdWUgPj0gX2NsYXNzZXNbaV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaS0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRtYXAgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcblxuICAgICAgICAvLyBjb25zdCBjbGFzc2lmeVZhbHVlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgLy8gICAgIGxldCB2YWwgPSB2YWx1ZTtcbiAgICAgICAgLy8gICAgIGlmIChfY2xhc3Nlcy5sZW5ndGggPiAyKSB7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbiA9IF9jbGFzc2VzLmxlbmd0aC0xO1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IGkgPSBnZXRDbGFzcyh2YWx1ZSk7XG4gICAgICAgIC8vICAgICAgICAgY29uc3QgbWluYyA9IF9jbGFzc2VzWzBdICsgKChfY2xhc3Nlc1sxXS1fY2xhc3Nlc1swXSkgKiAoMCArIChfc3ByZWFkICogMC41KSkpOyAgLy8gY2VudGVyIG9mIDFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIGNvbnN0IG1heGMgPSBfY2xhc3Nlc1tuLTFdICsgKChfY2xhc3Nlc1tuXS1fY2xhc3Nlc1tuLTFdKSAqICgxIC0gKF9zcHJlYWQgKiAwLjUpKSk7ICAvLyBjZW50ZXIgb2YgbGFzdCBjbGFzc1xuICAgICAgICAvLyAgICAgICAgIHZhbCA9IF9taW4gKyAoKCgoX2NsYXNzZXNbaV0gKyAoKF9jbGFzc2VzW2krMV0gLSBfY2xhc3Nlc1tpXSkgKiAwLjUpKSAtIG1pbmMpIC8gKG1heGMtbWluYykpICogKF9tYXggLSBfbWluKSk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICByZXR1cm4gdmFsO1xuICAgICAgICAvLyB9O1xuXG4gICAgICAgIHZhciBnZXRDb2xvciA9IGZ1bmN0aW9uKHZhbCwgYnlwYXNzTWFwKSB7XG4gICAgICAgICAgICB2YXIgY29sLCB0O1xuICAgICAgICAgICAgaWYgKGJ5cGFzc01hcCA9PSBudWxsKSB7IGJ5cGFzc01hcCA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAoaXNOYU4odmFsKSB8fCAodmFsID09PSBudWxsKSkgeyByZXR1cm4gX25hY29sOyB9XG4gICAgICAgICAgICBpZiAoIWJ5cGFzc01hcCkge1xuICAgICAgICAgICAgICAgIGlmIChfY2xhc3NlcyAmJiAoX2NsYXNzZXMubGVuZ3RoID4gMikpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZmluZCB0aGUgY2xhc3NcbiAgICAgICAgICAgICAgICAgICAgdmFyIGMgPSBnZXRDbGFzcyh2YWwpO1xuICAgICAgICAgICAgICAgICAgICB0ID0gYyAvIChfY2xhc3Nlcy5sZW5ndGgtMik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfbWF4ICE9PSBfbWluKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGp1c3QgaW50ZXJwb2xhdGUgYmV0d2VlbiBtaW4vbWF4XG4gICAgICAgICAgICAgICAgICAgIHQgPSAodmFsIC0gX21pbikgLyAoX21heCAtIF9taW4pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHQgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdCA9IHZhbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFieXBhc3NNYXApIHtcbiAgICAgICAgICAgICAgICB0ID0gdG1hcCh0KTsgIC8vIGxpZ2h0bmVzcyBjb3JyZWN0aW9uXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChfZ2FtbWEgIT09IDEpIHsgdCA9IHBvdyQ1KHQsIF9nYW1tYSk7IH1cblxuICAgICAgICAgICAgdCA9IF9wYWRkaW5nWzBdICsgKHQgKiAoMSAtIF9wYWRkaW5nWzBdIC0gX3BhZGRpbmdbMV0pKTtcblxuICAgICAgICAgICAgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHQpKTtcblxuICAgICAgICAgICAgdmFyIGsgPSBNYXRoLmZsb29yKHQgKiAxMDAwMCk7XG5cbiAgICAgICAgICAgIGlmIChfdXNlQ2FjaGUgJiYgX2NvbG9yQ2FjaGVba10pIHtcbiAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JDYWNoZVtrXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUkaihfY29sb3JzKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgICAgICAvL2ZvciBpIGluIFswLi5fcG9zLmxlbmd0aC0xXVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8X3Bvcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHAgPSBfcG9zW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPD0gcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnNbaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHQgPj0gcCkgJiYgKGkgPT09IChfcG9zLmxlbmd0aC0xKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBfY29sb3JzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHQgPiBwICYmIHQgPCBfcG9zW2krMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKHQtcCkvKF9wb3NbaSsxXS1wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2wgPSBjaHJvbWFfMS5pbnRlcnBvbGF0ZShfY29sb3JzW2ldLCBfY29sb3JzW2krMV0sIHQsIF9tb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZSRqKF9jb2xvcnMpID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbCA9IF9jb2xvcnModCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdXNlQ2FjaGUpIHsgX2NvbG9yQ2FjaGVba10gPSBjb2w7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2w7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlc2V0Q2FjaGUgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBfY29sb3JDYWNoZSA9IHt9OyB9O1xuXG4gICAgICAgIHNldENvbG9ycyhjb2xvcnMpO1xuXG4gICAgICAgIC8vIHB1YmxpYyBpbnRlcmZhY2VcblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgICAgIHZhciBjID0gY2hyb21hXzEoZ2V0Q29sb3IodikpO1xuICAgICAgICAgICAgaWYgKF9vdXQgJiYgY1tfb3V0XSkgeyByZXR1cm4gY1tfb3V0XSgpOyB9IGVsc2UgeyByZXR1cm4gYzsgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY2xhc3NlcyA9IGZ1bmN0aW9uKGNsYXNzZXMpIHtcbiAgICAgICAgICAgIGlmIChjbGFzc2VzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRqKGNsYXNzZXMpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIF9jbGFzc2VzID0gY2xhc3NlcztcbiAgICAgICAgICAgICAgICAgICAgX2RvbWFpbiA9IFtjbGFzc2VzWzBdLCBjbGFzc2VzW2NsYXNzZXMubGVuZ3RoLTFdXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZCA9IGNocm9tYV8xLmFuYWx5emUoX2RvbWFpbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjbGFzc2VzID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfY2xhc3NlcyA9IFtkLm1pbiwgZC5tYXhdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2NsYXNzZXMgPSBjaHJvbWFfMS5saW1pdHMoZCwgJ2UnLCBjbGFzc2VzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfY2xhc3NlcztcbiAgICAgICAgfTtcblxuXG4gICAgICAgIGYuZG9tYWluID0gZnVuY3Rpb24oZG9tYWluKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2RvbWFpbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9taW4gPSBkb21haW5bMF07XG4gICAgICAgICAgICBfbWF4ID0gZG9tYWluW2RvbWFpbi5sZW5ndGgtMV07XG4gICAgICAgICAgICBfcG9zID0gW107XG4gICAgICAgICAgICB2YXIgayA9IF9jb2xvcnMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKChkb21haW4ubGVuZ3RoID09PSBrKSAmJiAoX21pbiAhPT0gX21heCkpIHtcbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgcG9zaXRpb25zXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxpc3QgPSBBcnJheS5mcm9tKGRvbWFpbik7IGkgPCBsaXN0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkID0gbGlzdFtpXTtcblxuICAgICAgICAgICAgICAgICAgX3Bvcy5wdXNoKChkLV9taW4pIC8gKF9tYXgtX21pbikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYz0wOyBjPGs7IGMrKykge1xuICAgICAgICAgICAgICAgICAgICBfcG9zLnB1c2goYy8oay0xKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2RvbWFpbiA9IFtfbWluLCBfbWF4XTtcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYubW9kZSA9IGZ1bmN0aW9uKF9tKSB7XG4gICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX21vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbW9kZSA9IF9tO1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5yYW5nZSA9IGZ1bmN0aW9uKGNvbG9ycywgX3Bvcykge1xuICAgICAgICAgICAgc2V0Q29sb3JzKGNvbG9ycywgX3Bvcyk7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLm91dCA9IGZ1bmN0aW9uKF9vKSB7XG4gICAgICAgICAgICBfb3V0ID0gX287XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLnNwcmVhZCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9zcHJlYWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc3ByZWFkID0gdmFsO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jb3JyZWN0TGlnaHRuZXNzID0gZnVuY3Rpb24odikge1xuICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCkgeyB2ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgX2NvcnJlY3RMaWdodG5lc3MgPSB2O1xuICAgICAgICAgICAgcmVzZXRDYWNoZSgpO1xuICAgICAgICAgICAgaWYgKF9jb3JyZWN0TGlnaHRuZXNzKSB7XG4gICAgICAgICAgICAgICAgdG1hcCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIEwwID0gZ2V0Q29sb3IoMCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMMSA9IGdldENvbG9yKDEsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcG9sID0gTDAgPiBMMTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIExfYWN0dWFsID0gZ2V0Q29sb3IodCwgdHJ1ZSkubGFiKClbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2lkZWFsID0gTDAgKyAoKEwxIC0gTDApICogdCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0MSA9IDE7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXhfaXRlciA9IDIwO1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoKE1hdGguYWJzKExfZGlmZikgPiAxZS0yKSAmJiAobWF4X2l0ZXItLSA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvbCkgeyBMX2RpZmYgKj0gLTE7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTF9kaWZmIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0MCA9IHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHQgKz0gKHQxIC0gdCkgKiAwLjU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdDEgPSB0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ICs9ICh0MCAtIHQpICogMC41O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMX2FjdHVhbCA9IGdldENvbG9yKHQsIHRydWUpLmxhYigpWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBMX2RpZmYgPSBMX2FjdHVhbCAtIExfaWRlYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRtYXAgPSBmdW5jdGlvbiAodCkgeyByZXR1cm4gdDsgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucGFkZGluZyA9IGZ1bmN0aW9uKHApIHtcbiAgICAgICAgICAgIGlmIChwICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSRqKHApID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgICAgICAgICBwID0gW3AscF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9wYWRkaW5nID0gcDtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9wYWRkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuY29sb3JzID0gZnVuY3Rpb24obnVtQ29sb3JzLCBvdXQpIHtcbiAgICAgICAgICAgIC8vIElmIG5vIGFyZ3VtZW50cyBhcmUgZ2l2ZW4sIHJldHVybiB0aGUgb3JpZ2luYWwgY29sb3JzIHRoYXQgd2VyZSBwcm92aWRlZFxuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPCAyKSB7IG91dCA9ICdoZXgnOyB9XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX2NvbG9ycy5zbGljZSgwKTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBbZigwLjUpXTtcblxuICAgICAgICAgICAgfSBlbHNlIGlmIChudW1Db2xvcnMgPiAxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRtID0gX2RvbWFpblswXTtcbiAgICAgICAgICAgICAgICB2YXIgZGQgPSBfZG9tYWluWzFdIC0gZG07XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gX19yYW5nZV9fKDAsIG51bUNvbG9ycywgZmFsc2UpLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gZiggZG0gKyAoKGkvKG51bUNvbG9ycy0xKSkgKiBkZCkgKTsgfSk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIHJldHVybnMgYWxsIGNvbG9ycyBiYXNlZCBvbiB0aGUgZGVmaW5lZCBjbGFzc2VzXG4gICAgICAgICAgICAgICAgY29sb3JzID0gW107XG4gICAgICAgICAgICAgICAgdmFyIHNhbXBsZXMgPSBbXTtcbiAgICAgICAgICAgICAgICBpZiAoX2NsYXNzZXMgJiYgKF9jbGFzc2VzLmxlbmd0aCA+IDIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxLCBlbmQgPSBfY2xhc3Nlcy5sZW5ndGgsIGFzYyA9IDEgPD0gZW5kOyBhc2MgPyBpIDwgZW5kIDogaSA+IGVuZDsgYXNjID8gaSsrIDogaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYW1wbGVzLnB1c2goKF9jbGFzc2VzW2ktMV0rX2NsYXNzZXNbaV0pKjAuNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVzID0gX2RvbWFpbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gc2FtcGxlcy5tYXAoZnVuY3Rpb24gKHYpIHsgcmV0dXJuIGYodik7IH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2hyb21hXzFbb3V0XSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5tYXAoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGNbb3V0XSgpOyB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5jYWNoZSA9IGZ1bmN0aW9uKGMpIHtcbiAgICAgICAgICAgIGlmIChjICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfdXNlQ2FjaGUgPSBjO1xuICAgICAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3VzZUNhY2hlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGYuZ2FtbWEgPSBmdW5jdGlvbihnKSB7XG4gICAgICAgICAgICBpZiAoZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgX2dhbW1hID0gZztcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9nYW1tYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmLm5vZGF0YSA9IGZ1bmN0aW9uKGQpIHtcbiAgICAgICAgICAgIGlmIChkICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBfbmFjb2wgPSBjaHJvbWFfMShkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9uYWNvbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gX19yYW5nZV9fKGxlZnQsIHJpZ2h0LCBpbmNsdXNpdmUpIHtcbiAgICAgIHZhciByYW5nZSA9IFtdO1xuICAgICAgdmFyIGFzY2VuZGluZyA9IGxlZnQgPCByaWdodDtcbiAgICAgIHZhciBlbmQgPSAhaW5jbHVzaXZlID8gcmlnaHQgOiBhc2NlbmRpbmcgPyByaWdodCArIDEgOiByaWdodCAtIDE7XG4gICAgICBmb3IgKHZhciBpID0gbGVmdDsgYXNjZW5kaW5nID8gaSA8IGVuZCA6IGkgPiBlbmQ7IGFzY2VuZGluZyA/IGkrKyA6IGktLSkge1xuICAgICAgICByYW5nZS5wdXNoKGkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJhbmdlO1xuICAgIH1cblxuICAgIC8vXG4gICAgLy8gaW50ZXJwb2xhdGVzIGJldHdlZW4gYSBzZXQgb2YgY29sb3JzIHV6aW5nIGEgYmV6aWVyIHNwbGluZVxuICAgIC8vXG5cbiAgICAvLyBAcmVxdWlyZXMgdXRpbHMgbGFiXG5cblxuXG5cbiAgICB2YXIgYmV6aWVyID0gZnVuY3Rpb24oY29sb3JzKSB7XG4gICAgICAgIHZhciBhc3NpZ24sIGFzc2lnbiQxLCBhc3NpZ24kMjtcblxuICAgICAgICB2YXIgSSwgbGFiMCwgbGFiMSwgbGFiMjtcbiAgICAgICAgY29sb3JzID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gbmV3IENvbG9yXzEoYyk7IH0pO1xuICAgICAgICBpZiAoY29sb3JzLmxlbmd0aCA9PT0gMikge1xuICAgICAgICAgICAgLy8gbGluZWFyIGludGVycG9sYXRpb25cbiAgICAgICAgICAgIChhc3NpZ24gPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnblswXSwgbGFiMSA9IGFzc2lnblsxXSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIHZhciBsYWIgPSAoWzAsIDEsIDJdLm1hcChmdW5jdGlvbiAoaSkgeyByZXR1cm4gbGFiMFtpXSArICh0ICogKGxhYjFbaV0gLSBsYWIwW2ldKSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgIC8vIHF1YWRyYXRpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgKGFzc2lnbiQxID0gY29sb3JzLm1hcChmdW5jdGlvbiAoYykgeyByZXR1cm4gYy5sYWIoKTsgfSksIGxhYjAgPSBhc3NpZ24kMVswXSwgbGFiMSA9IGFzc2lnbiQxWzFdLCBsYWIyID0gYXNzaWduJDFbMl0pO1xuICAgICAgICAgICAgSSA9IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGFiID0gKFswLCAxLCAyXS5tYXAoZnVuY3Rpb24gKGkpIHsgcmV0dXJuICgoMS10KSooMS10KSAqIGxhYjBbaV0pICsgKDIgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICh0ICogdCAqIGxhYjJbaV0pOyB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb2xvcl8xKGxhYiwgJ2xhYicpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChjb2xvcnMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAvLyBjdWJpYyBiZXppZXIgaW50ZXJwb2xhdGlvblxuICAgICAgICAgICAgdmFyIGxhYjM7XG4gICAgICAgICAgICAoYXNzaWduJDIgPSBjb2xvcnMubWFwKGZ1bmN0aW9uIChjKSB7IHJldHVybiBjLmxhYigpOyB9KSwgbGFiMCA9IGFzc2lnbiQyWzBdLCBsYWIxID0gYXNzaWduJDJbMV0sIGxhYjIgPSBhc3NpZ24kMlsyXSwgbGFiMyA9IGFzc2lnbiQyWzNdKTtcbiAgICAgICAgICAgIEkgPSBmdW5jdGlvbih0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxhYiA9IChbMCwgMSwgMl0ubWFwKGZ1bmN0aW9uIChpKSB7IHJldHVybiAoKDEtdCkqKDEtdCkqKDEtdCkgKiBsYWIwW2ldKSArICgzICogKDEtdCkgKiAoMS10KSAqIHQgKiBsYWIxW2ldKSArICgzICogKDEtdCkgKiB0ICogdCAqIGxhYjJbaV0pICsgKHQqdCp0ICogbGFiM1tpXSk7IH0pKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbG9yXzEobGFiLCAnbGFiJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGNvbG9ycy5sZW5ndGggPT09IDUpIHtcbiAgICAgICAgICAgIHZhciBJMCA9IGJlemllcihjb2xvcnMuc2xpY2UoMCwgMykpO1xuICAgICAgICAgICAgdmFyIEkxID0gYmV6aWVyKGNvbG9ycy5zbGljZSgyLCA1KSk7XG4gICAgICAgICAgICBJID0gZnVuY3Rpb24odCkge1xuICAgICAgICAgICAgICAgIGlmICh0IDwgMC41KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJMCh0KjIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBJMSgodC0wLjUpKjIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEk7XG4gICAgfTtcblxuICAgIHZhciBiZXppZXJfMSA9IGZ1bmN0aW9uIChjb2xvcnMpIHtcbiAgICAgICAgdmFyIGYgPSBiZXppZXIoY29sb3JzKTtcbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNjYWxlKGYpOyB9O1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuXG4gICAgLypcbiAgICAgKiBpbnRlcnBvbGF0ZXMgYmV0d2VlbiBhIHNldCBvZiBjb2xvcnMgdXppbmcgYSBiZXppZXIgc3BsaW5lXG4gICAgICogYmxlbmQgbW9kZSBmb3JtdWxhcyB0YWtlbiBmcm9tIGh0dHA6Ly93d3cudmVudHVyZS13YXJlLmNvbS9rZXZpbi9jb2RpbmcvbGV0cy1sZWFybi1tYXRoLXBob3Rvc2hvcC1ibGVuZC1tb2Rlcy9cbiAgICAgKi9cblxuXG5cblxuICAgIHZhciBibGVuZCA9IGZ1bmN0aW9uIChib3R0b20sIHRvcCwgbW9kZSkge1xuICAgICAgICBpZiAoIWJsZW5kW21vZGVdKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Vua25vd24gYmxlbmQgbW9kZSAnICsgbW9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJsZW5kW21vZGVdKGJvdHRvbSwgdG9wKTtcbiAgICB9O1xuXG4gICAgdmFyIGJsZW5kX2YgPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGJvdHRvbSx0b3ApIHtcbiAgICAgICAgICAgIHZhciBjMCA9IGNocm9tYV8xKHRvcCkucmdiKCk7XG4gICAgICAgICAgICB2YXIgYzEgPSBjaHJvbWFfMShib3R0b20pLnJnYigpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYV8xLnJnYihmKGMwLCBjMSkpO1xuICAgICAgICB9OyB9O1xuXG4gICAgdmFyIGVhY2ggPSBmdW5jdGlvbiAoZikgeyByZXR1cm4gZnVuY3Rpb24gKGMwLCBjMSkge1xuICAgICAgICAgICAgdmFyIG91dCA9IFtdO1xuICAgICAgICAgICAgb3V0WzBdID0gZihjMFswXSwgYzFbMF0pO1xuICAgICAgICAgICAgb3V0WzFdID0gZihjMFsxXSwgYzFbMV0pO1xuICAgICAgICAgICAgb3V0WzJdID0gZihjMFsyXSwgYzFbMl0pO1xuICAgICAgICAgICAgcmV0dXJuIG91dDtcbiAgICAgICAgfTsgfTtcblxuICAgIHZhciBub3JtYWwgPSBmdW5jdGlvbiAoYSkgeyByZXR1cm4gYTsgfTtcbiAgICB2YXIgbXVsdGlwbHkgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhICogYiAvIDI1NTsgfTtcbiAgICB2YXIgZGFya2VuJDEgPSBmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhID4gYiA/IGIgOiBhOyB9O1xuICAgIHZhciBsaWdodGVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYSA+IGIgPyBhIDogYjsgfTtcbiAgICB2YXIgc2NyZWVuID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gMjU1ICogKDEgLSAoMS1hLzI1NSkgKiAoMS1iLzI1NSkpOyB9O1xuICAgIHZhciBvdmVybGF5ID0gZnVuY3Rpb24gKGEsYikgeyByZXR1cm4gYiA8IDEyOCA/IDIgKiBhICogYiAvIDI1NSA6IDI1NSAqICgxIC0gMiAqICgxIC0gYSAvIDI1NSApICogKCAxIC0gYiAvIDI1NSApKTsgfTtcbiAgICB2YXIgYnVybiA9IGZ1bmN0aW9uIChhLGIpIHsgcmV0dXJuIDI1NSAqICgxIC0gKDEgLSBiIC8gMjU1KSAvIChhLzI1NSkpOyB9O1xuICAgIHZhciBkb2RnZSA9IGZ1bmN0aW9uIChhLGIpIHtcbiAgICAgICAgaWYgKGEgPT09IDI1NSkgeyByZXR1cm4gMjU1OyB9XG4gICAgICAgIGEgPSAyNTUgKiAoYiAvIDI1NSkgLyAoMSAtIGEgLyAyNTUpO1xuICAgICAgICByZXR1cm4gYSA+IDI1NSA/IDI1NSA6IGFcbiAgICB9O1xuXG4gICAgLy8gIyBhZGQgPSAoYSxiKSAtPlxuICAgIC8vICMgICAgIGlmIChhICsgYiA+IDI1NSkgdGhlbiAyNTUgZWxzZSBhICsgYlxuXG4gICAgYmxlbmQubm9ybWFsID0gYmxlbmRfZihlYWNoKG5vcm1hbCkpO1xuICAgIGJsZW5kLm11bHRpcGx5ID0gYmxlbmRfZihlYWNoKG11bHRpcGx5KSk7XG4gICAgYmxlbmQuc2NyZWVuID0gYmxlbmRfZihlYWNoKHNjcmVlbikpO1xuICAgIGJsZW5kLm92ZXJsYXkgPSBibGVuZF9mKGVhY2gob3ZlcmxheSkpO1xuICAgIGJsZW5kLmRhcmtlbiA9IGJsZW5kX2YoZWFjaChkYXJrZW4kMSkpO1xuICAgIGJsZW5kLmxpZ2h0ZW4gPSBibGVuZF9mKGVhY2gobGlnaHRlbikpO1xuICAgIGJsZW5kLmRvZGdlID0gYmxlbmRfZihlYWNoKGRvZGdlKSk7XG4gICAgYmxlbmQuYnVybiA9IGJsZW5kX2YoZWFjaChidXJuKSk7XG4gICAgLy8gYmxlbmQuYWRkID0gYmxlbmRfZihlYWNoKGFkZCkpO1xuXG4gICAgdmFyIGJsZW5kXzEgPSBibGVuZDtcblxuICAgIC8vIGN1YmVoZWxpeCBpbnRlcnBvbGF0aW9uXG4gICAgLy8gYmFzZWQgb24gRC5BLiBHcmVlbiBcIkEgY29sb3VyIHNjaGVtZSBmb3IgdGhlIGRpc3BsYXkgb2YgYXN0cm9ub21pY2FsIGludGVuc2l0eSBpbWFnZXNcIlxuICAgIC8vIGh0dHA6Ly9hc3Ryb24tc29jLmluL2J1bGxldGluLzExSnVuZS8yODkzOTIwMTEucGRmXG5cbiAgICB2YXIgdHlwZSRrID0gdXRpbHMudHlwZTtcbiAgICB2YXIgY2xpcF9yZ2IkMyA9IHV0aWxzLmNsaXBfcmdiO1xuICAgIHZhciBUV09QSSQyID0gdXRpbHMuVFdPUEk7XG4gICAgdmFyIHBvdyQ2ID0gTWF0aC5wb3c7XG4gICAgdmFyIHNpbiQyID0gTWF0aC5zaW47XG4gICAgdmFyIGNvcyQzID0gTWF0aC5jb3M7XG5cblxuICAgIHZhciBjdWJlaGVsaXggPSBmdW5jdGlvbihzdGFydCwgcm90YXRpb25zLCBodWUsIGdhbW1hLCBsaWdodG5lc3MpIHtcbiAgICAgICAgaWYgKCBzdGFydCA9PT0gdm9pZCAwICkgc3RhcnQ9MzAwO1xuICAgICAgICBpZiAoIHJvdGF0aW9ucyA9PT0gdm9pZCAwICkgcm90YXRpb25zPS0xLjU7XG4gICAgICAgIGlmICggaHVlID09PSB2b2lkIDAgKSBodWU9MTtcbiAgICAgICAgaWYgKCBnYW1tYSA9PT0gdm9pZCAwICkgZ2FtbWE9MTtcbiAgICAgICAgaWYgKCBsaWdodG5lc3MgPT09IHZvaWQgMCApIGxpZ2h0bmVzcz1bMCwxXTtcblxuICAgICAgICB2YXIgZGggPSAwLCBkbDtcbiAgICAgICAgaWYgKHR5cGUkayhsaWdodG5lc3MpID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICBkbCA9IGxpZ2h0bmVzc1sxXSAtIGxpZ2h0bmVzc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRsID0gMDtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IFtsaWdodG5lc3MsIGxpZ2h0bmVzc107XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZiA9IGZ1bmN0aW9uKGZyYWN0KSB7XG4gICAgICAgICAgICB2YXIgYSA9IFRXT1BJJDIgKiAoKChzdGFydCsxMjApLzM2MCkgKyAocm90YXRpb25zICogZnJhY3QpKTtcbiAgICAgICAgICAgIHZhciBsID0gcG93JDYobGlnaHRuZXNzWzBdICsgKGRsICogZnJhY3QpLCBnYW1tYSk7XG4gICAgICAgICAgICB2YXIgaCA9IGRoICE9PSAwID8gaHVlWzBdICsgKGZyYWN0ICogZGgpIDogaHVlO1xuICAgICAgICAgICAgdmFyIGFtcCA9IChoICogbCAqICgxLWwpKSAvIDI7XG4gICAgICAgICAgICB2YXIgY29zX2EgPSBjb3MkMyhhKTtcbiAgICAgICAgICAgIHZhciBzaW5fYSA9IHNpbiQyKGEpO1xuICAgICAgICAgICAgdmFyIHIgPSBsICsgKGFtcCAqICgoLTAuMTQ4NjEgKiBjb3NfYSkgKyAoMS43ODI3Nyogc2luX2EpKSk7XG4gICAgICAgICAgICB2YXIgZyA9IGwgKyAoYW1wICogKCgtMC4yOTIyNyAqIGNvc19hKSAtICgwLjkwNjQ5KiBzaW5fYSkpKTtcbiAgICAgICAgICAgIHZhciBiID0gbCArIChhbXAgKiAoKzEuOTcyOTQgKiBjb3NfYSkpO1xuICAgICAgICAgICAgcmV0dXJuIGNocm9tYV8xKGNsaXBfcmdiJDMoW3IqMjU1LGcqMjU1LGIqMjU1LDFdKSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zdGFydCA9IGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgICAgIGlmICgocyA9PSBudWxsKSkgeyByZXR1cm4gc3RhcnQ7IH1cbiAgICAgICAgICAgIHN0YXJ0ID0gcztcbiAgICAgICAgICAgIHJldHVybiBmO1xuICAgICAgICB9O1xuXG4gICAgICAgIGYucm90YXRpb25zID0gZnVuY3Rpb24ocikge1xuICAgICAgICAgICAgaWYgKChyID09IG51bGwpKSB7IHJldHVybiByb3RhdGlvbnM7IH1cbiAgICAgICAgICAgIHJvdGF0aW9ucyA9IHI7XG4gICAgICAgICAgICByZXR1cm4gZjtcbiAgICAgICAgfTtcblxuICAgICAgICBmLmdhbW1hID0gZnVuY3Rpb24oZykge1xuICAgICAgICAgICAgaWYgKChnID09IG51bGwpKSB7IHJldHVybiBnYW1tYTsgfVxuICAgICAgICAgICAgZ2FtbWEgPSBnO1xuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5odWUgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGh1ZTsgfVxuICAgICAgICAgICAgaHVlID0gaDtcbiAgICAgICAgICAgIGlmICh0eXBlJGsoaHVlKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGRoID0gaHVlWzFdIC0gaHVlWzBdO1xuICAgICAgICAgICAgICAgIGlmIChkaCA9PT0gMCkgeyBodWUgPSBodWVbMV07IH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5saWdodG5lc3MgPSBmdW5jdGlvbihoKSB7XG4gICAgICAgICAgICBpZiAoKGggPT0gbnVsbCkpIHsgcmV0dXJuIGxpZ2h0bmVzczsgfVxuICAgICAgICAgICAgaWYgKHR5cGUkayhoKSA9PT0gJ2FycmF5Jykge1xuICAgICAgICAgICAgICAgIGxpZ2h0bmVzcyA9IGg7XG4gICAgICAgICAgICAgICAgZGwgPSBoWzFdIC0gaFswXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGlnaHRuZXNzID0gW2gsaF07XG4gICAgICAgICAgICAgICAgZGwgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGY7XG4gICAgICAgIH07XG5cbiAgICAgICAgZi5zY2FsZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNocm9tYV8xLnNjYWxlKGYpOyB9O1xuXG4gICAgICAgIGYuaHVlKGh1ZSk7XG5cbiAgICAgICAgcmV0dXJuIGY7XG4gICAgfTtcblxuICAgIHZhciBkaWdpdHMgPSAnMDEyMzQ1Njc4OWFiY2RlZic7XG5cbiAgICB2YXIgZmxvb3IkMiA9IE1hdGguZmxvb3I7XG4gICAgdmFyIHJhbmRvbSA9IE1hdGgucmFuZG9tO1xuXG4gICAgdmFyIHJhbmRvbV8xID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29kZSA9ICcjJztcbiAgICAgICAgZm9yICh2YXIgaT0wOyBpPDY7IGkrKykge1xuICAgICAgICAgICAgY29kZSArPSBkaWdpdHMuY2hhckF0KGZsb29yJDIocmFuZG9tKCkgKiAxNikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQ29sb3JfMShjb2RlLCAnaGV4Jyk7XG4gICAgfTtcblxuICAgIHZhciBsb2ckMSA9IE1hdGgubG9nO1xuICAgIHZhciBwb3ckNyA9IE1hdGgucG93O1xuICAgIHZhciBmbG9vciQzID0gTWF0aC5mbG9vcjtcbiAgICB2YXIgYWJzID0gTWF0aC5hYnM7XG5cblxuICAgIHZhciBhbmFseXplID0gZnVuY3Rpb24gKGRhdGEsIGtleSkge1xuICAgICAgICBpZiAoIGtleSA9PT0gdm9pZCAwICkga2V5PW51bGw7XG5cbiAgICAgICAgdmFyIHIgPSB7XG4gICAgICAgICAgICBtaW46IE51bWJlci5NQVhfVkFMVUUsXG4gICAgICAgICAgICBtYXg6IE51bWJlci5NQVhfVkFMVUUqLTEsXG4gICAgICAgICAgICBzdW06IDAsXG4gICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgY291bnQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHR5cGUoZGF0YSkgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBkYXRhID0gT2JqZWN0LnZhbHVlcyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICAgICAgaWYgKGtleSAmJiB0eXBlKHZhbCkgPT09ICdvYmplY3QnKSB7IHZhbCA9IHZhbFtrZXldOyB9XG4gICAgICAgICAgICBpZiAodmFsICE9PSB1bmRlZmluZWQgJiYgdmFsICE9PSBudWxsICYmICFpc05hTih2YWwpKSB7XG4gICAgICAgICAgICAgICAgci52YWx1ZXMucHVzaCh2YWwpO1xuICAgICAgICAgICAgICAgIHIuc3VtICs9IHZhbDtcbiAgICAgICAgICAgICAgICBpZiAodmFsIDwgci5taW4pIHsgci5taW4gPSB2YWw7IH1cbiAgICAgICAgICAgICAgICBpZiAodmFsID4gci5tYXgpIHsgci5tYXggPSB2YWw7IH1cbiAgICAgICAgICAgICAgICByLmNvdW50ICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHIuZG9tYWluID0gW3IubWluLCByLm1heF07XG5cbiAgICAgICAgci5saW1pdHMgPSBmdW5jdGlvbiAobW9kZSwgbnVtKSB7IHJldHVybiBsaW1pdHMociwgbW9kZSwgbnVtKTsgfTtcblxuICAgICAgICByZXR1cm4gcjtcbiAgICB9O1xuXG5cbiAgICB2YXIgbGltaXRzID0gZnVuY3Rpb24gKGRhdGEsIG1vZGUsIG51bSkge1xuICAgICAgICBpZiAoIG1vZGUgPT09IHZvaWQgMCApIG1vZGU9J2VxdWFsJztcbiAgICAgICAgaWYgKCBudW0gPT09IHZvaWQgMCApIG51bT03O1xuXG4gICAgICAgIGlmICh0eXBlKGRhdGEpID09ICdhcnJheScpIHtcbiAgICAgICAgICAgIGRhdGEgPSBhbmFseXplKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBtaW4gPSBkYXRhLm1pbjtcbiAgICAgICAgdmFyIG1heCA9IGRhdGEubWF4O1xuICAgICAgICB2YXIgdmFsdWVzID0gZGF0YS52YWx1ZXMuc29ydChmdW5jdGlvbiAoYSxiKSB7IHJldHVybiBhLWI7IH0pO1xuXG4gICAgICAgIGlmIChudW0gPT09IDEpIHsgcmV0dXJuIFttaW4sbWF4XTsgfVxuXG4gICAgICAgIHZhciBsaW1pdHMgPSBbXTtcblxuICAgICAgICBpZiAobW9kZS5zdWJzdHIoMCwxKSA9PT0gJ2MnKSB7IC8vIGNvbnRpbnVvdXNcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdlJykgeyAvLyBlcXVhbCBpbnRlcnZhbFxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MTsgaTxudW07IGkrKykge1xuICAgICAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbisoKGkvbnVtKSoobWF4LW1pbikpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1heCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnbCcpIHsgLy8gbG9nIHNjYWxlXG4gICAgICAgICAgICBpZiAobWluIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvZ2FyaXRobWljIHNjYWxlcyBhcmUgb25seSBwb3NzaWJsZSBmb3IgdmFsdWVzID4gMCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1pbl9sb2cgPSBNYXRoLkxPRzEwRSAqIGxvZyQxKG1pbik7XG4gICAgICAgICAgICB2YXIgbWF4X2xvZyA9IE1hdGguTE9HMTBFICogbG9nJDEobWF4KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKG1pbik7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDE9MTsgaSQxPG51bTsgaSQxKyspIHtcbiAgICAgICAgICAgICAgICBsaW1pdHMucHVzaChwb3ckNygxMCwgbWluX2xvZyArICgoaSQxL251bSkgKiAobWF4X2xvZyAtIG1pbl9sb2cpKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWF4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsc2UgaWYgKG1vZGUuc3Vic3RyKDAsMSkgPT09ICdxJykgeyAvLyBxdWFudGlsZSBzY2FsZVxuICAgICAgICAgICAgbGltaXRzLnB1c2gobWluKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkkMj0xOyBpJDI8bnVtOyBpJDIrKykge1xuICAgICAgICAgICAgICAgIHZhciBwID0gKCh2YWx1ZXMubGVuZ3RoLTEpICogaSQyKS9udW07XG4gICAgICAgICAgICAgICAgdmFyIHBiID0gZmxvb3IkMyhwKTtcbiAgICAgICAgICAgICAgICBpZiAocGIgPT09IHApIHtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2godmFsdWVzW3BiXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gcCA+IHBiXG4gICAgICAgICAgICAgICAgICAgIHZhciBwciA9IHAgLSBwYjtcbiAgICAgICAgICAgICAgICAgICAgbGltaXRzLnB1c2goKHZhbHVlc1twYl0qKDEtcHIpKSArICh2YWx1ZXNbcGIrMV0qcHIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdHMucHVzaChtYXgpO1xuXG4gICAgICAgIH1cblxuICAgICAgICBlbHNlIGlmIChtb2RlLnN1YnN0cigwLDEpID09PSAnaycpIHsgLy8gay1tZWFucyBjbHVzdGVyaW5nXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgaW1wbGVtZW50YXRpb24gYmFzZWQgb25cbiAgICAgICAgICAgIGh0dHA6Ly9jb2RlLmdvb2dsZS5jb20vcC9maWd1ZS9zb3VyY2UvYnJvd3NlL3RydW5rL2ZpZ3VlLmpzIzMzNlxuICAgICAgICAgICAgc2ltcGxpZmllZCBmb3IgMS1kIGlucHV0IHZhbHVlc1xuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIHZhciBjbHVzdGVyO1xuICAgICAgICAgICAgdmFyIG4gPSB2YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGFzc2lnbm1lbnRzID0gbmV3IEFycmF5KG4pO1xuICAgICAgICAgICAgdmFyIGNsdXN0ZXJTaXplcyA9IG5ldyBBcnJheShudW0pO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRydWU7XG4gICAgICAgICAgICB2YXIgbmJfaXRlcnMgPSAwO1xuICAgICAgICAgICAgdmFyIGNlbnRyb2lkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIGdldCBzZWVkIHZhbHVlc1xuICAgICAgICAgICAgY2VudHJvaWRzID0gW107XG4gICAgICAgICAgICBjZW50cm9pZHMucHVzaChtaW4pO1xuICAgICAgICAgICAgZm9yICh2YXIgaSQzPTE7IGkkMzxudW07IGkkMysrKSB7XG4gICAgICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWluICsgKChpJDMvbnVtKSAqIChtYXgtbWluKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2VudHJvaWRzLnB1c2gobWF4KTtcblxuICAgICAgICAgICAgd2hpbGUgKHJlcGVhdCkge1xuICAgICAgICAgICAgICAgIC8vIGFzc2lnbm1lbnQgc3RlcFxuICAgICAgICAgICAgICAgIGZvciAodmFyIGo9MDsgajxudW07IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyU2l6ZXNbal0gPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpJDQ9MDsgaSQ0PG47IGkkNCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHZhbHVlc1tpJDRdO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWluZGlzdCA9IE51bWJlci5NQVhfVkFMVUU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBiZXN0ID0gKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGokMT0wOyBqJDE8bnVtOyBqJDErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3QgPSBhYnMoY2VudHJvaWRzW2okMV0tdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3QgPCBtaW5kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluZGlzdCA9IGRpc3Q7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVzdCA9IGokMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdXN0ZXJTaXplc1tiZXN0XSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXNzaWdubWVudHNbaSQ0XSA9IGJlc3Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgY2VudHJvaWRzIHN0ZXBcbiAgICAgICAgICAgICAgICB2YXIgbmV3Q2VudHJvaWRzID0gbmV3IEFycmF5KG51bSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQyPTA7IGokMjxudW07IGokMisrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDJdID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSQ1PTA7IGkkNTxuOyBpJDUrKykge1xuICAgICAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ1XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tjbHVzdGVyXSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2VudHJvaWRzW2NsdXN0ZXJdID0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdDZW50cm9pZHNbY2x1c3Rlcl0gKz0gdmFsdWVzW2kkNV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiQzPTA7IGokMzxudW07IGokMysrKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld0NlbnRyb2lkc1tqJDNdICo9IDEvY2x1c3RlclNpemVzW2okM107XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgY29udmVyZ2VuY2VcbiAgICAgICAgICAgICAgICByZXBlYXQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqJDQ9MDsgaiQ0PG51bTsgaiQ0KyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5ld0NlbnRyb2lkc1tqJDRdICE9PSBjZW50cm9pZHNbaiQ0XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY2VudHJvaWRzID0gbmV3Q2VudHJvaWRzO1xuICAgICAgICAgICAgICAgIG5iX2l0ZXJzKys7XG5cbiAgICAgICAgICAgICAgICBpZiAobmJfaXRlcnMgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaW5pc2hlZCBrLW1lYW5zIGNsdXN0ZXJpbmdcbiAgICAgICAgICAgIC8vIHRoZSBuZXh0IHBhcnQgaXMgYm9ycm93ZWQgZnJvbSBnYWJyaWVsZmxvci5pdFxuICAgICAgICAgICAgdmFyIGtDbHVzdGVycyA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIgaiQ1PTA7IGokNTxudW07IGokNSsrKSB7XG4gICAgICAgICAgICAgICAga0NsdXN0ZXJzW2okNV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGkkNj0wOyBpJDY8bjsgaSQ2KyspIHtcbiAgICAgICAgICAgICAgICBjbHVzdGVyID0gYXNzaWdubWVudHNbaSQ2XTtcbiAgICAgICAgICAgICAgICBrQ2x1c3RlcnNbY2x1c3Rlcl0ucHVzaCh2YWx1ZXNbaSQ2XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdG1wS01lYW5zQnJlYWtzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBqJDY9MDsgaiQ2PG51bTsgaiQ2KyspIHtcbiAgICAgICAgICAgICAgICB0bXBLTWVhbnNCcmVha3MucHVzaChrQ2x1c3RlcnNbaiQ2XVswXSk7XG4gICAgICAgICAgICAgICAgdG1wS01lYW5zQnJlYWtzLnB1c2goa0NsdXN0ZXJzW2okNl1ba0NsdXN0ZXJzW2okNl0ubGVuZ3RoLTFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRtcEtNZWFuc0JyZWFrcyA9IHRtcEtNZWFuc0JyZWFrcy5zb3J0KGZ1bmN0aW9uIChhLGIpeyByZXR1cm4gYS1iOyB9KTtcbiAgICAgICAgICAgIGxpbWl0cy5wdXNoKHRtcEtNZWFuc0JyZWFrc1swXSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpJDc9MTsgaSQ3IDwgdG1wS01lYW5zQnJlYWtzLmxlbmd0aDsgaSQ3Kz0gMikge1xuICAgICAgICAgICAgICAgIHZhciB2ID0gdG1wS01lYW5zQnJlYWtzW2kkN107XG4gICAgICAgICAgICAgICAgaWYgKCFpc05hTih2KSAmJiAobGltaXRzLmluZGV4T2YodikgPT09IC0xKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW1pdHMucHVzaCh2KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxpbWl0cztcbiAgICB9O1xuXG4gICAgdmFyIGFuYWx5emVfMSA9IHthbmFseXplOiBhbmFseXplLCBsaW1pdHM6IGxpbWl0c307XG5cbiAgICB2YXIgY29udHJhc3QgPSBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAvLyBXQ0FHIGNvbnRyYXN0IHJhdGlvXG4gICAgICAgIC8vIHNlZSBodHRwOi8vd3d3LnczLm9yZy9UUi8yMDA4L1JFQy1XQ0FHMjAtMjAwODEyMTEvI2NvbnRyYXN0LXJhdGlvZGVmXG4gICAgICAgIGEgPSBuZXcgQ29sb3JfMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvcl8xKGIpO1xuICAgICAgICB2YXIgbDEgPSBhLmx1bWluYW5jZSgpO1xuICAgICAgICB2YXIgbDIgPSBiLmx1bWluYW5jZSgpO1xuICAgICAgICByZXR1cm4gbDEgPiBsMiA/IChsMSArIDAuMDUpIC8gKGwyICsgMC4wNSkgOiAobDIgKyAwLjA1KSAvIChsMSArIDAuMDUpO1xuICAgIH07XG5cbiAgICB2YXIgc3FydCQ0ID0gTWF0aC5zcXJ0O1xuICAgIHZhciBhdGFuMiQyID0gTWF0aC5hdGFuMjtcbiAgICB2YXIgYWJzJDEgPSBNYXRoLmFicztcbiAgICB2YXIgY29zJDQgPSBNYXRoLmNvcztcbiAgICB2YXIgUEkkMiA9IE1hdGguUEk7XG5cbiAgICB2YXIgZGVsdGFFID0gZnVuY3Rpb24oYSwgYiwgTCwgQykge1xuICAgICAgICBpZiAoIEwgPT09IHZvaWQgMCApIEw9MTtcbiAgICAgICAgaWYgKCBDID09PSB2b2lkIDAgKSBDPTE7XG5cbiAgICAgICAgLy8gRGVsdGEgRSAoQ01DKVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcW5fRGVsdGFFX0NNQy5odG1sXG4gICAgICAgIGEgPSBuZXcgQ29sb3JfMShhKTtcbiAgICAgICAgYiA9IG5ldyBDb2xvcl8xKGIpO1xuICAgICAgICB2YXIgcmVmID0gQXJyYXkuZnJvbShhLmxhYigpKTtcbiAgICAgICAgdmFyIEwxID0gcmVmWzBdO1xuICAgICAgICB2YXIgYTEgPSByZWZbMV07XG4gICAgICAgIHZhciBiMSA9IHJlZlsyXTtcbiAgICAgICAgdmFyIHJlZiQxID0gQXJyYXkuZnJvbShiLmxhYigpKTtcbiAgICAgICAgdmFyIEwyID0gcmVmJDFbMF07XG4gICAgICAgIHZhciBhMiA9IHJlZiQxWzFdO1xuICAgICAgICB2YXIgYjIgPSByZWYkMVsyXTtcbiAgICAgICAgdmFyIGMxID0gc3FydCQ0KChhMSAqIGExKSArIChiMSAqIGIxKSk7XG4gICAgICAgIHZhciBjMiA9IHNxcnQkNCgoYTIgKiBhMikgKyAoYjIgKiBiMikpO1xuICAgICAgICB2YXIgc2wgPSBMMSA8IDE2LjAgPyAwLjUxMSA6ICgwLjA0MDk3NSAqIEwxKSAvICgxLjAgKyAoMC4wMTc2NSAqIEwxKSk7XG4gICAgICAgIHZhciBzYyA9ICgoMC4wNjM4ICogYzEpIC8gKDEuMCArICgwLjAxMzEgKiBjMSkpKSArIDAuNjM4O1xuICAgICAgICB2YXIgaDEgPSBjMSA8IDAuMDAwMDAxID8gMC4wIDogKGF0YW4yJDIoYjEsIGExKSAqIDE4MC4wKSAvIFBJJDI7XG4gICAgICAgIHdoaWxlIChoMSA8IDApIHsgaDEgKz0gMzYwOyB9XG4gICAgICAgIHdoaWxlIChoMSA+PSAzNjApIHsgaDEgLT0gMzYwOyB9XG4gICAgICAgIHZhciB0ID0gKGgxID49IDE2NC4wKSAmJiAoaDEgPD0gMzQ1LjApID8gKDAuNTYgKyBhYnMkMSgwLjIgKiBjb3MkNCgoUEkkMiAqIChoMSArIDE2OC4wKSkgLyAxODAuMCkpKSA6ICgwLjM2ICsgYWJzJDEoMC40ICogY29zJDQoKFBJJDIgKiAoaDEgKyAzNS4wKSkgLyAxODAuMCkpKTtcbiAgICAgICAgdmFyIGM0ID0gYzEgKiBjMSAqIGMxICogYzE7XG4gICAgICAgIHZhciBmID0gc3FydCQ0KGM0IC8gKGM0ICsgMTkwMC4wKSk7XG4gICAgICAgIHZhciBzaCA9IHNjICogKCgoZiAqIHQpICsgMS4wKSAtIGYpO1xuICAgICAgICB2YXIgZGVsTCA9IEwxIC0gTDI7XG4gICAgICAgIHZhciBkZWxDID0gYzEgLSBjMjtcbiAgICAgICAgdmFyIGRlbEEgPSBhMSAtIGEyO1xuICAgICAgICB2YXIgZGVsQiA9IGIxIC0gYjI7XG4gICAgICAgIHZhciBkSDIgPSAoKGRlbEEgKiBkZWxBKSArIChkZWxCICogZGVsQikpIC0gKGRlbEMgKiBkZWxDKTtcbiAgICAgICAgdmFyIHYxID0gZGVsTCAvIChMICogc2wpO1xuICAgICAgICB2YXIgdjIgPSBkZWxDIC8gKEMgKiBzYyk7XG4gICAgICAgIHZhciB2MyA9IHNoO1xuICAgICAgICByZXR1cm4gc3FydCQ0KCh2MSAqIHYxKSArICh2MiAqIHYyKSArIChkSDIgLyAodjMgKiB2MykpKTtcbiAgICB9O1xuXG4gICAgLy8gc2ltcGxlIEV1Y2xpZGVhbiBkaXN0YW5jZVxuICAgIHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uKGEsIGIsIG1vZGUpIHtcbiAgICAgICAgaWYgKCBtb2RlID09PSB2b2lkIDAgKSBtb2RlPSdsYWInO1xuXG4gICAgICAgIC8vIERlbHRhIEUgKENJRSAxOTc2KVxuICAgICAgICAvLyBzZWUgaHR0cDovL3d3dy5icnVjZWxpbmRibG9vbS5jb20vaW5kZXguaHRtbD9FcXVhdGlvbnMuaHRtbFxuICAgICAgICBhID0gbmV3IENvbG9yXzEoYSk7XG4gICAgICAgIGIgPSBuZXcgQ29sb3JfMShiKTtcbiAgICAgICAgdmFyIGwxID0gYS5nZXQobW9kZSk7XG4gICAgICAgIHZhciBsMiA9IGIuZ2V0KG1vZGUpO1xuICAgICAgICB2YXIgc3VtX3NxID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBsMSkge1xuICAgICAgICAgICAgdmFyIGQgPSAobDFbaV0gfHwgMCkgLSAobDJbaV0gfHwgMCk7XG4gICAgICAgICAgICBzdW1fc3EgKz0gZCpkO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoc3VtX3NxKTtcbiAgICB9O1xuXG4gICAgdmFyIHZhbGlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdLCBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgICAgICB3aGlsZSAoIGxlbi0tICkgYXJnc1sgbGVuIF0gPSBhcmd1bWVudHNbIGxlbiBdO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBuZXcgKEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kLmFwcGx5KCBDb2xvcl8xLCBbIG51bGwgXS5jb25jYXQoIGFyZ3MpICkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBzb21lIHByZS1kZWZpbmVkIGNvbG9yIHNjYWxlczpcblxuXG5cblxuICAgIHZhciBzY2FsZXMgPSB7XG4gICAgXHRjb29sOiBmdW5jdGlvbiBjb29sKCkgeyByZXR1cm4gc2NhbGUoW2Nocm9tYV8xLmhzbCgxODAsMSwuOSksIGNocm9tYV8xLmhzbCgyNTAsLjcsLjQpXSkgfSxcbiAgICBcdGhvdDogZnVuY3Rpb24gaG90KCkgeyByZXR1cm4gc2NhbGUoWycjMDAwJywnI2YwMCcsJyNmZjAnLCcjZmZmJ10sIFswLC4yNSwuNzUsMV0pLm1vZGUoJ3JnYicpIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICAgIENvbG9yQnJld2VyIGNvbG9ycyBmb3IgY2hyb21hLmpzXG5cbiAgICAgICAgQ29weXJpZ2h0IChjKSAyMDAyIEN5bnRoaWEgQnJld2VyLCBNYXJrIEhhcnJvd2VyLCBhbmQgVGhlXG4gICAgICAgIFBlbm5zeWx2YW5pYSBTdGF0ZSBVbml2ZXJzaXR5LlxuXG4gICAgICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICAgICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gICAgICAgIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWRcbiAgICAgICAgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1JcbiAgICAgICAgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGVcbiAgICAgICAgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAgICAqL1xuXG4gICAgdmFyIGNvbG9yYnJld2VyID0ge1xuICAgICAgICAvLyBzZXF1ZW50aWFsXG4gICAgICAgIE9yUmQ6IFsnI2ZmZjdlYycsICcjZmVlOGM4JywgJyNmZGQ0OWUnLCAnI2ZkYmI4NCcsICcjZmM4ZDU5JywgJyNlZjY1NDgnLCAnI2Q3MzAxZicsICcjYjMwMDAwJywgJyM3ZjAwMDAnXSxcbiAgICAgICAgUHVCdTogWycjZmZmN2ZiJywgJyNlY2U3ZjInLCAnI2QwZDFlNicsICcjYTZiZGRiJywgJyM3NGE5Y2YnLCAnIzM2OTBjMCcsICcjMDU3MGIwJywgJyMwNDVhOGQnLCAnIzAyMzg1OCddLFxuICAgICAgICBCdVB1OiBbJyNmN2ZjZmQnLCAnI2UwZWNmNCcsICcjYmZkM2U2JywgJyM5ZWJjZGEnLCAnIzhjOTZjNicsICcjOGM2YmIxJywgJyM4ODQxOWQnLCAnIzgxMGY3YycsICcjNGQwMDRiJ10sXG4gICAgICAgIE9yYW5nZXM6IFsnI2ZmZjVlYicsICcjZmVlNmNlJywgJyNmZGQwYTInLCAnI2ZkYWU2YicsICcjZmQ4ZDNjJywgJyNmMTY5MTMnLCAnI2Q5NDgwMScsICcjYTYzNjAzJywgJyM3ZjI3MDQnXSxcbiAgICAgICAgQnVHbjogWycjZjdmY2ZkJywgJyNlNWY1ZjknLCAnI2NjZWNlNicsICcjOTlkOGM5JywgJyM2NmMyYTQnLCAnIzQxYWU3NicsICcjMjM4YjQ1JywgJyMwMDZkMmMnLCAnIzAwNDQxYiddLFxuICAgICAgICBZbE9yQnI6IFsnI2ZmZmZlNScsICcjZmZmN2JjJywgJyNmZWUzOTEnLCAnI2ZlYzQ0ZicsICcjZmU5OTI5JywgJyNlYzcwMTQnLCAnI2NjNGMwMicsICcjOTkzNDA0JywgJyM2NjI1MDYnXSxcbiAgICAgICAgWWxHbjogWycjZmZmZmU1JywgJyNmN2ZjYjknLCAnI2Q5ZjBhMycsICcjYWRkZDhlJywgJyM3OGM2NzknLCAnIzQxYWI1ZCcsICcjMjM4NDQzJywgJyMwMDY4MzcnLCAnIzAwNDUyOSddLFxuICAgICAgICBSZWRzOiBbJyNmZmY1ZjAnLCAnI2ZlZTBkMicsICcjZmNiYmExJywgJyNmYzkyNzInLCAnI2ZiNmE0YScsICcjZWYzYjJjJywgJyNjYjE4MWQnLCAnI2E1MGYxNScsICcjNjcwMDBkJ10sXG4gICAgICAgIFJkUHU6IFsnI2ZmZjdmMycsICcjZmRlMGRkJywgJyNmY2M1YzAnLCAnI2ZhOWZiNScsICcjZjc2OGExJywgJyNkZDM0OTcnLCAnI2FlMDE3ZScsICcjN2EwMTc3JywgJyM0OTAwNmEnXSxcbiAgICAgICAgR3JlZW5zOiBbJyNmN2ZjZjUnLCAnI2U1ZjVlMCcsICcjYzdlOWMwJywgJyNhMWQ5OWInLCAnIzc0YzQ3NicsICcjNDFhYjVkJywgJyMyMzhiNDUnLCAnIzAwNmQyYycsICcjMDA0NDFiJ10sXG4gICAgICAgIFlsR25CdTogWycjZmZmZmQ5JywgJyNlZGY4YjEnLCAnI2M3ZTliNCcsICcjN2ZjZGJiJywgJyM0MWI2YzQnLCAnIzFkOTFjMCcsICcjMjI1ZWE4JywgJyMyNTM0OTQnLCAnIzA4MWQ1OCddLFxuICAgICAgICBQdXJwbGVzOiBbJyNmY2ZiZmQnLCAnI2VmZWRmNScsICcjZGFkYWViJywgJyNiY2JkZGMnLCAnIzllOWFjOCcsICcjODA3ZGJhJywgJyM2YTUxYTMnLCAnIzU0Mjc4ZicsICcjM2YwMDdkJ10sXG4gICAgICAgIEduQnU6IFsnI2Y3ZmNmMCcsICcjZTBmM2RiJywgJyNjY2ViYzUnLCAnI2E4ZGRiNScsICcjN2JjY2M0JywgJyM0ZWIzZDMnLCAnIzJiOGNiZScsICcjMDg2OGFjJywgJyMwODQwODEnXSxcbiAgICAgICAgR3JleXM6IFsnI2ZmZmZmZicsICcjZjBmMGYwJywgJyNkOWQ5ZDknLCAnI2JkYmRiZCcsICcjOTY5Njk2JywgJyM3MzczNzMnLCAnIzUyNTI1MicsICcjMjUyNTI1JywgJyMwMDAwMDAnXSxcbiAgICAgICAgWWxPclJkOiBbJyNmZmZmY2MnLCAnI2ZmZWRhMCcsICcjZmVkOTc2JywgJyNmZWIyNGMnLCAnI2ZkOGQzYycsICcjZmM0ZTJhJywgJyNlMzFhMWMnLCAnI2JkMDAyNicsICcjODAwMDI2J10sXG4gICAgICAgIFB1UmQ6IFsnI2Y3ZjRmOScsICcjZTdlMWVmJywgJyNkNGI5ZGEnLCAnI2M5OTRjNycsICcjZGY2NWIwJywgJyNlNzI5OGEnLCAnI2NlMTI1NicsICcjOTgwMDQzJywgJyM2NzAwMWYnXSxcbiAgICAgICAgQmx1ZXM6IFsnI2Y3ZmJmZicsICcjZGVlYmY3JywgJyNjNmRiZWYnLCAnIzllY2FlMScsICcjNmJhZWQ2JywgJyM0MjkyYzYnLCAnIzIxNzFiNScsICcjMDg1MTljJywgJyMwODMwNmInXSxcbiAgICAgICAgUHVCdUduOiBbJyNmZmY3ZmInLCAnI2VjZTJmMCcsICcjZDBkMWU2JywgJyNhNmJkZGInLCAnIzY3YTljZicsICcjMzY5MGMwJywgJyMwMjgxOGEnLCAnIzAxNmM1OScsICcjMDE0NjM2J10sXG4gICAgICAgIFZpcmlkaXM6IFsnIzQ0MDE1NCcsICcjNDgyNzc3JywgJyMzZjRhOGEnLCAnIzMxNjc4ZScsICcjMjY4MzhmJywgJyMxZjlkOGEnLCAnIzZjY2U1YScsICcjYjZkZTJiJywgJyNmZWU4MjUnXSxcblxuICAgICAgICAvLyBkaXZlcmdpbmdcblxuICAgICAgICBTcGVjdHJhbDogWycjOWUwMTQyJywgJyNkNTNlNGYnLCAnI2Y0NmQ0MycsICcjZmRhZTYxJywgJyNmZWUwOGInLCAnI2ZmZmZiZicsICcjZTZmNTk4JywgJyNhYmRkYTQnLCAnIzY2YzJhNScsICcjMzI4OGJkJywgJyM1ZTRmYTInXSxcbiAgICAgICAgUmRZbEduOiBbJyNhNTAwMjYnLCAnI2Q3MzAyNycsICcjZjQ2ZDQzJywgJyNmZGFlNjEnLCAnI2ZlZTA4YicsICcjZmZmZmJmJywgJyNkOWVmOGInLCAnI2E2ZDk2YScsICcjNjZiZDYzJywgJyMxYTk4NTAnLCAnIzAwNjgzNyddLFxuICAgICAgICBSZEJ1OiBbJyM2NzAwMWYnLCAnI2IyMTgyYicsICcjZDY2MDRkJywgJyNmNGE1ODInLCAnI2ZkZGJjNycsICcjZjdmN2Y3JywgJyNkMWU1ZjAnLCAnIzkyYzVkZScsICcjNDM5M2MzJywgJyMyMTY2YWMnLCAnIzA1MzA2MSddLFxuICAgICAgICBQaVlHOiBbJyM4ZTAxNTInLCAnI2M1MWI3ZCcsICcjZGU3N2FlJywgJyNmMWI2ZGEnLCAnI2ZkZTBlZicsICcjZjdmN2Y3JywgJyNlNmY1ZDAnLCAnI2I4ZTE4NicsICcjN2ZiYzQxJywgJyM0ZDkyMjEnLCAnIzI3NjQxOSddLFxuICAgICAgICBQUkduOiBbJyM0MDAwNGInLCAnIzc2MmE4MycsICcjOTk3MGFiJywgJyNjMmE1Y2YnLCAnI2U3ZDRlOCcsICcjZjdmN2Y3JywgJyNkOWYwZDMnLCAnI2E2ZGJhMCcsICcjNWFhZTYxJywgJyMxYjc4MzcnLCAnIzAwNDQxYiddLFxuICAgICAgICBSZFlsQnU6IFsnI2E1MDAyNicsICcjZDczMDI3JywgJyNmNDZkNDMnLCAnI2ZkYWU2MScsICcjZmVlMDkwJywgJyNmZmZmYmYnLCAnI2UwZjNmOCcsICcjYWJkOWU5JywgJyM3NGFkZDEnLCAnIzQ1NzViNCcsICcjMzEzNjk1J10sXG4gICAgICAgIEJyQkc6IFsnIzU0MzAwNScsICcjOGM1MTBhJywgJyNiZjgxMmQnLCAnI2RmYzI3ZCcsICcjZjZlOGMzJywgJyNmNWY1ZjUnLCAnI2M3ZWFlNScsICcjODBjZGMxJywgJyMzNTk3OGYnLCAnIzAxNjY1ZScsICcjMDAzYzMwJ10sXG4gICAgICAgIFJkR3k6IFsnIzY3MDAxZicsICcjYjIxODJiJywgJyNkNjYwNGQnLCAnI2Y0YTU4MicsICcjZmRkYmM3JywgJyNmZmZmZmYnLCAnI2UwZTBlMCcsICcjYmFiYWJhJywgJyM4Nzg3ODcnLCAnIzRkNGQ0ZCcsICcjMWExYTFhJ10sXG4gICAgICAgIFB1T3I6IFsnIzdmM2IwOCcsICcjYjM1ODA2JywgJyNlMDgyMTQnLCAnI2ZkYjg2MycsICcjZmVlMGI2JywgJyNmN2Y3ZjcnLCAnI2Q4ZGFlYicsICcjYjJhYmQyJywgJyM4MDczYWMnLCAnIzU0Mjc4OCcsICcjMmQwMDRiJ10sXG5cbiAgICAgICAgLy8gcXVhbGl0YXRpdmVcblxuICAgICAgICBTZXQyOiBbJyM2NmMyYTUnLCAnI2ZjOGQ2MicsICcjOGRhMGNiJywgJyNlNzhhYzMnLCAnI2E2ZDg1NCcsICcjZmZkOTJmJywgJyNlNWM0OTQnLCAnI2IzYjNiMyddLFxuICAgICAgICBBY2NlbnQ6IFsnIzdmYzk3ZicsICcjYmVhZWQ0JywgJyNmZGMwODYnLCAnI2ZmZmY5OScsICcjMzg2Y2IwJywgJyNmMDAyN2YnLCAnI2JmNWIxNycsICcjNjY2NjY2J10sXG4gICAgICAgIFNldDE6IFsnI2U0MWExYycsICcjMzc3ZWI4JywgJyM0ZGFmNGEnLCAnIzk4NGVhMycsICcjZmY3ZjAwJywgJyNmZmZmMzMnLCAnI2E2NTYyOCcsICcjZjc4MWJmJywgJyM5OTk5OTknXSxcbiAgICAgICAgU2V0MzogWycjOGRkM2M3JywgJyNmZmZmYjMnLCAnI2JlYmFkYScsICcjZmI4MDcyJywgJyM4MGIxZDMnLCAnI2ZkYjQ2MicsICcjYjNkZTY5JywgJyNmY2NkZTUnLCAnI2Q5ZDlkOScsICcjYmM4MGJkJywgJyNjY2ViYzUnLCAnI2ZmZWQ2ZiddLFxuICAgICAgICBEYXJrMjogWycjMWI5ZTc3JywgJyNkOTVmMDInLCAnIzc1NzBiMycsICcjZTcyOThhJywgJyM2NmE2MWUnLCAnI2U2YWIwMicsICcjYTY3NjFkJywgJyM2NjY2NjYnXSxcbiAgICAgICAgUGFpcmVkOiBbJyNhNmNlZTMnLCAnIzFmNzhiNCcsICcjYjJkZjhhJywgJyMzM2EwMmMnLCAnI2ZiOWE5OScsICcjZTMxYTFjJywgJyNmZGJmNmYnLCAnI2ZmN2YwMCcsICcjY2FiMmQ2JywgJyM2YTNkOWEnLCAnI2ZmZmY5OScsICcjYjE1OTI4J10sXG4gICAgICAgIFBhc3RlbDI6IFsnI2IzZTJjZCcsICcjZmRjZGFjJywgJyNjYmQ1ZTgnLCAnI2Y0Y2FlNCcsICcjZTZmNWM5JywgJyNmZmYyYWUnLCAnI2YxZTJjYycsICcjY2NjY2NjJ10sXG4gICAgICAgIFBhc3RlbDE6IFsnI2ZiYjRhZScsICcjYjNjZGUzJywgJyNjY2ViYzUnLCAnI2RlY2JlNCcsICcjZmVkOWE2JywgJyNmZmZmY2MnLCAnI2U1ZDhiZCcsICcjZmRkYWVjJywgJyNmMmYyZjInXSxcbiAgICB9O1xuXG4gICAgLy8gYWRkIGxvd2VyY2FzZSBhbGlhc2VzIGZvciBjYXNlLWluc2Vuc2l0aXZlIG1hdGNoZXNcbiAgICBmb3IgKHZhciBpJDEgPSAwLCBsaXN0JDEgPSBPYmplY3Qua2V5cyhjb2xvcmJyZXdlcik7IGkkMSA8IGxpc3QkMS5sZW5ndGg7IGkkMSArPSAxKSB7XG4gICAgICAgIHZhciBrZXkgPSBsaXN0JDFbaSQxXTtcblxuICAgICAgICBjb2xvcmJyZXdlcltrZXkudG9Mb3dlckNhc2UoKV0gPSBjb2xvcmJyZXdlcltrZXldO1xuICAgIH1cblxuICAgIHZhciBjb2xvcmJyZXdlcl8xID0gY29sb3JicmV3ZXI7XG5cbiAgICAvLyBmZWVsIGZyZWUgdG8gY29tbWVudCBvdXQgYW55dGhpbmcgdG8gcm9sbHVwXG4gICAgLy8gYSBzbWFsbGVyIGNocm9tYS5qcyBidWlsdFxuXG4gICAgLy8gaW8gLS0+IGNvbnZlcnQgY29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgLy8gb3BlcmF0b3JzIC0tPiBtb2RpZnkgZXhpc3RpbmcgQ29sb3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBpbnRlcnBvbGF0b3JzXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICAvLyBnZW5lcmF0b3JzIC0tID4gY3JlYXRlIG5ldyBjb2xvcnNcbiAgICBjaHJvbWFfMS5hdmVyYWdlID0gYXZlcmFnZTtcbiAgICBjaHJvbWFfMS5iZXppZXIgPSBiZXppZXJfMTtcbiAgICBjaHJvbWFfMS5ibGVuZCA9IGJsZW5kXzE7XG4gICAgY2hyb21hXzEuY3ViZWhlbGl4ID0gY3ViZWhlbGl4O1xuICAgIGNocm9tYV8xLm1peCA9IGNocm9tYV8xLmludGVycG9sYXRlID0gbWl4O1xuICAgIGNocm9tYV8xLnJhbmRvbSA9IHJhbmRvbV8xO1xuICAgIGNocm9tYV8xLnNjYWxlID0gc2NhbGU7XG5cbiAgICAvLyBvdGhlciB1dGlsaXR5IG1ldGhvZHNcbiAgICBjaHJvbWFfMS5hbmFseXplID0gYW5hbHl6ZV8xLmFuYWx5emU7XG4gICAgY2hyb21hXzEuY29udHJhc3QgPSBjb250cmFzdDtcbiAgICBjaHJvbWFfMS5kZWx0YUUgPSBkZWx0YUU7XG4gICAgY2hyb21hXzEuZGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICBjaHJvbWFfMS5saW1pdHMgPSBhbmFseXplXzEubGltaXRzO1xuICAgIGNocm9tYV8xLnZhbGlkID0gdmFsaWQ7XG5cbiAgICAvLyBzY2FsZVxuICAgIGNocm9tYV8xLnNjYWxlcyA9IHNjYWxlcztcblxuICAgIC8vIGNvbG9yc1xuICAgIGNocm9tYV8xLmNvbG9ycyA9IHczY3gxMV8xO1xuICAgIGNocm9tYV8xLmJyZXdlciA9IGNvbG9yYnJld2VyXzE7XG5cbiAgICB2YXIgY2hyb21hX2pzID0gY2hyb21hXzE7XG5cbiAgICByZXR1cm4gY2hyb21hX2pzO1xuXG59KSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==