import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta) {
      title.setTitle('Политика конфиденциальности');
      meta.addTags([{ name: 'description', content: 'О том, как будут собираться, обрабатываться и храниться персональные данные на данном сайте и в информационной системе enKod' }]);
    }

  ngOnInit() {
  }

}
