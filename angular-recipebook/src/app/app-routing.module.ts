import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const appRoutes: Routes = [
  { path: '', component: HeaderComponent },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'recipe', component: RecipesComponent, }
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, { useHash: true })
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
