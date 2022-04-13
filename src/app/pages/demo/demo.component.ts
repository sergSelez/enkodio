import { ChangeDetectionStrategy, Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit, OnDestroy {

  constructor(
    private renderer: Renderer2,
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Запросить демонстрацию – enKod');
    meta.addTags([{ name: 'description', content: 'Лучший способ понять подходит ли вам сервис для автоматизации маркетинга enKod — это посмотреть его изнутри. Наш менеджер покажет платформу и расскажет, как с ее помощью решить ваши задачи.' }]);
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'black-theme');
    this.renderer.addClass(document.body, 'demo-theme');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'black-theme');
    this.renderer.removeClass(document.body, 'demo-theme');
    this.meta.removeTag("name='description'");
  }
}
