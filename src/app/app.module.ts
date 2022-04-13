import { ElleNComponent } from './pages/elleN/elleN.component';
import { RouteObserverService } from './services/route-observer.service';
import { CookieComponent } from './pages/cookie/cookie.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ProcessingOgPersonalDataComponent } from './pages/processing-og-personal-data/processing-og-personal-data.component';
import { SecurityComponent } from './pages/security/security.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { HowStartComponent } from './pages/how-start/how-start.component';
import { DemoComponent } from './pages/demo/demo.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CookiePopupComponent } from './components/cookie/cookie.component';

import { CapabilitiesComponent } from './pages/capabilities/capabilities.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IMaskModule } from 'angular-imask';
import { MissionComponent } from './pages/mission/mission.component';
import { KrisMComponent } from './pages/kris-m/kris-m.component';
import { MaximTComponent } from './pages/maxim-t/maxim-t.component';
import { AlexChComponent } from './pages/alex-ch/alex-ch.component';
import { ArturKhComponent } from './pages/artur-kh/artur-kh.component';
import { TeamComponent } from './components/team/team.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { PriceComponent } from './pages/price/price.component';
import { SliderModule } from 'primeng/slider';
import { TuiSliderModule } from '../app/ui-kit/slider'
import { IvyCarouselModule } from 'angular-responsive-carousel';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CapabilitiesComponent,
    AboutComponent,
    DemoComponent,
    HowStartComponent,
    MainPageComponent,
    NotFoundComponent,
    SecurityComponent,
    ProcessingOgPersonalDataComponent,
    PrivacyPolicyComponent,
    CookieComponent,
    ElleNComponent,
    CookiePopupComponent,
    MissionComponent,
    KrisMComponent,
    MaximTComponent,
    AlexChComponent,
    ArturKhComponent,
    TeamComponent,
    PartnersComponent,
    PriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    IMaskModule,
    SliderModule,
    FormsModule,
    TuiSliderModule,
    IvyCarouselModule
  ],
  providers: [
    RouteObserverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
