import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../shared/services/common.service';

@Component({
  selector: 'sup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isCollapsed = true;
  isActive: boolean = false;

  toggleAside() {

    this.isActive = !this.isActive;

    this.toggleService.asideToggleEvent.emit(this.isActive);

  }

  constructor(private toggleService: CommonService) { }

  ngOnInit() {
  }

}
