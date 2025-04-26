import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Injectable({
  providedIn: 'root',
})
export class CharactersResolver implements Resolve<any> {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  resolve(): Observable<any> {
    return this.rickAndMortyService.getCharacters();
  }
}
