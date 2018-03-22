import eat from "./eat";
import floppy from "./floppy";
import fry from "./fry";
import ginormous from "./ginormous";
import lubricant from "./lubricant";
import moist from "./moist";
import mushyface from "./mushyface";
import nop from "./nop";
import pancake from "./pancake";
import installProxyMethods from "./proxyArray";
import rad from "./rad";
import scrunch from "./scrunch";
import smoosh from "./smoosh";
import squiggle from "./squiggle";
import squirt from "./squirt";
import tickle from "./tickle";

declare global {
  interface Array<T> {
    eat(): T[];
    fry(): number[];
    squirt(): T[];
    lubricant(length: number): T[];
    moist(): string;
    smoosh(): T[];
    pancake(): number[];
    scrunch(): T[];
    floppy(): T[];
    squiggle(): T[];
    ginormous(): T[];
    nop(): T[];
    rad(): string[];
    tickle(): string[];
    mushyface(): string[];
    toSource?(): string;
  }
  interface ArrayConstructor {
    __privateLastAccessedArray__?: any[];
  }
}

export default function installLolDash() {
  Object.defineProperties(Array.prototype, {
    eat: { value: eat },
    fry: { value: fry },
    squirt: { value: squirt },
    lubricant: { value: lubricant },
    moist: { value: moist },
    smoosh: { value: smoosh },
    pancake: { value: pancake },
    scrunch: { value: scrunch },
    floppy: { value: floppy },
    squiggle: { value: squiggle },
    ginormous: { value: ginormous },
    nop: { value: nop },
    rad: { value: rad },
    tickle: { value: tickle },
    mushyface: { value: mushyface }
  });
  installProxyMethods();
}
