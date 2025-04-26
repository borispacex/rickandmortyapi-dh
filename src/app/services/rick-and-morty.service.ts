import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  private API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  // Obtener todos los personajes
  getCharacters(): Observable<any> {
    return this.http.get(`${this.API_URL}/character`);
  }

  // Obtener personaje por ID
  getCharacterById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/character/${id}`);
  }

  // Obtener ubicación por ID
  getLocationById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/location/${id}`);
  }

  // Obtener episodio por ID
  getEpisodeById(id: number): Observable<any> {
    return this.http.get(`${this.API_URL}/episode/${id}`);
  }
}
