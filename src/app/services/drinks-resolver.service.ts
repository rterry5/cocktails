import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Drink } from '../domain/drink';
import { CocktailService } from './cocktail.service';

@Injectable({
  providedIn: 'root'
})
export class DrinksResolverService implements Resolve<any> {

  constructor(private cocktailService: CocktailService) { }

resolve(route: ActivatedRouteSnapshot):Observable<Drink>|Promise<Drink>|Drink{
  console.log(route)
  return this.cocktailService.getCocktailsById(route.params['id']);
  }
}
