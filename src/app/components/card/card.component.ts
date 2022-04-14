import { Drink } from './../../domain/drink';
import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DrinkDetailsComponent } from '../drink-details/drink-details.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  searchQuery: any;

  @Input()
  drinks: Drink[];

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(DrinkDetailsComponent, {
    data: this.drinks

    });

  }
}
