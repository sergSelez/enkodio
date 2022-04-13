import { Router } from '@angular/router';
import { RouteObserverService } from './../../services/route-observer.service';
import { Component, OnInit } from '@angular/core';
import { MenuToggleService } from 'src/app/services/menu-toggle.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss', '../../pages/about/about.component.scss']
})
export class TeamComponent implements OnInit {

  constructor(
    private router: Router,
    private routeObserver: RouteObserverService,
    public menuService: MenuToggleService
  ) { }

  abs$;

  ngOnInit(): void {
    this.abs$ = this.routeObserver.routeNow;
  }

}
