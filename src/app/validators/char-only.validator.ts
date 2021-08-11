import { FormControl } from '@angular/forms';

// export function NumberOnly(control: FormControl) {

// }

export const CharOnly = (control: any) => {
    const regex = new RegExp('^[a-zA-Z \-\']+');

    const result = regex.test(control.value);

    if (!result) {
        return { invalidChar: true}
    }

    return null;

}