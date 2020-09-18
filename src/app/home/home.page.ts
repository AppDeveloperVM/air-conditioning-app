import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AlertController, NavController } from '@ionic/angular';
import { AirDataService } from '../services/air-data.service';
import { AirConditioner } from './models/air-conditioner.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit, OnDestroy{
  device : AirConditioner;
  brand : string;
  model: string;
  private airSubscription: Subscription;

  airData : Observable<any>;
  isLoading = false;
  data: any;
  temp:number;

  constructor(
    private airdataService: AirDataService,
    private httpClient: HttpClient,
    public navCtrl: NavController,
    public alertCtrl: AlertController
  ) {
    this.isLoading = true;
    this.airData = this.httpClient.get('https://run.mocky.io/v3/967ef4af-4739-480e-96ca-239888d65b9f');
    this.airData
    .subscribe(response => {
      console.log('my data: ', response);
      this.data = response.data;
      this.isLoading = false;

      this.setTemp();
    });

  }

  ngOnInit() {
    this.isLoading = true;

    this.airSubscription = this.airdataService
    .getAirConditioner(this.brand, this.model)
    .subscribe( device => {
      this.device = device;
      this.isLoading = false;
    }, error => {
      this.alertCtrl
      .create({
        header: 'An error ocurred!',
        message: 'Could not load data. Try again later.',
        buttons : [{
          text: 'Okay',
          //handler: () => {
            //
          //}
        }]
      }).then(alertEl => {
        alertEl.present();
      })
    })
  }

  setTemp(){
    this.temp = parseInt(this.data.temp);
  }

  tempUp(){
    this.temp = this.temp + 1;
    console.log(this.temp);
  }

  getState() {
    return this.httpClient.get('');
  }

  ngOnDestroy() {
    if (this.airSubscription) {
      this.airSubscription.unsubscribe();
    }
  }

}
