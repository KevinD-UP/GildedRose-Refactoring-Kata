import {Item, Quality, SellIn} from "./Item";

export class StandardItem extends Item {
  constructor(name: string, sellIn: SellIn, quality: Quality) {
    super(name, sellIn, quality);
  }

  update(): void {
    this.decreaseSellInValue();
    this.isExpired()
      ? this.quality.decrease(this.QUALITY_DECREASE_VALUE * 2)
      : this.quality.decrease(this.QUALITY_DECREASE_VALUE);
  }
}
