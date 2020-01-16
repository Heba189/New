import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { format } from 'url';
import { NgForm } from '@angular/forms';
import { Good } from 'src/app/interface/good.interface';
import { from } from 'rxjs';
import { GoodsService } from 'src/app/services/goods.service';

@Component({
  selector: 'app-goods',
  templateUrl: './goods.component.html',
  styleUrls: ['./goods.component.css']
})
export class GoodsComponent implements OnInit {
  @ViewChild('image', {static: false}) image:ElementRef;
  

  
  constructor(private gs : GoodsService) { }

  ngOnInit() {
  }
  addNewGood(f:NgForm){
    let name =(<Good>f.value).name,
    price =(<Good>f.value).price,
    image =(<HTMLInputElement>this.image.nativeElement).files[0];
    this.gs.addNewGood(name , price , image).then()
    // console.log(f.value)
    // console.log((this.image.nativeElement as HTMLInputElement).files[0])
  }
}
