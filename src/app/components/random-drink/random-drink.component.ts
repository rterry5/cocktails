import { CocktailService } from 'src/app/services/cocktail.service';
import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/domain/drink';

@Component({
  selector: 'app-random-drink',
  templateUrl: './random-drink.component.html',
  styleUrls: ['./random-drink.component.scss']
})
export class RandomDrinkComponent implements OnInit {

  @Input()
  drinks: any;

  @Input()
  cocktail: Drink;

  constructor(private cocktailHttp: CocktailService) { }

  ngOnInit(): void {
  }

  getRandomCocktail() {
    this.cocktailHttp.getRandomCocktail().subscribe((data ) => {
      console.log(data)
      this.cocktail = data.drinks;
    })
  }

}
