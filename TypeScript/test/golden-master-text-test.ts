import {GildedRose} from '../app/gilded-rose';
import {StandardItem} from "../app/items/standard-item";
import {Quality, SellIn} from "../app/items/Item";
import {AgedBrieItem} from "../app/items/aged-brie-item";
import {SulfurasItem} from "../app/items/sulfuras-item";
import {BackStagePassItem} from "../app/items/back-stage-pass-item";
import {ConjuredItem} from "../app/items/conjured-item";

const items = [
  new StandardItem("+5 Dexterity Vest", new SellIn(10), new Quality(20)), //
  new AgedBrieItem("Aged Brie", new SellIn(2), new Quality(0)), //
  new StandardItem("Elixir of the Mongoose", new SellIn(5), new Quality(7)), //
  new SulfurasItem("Sulfuras, Hand of Ragnaros"), //
  new SulfurasItem("Sulfuras, Hand of Ragnaros"),
  new BackStagePassItem("Backstage passes to a TAFKAL80ETC concert", new SellIn(15), new Quality(20)),
  new BackStagePassItem("Backstage passes to a TAFKAL80ETC concert", new SellIn(10), new Quality(49)),
  new BackStagePassItem("Backstage passes to a TAFKAL80ETC concert", new SellIn(5), new Quality(49)),
  // this conjured item does not work properly yet
  new ConjuredItem("Conjured Mana Cake", new SellIn(3), new Quality(6))];


const gildedRose = new GildedRose(items);

let days: number = 2;
if (process.argv.length > 2) {
    days = +process.argv[2];
  }

for (let i = 0; i < days; i++) {
  console.log("-------- day " + i + " --------");
  console.log("name, sellIn, quality");
  items.forEach(element => {
    console.log(element.getNameValue() + ' ' + element.getSellInValue() + ' ' + element.getQualityValue());

  });
  console.log();
  gildedRose.updateQuality();
}
