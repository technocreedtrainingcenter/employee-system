import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchEmployee',
})
export class SearchPipe implements PipeTransform {
    transform(value: any, searchText: string) {
        if (!searchText) {
            return value;
        }
       return  value.filter((item: any) => item.employee_name.includes(searchText))
    }
}