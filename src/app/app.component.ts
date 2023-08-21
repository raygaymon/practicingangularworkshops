import { Component, ViewChild } from '@angular/core';
import { InventoryComponent } from './components/inventory/inventory.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshops';

  imagePath = "/assets/images/";

  item: { imageUrl: string, desc: string }
  cartItem: { imageUrl: string, desc: string, quantity: number }
  inventory = [
    { imageUrl: this.imagePath + 'Kafka.png', desc: 'The ultimate best mummy' },
    { imageUrl: this.imagePath + 'Himeko.png', desc: 'Pyro mummy' },
    { imageUrl: this.imagePath + 'Kirara.png', desc: 'Cat' },
    { imageUrl: this.imagePath + 'Klee.png', desc: 'Bomb babie' },
    { imageUrl: this.imagePath + 'Nezuko.png', desc: 'Demon babie' },
    { imageUrl: this.imagePath + 'Nian.png', desc: 'Dragon babie' },
    { imageUrl: this.imagePath + 'Raiden.png', desc: 'Electro mummy' },
    { imageUrl: this.imagePath + 'W.png', desc: 'Cockroach babie' },
    { imageUrl: this.imagePath + 'Yoimiya.png', desc: "Baobei's waifu" },
    { imageUrl: this.imagePath + 'Zhongli.png', desc: 'Dumb Geo daddy' },
  ]

  cart = []
  quantity: number = 0

  addToCart(index: number){
    
    this.cartItem = { imageUrl: this.inventory[index].imageUrl, desc: this.inventory[index].desc, quantity: this.quantity + 1 }
    console.log(this.cartItem)

    //method to check if items exist in an array

    if (!this.cart.find(i => i.desc === this.cartItem.desc)) {
      this.cart.push(this.cartItem);
    } else {
      console.log('item already in cart')

      //using map to update attribute of js object in an array
      this.cart.map(item => {
        if(item.desc === this.cartItem.desc) {
          item.quantity = item.quantity + 1
        }
      })
    }
    
  }

  removeFromCart(index: number){
    this.cart.splice(index);
  }
}
