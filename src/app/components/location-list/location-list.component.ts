import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RickAndMortyService} from "../../services/rick-and-morty.service";

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent implements OnInit {
  locations: any[] = []; // Lista de ubicaciones
  currentPage: number = 1; // Paginación: página actual


  constructor(private router: Router, private service: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadLocations(); // Cargar ubicaciones al inicializar
  }

  // Método para cargar la lista de ubicaciones
  loadLocations(): void {
    this.service.getLocations(this.currentPage).subscribe((response) => {
      this.locations = response.results;
    });
  }


  // Navegar al detalle de la ubicación
  goToLocationDetail(locationId: number): void {
    this.router.navigate(['/location', locationId]); // Ruta dinámica con el ID de la ubicación
  }
}
