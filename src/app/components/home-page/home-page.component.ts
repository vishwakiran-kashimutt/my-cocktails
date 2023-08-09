import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CocktailsService } from 'src/app/service/cocktails.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  cocktails: any;
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToCocktailsPage() {
    this.router.navigate(['/cocktailsPage'])
  }
  goToBlankPage() {
    this.router.navigate(['/blank'])
  }
}
