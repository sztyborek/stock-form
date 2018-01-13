import { Injectable } from '@angular/core';

import { 
  StockItem, 
  StockItemDetails,
  StockItemVariant,
  Category
} from '../models/stock-item.model';

@Injectable()
export class ItemService {
  item: StockItem;

  constructor() { }

  setItem(item: StockItem) {
    this.item = item;
  }

  getItem(): StockItem {
    return this.item;
  }

}