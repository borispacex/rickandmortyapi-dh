import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { CharactersResolver } from './resolvers/characters.resolver';
import { CharacterResolver } from './resolvers/character.resolver';
import { LocationResolver } from './resolvers/location.resolver';
import { EpisodeResolver } from './resolvers/episode.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/characters',
    pathMatch: 'full',
  },
  // Ruta para la lista de personajes
  {
    path: 'characters',
    component: CharactersComponent,
    resolve: { characters: CharactersResolver },
  },
  // Ruta dinámica para el detalle de un personaje
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
    resolve: { character: CharacterResolver },
  },
  // Ruta para la lista de ubicaciones
  {
    path: 'locations',
    component: LocationListComponent, // Agregamos el componente
  },
  // Ruta dinámica para el detalle de una ubicación
  {
    path: 'location/:id',
    component: LocationDetailComponent,
    resolve: { location: LocationResolver },
  },
  // Ruta para la lista de episodios
  {
    path: 'episodes',
    component: EpisodeListComponent, // Agregamos el componente
  },
  // Ruta dinámica para el detalle de un episodio
  {
    path: 'episode/:id',
    component: EpisodeDetailComponent,
    resolve: { episode: EpisodeResolver },
  },
  // Ruta de fallback
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
