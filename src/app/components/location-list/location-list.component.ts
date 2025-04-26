import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RickAndMortyService} from "../../services/rick-and-morty.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations: any[] = [];

  constructor(private router: Router, private service: RickAndMortyService) {}

  ngOnInit(): void {
    // Consumir la API para obtener la lista de ubicaciones
    this.service.getCharacters().subscribe((data) => {
      this.locations = data.results;
    });
  }

  // Navegar al detalle de la ubicación
  goToLocationDetail(locationId: number): void {
    this.router.navigate(['/location', locationId]); // Ruta dinámica con el ID de la ubicación
  }
}
