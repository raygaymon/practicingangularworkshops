import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})



export class InventoryComponent {

  imagePath = "/assets/images/";

  @Input()
  item : {imageUrl: string, desc:string}

  
}
