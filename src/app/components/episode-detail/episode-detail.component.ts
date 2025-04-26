import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episode-detail',
  templateUrl: './episode-detail.component.html',
  styleUrls: ['./episode-detail.component.scss'],
})
export class EpisodeDetailComponent implements OnInit {
  episode: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.episode = this.route.snapshot.data['episode'];
  }
}
