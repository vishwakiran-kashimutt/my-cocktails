import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CocktailsService } from 'src/app/service/cocktails.service';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.scss']
})
export class CocktailDetailsComponent implements OnInit {

  cocktailId: any;
  cockTailDetail: any;
  ingredients: string[] = [];
  ingredientMeasurement: string[] = [];
  constructor(
    private cocktailService: CocktailsService,
    private activatedRoute: ActivatedRoute ) {}

  ngOnInit() {
    this.activatedRoute.params.subscribe(paramsId => {
      this.cocktailId = paramsId['id'];
  });
  this.cocktailService.getOneCocktail(this.cocktailId).subscribe(
    (res: any)=> {
      this.cockTailDetail = res.drinks[0];
       for(const k in this.cockTailDetail) {
        if(k.includes('strIngredient') && this.cockTailDetail[k] != null) {
          this.ingredients.push(this.cockTailDetail[k]);
        }

        if(k.includes('strMeasure') && this.cockTailDetail[k] != null) {
          this.ingredientMeasurement.push(this.cockTailDetail[k]);
        }
        }
        console.log(this.ingredients, this.ingredientMeasurement)
    }
  )
  }

}
