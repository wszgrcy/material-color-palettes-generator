import chroma from "chroma-js";
import { main } from './class';

let color = chroma('#F44336').gl()
let glColor = { red: color[0], green: color[1], blue: color[2], alpha: color[3] || 1 }
let list = main(glColor)
console.log(list)