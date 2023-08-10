import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CocktailsService {

  constructor(private http: HttpClient) { }



  /**
   * Get all cocktail details
   */
  getAllCocktails() {
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Margarita');
  }



  /**
   * Get cocktail based on :id passed
   * id: number
   */
  getOneCocktail(id: number) {
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
