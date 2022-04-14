import { Drink } from './../../domain/drink';
import { Component, Input, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Params, Router, RouterEvent, Data } from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-drink-details',
  templateUrl: './drink-details.component.html',
  styleUrls: ['./drink-details.component.scss']
})
export class DrinkDetailsComponent implements OnInit {

  @Input()
  drinks: Drink;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    }

  ngOnInit(): void {
  }

}
