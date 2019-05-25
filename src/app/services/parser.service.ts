import { Menu } from './../interfaces/menu';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParserService {

  private url: string = './../../api/menu.json';

  constructor(
    private httpClient: HttpClient
  ) { }

  testService(): string {
    return 'serwice woks ok';
  }

  getMenu(): Observable<Menu> {
    return this.httpClient.get<Menu>(this.url)
    .pipe(
      tap((data) => { console.log(data) })
    )
  }
}
