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
  constructor(private cocktailService: CocktailsService,
    private router: Router ) { }

  ngOnInit() {
    this.getAllCocktails();
    console.log(this.cocktails)
  }

  /**
   * Make API call to fetch cockatails details
   */
  getAllCocktails() {
    this.cocktailService.getAllCocktails().subscribe({
      next: (data: any)=> {
        this.cocktails = data.drinks;
      }
    })
  }

  getSelectedCocktail(event: any) {
    this.router.navigate(['/deatils', event]);
  }

}
