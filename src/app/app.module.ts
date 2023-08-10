import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { CocktailCardComponent } from './components/cocktails-list/cocktail-card/cocktail-card.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { BlankComponent } from './components/blank/blank.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    CocktailsListComponent,
    CocktailCardComponent,
    CocktailDetailsComponent,
    BlankComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
