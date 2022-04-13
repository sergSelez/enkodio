import { AbstractControl, FormGroup } from '@angular/forms';

export class CustomValidators {
    static required(control: AbstractControl) {
        if (
            !control.value ||
            (control.value.trim && control.value.trim() == '')
        ) {
            return { required: true };
        }
        return null;
    }

    static email(control: AbstractControl) {
        if (!control || !control.value) return null;

        const EMAIL_REGEXP = /^([A-Z0-9._%+-]+){2,}@[A-Z0-9-\.]+(\w+\.{1}?)+[A-Z]{2,}$/i;

        if (EMAIL_REGEXP.test(control.value)) {
            return null;
        }

        return {
            invalidEmail: true
        };
    }

    static domen(control: AbstractControl) {
        if (!control || !control.value) return null;

        const DOMEN_REGEXP = /^[A-Z0-9-\.]+(\w+\.{1}?)+[A-Z]{2,}$/gi;

        if (DOMEN_REGEXP.test(control.value)) {
            return null;
        }

        return {
            invalidDomain: true
        };
    }

    static emailAccessor(control: AbstractControl) {
        if (!control || !control.value) return null;

        const LOGIN_REGEXP = /^[A-Z0-9._%+-]{2,31}$/i;
        if (LOGIN_REGEXP.test(control.value)) {
            return null;
        }

        return {
            invalidLogin: true
        };
    }

    static url(control: AbstractControl) {
        if (!control || !control.value) return null;
        if (
            (!control.value.startsWith('http') ||
                !control.value.includes('://') ||
                !control.value.includes('.')) &&
            control.value
        ) {
            return { invalidUrl: true };
        }
        return null;
    }

    static json(control: AbstractControl) {
        try {
            JSON.parse(control.value.replace(/\s\s+/g, ' '));
            return null;
        } catch {
            return { jsonInvalid: true };
        }
    }

    static channel(control: AbstractControl) {
        if (
            JSON.stringify(control.value) ===
            JSON.stringify({
                email: false
                // push: false,
                // sms: false
                // telegram: false,
                // viber: false,
                // whatsapp: false
            })
        )
            return { required: true };

        return null;
    }

    static contactsImport(control: AbstractControl) {
        let columnValid = [];

        const columns = control.value;
        for (let key in columns) {
            switch (columns[key]) {
                case 'email':
                    columnValid.push(columns[key]);
                    break;
                case 'phone':
                    columnValid.push(columns[key]);
                    break;
                default:
                    break;
            }
        }

        if (columnValid.length === 0) return { required: true };

        return null;
    }

    static systemName(control: AbstractControl) {
        const REGEXP = /^[a-z][a-z_-]{0,1}[\da-z_-]{0,}$/;
        if (REGEXP.test(control.value)) {
            return null;
        }
        return {
            invalidSystemName: true
        };
    }

    static transactionValidator(form: FormGroup) {
        if (
            form.controls.transaction.value &&
            !form.controls.userAgreement.value
        ) {
            return {
                agreement: false
            };
        } else return null;
    }
}
