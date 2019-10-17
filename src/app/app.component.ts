import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  parentMessage = ""
  messagefromChild = ""
  dataMessage: string;
  messageViewInit: string;
  ;
  @ViewChild(ChildComponent, { static: false }) child;
  constructor(private data: DataService) { }

  ngAfterViewInit() {
    this.messageViewInit = this.child.massegeToParent
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(
      massage => this.dataMessage = massage
    )
  }

  onclick() {
    this.parentMessage = "message from parent"
  }

  reciveMessage($event) {
    this.messagefromChild = $event
  }
}
