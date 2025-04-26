import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component'; // Crearé este componente en el siguiente paso
import { CharactersResolver } from './resolvers/characters.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
  {
    path: 'characters',
    component: CharactersComponent,
    resolve: { characters: CharactersResolver },
  },
  {
    path: '**',
    redirectTo: '/characters',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
