import { Component, Input, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
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

  hideRandom: boolean;

  showsNoResults: boolean;

  constructor(private cocktailHttp: CocktailService) { }

  ngOnInit(): void {
  }

  getCocktails() {
    this.cocktailHttp.getCocktails(this.searchQuery).subscribe((data ) => {
      console.log(data)
      this.cocktails = data.drinks;

      this.ifShowsNoResults();
      this.hideRandom = true;
    })
  }

  clearSearch() {
    this.searchQuery = '';
    this.cocktails = [];
    this.hideRandom = false;
    this.showsNoResults = false;
  }

  ifShowsNoResults() {
    if (!this.cocktails) {
      this.showsNoResults = true;
    }
  }
}
