import { TeamComponent } from './../../components/team/team.component';
import { Component, OnInit } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { reduce, scan } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-elleN',
  templateUrl: './elleN.component.html',
  styleUrls: ['./elleN.component.scss', '../about/about.component.scss']
})
export class ElleNComponent implements OnInit {

  constructor(
    private title: Title
  ) {
    title.setTitle('Элеонора Никифорова - генеральный директор enKod');
  }

  buttonStatus: boolean = false

  buttonClick() {
    this.buttonStatus = !this.buttonStatus
  }

  ngOnInit() {
    // gsap.registerPlugin(ScrollTrigger);
    // setTimeout(() => {
    //   const timeline = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: '.qweqwe',
    //       start: '320 top',
    //       end: '322 top',
    //       scrub: 1
    //       // markers: true
    //     }
    //   });
    //   if (window.innerWidth <= 450) {
    //     timeline
    //     .to('.video', {
    //       // width: 60,
    //       // height: 192,
    //       // borderRadius: '50%',
    //       opacity: 0,
    //       duration: 2
    //       // margin: '15'
    //     })
    //     .to('.hidden-foto', {
    //       opacity: 1,
    //       // borderRadius: '50%',
    //       delay: -1
    //     })
    //     .to ('.qweqwe', {
    //       // height: 192,
    //       // height: 222,
    //       duration: 4,
    //       delay: -1
    //     })
    //     .to('.name-box--for-video', {
    //       delay: -2,
    //       duration: 1
    //     })
    //     .to('.name-box--for-video .name__man', {
    //       // scale: '0.6',
    //       transform: 'scale(0.6, 0.6) translate(10.8px, 3px)',
    //       delay: -4,
    //       color: '#ffffff'
    //     })
    //     .to('.name-box--for-video .name__prof', {
    //       // scale: '0.7',
    //       transform: 'scale(0.8, 0.8) translate(21.6px, -4.5px)',
    //       delay: -4,
    //       color: '#ffffff'
    //     })
    //   }
    // }, 0);
  }

}

// if (window.innerWidth <= 450) { gsap.to('.video', { scrollTrigger: { trigger: '.qweqwe', start: '310 top', end: '360 top', scrub: 1, toggleActions: 'restart none none none' // markers: true }, opacity: 0, duration: 2 }) }
