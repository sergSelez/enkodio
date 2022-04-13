import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-maxim-t',
  templateUrl: './maxim-t.component.html',
  styleUrls: ['./maxim-t.component.scss', '../elleN/elleN.component.scss', '../about/about.component.scss']
})
export class MaximTComponent implements OnInit {

  constructor(
    private title: Title
  ) {
    title.setTitle('Максим Тишининов - директор по качеству сервиса');
  }

  buttonStatus: boolean = false

  buttonClick() {
    this.buttonStatus = !this.buttonStatus
  }

  ngOnInit(): void {
  }

}
