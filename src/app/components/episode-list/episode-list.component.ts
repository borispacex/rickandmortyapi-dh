import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RickAndMortyService} from "../../services/rick-and-morty.service";

@Component({
  selector: 'app-episode-list',
  templateUrl: './episode-list.component.html',
  styleUrls: ['./episode-list.component.scss'],
})
export class EpisodeListComponent implements OnInit {
  episodes: any[] = [];

  constructor(private router: Router, private service: RickAndMortyService) {}

  ngOnInit(): void {
    // Consumir la API para obtener la lista de episodios
    this.service.getCharacters().subscribe((data) => {
      this.episodes = data.results;
    });
  }

  // Navegar al detalle del episodio
  goToEpisodeDetail(episodeId: number): void {
    this.router.navigate(['/episode', episodeId]); // Ruta dinámica con el ID del episodio
  }
}
