import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Клиенты enKod');
    meta.addTags([{ name: 'description', content: 'Здесь мы рассказываем о компаниях, которые доверили автоматизацию маркетинга enKod. Хотите стать нашим партнером? Просто оставьте заявку.' }]);
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.meta.removeTag("name='description'");
  }

}
