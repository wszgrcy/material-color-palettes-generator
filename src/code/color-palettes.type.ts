export interface ColorPalettes {
  index: number[];
  list: Rgb[][];
}
export interface ColorPalettesGroup {
  primary: ColorPalettes;
  complementary: ColorPalettes;
  analogous: ColorPalettes;
  triadic: ColorPalettes;
}

export class Rgb {
  constructor(public red: number, public green: number, public blue: number, public alpha = 1) {}
}
