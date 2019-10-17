import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
})
export class SiblingComponent implements OnInit {

  constructor(private data: DataService) { }
  datamessage: string;

  ngOnInit() {
    this.data.currentMessage.subscribe(
      massage => this.datamessage = massage
    )
  }

  changeMessage() {
    this.data.changeMessage("silling Massege")
  }

}
