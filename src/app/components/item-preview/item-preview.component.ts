import { Component , OnInit} from '@angular/core';

import { 
  StockItem, 
  StockItemDetails,
  StockItemVariant,
  Category
} from '../../models/stock-item.model';

import { ItemService } from '../../services/item.service';

@Component({
  selector: 'item-preview',
  templateUrl: './item-preview.component.html'
})
export class ItemPreviewComponent implements OnInit {
  createdItem: StockItem;

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    const item = this.itemService.getItem();
    if (item) {
      this.createdItem = item;
    }
  }
}
