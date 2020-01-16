import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage'
import { from } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'url';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private fstore:AngularFirestore , private storge : AngularFireStorage ) { 

  }

  getAllGoods(){
   return this.fstore.collection('goods').snapshotChanges()
   
  }

  addNewGood(name :string, price:Number , image: File){
    // this.storge.ref('goods').child(image.name)
    // ref.getDownloadURL -> delete
    // ref.getMetadata
    // ref.putString
   

      //return path from storge firebase in ref than put image to storage    
 
      //add custom promise to alert my after Item added 
      return new Promise((resolve , reject)=>{
        let ref = this.storge.ref('goods/' + image.name)
        ref.put(image).then(()=>{
            ref.getDownloadURL().subscribe(photoUrl =>{
                this.fstore.collection('goods').add({
                  name,
                  price,
                  photoUrl
                }).then(() => resolve('Added Now'))
            })
        })
      })
    
  }
}
