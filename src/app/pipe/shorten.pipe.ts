import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten',
})
export class ShortenPipe implements PipeTransform {
    transform(value: any, max: any) {
        return value.toUpperCase();
        return `${value.slice(0,max)} ....`;
    }
}
