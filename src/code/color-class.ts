// import { compareValue } from './class';

export class Lab {
    b: number;
    i: number;
    j: number;
    /**
     *
     * @author cyia
     * @date 2019-05-06
     * @param l 亮度
     * @param a 从绿色到红色的分量
     * @param b 从蓝色到黄色的分量
     */
    constructor(l: number, a: number, b: number, public alpha = 1) {
        alpha = alpha || 1;
        this.compareValue(l, 100, 'lightness');
        this.compareValue(alpha, 1, 'alpha');
        // doc暂时兼容
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
    ka(a) {
        return 1E-4 > Math.abs(this.b - a.b) && 1E-4 > Math.abs(this.i - a.i) && 1E-4 > Math.abs(this.j - a.j) && Math.abs(this.alpha - a.alpha) < Math.pow(2, -16);
    }
    compareValue(a, b, c) {
        if (isNaN(a) || 0 > a || a > b) {
            throw new RangeError(a + ' for ' + c + ' is not between 0 and ' + b);
        }
    }
}
