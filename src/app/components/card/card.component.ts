import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig, MatDialogRef} from '@angular/material/dialog';
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
  drinks: any;

  id: any;
  thumbnail:any;
  name:string;
  alcoholic:string;
  glass: string;
  instructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  closeDialog() {
    this.dialog.closeAll();
}


  openDialog(idDrink: number, thumbnail: any, name: string, alcoholic: string, glass: string, instructions: string, strIngredient1: string, strIngredient2: string, strIngredient3: string, strIngredient4: string, strIngredient5: string, strIngredient6: string, strIngredient7: string, strIngredient8: string, strIngredient9: string, strIngredient10: string, strIngredient11: string, strIngredient12: string, strIngredient13: string, strIngredient14: string, strIngredient15: string, strMeasure1: string, strMeasure2: string, strMeasure3: string, strMeasure4: string, strMeasure5: string, strMeasure6: string, strMeasure7: string, strMeasure8: string, strMeasure9: string, strMeasure10: string, strMeasure11: string, strMeasure12: string, strMeasure13: string, strMeasure14: string, strMeasure15: string) {
    let config = new MatDialogConfig();
    let dialogRef:MatDialogRef<DrinkDetailsComponent> = this.dialog.open(DrinkDetailsComponent, config);
    dialogRef.componentInstance.drinks = this.drinks;


    this.id = this.drinks.idDrink;
    this.drinks.idDrink = idDrink;

    this.thumbnail = this.drinks.strDrinkThumb;
    this.drinks.strDrinkThumb = thumbnail;

    this.name = this.drinks.strDrink;
    this.drinks.strDrink = name;

    this.alcoholic=this.drinks.strAlcoholic;
    this.drinks.strAlcoholic = alcoholic;

    this.glass = this.drinks.strGlass;
    this.drinks.strGlass = glass;

    this.instructions = this.drinks.strInstructions;
    this.drinks.strInstructions = instructions;

    this.strIngredient1 = this.drinks.strIngredient1;
    this.drinks.strIngredient1 = strIngredient1;

    this.strIngredient2 = this.drinks.strIngredient2;
    this.drinks.strIngredient2 = strIngredient2;

    this.strIngredient3 = this.drinks.strIngredient3;
    this.drinks.strIngredient3 = strIngredient3;

    this.strIngredient4 = this.drinks.strIngredient4;
    this.drinks.strIngredient4 = strIngredient4;

    this.strIngredient5 = this.drinks.strIngredient5;
    this.drinks.strIngredient5 = strIngredient5;

    this.strIngredient6 = this.drinks.strIngredient6;
    this.drinks.strIngredient6 = strIngredient6;

    this.strIngredient7 = this.drinks.strIngredient7;
    this.drinks.strIngredient7 = strIngredient7;

    this.strIngredient8 = this.drinks.strIngredient8;
    this.drinks.strIngredient8 = strIngredient8;

    this.strIngredient9 = this.drinks.strIngredient9;
    this.drinks.strIngredient9 = strIngredient9;

    this.strIngredient10 = this.drinks.strIngredient10;
    this.drinks.strIngredient10 = strIngredient10;

    this.strIngredient11 = this.drinks.strIngredient11;
    this.drinks.strIngredient11 = strIngredient11;

    this.strIngredient12 = this.drinks.strIngredient12;
    this.drinks.strIngredient12 = strIngredient12;

    this.strIngredient13 = this.drinks.strIngredient13;
    this.drinks.strIngredient13 = strIngredient13;

    this.strIngredient14 = this.drinks.strIngredient14;
    this.drinks.strIngredient14 = strIngredient14;

    this.strIngredient15 = this.drinks.strIngredient15;
    this.drinks.strIngredient15 = strIngredient15;

    this.strMeasure1 = this.drinks.strMeasure1;
    this.drinks.strMeasure1 = strMeasure1;

    this.strMeasure2 = this.drinks.strMeasure2;
    this.drinks.strMeasure2 = strMeasure2;

    this.strMeasure3 = this.drinks.strMeasure3;
    this.drinks.strMeasure3 = strMeasure3;

    this.strMeasure4 = this.drinks.strMeasure4;
    this.drinks.strMeasure4 = strMeasure4;

    this.strMeasure5 = this.drinks.strMeasure5;
    this.drinks.strMeasure5 = strMeasure5;

    this.strMeasure6 = this.drinks.strMeasure6;
    this.drinks.strMeasure6 = strMeasure6;

    this.strMeasure7 = this.drinks.strMeasure7;
    this.drinks.strMeasure7 = strMeasure7;

    this.strMeasure8 = this.drinks.strMeasure8;
    this.drinks.strMeasure8 = strMeasure8;

    this.strMeasure9 = this.drinks.strMeasure9;
    this.drinks.strMeasure9 = strMeasure9;

    this.strMeasure10 = this.drinks.strMeasure10;
    this.drinks.strMeasure10 = strMeasure10;

    this.strMeasure11 = this.drinks.strMeasure11;
    this.drinks.strMeasure11 = strMeasure11;

    this.strMeasure12 = this.drinks.strMeasure12;
    this.drinks.strMeasure12 = strMeasure12;

    this.strMeasure13 = this.drinks.strMeasure13;
    this.drinks.strMeasure13 = strMeasure13;

    this.strMeasure14 = this.drinks.strMeasure14;
    this.drinks.strMeasure14 = strMeasure14;

    this.strMeasure15 = this.drinks.strMeasure15;
    this.drinks.strMeasure15 = strMeasure15;
  }
}
