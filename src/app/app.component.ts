import { Component } from '@angular/core';
import { main } from '../code/class';
3;
import chroma from 'chroma-js';
import { ColorPalettesGroup } from 'src/code/color-palettes.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  color = '#F44336';
  colorPalettesGroup: Partial<ColorPalettesGroup> = {};
  submit(form) {
    this.changeColorPalettes(form.value.color);
  }
  changeColorPalettes(inputColor: string) {
    const color = chroma(inputColor).gl();
    const list = main(color);
    this.colorPalettesGroup = list;
  }
}
