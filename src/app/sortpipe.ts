import {Pipe, PipeTransform} from '@angular/core';

@Pipe({ name: 'sortBy' })

export class SortByPipe implements PipeTransform{
  transform(value: any[], direcion: string, prop: string): any[] {  
    let sortedArray = (value || []).sort((a,b)=>{
      if(a[prop] > b[prop]){
        return (direcion === 'desc') ? 1 : -1;
      }
      if(a[prop] < b[prop]){
        return (direcion === 'desc') ? -1 : 1;
      }
      return 0;
    })
  return sortedArray;
}
}