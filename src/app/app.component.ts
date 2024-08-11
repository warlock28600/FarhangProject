import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'farhang';
  currentRoute?: string;
  showNavBar = true;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }
}

