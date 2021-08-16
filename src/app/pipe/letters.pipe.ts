import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'letterSearch',
    pure: false
})
export class LettersPipe implements PipeTransform {
    transform(value: string[], searchText: string) {
        if (!searchText) {
            return value;
        }
        return value.filter(item => item.includes(searchText))
    }
}