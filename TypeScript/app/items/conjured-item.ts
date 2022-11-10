import {Item, Quality, SellIn} from "./Item";

export class ConjuredItem extends Item {
  protected readonly QUALITY_DECREASE_VALUE = 2;

  constructor(name: string, sellIn: SellIn, quality: Quality) {
    super(name, sellIn, quality);
  }

  update(): void {
    this.sellIn.decrease(1);

    this.isExpired()
      ? this.quality.decrease(this.QUALITY_DECREASE_VALUE * 2)
      : this.quality.decrease(this.QUALITY_DECREASE_VALUE);
  }
}
