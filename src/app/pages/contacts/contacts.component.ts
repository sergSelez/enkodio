import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactsComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Контакты enKod – сервиса для автоматизации маркетинга');
    meta.addTags([
      { name: 'description', content: 'Номер телефона, email и адрес нашей команды. Не нашли ответа на свой вопрос? Просто позвоните нам – оперативно ответим и решим ваши задачи.' },
      { name: 'keywords', content: 'контакты команды enKod' }
    ]);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='keywords'");
  }

}
