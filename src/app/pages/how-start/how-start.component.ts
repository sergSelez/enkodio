import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-how-start',
  templateUrl: './how-start.component.html',
  styleUrls: ['./how-start.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class HowStartComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Внедрение платформы enKod');
    meta.addTags([
      { name: 'description', content: 'Внедрение платформы для автоматизации маркетинга долгий и сложный процесс.  Мы постарались максимально облегчить его для вас. Здесь вы найдете описания всех этапов, необходимых для начала работы с enKod.' },
      { name: 'keywords', content: 'email-маркетинг персональные рекомендации сервис рассылки сбор базы' }
    ]);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='keywords'");
  }

}
