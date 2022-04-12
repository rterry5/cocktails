import { Drink } from './../../domain/drink';
import { Component, OnInit, Input } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
