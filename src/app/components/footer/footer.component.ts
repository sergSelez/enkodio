import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomValidators } from '../../validators/custom-validators'
import { FormBuilder, FormControl, FormGroup, MinLengthValidator, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteObserverService } from './../../services/route-observer.service';
import { catchError } from 'rxjs/operators';
import { BehaviorSubject, of } from 'rxjs';



@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {

  goUp() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
  }

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private routeObserver: RouteObserverService
  ) {
    this.loading$ = new BehaviorSubject(false);
   }


  loading$: BehaviorSubject<boolean>;

  observeRouteService: any;

  abs$;
  formDemo: FormGroup;
  formAbout: FormGroup;
  formCapabilities: FormGroup;
  formGetstarted: FormGroup;
  formContacts: FormGroup;

  formSubmited = false;


// ngOnChanges() {
//   (this.formAbout || this.formCapabilities || this.formContacts || this.formDemo || this.formGetstarted).reset
// }

  ngOnInit() {

    this.abs$ = this.routeObserver.routeNow;
    console.log(this.route.snapshot);

    this.abs$.subscribe(value=>{
      switch (value) {
        case 'about':
          this.formAbout.reset();
          this.formSubmited = false;

          break;

        case 'demo':
          this.formDemo.reset();
          this.formSubmited = false;
          break;

        case 'elle.nikiforova':
          this.formDemo.reset();
          this.formSubmited = false;
          break;

        case 'kristina.markina':
          this.formDemo.reset();
          this.formSubmited = false;
          break;

        case 'alexander.chernov':
            this.formDemo.reset();
            this.formSubmited = false;
            break;

        case 'maxim.tishininov':
          this.formDemo.reset();
          this.formSubmited = false;
          break;

        case 'artur.kharitonov':
          this.formDemo.reset();
          this.formSubmited = false;
          break;

        case 'mission':
          this.formCapabilities.reset();
          this.formSubmited = false;
          break;

        case 'partners':
          this.formCapabilities.reset();
          this.formSubmited = false;
          break;

        case 'capabilities':
          this.formCapabilities.reset();
          this.formSubmited = false;
          break;

        case 'get-started':
          this.formGetstarted.reset();
          this.formSubmited = false;
          break;

        case 'contacts':
          this.formContacts.reset();
          this.formSubmited = false;
          break;

        default:
          break;
      }
    })

    this.formDemo = this.fb.group({
      name: ['', [Validators.required]],
      activity: '',
      email: ['', [Validators.required, CustomValidators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^([0-9-+() ]){18,20}$')]],
      company: ['', Validators.required],
      checkbox: [false, Validators.requiredTrue]
    })

    this.formAbout = this.fb.group({
      name: ['', [Validators.required]],
      telephone: ['', [Validators.required, Validators.pattern('^([0-9-+() ]){18,20}$')]],
      email: ['', [Validators.required, CustomValidators.email]],
      link: ['', [Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]],
      checkbox: [false, Validators.requiredTrue]
    })

    this.formCapabilities = this.fb.group({
      email: ['', [Validators.required, CustomValidators.email]],
      question: '',
      checkbox: [false, Validators.requiredTrue]
    })

    this.formGetstarted = this.fb.group({
      email: ['', [Validators.required, CustomValidators.email]],
      question: '',
      checkbox: [false, Validators.requiredTrue]
    })

    this.formContacts = this.fb.group({
      email: ['', [Validators.required, CustomValidators.email]],
      telephone: ['', [Validators.required, Validators.pattern('^([0-9-+() ]){18,20}$')]],
      message: '',
      checkbox: [false, Validators.requiredTrue]
    })

    // this.form = new FormGroup({
    //   question: new FormControl('', []),
    //   email: new FormControl('', [
    //     Validators.required,
    //     Validators.email
    //   ]),
    //   checkbox: new FormControl(false, Validators.requiredTrue)
    // })
  }

  // ngOnDestroy() {
  //   (this.formAbout || this.formCapabilities || this.formContacts || this.formDemo || this.formGetstarted).reset
  // }

  async transition(data) {

    this.loading$.next(true);
        await this.http
            .post('https://enkodlandingapi.enkod.tech', data)
            .pipe(
                catchError(err => {
                    this.loading$.next(false);
                    return of(err);
                })
            )
            .toPromise();
        this.loading$.next(false);
    this.formSubmited = true;
  }

  submit() {
    let data:object;

    if (this.formDemo.valid) {
      this.formSubmited = true;
      data = {
        "type": "transition",
        "messageId": 141,
        "email": "experts@enkod.io",
        "snippets": {
          "page":  'Демо',
          "name":  this.formDemo.value.name,
          "activity": this.formDemo.value.activity,
          "email": this.formDemo.value.email,
          "telephone": this.formDemo.value.telephone,
          "company": this.formDemo.value.company,}
      }
      this.transition(data)
      this.formDemo.reset()
    } else {
      this.formDemo.markAllAsTouched();
    }

    if (this.formAbout.valid) {
      this.formSubmited = true;
      data = {
        "type": "transition",
        "messageId": 141,
        "email": "experts@enkod.io",
        "snippets": {
          "page":  'Хочу у вас работать',
          "name":  this.formAbout.value.name,
          "email": this.formAbout.value.email,
          "telephone": this.formAbout.value.telephone,
          "link": this.formAbout.value.link
        }
      }

      this.transition(data)
      this.formAbout.reset()
    } else {
      this.formAbout.markAllAsTouched();
    }

    if (this.formCapabilities.valid) {
      this.formSubmited = true;
      data = {
        "type": "transition",
        "messageId": 141,
        "email": "experts@enkod.io",
        "snippets": {
          "page":  'Есть вопросы?',
          "name":  this.formCapabilities.value.name,
          "email": this.formCapabilities.value.email,
          "question": this.formCapabilities.value.question
        }
      }
      this.transition(data)
      this.formCapabilities.reset()
    } else {
      this.formCapabilities.markAllAsTouched();
    }

    if (this.formGetstarted.valid) {
      this.formSubmited = true;
      data = {
        "type": "transition",
        "messageId": 141,
        "email": "experts@enkod.io",
        "snippets": {
          "page":  'Готовы начать?',
          "email": this.formGetstarted.value.email,
          "name":  this.formGetstarted.value.name,
          "question": this.formGetstarted.value.question
        }
      }
      this.transition(data)
      this.formGetstarted.reset()
    } else {
      this.formGetstarted.markAllAsTouched();
    }

    if (this.formContacts.valid) {
      this.formSubmited = true;
      data = {
        "type": "transition",
        "messageId": 141,
        "email": "experts@enkod.io",
        "snippets": {
          "page":  'Есть вопросы?',
          "email":  this.formContacts.value.email,
          "telephone":  this.formContacts.value.telephone,
          "question": this.formContacts.value.question
        }
      }
      this.transition(data)
      this.formContacts.reset()
    } else {
      this.formContacts.markAllAsTouched();
    }
  }
}
