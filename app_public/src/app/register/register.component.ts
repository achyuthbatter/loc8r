import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public formError: string = '';
  public credentials = { 
    name: '',
    email: '',
    password: '',
  };
  public pageContent ={
    header: {
      title: 'Create a New Account',
      strapline: ''
    },
    sidebar:''
  };
  constructor(private router: Router, private authenticationService: AuthenticationService, private historyService: HistoryService) { }

  ngOnInit() {
  }

  public onRegisterSubmit():void{
    console.log(this.credentials);
    this.formError = '';
    if(!this.credentials.email || !this.credentials.name || !this.credentials.password){
      this.formError = 'All Fields are Required';
    } else {
      this.doRegister();
    }
  }

  private doRegister():void{
    this.authenticationService.register(this.credentials)
      .then(() => {
        this.router.navigateByUrl(this.historyService.getPreviousUrl());
      })
      .catch((message) => this.formError = message);
  }
}
