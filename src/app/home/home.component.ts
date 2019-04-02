import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 //data:any;
userForm1:any;
lat: number = 26.765844;
  lng: number = 83.364944;
 data;
  constructor(public router:Router,public serve:AuthService) { }

  ngOnInit() {
     this.data= JSON.parse(localStorage.getItem(this.serve.userEmail));
   
  }
  getValue2(){
    
    this.router.navigate(['/login'])
}

}


