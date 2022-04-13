import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouteObserverService } from './services/route-observer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'enkodio';

  menuTrigger = false;

  mobileMenuTrigger = false;

  constructor (private routeObserver: RouteObserverService) {
    this.routeObserver.init();
  }
}
