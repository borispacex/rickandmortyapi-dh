import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Los datos de los personajes vienen precargados desde el resolver
    this.characters = this.route.snapshot.data['characters'].results;
  }
}
