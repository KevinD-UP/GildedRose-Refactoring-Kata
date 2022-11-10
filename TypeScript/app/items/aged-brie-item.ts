import {Item, Quality, SellIn} from "./Item";

export class AgedBrieItem extends Item {
  constructor(name: string, sellIn: SellIn, quality: Quality) {
    super(name, sellIn, quality);
  }
  update(): void {
    this.sellIn.decrease(1);
    this.quality.increase(1);
  }
}
