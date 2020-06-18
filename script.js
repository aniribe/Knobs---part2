import { Knob } from "./draggableKnob.js";
import { KnobWithOutpu } from "./draggableKnobWithOutput.js";

let knob1 = new Knob("dial1", "handle1", 270, 90);
let knob2 = new Knob("dial2", "handle2", 330, 0);
let knob3 = new KnobWithOutpu(
  "dial3",
  "handle3",
  325,
  35,
  0,
  50,
  "output",
  "rightFill3",
  "leftFill3"
);
