import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
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
  {
    path: 'characters',
    component: CharactersComponent,
    resolve: { characters: CharactersResolver },
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
    resolve: { character: CharacterResolver },
  },
  {
    path: 'location/:id',
    component: LocationDetailComponent,
    resolve: { location: LocationResolver },
  },
  {
    path: 'episode/:id',
    component: EpisodeDetailComponent,
    resolve: { episode: EpisodeResolver },
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
