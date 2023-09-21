import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from './user/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , OnDestroy{
  activatedUser = false;
  private subscription : Subscription;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.subscription = this.userService.activatetdSubject.subscribe((value)=> {
      this.activatedUser = value
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
