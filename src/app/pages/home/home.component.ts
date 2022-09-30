import { Component, OnInit } from '@angular/core';
import { Path } from 'src/app/config';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  path: String = Path.url;
  constructor() {}

  ngOnInit() {}
}
