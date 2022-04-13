import { PartnersComponent } from './pages/partners/partners.component';
import { ArturKhComponent } from './pages/artur-kh/artur-kh.component';
import { AlexChComponent } from './pages/alex-ch/alex-ch.component';
// import { MaximTComponent } from './pages/maxim-t/maxim-t.component';
import { KrisMComponent } from './pages/kris-m/kris-m.component';
import { PriceComponent } from './pages/price/price.component';
import { MissionComponent } from './pages/mission/mission.component';
import { ElleNComponent } from './pages/elleN/elleN.component';
import { CookieComponent } from './pages/cookie/cookie.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProcessingOgPersonalDataComponent } from './pages/processing-og-personal-data/processing-og-personal-data.component';
import { SecurityComponent } from './pages/security/security.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactsComponent } from './pages/contacts/contacts.component';
import { DemoComponent } from './pages/demo/demo.component';
import { HowStartComponent } from './pages/how-start/how-start.component';
import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { qweqwe: 'Profile info' }
  },
  { path: 'contacts', component: ContactsComponent },
  { path: 'price', component: PriceComponent },
  { path: 'demo', component: DemoComponent },
  { path: 'get-started', component: HowStartComponent },
  { path: 'capabilities', component: CapabilitiesComponent },
  { path: 'security', component: SecurityComponent },
  {
    path: 'processing-of-personal-data',
    component: ProcessingOgPersonalDataComponent
  },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'cookie', component: CookieComponent },
  { path: 'elle.nikiforova', component: ElleNComponent },
  { path: 'kristina.markina', component: KrisMComponent },
  // { path: 'maxim.tishininov', component: MaximTComponent },
  { path: 'alexander.chernov', component: AlexChComponent },
  { path: 'artur.kharitonov', component: ArturKhComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'partners', component: PartnersComponent },
  { path: '', component: MainPageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { 
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled' 
    })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
