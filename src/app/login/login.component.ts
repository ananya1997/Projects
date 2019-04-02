import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userForm1:any;
constructor( private fb1:FormBuilder, public router:Router,public serve:AuthService) { }

  ngOnInit() {
     this.userForm1=this.fb1.group({
      'Email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})+$/)])),
      'Password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(16)])),
       });
  }
getValue1(){
 // console.log('value is:', this.userForm1.value);
  //this.userForm1.reset();
  //this.router.navigate(['/home'])

  var data= JSON.parse(localStorage.getItem(this.userForm1.value.Email));
  if (data==null){
    alert('account not exists');
  }
  else{
    if((data.Password==this.userForm1.value.Password)&&(data.Email==this.userForm1.value.Email))
    { 
      this.serve.userEmail=this.userForm1.value.Email;
      this.router.navigate(['/home'])
      alert('welcome to home page')
    }
    else{
      alert('wrong password')
    }}
  this.userForm1.reset();
}}


