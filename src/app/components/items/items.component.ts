import { Component, OnInit } from '@angular/core';

import {Item} from '../../Item';
import {ItemService} from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  
  public items: Item[] = [];
  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }

  addItem(item: Item) {
    this.itemService.addItem(item).subscribe((item) => (this.items.push(item)));
  }
}
