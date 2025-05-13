import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function cpfOrEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;

        if (!value) return null;

        const cpfRegex = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const isCpf = cpfRegex.test(value);
        const isEmail = emailRegex.test(value);

        return isCpf || isEmail ? null : { cpfOrEmail: true };
    };
}