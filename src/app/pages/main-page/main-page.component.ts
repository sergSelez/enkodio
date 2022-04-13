import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Renderer2,
  OnDestroy,
  AfterViewInit
} from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { mainScroll } from '../main-page/main-scroll-animations';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainPageComponent implements OnInit, OnDestroy, AfterViewInit {
  constructor(
    private renderer: Renderer2,
    private title: Title,
    private meta: Meta,
    private metaGoogle: Meta
  ) {
    title.setTitle('enKod – сервис для автоматизации маркетинга');
    meta.addTags([
      { name: 'description', content: 'Сервис, в котором есть все от сбора базы до рассылок по любым каналам, рекомендаций и интеграций с оффлайном. Увеличивает количество продаж и повышает конверсию.' },
      { name: 'keywords', content: 'платформа для автоматизации маркетинга cdp' }
    ]);
    metaGoogle.addTag({
      name: 'google-site-verification',
      content: '9yRZWg_jfIzSiAgJ0PmmsaNC2MGfxYYiSdTkKEWj2vA'
    })
  }

  ngOnInit() {
    // mainScroll();
    ScrollTrigger.getAll().forEach(t => t.enable());
    gsap.registerPlugin(ScrollTrigger);
    setTimeout(() => {
  
      if (window.innerWidth >= 1280) {
        let secondSectionTL = gsap.timeline({
          scrollTrigger: {
            trigger: '.second-screen',
            start: 'top center',
            end: '700 center',
            scrub: 0.5,
            // markers: true,
            pin: true
          }
        });

        secondSectionTL
          .set('.scroll-title1', { opacity: 0 })
          .set('.logos-container__logo', { opacity: 0, y: '50%' })
          .set('.scroll-text1', { opacity: 0, y: '50%' })
          .to('.scroll-title1', { opacity: 1, duration: 2 })
          .to('.scroll-text1', { opacity: 1, y: '-5%', delay: 0.5, duration: 1 })
          .to('.scroll-text1', { opacity: 1, y: '-5%', duration: 2 })
          .to('.logo1', { opacity: 1, y: '0%', duration: 1 })
          .to('.logo2', { opacity: 1, y: '0%', duration: 1 })
          .to('.logo3', { opacity: 1, y: '0%', duration: 1 })
          .to('.logo4', { opacity: 1, y: '0%', duration: 1 })
          .to('.logo5', { opacity: 1, y: '0%', duration: 1 });

      }

      if (window.innerWidth >= 1280) {
        let thirdSectionTL = gsap.timeline({
          scrollTrigger: {
            trigger: '.third-screen',
            start: 'top center',
            end: '2800 center',
            scrub: 0.5,
            // markers: {
            //   endColor: 'blue',
            //   startColor: 'blue',
            // },
            pin: true
          }
        });
        thirdSectionTL
          .to('.logos-container', { opacity: 0 })
          .set('.scroll-title2', { opacity: 1, delay:-1 })
          .set('.right-ellipse', { opacity: 0 })
          .set('.scroll-text--enrecom', { opacity: 0, y: '100' })
          .set('.scroll-text--enpop, .scroll-text--ensend', {
            display: 'none',
            opacity: 0,
            y: '100'
          })

          .set('.scroll-link--enrecom', { opacity: 0 })
          .set('.scroll-link--ensend, .scroll-link--enpop', {
            display: 'none',
            opacity: 0
          })

          .set('.name--enrecom', { opacity: 0 })
          .set('.name--ensend, .name--enpop', { opacity: 0, display: 'none' })
          .set('.ellipse-line', { opacity: 0 })
          .set('.product-block', { opacity: 0 })
          .set('.service-enrecom', { rotation: -100, opacity: 0 })
          .set('.service-ensend', { rotation: -145, opacity: 0 })
          .set('.service-enpop', { rotation: -190, opacity: 0 })

          .to('.third-screen', { opacity: 1 })
          .to('.scroll-title2', { opacity: 1, delay: 1, duration: 1 })
          .to('.product-block', { opacity: 1, duration: 2, delay: -2, })
          .to('.right-ellipse', { opacity: 1, duration: 1, delay: -2 })
          //enRecom start
          .to('.service-enrecom', {
            rotation: -90,
            opacity: 1,
            duration: 2,
            delay: -1
          })
          .to('.service-ensend', {
            rotation: -135,
            opacity: 1,
            duration: 2,
            delay: -2
          })
          .to('.service-enpop', {
            rotation: -180,
            opacity: 1,
            duration: 2,
            delay: -2
          })
          .to('.ellipse-line', { opacity: 1, duration: 2, delay: -1 })
          .to('.name--enrecom', { opacity: 1, duration: 1, delay: -2 })
          .to('.scroll-text--enrecom', {
            opacity: 1,
            y: '0%',
            duration: 2,
            delay: -3
          })
          .to('.scroll-link--enrecom', { opacity: 1, duration: 2 })
          .to('.scroll-text--enrecom', { opacity: 0, y: '-200', duration: 2 })
          .to('.scroll-link--enrecom', {
            opacity: 0,
            y: '-200',
            duration: 2,
            delay: -2
          })
          .to('.name--enrecom', { opacity: 0, duration: 1, delay: -2 })
          .to('.scroll-text--enrecom, .scroll-link--enrecom, .name--enrecom', {
            display: 'none'
          })
          //enRecom end - enSend start
          .to('.name--ensend', {
            display: 'block',
            opacity: 1,
            duration: 1,
            delay: -1
          })
          .to('.scroll-text--ensend, .scroll-link--ensend', {
            display: 'block'
          })
          .to('.service-enrecom', { rotation: -45, duration: 4, delay: -3 })
          .to('.service-ensend', { rotation: -90, duration: 4, delay: -4 })
          .to('.service-enpop', { rotation: -135, duration: 4, delay: -4 })
          .to('.scroll-text--ensend', {
            opacity: 1,
            y: '0',
            duration: 2,
            delay: -2
          })
          .to('.scroll-link--ensend', { opacity: 1, duration: 2 })
          .to('.scroll-text--ensend', { opacity: 0, y: '-200', duration: 2 })
          .to('.scroll-link--ensend', {
            opacity: 0,
            y: '-200',
            duration: 2,
            delay: -2
          })
          .to('.name--ensend', { opacity: 0, duration: 1, delay: -2 })
          .to('.scroll-text--ensend, .scroll-link--ensend, .name--ensend', {
            display: 'none'
          })
          //enSend end - enPop start
          .to('.name--enpop', {
            display: 'block',
            opacity: 1,
            duration: 1,
            delay: -1
          })
          .to('.scroll-text--enpop, .scroll-link--enpop', { display: 'block' })
          .to('.service-enrecom', { rotation: 0, duration: 4, delay: -3 })
          .to('.service-ensend', { rotation: -45, duration: 4, delay: -4 })
          .to('.service-enpop', { rotation: -90, duration: 4, delay: -4 })
          .to('.scroll-text--enpop', {
            opacity: 1,
            y: '0',
            duration: 2,
            delay: -2
          })
          .to('.scroll-link--enpop', { opacity: 1, duration: 2 });
      }
      if (window.innerWidth >= 1280) {
      let fourthSectionTL = gsap.timeline({
        scrollTrigger: {
          trigger: '.fourth-screen',
          start: 'top bottom',
          end: '400 80%',
          scrub: 0.3
          // markers: {
          //   endColor: 'yellow',
          //   startColor: 'yellow'
          // }
        }
      });
      fourthSectionTL
        .set('.reasons', { opacity: 0, y: 50 })
        .set('.scroll-title3', { opacity: 0 })
        .to('.scroll-title3', { opacity: 1, duration: 1 })
        .to('.reason1', { opacity: 1, y: 0, duration: 1 })
        .to('.reason2', { opacity: 1, y: 0, duration: 1 })
        .to('.reason3', { opacity: 1, y: 0, duration: 1 })
        .to('.reason4', { opacity: 1, y: 0, duration: 1 });

    }

      //   let fifthSectionTL = gsap.timeline({
      //     scrollTrigger: {
      //       trigger: '.fifth-screen',
      //       start: 'top bottom',
      //       end: '600 80%',
      //       scrub: 0.3,
      //       // markers: {
      //       //   endColor: 'purple',
      //       //   startColor: 'purple'
      //       // }
      //     },
      //   });
      //   fifthSectionTL
      //     .set('.blog', { opacity: 0, y: 50 })
      //     .set('.blog__link', { opacity: 0 })
      //     .set('.scroll-title4', { opacity: 0 })
      //     .to('.scroll-title4', { opacity: 1, duration: 1 })
      //     .to('.blog1', { opacity: 1, y: 0, duration: 1 })
      //     .to('.blog2', { opacity: 1, y: 0, duration: 1 })
      //     .to('.blog3', { opacity: 1, y: 0, duration: 1 })
      //     .to('.blog4', { opacity: 1, y: 0, duration: 1 })
      //     .to('.blog__link', { opacity: 1, y: 0, duration: 3 });
    }, 0);
  }
  ngAfterViewInit() {
    this.renderer.addClass(document.body, 'black-theme');
  }

  ngOnDestroy(): void {
    this.renderer.removeClass(document.body, 'black-theme');
    ScrollTrigger.getAll().forEach(t => t.kill());
    this.meta.removeTag("name='description'");
    this.meta.removeTag("name='keywords'");
    this.metaGoogle.removeTag("name='google-site-verification'")
  }
}
