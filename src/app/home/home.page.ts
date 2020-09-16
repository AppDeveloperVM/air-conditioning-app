import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  airData : Observable<any>;
  isLoading = false;
  data: any;

  constructor(
    private httpClient: HttpClient,public navCtrl: NavController
  ) {
    this.isLoading = true;
    this.airData = this.httpClient.get('https://run.mocky.io/v3/967ef4af-4739-480e-96ca-239888d65b9f');
    this.airData
    .subscribe(response => {
      console.log('my data: ', response);
      this.data = response.data;
      this.isLoading = false;
    });

  }

  dataExample() {
    //this.airData
  }

  getState() {
    return this.httpClient.get('');
  }

}
