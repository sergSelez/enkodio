import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CapabilitiesComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Возможности сервиса enKod');
    meta.addTags([{ name: 'description', content: 'Автоматизация email, push рассылок и рассылок в мессенджерах. Сегментация базы. Настройка всплывающих окон. Рекомендательная система для ecommerce.' }]);
  }

  ngOnInit() {
  }
  selectedSlide = 'ensend';

  ngOnDestroy() {
    this.meta.removeTag("name='description'");
  }

}
