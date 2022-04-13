import { MenuToggleService } from './../../services/menu-toggle.service';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { interval, Observable, of } from 'rxjs';
import { startWith, distinctUntilChanged, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cd: ChangeDetectorRef,
    public menuService: MenuToggleService
  ) {}

  body = this.document.querySelector('body');

  height: number;

  timer$;

  // status: boolean = false;

  lastScrollTop = 0;

  hideHead = false;

  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  @HostListener('window:scroll', ['$event']) // or window.addEventListener("scroll"....
  ngOnInit() {
    this.timer$ = interval(10)
      .pipe(
        startWith(this.body.offsetHeight),
        switchMap(() => of(this.body.offsetHeight)),
        distinctUntilChanged()
      )
      .subscribe((height) => {
        this.height = height;
        this.cd.markForCheck();
      });

    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > this.lastScrollTop) {
      this.hideHead = true;
    } else {
      this.hideHead = false;
    }
    this.lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }

  ngOnDestroy() {
    // this.timer$.unsubcribe();
  }
}
