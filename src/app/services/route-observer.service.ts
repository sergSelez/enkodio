import { Injectable } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteObserverService {
    constructor(private router: Router) {}

    router$ = new BehaviorSubject('');

    init() {
        this.router.events.subscribe(e => {
        if (e instanceof RoutesRecognized) {
            if (e.url.includes('capabilities')) {
                this.router$.next('capabilities');
            }
            else if (e.url.includes('get-started')) {
                this.router$.next('get-started');
            }
            else if (e.url.includes('about')) {
                this.router$.next('about')
            }
            else if (e.url.includes('contacts')) {
                this.router$.next('contacts')
            }
            else if (e.url.includes('demo')) {
                this.router$.next('demo')
            }
            else if (e.url.includes('mission')) {
                this.router$.next('mission')
            }
            else if (e.url.includes('partners')) {
                this.router$.next('partners')
            }
            else if (e.url.includes('price')) {
                this.router$.next('price')
            }
            else if ((e.url.includes('cookie')) || (e.url.includes('privacy-policy')) || (e.url.includes('processing-of-personal-data')) || (e.url.includes('security'))) {
                this.router$.next('politics')
            }
            else if (e.url.includes('elle.nikiforova')) {
                this.router$.next('elle.nikiforova')
            }
            else if (e.url.includes('kristina.markina')) {
                this.router$.next('kristina.markina')
            }
            else if (e.url.includes('maxim.tishininov')) {
                this.router$.next('maxim.tishininov')
            }
            else if (e.url.includes('alexander.chernov')) {
                this.router$.next('alexander.chernov')
            }
            else if (e.url.includes('artur.kharitonov')) {
                this.router$.next('artur.kharitonov')
            }
            else if (e.url.includes('')) {
              this.router$.next('main');
            }
            else this.router$.next('404');
        }
        });

        // this.router$.subscribe(val => {
        //     console.log(val);

        // });
    }
    get routeNow() {
        return this.router$.asObservable();
    }
}
