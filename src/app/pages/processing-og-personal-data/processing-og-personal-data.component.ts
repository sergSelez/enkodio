import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-processing-og-personal-data',
  templateUrl: './processing-og-personal-data.component.html',
  styleUrls: ['./processing-og-personal-data.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcessingOgPersonalDataComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Согласие на обработку персональных данных пользователей сайтов');
    meta.addTags([{ name: 'description', content: 'Персональные данные под защитой' }]);
  }

  ngOnInit() {
  }

}
