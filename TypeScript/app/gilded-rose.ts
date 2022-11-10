import { Item } from './Item'
import {
  updateQualityForAgedBrie,
  updateQualityForConcert,
  updateQualityForSulfuras,
  updateQualityForConjured,
  updateQualityForNormalItem} from './updateQuality.service'

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality(): Item[]  {
    this.items.forEach(currentItem => {
      if (currentItem.name.includes('Aged Brie'))
         updateQualityForAgedBrie(currentItem)
      else if (currentItem.name.includes('Backstage passes'))
        updateQualityForConcert(currentItem)
      else if (currentItem.name.includes('Sulfuras'))
        updateQualityForSulfuras(currentItem)
      else if (currentItem.name.includes('Conjured'))
        updateQualityForConjured(currentItem)
      else
        updateQualityForNormalItem(currentItem)
    })
    return this.items;
  }
}
