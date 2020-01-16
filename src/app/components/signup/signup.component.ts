import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/interface/user.interface';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  errorMessage:string =''
  constructor(private authService:AuthService,private us: UserService,private router:Router) {
    
   }


  signUp(valf){

    let data:User =valf.value
    this.authService.signUp(data.email , data.password)
    .then(result =>{
      this.errorMessage ='',
      this.us.addNewUser(result.user.uid ,data.name ,data.address).then(()=>{
      this.router.navigate (['/'])
      })
    })
    .catch(error=>{
      this.errorMessage = error.message
    })
    

  }
  ngOnInit() {
  }

}
