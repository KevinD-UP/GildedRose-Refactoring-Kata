import {Item} from "@/items/Item";

export class GildedRose {
  private readonly items: Array<Item>;

  constructor(items: Array<Item>) {
    this.items = items;
  }

  public getItems(): Array<Item> {
    return this.items;
  }

  public updateQuality() {
    this.items.forEach((item) => item.update());
  }
}
