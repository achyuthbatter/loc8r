import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { HistoryService } from '../history.service';
import { User } from '../user';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {

  constructor(private authentictionService: AuthenticationService, private historyService: HistoryService) { }

  ngOnInit() {
  }
  
  public doLogout(): void {
    this.authentictionService.logout();
  }

  public isLoggedIn(): boolean {
    if(this.authentictionService.isLoggedIn()){
      return true;
    }
    else{
      return false;
    }
       
  }
  
  public getUsername(): string{
    const user: User = this.authentictionService.getCurrentUser();
    return user ? user.name : 'Guest';
  }
}

