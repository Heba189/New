import { Component, OnInit, OnDestroy } from '@angular/core';
import { Good } from 'src/app/interface/Good';
import { from, Subscription } from 'rxjs';
import { GoodsService } from 'src/app/services/goods.service';
import { CartService } from 'src/app/services/cart.service';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit ,OnDestroy {
 
goods:Good[]=[]
goodsObservable : Subscription
add :number= -1
  constructor(private servicesGood :GoodsService ,private cs :CartService) { }

  ngOnInit() {
  this.goodsObservable = this.servicesGood.getAllGoods().subscribe(data => {
     this.goods = data.map(element => {
          return{
            id:element.payload.doc.id,
            name:element.payload.doc.data()['name'],
            price:element.payload.doc.data()['price'],
            photoUrl:element.payload.doc.data()['photoUrl']
            // ...element.payload.doc.data
          }
        })
    })
  }
  ngOnDestroy (){
    this.goodsObservable.unsubscribe();
  }

  addToCard(index : number){

      this.add = +index
  }

  buy(amount : number){
    //selectedGoog have all info. of choice good (name , index ..)
    let selectedGoog =this.goods[this.add]

    let data={
      name :selectedGoog.name,
      amount: +amount,
      price : selectedGoog.price
    }

    this.cs.addToCard(data).then(() => {
      this.add = -1
    })
  }
}
