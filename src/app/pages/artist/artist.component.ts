import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'artist-page',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
