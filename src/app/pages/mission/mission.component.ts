import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss']
})
export class MissionComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Миссия enKod');
    this.meta.addTags([
      {name: 'description', content: 'Наша миссия — навести порядок в коммуникациях компаний с пользователями.'},
      { name: 'keywords', content: 'всплывающие окна товарные рекомендации рассылки' }
    ]);
    this.meta.updateTag({ name: 'description', content: 'Наша миссия — навести порядок в коммуникациях компаний с пользователями.' });
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='keywords'");
  }
}