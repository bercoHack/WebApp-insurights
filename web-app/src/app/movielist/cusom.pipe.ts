import { Pipe, PipeTransform } from '@angular/core';
import {movie} from './movie'
import { Observable } from 'rxjs';
import {map, filter} from 'rxjs/operators'

@Pipe({
    name: 'myfilter'
  })
  export class MyFilterPipe implements PipeTransform {
    transform(items: Observable<movie[]>, name: String = ""): Observable<movie[]> {
        if (name == "") {
            return items;
        }
        return items.pipe(map(items => items.filter(item => item.title.toLowerCase().indexOf(name.toString()) > -1)));
    }
  
  }