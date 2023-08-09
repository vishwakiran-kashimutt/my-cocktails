import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { CocktailDetailsComponent } from './components/cocktail-details/cocktail-details.component';
import { CocktailsListComponent } from './components/cocktails-list/cocktails-list.component';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomePageComponent },
    { path: 'cocktailsPage', component: CocktailsListComponent},
    { path: 'deatils/:id', component: CocktailDetailsComponent},
    { path: 'blank', component: BlankComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }