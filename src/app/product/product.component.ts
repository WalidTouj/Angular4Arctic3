import { Component } from '@angular/core';
import { Product } from '../Model/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  price!:number
listProduct:Product[]=[
  {id:1,title:"product1",price:10,quantity:10,like:0},
  {id:2,title:"product2",price:1500,quantity:10,like:0}
]
// increment(id:number){
//   this.listProduct.forEach(element => {
//     if (element.id == id){
//       element.like= element.like +1;
//     }
//   });
// }

increment(index : number){
  this.listProduct[index].like++
}
buy(index : number){

    this.listProduct[index].quantity--

}
}
