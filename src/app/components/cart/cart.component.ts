import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { shopping } from 'src/app/interface/shopping.interface';
import { UserService } from 'src/app/services/user.service';
import { ordersSer } from 'src/app/interface/order.interface';
import { OrderService } from 'src/app/services/order.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


 ordersNw:ordersSer[]=[]
  cart:shopping[] =[]
  constructor(private cs :CartService , private us:UserService , private os:OrderService) { }
// private os:ordersSer
  ngOnInit() {
    this.cs.getCart().subscribe(cart =>{

      //this.cart -> out cart ->  cart:shopping[] =[]
        this.cart =cart.map(shopping =>{
          return {
            id:shopping.payload.doc.id,
           
            // ...shopping.payload.doc.data
            name:shopping.payload.doc.data()['name'],
            price:shopping.payload.doc.data()['price'],
            amount:shopping.payload.doc.data()['amount']
          }
        })
        // console.log(this.cart)
    })

   

////


////

    
  }

  //delete using function in cs -> delete -> by id in  cart:shopping[] =[]
  delete(index){
      return this.cs.delete(this.cart[index].id)
  }

  save(index){
    this.cs.save(this.cart[index].id, this.cart[index].amount)
  }
  // addToOrder(price : number){
  //  let selectedOrders = this.cart[i]
  //  let orderInfo = {
  //    name :
  //  }
  }

 

// (this.ordersNw[index].id,this.ordersNw[index].price , this.ordersNw[index].amount, this.ordersNw[index].address)
  // order(index){
  //   this.cs.save(this.cart[index].id, this.cart[index].amount , this.cart[index].name , this.cart[index].price)
  // }

  // orderItems(ind){
    
  // }
 

