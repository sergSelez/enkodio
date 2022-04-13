import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})

export class AboutComponent implements OnInit {

  constructor(
    private title: Title,
    private meta: Meta
  ) {
    title.setTitle('О команде –  enKod');
    meta.addTags([
      { name: 'description', content: 'Здесь мы рассказываем о людях, создавших enKod и ценностях нашей команды. История нашего развития и планы на будущее здесь.' },
      { name: 'keywords', content: 'история команды enKod' }
    ]);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='keywords'");
  }

}
