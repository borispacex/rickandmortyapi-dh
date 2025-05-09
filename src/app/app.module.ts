import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './components/characters/characters.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { LocationDetailComponent } from './components/location-detail/location-detail.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';
import { LocationListComponent } from './components/location-list/location-list.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    CharacterDetailComponent,
    LocationDetailComponent,
    EpisodeDetailComponent,
    LocationListComponent,
    EpisodeListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // importado aquí para usar servicios HTTP
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
