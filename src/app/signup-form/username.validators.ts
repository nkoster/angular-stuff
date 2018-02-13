import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpaces(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1)
            return { cannotContainSpaces: true };
        return null
    }
    static cannotBeShorterThanTwo(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).length < 2)
            return { cannotBeShorterThanTwo: true };
        return null
    }
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'niels')
                    resolve({ shouldBeUnique: true })
                else
                    resolve(null)
            }, 10000);
        })
    }
}
