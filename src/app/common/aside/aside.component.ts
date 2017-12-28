import { Component, OnInit, Injectable } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'sup-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {

  isActive: boolean = false;
  userName: string = "anhui"  // This is for temporary purpose for intial set up
  userNameFirstChar: string = "";

  constructor(private toggleService: CommonService) { }

  toggleAside() {

    this.isActive = !this.isActive;

    this.toggleService.asideToggleEvent.emit(this.isActive);

  }

  ngOnInit() {

    this.userNameFirstChar = this.userName.charAt(0);

  }

}
