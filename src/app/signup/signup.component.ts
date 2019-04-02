//import { getQueryValue } from "@angular/core/src/view/query";
import { Component, OnInit } from '@angular/core';
import{ FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { cpus } from 'os';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  userForm:any;
  match:any;
  Password:any;
  ConfirmPassword:any;
 // gender:any;
constructor(private fb:FormBuilder, public router:Router){}

ngOnInit() {
    this.userForm= this.fb.group({
      'FirstName': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])),
      'LastName': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^[a-zA-Z]+$/)])),
      'Contact': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$/)])),
      'Address': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(20)])),
      'Email': new FormControl('', Validators.compose([Validators.required, Validators.pattern(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})+$/)])),
      'Password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(16)])),
      'ConfirmPassword': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(16)]))
    });
    //,
   // this.gender= ['male','female'];

    this.Password=this.userForm.value.Password;
    this.ConfirmPassword=this.userForm.value.ConfirmPassword;
    if(this.Password==this.ConfirmPassword){
      this.match=true;
    }
  }
// getValue(){
//      var key=this.userForm.value.Email;
//      var obj1={
//        'FirstName':this.userForm.value.FirstName,
//        'LastName':this.userForm.value.LastName,
//        'Contact':this.userForm.value.Contact,
//       // 'Gender':this.userForm.value.Gender,
//        'Address':this.userForm.value.Address,
//        'Email':this.userForm.value.Email,
//        'Password':this.userForm.value.Password,
//        'ConfirmPassword':this.userForm.value.ConfirmPassword
//      }
// let user=this.userForm.value.Email;
// localStorage.setItem(key, JSON.stringify(obj1));

// this.router.navigate(['/login']);
// }
submit()
{
 alert (' signup success')
      var key=this.userForm.value.Email;
     var obj1={
       'FirstName':this.userForm.value.FirstName,
       'LastName':this.userForm.value.LastName,
       'Contact':this.userForm.value.Contact,
      // 'Gender':this.userForm.value.Gender,
       'Address':this.userForm.value.Address,
       'Email':this.userForm.value.Email,
       'Password':this.userForm.value.Password,
       'ConfirmPassword':this.userForm.value.ConfirmPassword
     }
let user=this.userForm.value.Email;
localStorage.setItem(key, JSON.stringify(obj1));

this.router.navigate(['/login']);
}

clear(){
  this.userForm.reset();
}
}
