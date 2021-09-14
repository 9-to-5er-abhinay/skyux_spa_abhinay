import { Component, OnInit } from '@angular/core';
import { Item } from '../../Item';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items: Item[] = [];
  constructor(private itemService: ItemService) { }

  public ngOnInit(): void {
    this.itemService.getItems().subscribe((items) => (this.items = items));
  }
  public addItem(item: Item) {
    this.itemService.addItem(item).subscribe((dataItem) => this.items.push(dataItem));
  }
}
