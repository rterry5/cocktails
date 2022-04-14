import { Component, Input, OnInit } from '@angular/core';
import { Drink } from 'src/app/domain/drink';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input()
  cocktails: Drink[];

  searchQuery: string;

  constructor(private cocktailHttp: CocktailService) { }

  ngOnInit(): void {
  }

  getCocktails() {
    this.cocktailHttp.getCocktails(this.searchQuery).subscribe((data ) => {
      console.log(data)
      this.cocktails = data.drinks;
    })
  }

}
