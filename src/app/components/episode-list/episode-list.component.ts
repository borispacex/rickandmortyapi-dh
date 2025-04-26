import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RickAndMortyService} from "../../services/rick-and-morty.service";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = []; // Lista de episodios
  currentPage: number = 1; // Paginación: página actual


  constructor(private router: Router, private service: RickAndMortyService) {}

  ngOnInit(): void {
    this.loadEpisodes(); // Cargar episodios al inicializar
  }

  // Método para cargar la lista de episodios
  loadEpisodes(): void {
    this.service.getEpisodes(this.currentPage).subscribe((response) => {
      this.episodes = response.results;
    });
  }

  // Navegar al detalle del episodio
  goToEpisodeDetail(episodeId: number): void {
    this.router.navigate(['/episode', episodeId]); // Ruta dinámica con el ID del episodio
  }
}
