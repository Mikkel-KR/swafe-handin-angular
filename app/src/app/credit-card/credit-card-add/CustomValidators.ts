import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function mustBeInteger(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = !RegExp("^[0-9]*$").test(control.value);
        return forbidden ? {mustBeInteger: {value: control.value}} : null;
    };
}

export function exactLength(len: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const forbidden = control.value.length !== len
        return forbidden ? {exactLength: {requiredLength: len, actualLength: control.value.length}} : null;
    };
}

export function inRange(smallest: number, largest: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        let forbidden = true
        const asInt = parseInt(control.value)

        if(asInt) {
            forbidden = !(asInt >= smallest && asInt <= largest)
        }
        
        return forbidden ? {inRange: {requiredRange: {smallest: smallest, largest: largest}, value: control.value}} : null;
    };
}

export * as CustomValidators from './CustomValidators';