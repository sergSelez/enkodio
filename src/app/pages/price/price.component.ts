import { FormControl, FormGroup } from '@angular/forms';
import { Renderer2 } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private title: Title,
    private meta: Meta
  ) {
      title.setTitle('Цена enKod — платформы для автоматизации маркетинга');
      meta.addTags([
        { 
          name: 'description', 
          content: 'Онлайн калькулятор для рассчета стоимости подключения платформы enKod. Выбираете необходимые модули, нужные опции и оставляете заявку. ' 
        },
        {
          name: 'robots',
          content: 'noindex, nofollow'
        },
        {
          name: 'googlebot',
          content: 'noindex, nofollow'
        },
        {
          name: 'yandex',
          content: 'none'
        }
      ]);
    }

  basePrice = 10000;
  dbPrice = 0;
  messagePrice = 0;
  ensendCoast = 0;
  enrecomCoast = 0;
  trackmoduleCoast = 0;

  addedService = {
    ensendModule: false,
    enrecomModule: false,
    dbModule: false,
    trackModule: false,
    messageModule: false
  }


  maskNumber = {
    mask: Number,
    thousandsSeparator: ' ',
    max: '999999999999999',
    min: '-999999999999999'
  };


  addCoast() {
    if (this.addedService.ensendModule) {
      this.ensendCoast = 25000;
    }
    else {
      this.ensendCoast = 0;
    }

    if (this.addedService.enrecomModule) {
      this.enrecomCoast = 39000;
    }
    else {
      this.enrecomCoast = 0;
    }

    if (this.addedService.trackModule) {
      this.trackmoduleCoast = 16000;
    }
    else {
      this.trackmoduleCoast = 0;
    }
  }

  addDbModuleCoast() {
    if (this.addedService.dbModule) {
      this.dbPrice = 16000
    }
    else {
      this.dbPrice = 0
    }
  }

  addMessageCoast() {
    if (this.addedService.messageModule) {
      this.messagePrice = 21000
    }
    else {
      this.messagePrice = 0
    }
  }

  cancelTrack() {
    this.addedService.trackModule = false;
    this.trackmoduleCoast = 0;
    console.log(this.addedService.trackModule);
    
  }

  readonly testValue = new FormControl();

  keyStepsDb = [
    [(100 / 7) * 1, 18000],
    [(100 / 7) * 2, 20000],
    [(100 / 7) * 3, 22000],
    [(100 / 7) * 4, 24000],
    [(100 / 7) * 5, 26000],
    [(100 / 7) * 6, 28000],
  ];

  keyStepsMessage = [
    [(100 / 9) * 1, 42000],
    [(100 / 9) * 2, 63000],
    [(100 / 9) * 3, 76000],
    [(100 / 9) * 4, 95000],
    [(100 / 9) * 5, 102000],
    [(100 / 9) * 6, 119000],
    [(100 / 9) * 7, 136000],
    [(100 / 9) * 8, 153000],
  ];

  ngOnInit(): void {
    this.renderer.addClass(document.body, 'black-theme');
    this.renderer.addClass(document.body, 'price-theme');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'black-theme');
    this.renderer.removeClass(document.body, 'price-theme');
    this.meta.removeTag("name='description'");
  }

}