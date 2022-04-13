import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-kris-m',
  templateUrl: './kris-m.component.html',
  styleUrls: ['./kris-m.component.scss', '../elleN/elleN.component.scss', '../about/about.component.scss']
})
export class KrisMComponent implements OnInit {

  constructor(
    private title: Title
  ) {
    title.setTitle('Кристина Маркина - коммерческий директор');
  }

  buttonStatus: boolean = false

  buttonClick() {
    this.buttonStatus = !this.buttonStatus
  }

  ngOnInit(): void {
  }

}
