import {Item, Quality, SellIn} from "./Item";

export class SulfurasItem extends Item {
  constructor(name) {
    super(name, new SellIn(SellIn.INFINITE_VALUE), new Quality(Quality.MAX_LEGENDARY_VALUE));
  }
  update(): void {}
}
