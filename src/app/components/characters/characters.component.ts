import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = []; // Lista de personajes obtenida del Resolver

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Obtener datos precargados por el Resolver
    const resolvedData = this.route.snapshot.data['characters'];
    this.characters = resolvedData.results;
  }

  // Navegar al detalle de un personaje
  goToCharacterDetail(characterId: number): void {
    this.router.navigate(['/character', characterId]); // Ruta dinámica con el ID del personaje
  }
}
