import { Injectable } from '@angular/core';
import { Good } from '../interface/Good';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { shopping } from '../interface/shopping.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor( private fs :AngularFirestore ,private as:AuthService ) { }

  
  addToCard(data : Good){
  return this.fs.collection(`user/${this.as.userId}/cart`).add(data)
    
}

//return collection for each user -> snapshotChanges for id using
getCart(){
  return this.fs.collection(`user/${this.as.userId}/cart`).snapshotChanges()
}


delete(id){
  return this.fs.doc(`user/${this.as.userId}/cart/${id}`).delete()
}

save(id , amount){
  return this.fs.doc(`user/${this.as.userId}/cart/${id}`).update({
    amount
  })
}


}
