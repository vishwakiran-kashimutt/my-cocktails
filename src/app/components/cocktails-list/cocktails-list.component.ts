import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsService } from 'src/app/service/cocktails.service';

@Component({
  selector: 'app-cocktails-list',
  templateUrl: './cocktails-list.component.html',
  styleUrls: ['./cocktails-list.component.scss']
})
export class CocktailsListComponent implements OnInit {

  cocktails: any;
  temp: any;
  filters: string[] = ['Alcoholic', 'Non-Alcoholic'];
  constructor(private cocktailService: CocktailsService,
    private router: Router ) { }

  ngOnInit() {
    this.getAllCocktails();
    console.log(this.cocktails)
  }

  /**
   * Make API call to fetch cockatails details
   */
  getAllCocktails(): void {
    this.cocktailService.getAllCocktails().subscribe({
      next: (data: any)=> {
        this.cocktails = data.drinks;
        this.temp = this.cocktails;
      }
    })
  }

  /**
   * Got to Selected cocktail page
   */
  getSelectedCocktail(event: any): void {
    this.router.navigate(['/deatils', event]);
  }

  /**
   * Filter cocktails by alcoholic in nature
   */
  filterBy(event: any): void {
    this.cocktails.length == 0 ? this.cocktails = this.temp : this.cocktails;
      this.cocktails = this.cocktails.filter((x: any)=> {
        return x.strAlcoholic == event.target.value
      })
  }

}
