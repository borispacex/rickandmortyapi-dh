import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RickAndMortyService } from '../services/rick-and-morty.service';

@Injectable({
  providedIn: 'root',
})
export class LocationResolver implements Resolve<any> {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    const id = route.params['id']; // Obtener el parámetro ID de la ruta
    return this.rickAndMortyService.getLocationById(id);
  }
}
