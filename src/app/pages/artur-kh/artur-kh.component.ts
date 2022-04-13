import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-artur-kh',
  templateUrl: './artur-kh.component.html',
  styleUrls: ['./artur-kh.component.scss', '../elleN/elleN.component.scss', '../about/about.component.scss']
})
export class ArturKhComponent implements OnInit {

  constructor(
    private title: Title
  ) {
    title.setTitle('Артур Харитонов - директор по маркетингу');
  }

  buttonStatus: boolean = false

  buttonClick() {
    this.buttonStatus = !this.buttonStatus
  }

  ngOnInit(): void {
  }

}
