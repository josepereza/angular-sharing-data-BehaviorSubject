import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  template: `
 
    <div >
      <button (click)=onClick()> send2parent </button>
      <p>message from parent <strong> {{childMessage}}</strong>  </p> 
      <hr>
      <p> BehaviorSubject massage <strong> {{dataMassege}}</strong>  </p>
    </div>
  `,
})
export class ChildComponent implements OnInit {
  @Input() childMessage: string;

  massage = " HELLO i'm from child";
  massegeToParent = " hello viewchild";
  dataMassege: string;
  @Output() messageEvent = new EventEmitter<string>();

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(
      massage => this.dataMassege = massage
    )
  }

  onClick() {
    this.messageEvent.emit(this.massage)
  }
}
