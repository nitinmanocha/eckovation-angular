import { Component, OnInit } from '@angular/core';
import { ItemService } from '../service/item.service';
import { Item } from '../service/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent implements OnInit {

  constructor(private itemService: ItemService) { }

  ngOnInit() {
	  this.refreshProduct();
  }

  refreshProduct(){
	  this.itemService.getProduct().subscribe((res) => {
		 this.itemService.items = res as Item[]; 
		  
	  });
  }
}
