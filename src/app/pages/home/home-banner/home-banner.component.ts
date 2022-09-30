import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.css'],
})
export class HomeBannerComponent implements OnInit {
  path: string = Path.url;
  constructor() {}

  ngOnInit() {}
}
