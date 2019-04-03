import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
//import { products } from '../demoitem';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
 //items = products;
  //selectedItem: Item;

  constructor() { }

  ngOnInit() {
  }
  
 // onSelect(item: Item): void {
   // this.selectedItem = item;  }
public success(event, open) {
    alert('Order Placed Successfully');
	
	
}}
