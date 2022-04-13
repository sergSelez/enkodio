import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-alex-ch',
  templateUrl: './alex-ch.component.html',
  styleUrls: ['./alex-ch.component.scss', '../elleN/elleN.component.scss', '../about/about.component.scss']
})
export class AlexChComponent implements OnInit {

  constructor(
    private title: Title
  ) {
    title.setTitle('Александр Чернов - менеджер проекта');
  }
  
  buttonStatus: boolean = false

  buttonClick() {
    this.buttonStatus = !this.buttonStatus
  }

  ngOnInit(): void {
  }

}
