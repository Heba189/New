import { Injectable } from '@angular/core';
import { Good } from '../interface/Good';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { shopping } from '../interface/shopping.interface';
import { ordersSer } from '../interface/order.interface';
import { UserService } from './user.service';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class OrderService{

  constructor( private fs :AngularFirestore ,private as:AuthService , private us:UserService ) { }

  
  addToOrder(order :ordersSer){
  return this.fs.collection(`user/${this.as.userId}/OrderItem`).add(order)
    
}
getOrder(){
  return this.fs.collection(`user/${this.as.userId}/OrderItem`).snapshotChanges()
}

}
