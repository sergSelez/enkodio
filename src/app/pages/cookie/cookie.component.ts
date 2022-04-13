import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-cookie',
  templateUrl: './cookie.component.html',
  styleUrls: ['./cookie.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CookieComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta) {
      title.setTitle('Политика использования файлов cookie');
      meta.addTags([{ name: 'description', content: 'Использование файлов cookie на этом сайте, не требующее согласия пользователя' }]);
    }

  ngOnInit() {
  }

}
