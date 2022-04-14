import { Drink } from './../../domain/drink';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent, Data } from '@angular/router';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {

  @Input()
  drinks: any;
  cocktailService: any;

  constructor(private route: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.route.data.subscribe((response: any) => {
      console.log(this.data)
    })
  }

}
