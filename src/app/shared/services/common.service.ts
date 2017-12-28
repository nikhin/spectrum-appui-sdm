import { EventEmitter , Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  
  asideToggleEvent = new EventEmitter<any>();

  constructor() { }

}
