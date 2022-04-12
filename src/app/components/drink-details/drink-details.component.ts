import { Drink } from './../../domain/drink';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent, Data } from '@angular/router';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {

  @Input()
  drinks: any;

  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.drinks = data.drinks.drinks;
      console.log(this.drinks)
    })
  }
}
