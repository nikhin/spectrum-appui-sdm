import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonService } from '../shared/services/common.service';

@Component({
  selector: 'sup-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MainComponent implements OnInit {

  isActive: boolean;
  
  constructor(private toggleService: CommonService) { }

  ngOnInit() {

    this.toggleService.asideToggleEvent.subscribe(
        
      (isActive: boolean) => {
         
        this.isActive = isActive;

      }
           
    )
  }
  

}
