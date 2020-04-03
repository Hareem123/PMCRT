import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
name: 'search'
})
 
export class SearchPipe implements PipeTransform {
  private searchKeyword: string = "";
  private Result = [];
  
  constructor() {
  
  }
  
  transform(items: any[], searchText: string): any[] {
    if (this.isObjNull(items)) return [-1];
    if (this.isObjNull(searchText)) return items;
    this.searchKeyword = searchText.toLowerCase();
    this.Result = items.filter(o => { return this.checkAgainstAllProperties(o) });
    if (this.Result.length === 0) {
      return [-1];
    }
    return this.Result;
  }
  
  private checkAgainstAllProperties(obj: any): boolean {
    let value: boolean = false;
    let properties: any = Object.values(obj); 

    properties.forEach((property) => {
      const wordToMatch = property.toString();
      if (!this.isNullOrWhiteSpace(wordToMatch)) {
        if (wordToMatch.toLowerCase().indexOf(this.searchKeyword.toLowerCase()) >= 0) {
          value = true;
          return;
        }
      }
    });
  return value;
  }
  
  public isObjNull(obj: any, isNumber = false): boolean {
    let value: boolean = true;
    
    if (!isNumber && obj && obj != undefined && obj != null)
    value = false;
    else if (isNumber && obj != undefined && obj != null)
    value = false;
    
    return value;
  }
  
  public isNullOrWhiteSpace(obj: string): boolean {
    let value: boolean = true;
    
    if (!this.isObjNull(obj) && obj.trim() != "")
    value = false;
    
    return value;
  }
}