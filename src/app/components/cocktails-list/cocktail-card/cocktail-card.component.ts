import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cocktail-card',
  templateUrl: './cocktail-card.component.html',
  styleUrls: ['./cocktail-card.component.scss']
})
export class CocktailCardComponent implements OnInit {

  constructor() { }
  @Input()
  cocktailDetails: any;

  @Output() 
  selectedCocktailDetails = new EventEmitter<string>();
  ngOnInit() {
  }


  /**
   * Emits the selected value from Child component to parent
   */
  slectedCocktail(value: any) {
    this.selectedCocktailDetails.emit(value);
  }
}
