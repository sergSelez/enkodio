import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('Защита');
    meta.addTags([{ name: 'description', content: 'Персональные данные под защитой' }]);
  }

  ngOnInit() {
  }

}
