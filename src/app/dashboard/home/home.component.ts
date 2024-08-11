import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../base.component";
import {ServiceApi} from "../../service/service.api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent extends BaseComponent implements OnInit {

  constructor(private serviceApi: ServiceApi) {
    super();
  }

  ngOnInit() {
    console.log('salam')
    this.serviceApi.getAllPerson().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
