import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private http: HttpClient) { }

  getCocktails(alcohol: string) {
    let cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${alcohol}`;
    return this.http.get<any>(cocktailUrl);
  }

  getCocktailsById(id: number) {
    let cocktailUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get<any>(cocktailUrl);
  }
}
