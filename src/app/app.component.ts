import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {BaseComponent} from "./base.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent extends BaseComponent implements OnInit {
  title = this.name;
  currentRoute?: string;
  showNavBar = true;

  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
  }
}

