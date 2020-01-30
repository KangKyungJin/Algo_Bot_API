import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newAlgo: any;
  allAlgos: any;

  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.newAlgo = { baker_name: "", img: "" };
    this.getAllAlgos;
  }

  createAlgo() {
    let obs = this._httpService.createAlgo(this.newAlgo);
    obs.subscribe((data: any) => {
      if(data.message == "success") {
        this.newAlgo = { baker_name: "", img: "" };
      }
    })
  }
  getAllAlgos() {
    let obs = this._httpService.getAlgos();
    obs.subscribe((data: any) => {
      this.allAlgos = data.results;
    })
  }
}
