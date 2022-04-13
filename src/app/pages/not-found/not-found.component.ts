import { ChangeDetectionStrategy, Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    private title: Title
  ) {
    title.setTitle('Ой, кажется вы потерялись');
  }

  ngOnInit() {
    this.renderer.addClass(document.body, 'black-theme');
  }
  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'black-theme');
  }
}
