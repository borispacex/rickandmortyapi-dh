import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-location-detail',
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss'],
})
export class LocationDetailComponent implements OnInit {
  location: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.location = this.route.snapshot.data['location'];
  }
}
